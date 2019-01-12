const   express = require('express'),
        faker = require('faker'),
        app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('*', function(req, res){
    let word = faker.random.word();
    let wordArray = word.split('');
    res.render('hangman', {word: wordArray})
});

app.listen(3000, function(){
    console.log("The man is at the gallows, don't let him down.");
});