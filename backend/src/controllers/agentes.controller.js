const agentesCtrl = {};
const Agentes = require('../models/Agentes');

agentesCtrl.getAgentes = async (req, res) => {
    //trae todos los datos de la coleccion
    const agentes = await Agentes.find();//regresa un arreglo c:  
    res.json(agentes)
};
agentesCtrl.createAgentes = async (req, res) => {
    const { nombre, codigo, experiencia, codigot,Viasa,date } = req.body;

    const newAgentes = new Agentes({
        nombre,
        codigo,
        experiencia,
        codigot,
        Viasa,
        date
    })
    await newAgentes.save();

    res.json({ message: 'guardado' })
}
    ;
agentesCtrl.getAgente = async (req, res) => {

    const agentes = await Agentes.findById(req.params.id);

    res.json(agentes)
};
agentesCtrl.deleteAgentes = async (req, res) => {
    const agentes = await Agentes.findByIdAndDelete(req.params.id)

    console.log(agentes)
    res.json({ message: 'Agente Eliminado' })
};
agentesCtrl.updateAgentes = async (req, res) => {
    const { nombre, codigo, experiencia, codigot,Viasa, date } = req.body;

   await Agentes.findByIdAndUpdate(req.params.id,{
    nombre,
    codigo,
    experiencia,
    codigot,
    Viasa,
    date
    })

    res.json({ message: 'Agente Actualizado' })
};


module.exports = agentesCtrl;

