const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')

const app = express()


mongoose.connect('mongodb://localhost/lakshmiblogdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res) =>  {
    const articles =[ {
        title : 'Bharath Intern',
        createdAt: new Date(),
        description:'Intern as a Full stack webdeveloper'
    },
    {
        title : 'Bharath Intern',
        createdAt: new Date(),
        description:'Intern as a web developer'
    },
    {
        title : 'Bharath Intern',
        createdAt: new Date(),
        description:'nothing'
    }
]
    res.render('articles/index',{articles:articles})
})
app.use('/articles',articleRouter)







// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Handle server errors
app.on('error', (error) => {
  console.error('Server error:', error);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



