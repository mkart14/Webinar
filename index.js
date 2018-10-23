const  express = require('express');
var path = require("path");

const app = express();

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
// app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/create',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/create.html'));
});

app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(process.env.PORT||3000, () => {
  console.info(`Server started`);
});
