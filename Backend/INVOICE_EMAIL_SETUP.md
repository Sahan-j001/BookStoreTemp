# Invoice Email Functionality

This document explains how the invoice email functionality works and how to set it up.

## Overview

When a successful payment is made, the system automatically sends a professional invoice email to the user. The email includes:

- Customer information
- Order details with items and quantities
- Delivery address
- Payment information
- Professional HTML formatting

## Features

### Invoice Email Content
- **Invoice Header**: Invoice number and date
- **Customer Information**: Name, email, phone, address
- **Order Details**: Order ID, status, delivery address
- **Itemized List**: Book names, quantities, prices, and totals
- **Payment Information**: Payment method, card details, status
- **Professional Styling**: Clean, modern HTML design

### Email Triggers
Invoice emails are automatically sent when:
1. **Direct Order Payment**: When `createPayment` is called for an existing order
2. **Cart Payment**: When `processCartPayment` is called for cart items

## Setup Requirements

### Environment Variables
Make sure these environment variables are set in your `.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use the generated password as `EMAIL_PASS`

### Alternative Email Providers
You can modify the SMTP settings in `services/emailService.js`:

```javascript
const transporter = nodemailer.createTransport({
    host: 'your-smtp-server.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

## Testing

### Test the Invoice Email
Run the test script to verify email functionality:

```bash
cd Backend
node test-invoice-email.js
```

### Manual Testing
1. Make a successful payment through your application
2. Check the user's email for the invoice
3. Verify all information is correct

## Error Handling

The invoice email functionality includes robust error handling:

- **Email Failures**: If email sending fails, the payment still succeeds
- **Missing User Data**: Gracefully handles missing user information
- **Invalid Email**: Logs errors but doesn't break the payment flow

## Code Structure

### Email Service (`services/emailService.js`)
- `sendVerificationEmail()`: For OTP emails
- `sendInvoiceEmail()`: For invoice emails

### Payment Controller (`Controllers/PaymentController.js`)
- Updated `createPayment()` method
- Updated `processCartPayment()` method
- Both methods now send invoice emails on successful payments

## Customization

### Modify Email Template
Edit the HTML template in `sendInvoiceEmail()` function to customize:
- Colors and styling
- Company branding
- Additional information
- Layout and design

### Add More Email Types
Follow the same pattern to add other email types:
1. Create a new function in `emailService.js`
2. Export it in the module.exports
3. Import and use it in your controllers

## Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check environment variables
   - Verify Gmail app password
   - Check console for error messages

2. **Email going to spam**:
   - Use a professional email address
   - Add SPF/DKIM records
   - Consider using a transactional email service

3. **Template not rendering**:
   - Check HTML syntax
   - Verify data structure
   - Test with sample data

### Debug Mode
Add console logs to track email sending:

```javascript
console.log('Sending invoice email to:', userEmail);
console.log('Order data:', orderData);
```

## Security Considerations

- Never log sensitive payment information
- Use environment variables for credentials
- Validate email addresses before sending
- Implement rate limiting for email sending
- Consider using a dedicated email service for production 