var Express = require('Express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var port = 3000;

var app = Express();

app.use(bodyParser.json());

// Called with request and response callback. Note this is the pattern to post
// GET would use /todos or /todos?xxx
app.post('/todos', (req, res) => {
    var todoNew = new Todo({text: req.body.text});
    todoNew
        .save()
        .then((doc) => {
            res
                .status(200)
                .send(doc);
        }, (er) => {
            res
                .status(400)
                .send(er);
        });

});

app.listen(port, () => {
    console.log('Listening on port: ', port);
});
