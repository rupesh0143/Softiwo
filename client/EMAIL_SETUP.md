# Email Setup Instructions

This application uses Nodemailer to send emails from the contact forms and quote requests.

## Setup Steps

### 1. Install Dependencies
The nodemailer package has already been installed. If you need to reinstall:
```bash
npm install nodemailer
```

### 2. Configure Environment Variables
Update the `.env.local` file with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Gmail Setup (Recommended)
If using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password (not your regular Gmail password) in `EMAIL_PASS`

### 4. Alternative Email Providers
If using other email services, update the `service` field in the API routes:

**For Outlook/Hotmail:**
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

**For Custom SMTP:**
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.yourdomain.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Features Implemented

### 1. Portfolio Page
- ✅ "Start Project" button now shows "Get Quote"
- ✅ Opens GetQuoteModal instead of CreateCampaignModal
- ✅ Sends email when quote form is submitted

### 2. Services Page
- ✅ "Start Project" button now shows "Get Quote"
- ✅ Opens GetQuoteModal for quote requests
- ✅ Sends email when quote form is submitted

### 3. Technologies Page
- ✅ "Get Quote" button redirects to /contact page
- ✅ CTA buttons redirect to contact and portfolio pages

### 4. About Page
- ✅ "Schedule a Call" button now makes actual call to +91 8800677345
- ✅ Other buttons redirect to appropriate pages

### 5. Contact Page
- ✅ Complete contact form with project details
- ✅ Sends email using nodemailer when form is submitted
- ✅ Phone buttons make actual calls to +91 8800677345
- ✅ Loading states and error handling

## Email Templates

### Quote Request Email
Includes:
- Client information (name, email, phone, company)
- Project details (type, budget, timeline)
- Requirements checklist
- Project description
- Professional HTML formatting

### Contact Form Email
Includes:
- Contact information
- Project information (if provided)
- Message content
- Professional HTML formatting

## API Endpoints

- `POST /api/send-quote` - Handles quote requests from GetQuoteModal
- `POST /api/send-contact` - Handles contact form submissions

## Testing

1. Fill out a quote form (Portfolio or Services page)
2. Fill out the contact form
3. Check your email inbox (configured in EMAIL_USER)
4. Test phone call functionality on About and Contact pages

## Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords, not your main email password
- Consider rate limiting for production use
- Validate email content to prevent spam

## Troubleshooting

**Email not sending:**
1. Check environment variables are set correctly
2. Verify app password is correct (not regular password)
3. Check email service settings
4. Look at console logs for error messages

**SMTP Errors:**
- Gmail: Ensure 2FA is enabled and app password is used
- Other providers: Verify SMTP settings and credentials

## Production Deployment

When deploying to production:
1. Set environment variables in your hosting platform
2. Consider using a transactional email service (SendGrid, Mailgun)
3. Implement rate limiting to prevent abuse
4. Add email validation and sanitization
5. Consider adding email templates management