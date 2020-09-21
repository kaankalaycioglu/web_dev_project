const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message))

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/* var george = new Cat({
    name: "Mrs. Norris",
    age: 12,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log(cat);
    }
}); */
Cat.create({
    name:"Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log(err);
    }
    else{
        console.log(cats);
    }
});