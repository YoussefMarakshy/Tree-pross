const express = require('express')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/api/form', (req, res) => {
	console.log("HELLO");
	nodeMailer.createTestAccount((err, account) => {
		const htmlEmail = `
			<h3> Contact Details </h3>
			<ul>
				<li> Name: ${req.body.name} </li>
				<li> Name: ${req.body.email} </li>
			</ul>
			<h3> Message </h3>
			<p>${req.body.message}</p>
		`

		let transporter = nodeMailer.createTransport({ 
			host: 'smtp.ethereal.email',
			port: 587,
        	secure: false, 
			auth: {
				user: 'xrhdz5rxwnz2lrbq@ethereal.email',
				pass: 'pdn8SDgvwGGpH1kFnG' 
			},
			tls: {rejectUnauthorized: false}
		})


		let mailOptions = {
			from :'test@testaccount.com',
			to: 'mostafamesiry@gmail.com',
			replyTo: 'test@testaccount.com',
			subject: 'New Message',
			text: req.body.message,
			html : htmlEmail
		}
		console.log("SENDING");
		transporter.sendMail(mailOptions, (err, info) => {
				if(err) {
					console.log("ERROR");
					return console.log(err)
				}
					console.log("MESSAGE SENT");
					res.status(200).send('Message Sent!')
					console.log('Message URL: %s', nodeMailer.getTestMessageURL(info))
		})

	})
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`Server Listening on PORT ${PORT}`)
} )