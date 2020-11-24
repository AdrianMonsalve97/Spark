const viasCtrl = {};
const Vias = require('../models/Vias');


viasCtrl.getVias = async (req, res) => {
    //trae todos los datos de la coleccion
    const vias = await Vias.find();//regresa un arreglo c:  
    res.json(vias)
};
viasCtrl.createVias = async (req, res) => {
    const { id, tipo, cllokr, numero, congestion } = req.body;


    const newVias = new Vias({
        id,
        tipo,
        cllokr,
        numero,
        congestion
    })
    await newVias.save();

    res.json({ message: 'guardado' })
}
    ;
viasCtrl.getVia = async (req, res) => {

    const vias = await Vias.findById(req.params.id);

    res.json(vias)
};
viasCtrl.deleteVias = async (req, res) => {
    const vias = await Vias.findByIdAndDelete(req.params.id)

    console.log(vias)
    res.json({ message: 'Agente Eliminado' })
};
viasCtrl.updateVias = async (req, res) => {
    const { id, tipo, cllokr, numero, congestion } = req.body;

    await Vias.findByIdAndUpdate(req.params.id, {
        id,
        tipo,
        cllokr,
        numero,
        congestion
    })

    res.json({ message: 'Agente Actualizado' })
};

module.exports = viasCtrl;