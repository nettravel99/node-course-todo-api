var mongoose = require('mongoose');

var Todo = mongoose.model('todo', {
    text: {
        type: String, //Validators
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
};