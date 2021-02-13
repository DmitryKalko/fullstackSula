module.exports = (client) => {
//воспринимает только физические пути. открыть картинку в браузере и взять путь оттуда
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
          .pdf{
            display: inline-block; 
            text-align: center;
            background-image: url('file:///Users/dmitry/Documents/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/full%20sula/documents/sertificate2.png');
            width: 2365px;
            height: 3350px;
          }
          .title{
            color: #ffc124;
            font-size: 220px;
            margin-top: 100px;
          }
          .flagForPdf{
            width: 730px;
            height: 920px;
            margin: 50px 0 70px 0;
          }
          .firstString, .secondString, .thirdString{
            color:white;
            font-size: 100px;
            margin-top: 50px;
          }
          .fio{
            color:white;
            font-size: 140px;
            margin: 70px 0 70px 0;
          }
          .familyName, .familyFlag{
            color:white;
            font-size: 120px;
            margin-top: 50px;
          }
          .datePdf{
            color:white;
            font-size: 120px;
            margin-top: 310px;
          }
          </style>
       </head>
       <body>
       <div class="pdf">
       <h1 class='title'>Грамота Шляхтича</h1>
       <img class="flagForPdf" src=${'file:///Users/dmitry/Documents/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/full%20sula/sula-client/public/images/' + client.imgId + '.png'} alt="flagImage" />
       <h4 class='firstString'>Настоящая грамота удостоверяет, что</h4>
       <h2 class='fio'>${client.fio}</h2>
       <h4 class='secondString'>принадлежит к шляхецкому роду</h4>
       <h2 class='familyName'>«${client.lastName}»</h2>
       <h4 class='thirdString'>с родовым гербом</h4>
       <h2 class='familyFlag'>«${client.flagName}»</h2>
       <p class="datePdf">${client.date}</p>
   </div>
       </body>
    </html>
    `;
};