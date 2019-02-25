var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: '18621512301@163.com',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: '1wonderful'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '18621512301@163.com', // 发件地址
    to: 'heliping@caicloud.io', // 收件列表
    subject: 'Hello sir', // 标题
    //text和html两者只支持一种
    text: 'Hello world ?', // 标题
    html: '<b>Hello world ?</b>' // html 内容
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});