import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create reusable transporter object using SMTP
export function getTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    throw new Error('بيانات البريد غير مكتملة على السيرفر: يرجى إضافة SMTP_USER و SMTP_PASS في Vercel')
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user,
      pass,
    },
  })
}

export async function handleContactSubmission(data) {
  const { name, company, email, phone, sector, module, message } = data

  const transporter = getTransporter()
  const targetEmail = process.env.CONTACT_US_TARGET_EMAIL || process.env.SMTP_USER
  const fromName = process.env.SMTP_FROM_NAME || 'Technical support - USoft'
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER

  const htmlContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
        .card { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #173B67 0%, #2F80ED 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
        .header h1 { margin: 0 0 8px 0; font-size: 24px; font-weight: bold; }
        .header p { margin: 0; font-size: 14px; opacity: 0.85; }
        .content { padding: 28px 24px; }
        .section-title { font-size: 16px; font-weight: 700; color: #2F80ED; margin-bottom: 16px; border-bottom: 2px solid #eff6ff; padding-bottom: 8px; }
        .item { display: flex; justify-content: space-between; padding: 12px 14px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px; border-right: 4px solid #2F80ED; }
        .label { font-weight: 600; color: #64748b; font-size: 14px; min-width: 140px; }
        .val { font-weight: 700; color: #0f172a; font-size: 14px; word-break: break-word; text-align: left; }
        .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-top: 12px; font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap; }
        .footer { background: #f8fafc; padding: 18px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .badge { display: inline-block; background: #2F80ED; color: white; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">طلب عرض تجريبي جديد (Demo)</span>
          <h1 style="margin-top: 10px;">إشعار استفسار من موقع USoft</h1>
          <p>تم استلام طلب جديد من استمارة التواصل في الموقع الإلكتروني</p>
        </div>
        <div class="content">
          <div class="section-title">بيانات العميل والشركة:</div>
          <div class="item">
            <span class="label">اسم العميل:</span>
            <span class="val">${name || '-'}</span>
          </div>
          <div class="item">
            <span class="label">اسم الشركة / المؤسسة:</span>
            <span class="val">${company || '-'}</span>
          </div>
          <div class="item">
            <span class="label">رقم الهاتف:</span>
            <span class="val" dir="ltr"><a href="tel:${phone}" style="color: #2F80ED; text-decoration: none;">${phone || '-'}</a></span>
          </div>
          <div class="item">
            <span class="label">البريد الإلكتروني:</span>
            <span class="val" dir="ltr"><a href="mailto:${email}" style="color: #2F80ED; text-decoration: none;">${email || '-'}</a></span>
          </div>
          <div class="item">
            <span class="label">قطاع الأعمال:</span>
            <span class="val">${sector || '-'}</span>
          </div>
          <div class="item">
            <span class="label">النظام / الحل المطلوب:</span>
            <span class="val">${module || '-'}</span>
          </div>

          <div class="section-title" style="margin-top: 24px;">نص الرسالة / الاستفسار:</div>
          <div class="message-box">${message || 'لا توجد ملاحظات إضافية'}</div>
        </div>
        <div class="footer">
          تم الإرسال تلقائياً من خادم موقع USoft الرسمي بتاريخ ${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })}
        </div>
      </div>
    </body>
    </html>
  `

  return await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: targetEmail,
    replyTo: email,
    subject: `🔔 طلب ديمو جديد: ${name} (${company || 'شركة'}) - نظام ${module || 'USoft'}`,
    text: `طلب ديمو جديد:\nالاسم: ${name}\nالشركة: ${company}\nالهاتف: ${phone}\nالإيميل: ${email}\nالقطاع: ${sector}\nالنظام: ${module}\nالرسالة:\n${message}`,
    html: htmlContent,
  })
}
