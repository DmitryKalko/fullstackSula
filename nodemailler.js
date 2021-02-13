const nodemailler = require('nodemailer');

const transporter = nodemailler.createTransport(
    {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'master-denn@mail.ru',
        pass: '3579'
    }  
},
{
    from: 'Парк истории ВЕЛИКОЕ КНЯЖЕСТВО СУЛА <master-denn@mail.ru>',
}
)

const mailler = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailler;