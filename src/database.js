const mongoose = require('mongoose'); 
import {MONGODB_URI} from './config'
import {PORT} from './config'



mongoose.connect(MONGODB_URI)
    .then(db => console.log('Bien... BD conectada'))
    .catch(err => console.error(err));

