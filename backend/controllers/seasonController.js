import seasonGameModel from "../models/seasonModel.js";

export const saveSeasonGame = async(req, res) =>{
    try {
        const newSeasonPlayer= new seasonGameModel(req.body);
        const savedSeasonPLayer = await newSeasonPlayer.save()
        res.status(201).json(savedSeasonPLayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getSeasonById  = async(req,res) => {
    const {id} = req.params;

    try {
        const playerSeason = await seasonGameModel.findOne({ player_id: id });
        if(!playerSeason){
            return res.status(404).json({ message: 'No se encontró datos del jugador' });
        }
        res.status(200).json(playerSeason);
    } catch (error) {
        console.error('Error al obtener season jugador por ID:', error);
        res.status(500).json({ message: 'Error del servidor al obtener la season de jugador por ID.' });
    }

}

export const updateSeason = async(req,res) => {
    const {id}= req.params;
    const {body}= req;

    try {
        const updateSeasonPlayer = await seasonGameModel.findByIdAndUpdate(id , body, {new:true});
        if(!updateSeasonPlayer) {
            return res.status(404).json({ message: 'No se encontró datos del jugador para actualizar' });

        }
        res.status(200).json(updateSeasonPlayer);
    } catch (error) {
        console.error('Error al actualizar la season jugador por ID:', error);
        res.status(500).json({ message: 'Error del servidor al actualizar la season de jugador por ID.' });
    }
    
}