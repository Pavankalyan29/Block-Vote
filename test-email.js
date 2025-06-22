const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pavan.08292003@gmail.com',
        pass: 'kkjercdgqeehurze'  // your App Password here
    }
});

let mailOptions = {
    from: 'pavan.08292003@gmail.com',
    to: email,  // your personal email to test
    subject : "Please confirm your Email account",
    text : "Hello, Your otp is "+rand
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});


// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'electionblockvote@gmail.com',
//         pass: 'knhlazatpjnnltnb'  // your App Password here
//     }
// });

// let mailOptions = {
//     from: 'electionblockvote@gmail.com',
//     to: email,  // your personal email to test
//     subject : "Please confirm your Email account",
//     text : "Hello, Your otp is "+rand
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('Email sent:', info.response);
//     }
// });
