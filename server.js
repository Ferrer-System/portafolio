const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Configuracion del transporter 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ortizdionicio993@gmail.com',
        pass: 'qfpzapbnxfquylpf'
    }
});

app.post('/api/enviar-correo', async (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`Datos recibidos: ${nombre} (${email})`);

    try {
        await transporter.sendMail({
            from: `"Portafolio Contacto" <${email}>`,
            to: 'ortizdionicio993@gmail.com',
            subject: `Nuevo mensaje de ${nombre} - Portafolio`,
            replyTo: email,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: #007bff; color: white; padding: 10px; text-align: center; }
                        .content { padding: 20px; background: #f4f4f4; }
                        .footer { text-align: center; padding: 10px; font-size: 12px; color: #666; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Nuevo mensaje del portafolio</h2>
                        </div>
                        <div class="content">
                            <p><strong>Nombre:</strong> ${nombre}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Mensaje:</strong></p>
                            <p style="background: white; padding: 15px; border-radius: 5px;">${mensaje}</p>
                        </div>
                        <div class="footer">
                            <p>Este mensaje fue enviado desde tu portafolio web</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `Nuevo mensaje de ${nombre} (${email}):\n\n${mensaje}`
        });
        res.json({
            success: true,
            message: 'Correo enviado exitosamente'
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});