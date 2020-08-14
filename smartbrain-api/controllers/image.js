const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'f1d28c6c50554a0aa7c391d9ebebb296'
  });  

const handleAPICall = (req, res ) =>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {res.json(data)})
    .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req,res, knex)=> {
    const { id }  = req.body;
    knex('users').where('id', '=', id).increment('entries',1).returning('entries').then(entries => { res.json(entries)}).catch(err => res.status(400).json('unable to get entries'))
}

module.exports= {
    handleImage: handleImage,
    handleAPICall:handleAPICall
}