const router = require('express').Router();
const controller = require('./controllers');

router.post('/languages', controller.saveData)
router.get('/lang/text', (req,res) => {
    //console.log(req.params.lang, req.params.text)
    if(!req.body.lang || !req.body.text){
        res.status(404).json({msg:'dont have data'});
    }


})

module.exports = router;
