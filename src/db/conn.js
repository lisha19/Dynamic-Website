const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/NODEJS',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));