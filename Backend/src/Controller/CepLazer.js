import con from "../Repository/Conection.js";  
import express from 'express';


export async function listarLazer(req, res) {
  try {
    const [rows] = await con.query("SELECT * FROM lazer");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function buscarPorBairro(req, res) {
  try {
    const bairro = req.params.bairro;
    const [rows] = await con.query("SELECT * FROM lazer WHERE bairro LIKE ?", [`%${bairro}%`]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}