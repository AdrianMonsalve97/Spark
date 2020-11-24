const {Router}=require('express');
const router= Router();
const {getAgentes,createAgentes,updateAgentes,deleteAgentes,getAgente}=require('../controllers/agentes.controller');
router.route('/')
.get(getAgentes)
.post(createAgentes)
router.route('/:id')
.get(getAgente)
.put(updateAgentes)
.delete(deleteAgentes)

module.exports=router; 