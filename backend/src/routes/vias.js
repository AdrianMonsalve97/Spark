const {Router}=require('express');
const router= Router();
const {getVia,getVias,createVias,updateVias,deleteVias}= require('../controllers/vias.controller')

router.route('/')
.get(getVias)
.post(createVias)
router.route('/:id')
.get(getVia)
.put(updateVias)
.delete(deleteVias)


module.exports=router;