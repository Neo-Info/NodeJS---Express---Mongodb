const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postagem = new Schema({    
    titulo:{
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    categoria: {
        //relacionamento entre documentos
        type: Schema.Types.ObjectId, //id do objeto
        //model categorias
        ref: 'categorias',
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }   
})

mongoose.model('postagens', postagem,)