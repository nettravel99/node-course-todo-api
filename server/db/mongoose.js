var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // telling mongoose which promise to use.

// Note the connect will finish before it will try any queries below.

mongoose.connect('mongodb://localhost:27017/TodoApp'); // TodoApp is the name of the database.

module.exports = {
    mongoose
};
