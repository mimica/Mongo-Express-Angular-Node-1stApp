const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', { useNewUrlParser: true, useUnifiedTopology: true })
//module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório"