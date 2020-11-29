const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}

app.get('/', (req, res) => {
   console.log(Date.now() + ' Ping Recieved');
   res.sendStatus(200);
});

app.listen(process.env.PORT, () => console.log('server is up and running'));
