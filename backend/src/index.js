const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cnblc.mongodb.net/week10?retryWrites=true&w=majority',
   {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
   }
);

app.use(express.json());
app.use(routes);


app.post('/users', (request, response) => {
   console.log(request.body);
   return response.json({ message: 'Hello Omnistack' });
});



app.listen(3333);