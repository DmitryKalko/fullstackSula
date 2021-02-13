const express = require("express");
const router = express.Router();
const mailler = require('./nodemailler');
const Client = require('./client');
const Lastnames = require('./Lastnames');

const pdf = require('html-pdf');  
const saveAs = require('file-saver');
const pdfTemplate = require('./documents');
const Blob = require("cross-blob");


router.get("/lastnames", (req, res)=>{
  Lastnames.find()
  .then(lastnames => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(lastnames);
  });
});

router.get("/clients", (req, res)=>{
  Client.find({})
  .then(client => {
      res.send(client);
  });
});

router.post("/clients", (req, res)=>{
  Client.create(req.body)
  .then(client => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(client);
    console.log(client)
   
    const pdfBlob = new Blob(pdf.create(pdfTemplate(client), { format: "A0", zoomFactor: "0.2"})
      .toFile(`sertificate/${client.fio}.pdf`, () => {}), { type: 'application/pdf' });
    saveAs(pdfBlob, `${client.fio}.pdf`);

  function sentMessage() {
    const message = {
      to: client.email,
      subject: 'Сертификат шляхтича',
      text: 'Поздравляем! Свой личный сертификат шляхтича Вы можете скачать из вложений. Ждем Вас в парке истории ВЕЛИКОЕ КНЯЖЕСТВО СУЛА.',
      attachments: 
        {
            filename: `${client.fio}.pdf`,
            contentType: 'application/pdf',
            path: `sertificate/${client.fio}.pdf`
        },
    }
    mailler(message);
  }
  setTimeout(sentMessage, 10000, 'funky');
  });
});


module.exports = router;