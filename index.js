const express = require('express')
var cors = require('cors');
var axios = require("axios")
const app = express();
const port = 3001
app.use(cors())
app.get('/pushnoti', (req, res) => {
    console.log("co vo", req.query);
    axios.post(
      'https://fcm.googleapis.com/fcm/send',
      {
        notification: {
          title       : 'PWA',
          body        : 'Dung test PWA',
          name        : "co noti moi",
          click_action: 'https://fir-hosting-40cf1.web.app/',
          icon        : 'http://url-to-an-icon/icon.png'
        },
        to: req.query.token
      },
      {
        headers: {
          Authorization: `key=AAAAoG99R3U:APA91bHI1MQLQcqvvwIoJIeP3NCnM8q2AZpUV0RvknnaJhtK9Ou_oTLHJA5PFu_DOb7yLM1SV5Cjb7VakiCUPA2KHuUETMm9yFELl-omQ86pZm17RYXk6a4zR6ywT0yPBtp3QT4NYeAr`
        }
      }
    )
.then(respone => {
      console.log("respone==>", respone)
      res.send({
        userId: 3,
        id: 232,
        title: "delectus aut autem",
        completed: true
      })
    })
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
