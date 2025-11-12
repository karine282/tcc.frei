import con from './connection.js'; // Importa a conexão do connection.js
import geocoder from 'node-geocoder';

const geocoderConfig = geocoder({
  provider: 'openstreetmap', // Gratuito, sem chave
});

async function populateCoordinates() {
  try {
    console.log('Iniciando população de coordenadas...');

    // Buscar locais sem coordenadas
    const [locais] = await con.execute(
      'SELECT id, endereco FROM locais_BuscarCepCultura WHERE latitude IS NULL OR longitude IS NULL'
    );

    if (locais.length === 0) {
      console.log('Todos os locais já têm coordenadas.');
      return;
    }

    for (const local of locais) {
      try {
        const res = await geocoderConfig.geocode(local.endereco);
        if (res.length > 0) {
          const { latitude, longitude } = res[0];
          await con.execute(
            'UPDATE locais_BuscarCepCultura SET latitude = ?, longitude = ? WHERE id = ?',
            [latitude, longitude, local.id]
          );
          console.log(`Atualizado: ${local.endereco} -> ${latitude}, ${longitude}`);
        } else {
          console.warn(`Endereço não encontrado: ${local.endereco}`);
        }
      } catch (error) {
        console.error(`Erro ao geocodificar ${local.endereco}:`, error.message);
      }
    }

    console.log('População de coordenadas concluída.');
  } catch (error) {
    console.error('Erro geral na população:', error);
  } finally {
    // Não feche a conexão aqui, pois ela pode ser reutilizada pela API
  }
}

// Executar apenas se o script for chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  populateCoordinates().then(() => process.exit(0));
}

export default populateCoordinates; // Permite importar e chamar de outro lugar se necessário