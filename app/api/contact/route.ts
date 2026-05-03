import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { firstName, lastName, email, company, message } = body

    // Send notification to Masarat
    await resend.emails.send({
      from: 'Masarat Website <website@masaratkwt.com>',
      to: 'info@masaratkwt.com',
      subject: `New enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #2563EB;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `
    })

    // Send auto-reply to user
    await resend.emails.send({
      from: 'Masarat Technologies <info@masaratkwt.com>',
      to: email,
      subject: 'Thank you for contacting Masarat Technologies',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #2563EB;">Thank you, ${firstName}!</h2>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Masarat Technologies Team</strong></p>
          <p>📞 +965 67013229</p>
          <p>www.masaratkwt.com</p>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
