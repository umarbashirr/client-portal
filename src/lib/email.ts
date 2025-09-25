"use server";

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: process.env.NODE_ENV === "production" ? 465 : 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) => {
  return transporter.sendMail({
    from: "Client Portal Hub <mail.umarbashir@gmail.com>",
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
  });
};
