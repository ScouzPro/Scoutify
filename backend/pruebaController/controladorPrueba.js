import express from 'express';
import playerMetricModel from '../models/metricModel.js';

const router = express.Router();

// Ruta para obtener todos los documentos de playerMetricModel
router.get('/playermetrics', async (req, res) => {
    try {
        // Consulta todos los documentos de playerMetricModel en la base de datos
        const playerMetrics = await playerMetricModel.find().populate('jugador_id');

        // Si no se encuentran documentos, responde con un mensaje de error
        if (!playerMetrics) {
            return res.status(404).json({ message: 'No se encontraron datos de métricas de jugadores.' });
        }

        // Si se encuentran documentos, responde con los documentos recuperados
        res.status(200).json(playerMetrics);
    } catch (error) {
        // Si ocurre un error durante la consulta, responde con un mensaje de error
        console.error('Error al obtener métricas de jugadores:', error);
        res.status(500).json({ message: 'Error del servidor al obtener métricas de jugadores.' });
    }
});

export default router;
