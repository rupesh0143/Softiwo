import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      projectType, 
      budget, 
      timeline, 
      message, 
      requirements 
    } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({

      host: 'smtp.gmail.com',
      port: process.env.NEXT_PUBLIC_APP_PORT,
      secure: process.env.NEXT_PUBLIC_APP_PORT == 465,
      auth: {
        user: process.env.NEXT_PUBLIC_APP_EMAIL_USER, 
        pass: process.env.NEXT_PUBLIC_APP_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false   // 👈 accept self-signed cert
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_APP_EMAIL_USER,
      to: 'softiwo01@gmail.com', // Where you want to receive emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>

          ${projectType || budget || timeline || (requirements && requirements.length > 0) ? `
            <div style="background-color: #EFF6FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1D4ED8; margin-top: 0;">Project Information</h3>
              ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
              ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
              ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
              
              ${requirements && requirements.length > 0 ? `
                <p><strong>Requirements:</strong></p>
                <ul style="margin-left: 20px;">
                  ${requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          ` : ''}
            
          ${message ? `
            <div style="background-color: #F0F9FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0C4A6E; margin-top: 0;">Message</h3>
              <p style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3B82F6; line-height: 1.6;">
                ${message}
              </p>
            </div>
          ` : ''}

          <div style="background-color: #F0FDF4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #166534; margin: 0; text-align: center;">
              <strong>📧 New lead - Follow up promptly!</strong>
            </p>
          </div>

          <div style="text-align: center; padding: 20px; border-top: 1px solid #E5E7EB; margin-top: 30px;">
            <p style="color: #6B7280; font-size: 14px; margin: 0;">
              This email was sent from your Softiwo website contact form
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}