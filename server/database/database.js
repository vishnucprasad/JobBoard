const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const connect = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Successfully Connected To MongoDB");
        }).catch(error => {
            console.log(`\x1b[31mDB connection err - ${error.message}\x1b[0m`);
        });
};

module.exports = { connect };