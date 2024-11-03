'use server';
/* eslint-disable */
const nodemailer = require('nodemailer')
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: SMTP_SERVER_PORT,
    secure: false,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({
    email,
    sendTo,
    subject,
    text,
    html,
    attachments
}: {
    email: string;
    sendTo?: string;
    subject: string;
    text: string;
    html?: string;
    attachments?: { filename: string; content: Buffer }[]; // Incluindo o campo attachments
}) {
    try {
        //const isVerified = await transporter.verify();
    } catch (error) {
        console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
        return;
    }
    const info = await transporter.sendMail({
        from: email,
        to: sendTo || SITE_MAIL_RECIEVER,
        subject: subject,
        text: text,
        html: html ? html : '',
        attachments: attachments || [], // Adiciona os anexos ao e-mail
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECIEVER);
    return info;
}