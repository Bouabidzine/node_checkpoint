const nodemailer=require('nodemailer')
const transport=nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure :true,
    auth: {
          user: 'bouabid@gmail.com',
          pass: '2022**',
    }
})

const message = {

    from: 'bouabid@gmail.com',
    to : 'bouabid@gmail.com',
    subject: 'test node.js',
    text : 'machallah!',

};
transport.sendMail(message,(err, info)=>

{if (err) {console.error(err);}

    else {console.log(`Email sent: ${info.response}`); }}   
 );