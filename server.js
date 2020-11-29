const express = require('express');
const app = express();
app.get('/', (req, res) => {
   console.log(Date.now() + ' Ping Recieved');
   res.sendStatus(200);
});

app.listen(process.env.PORT, () => console.log('server is up and running'));
