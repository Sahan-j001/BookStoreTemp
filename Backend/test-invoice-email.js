const { sendInvoiceEmail } = require('./services/emailService');

// Sample data for testing invoice email
const testUserData = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1234567890',
    address: '123 Main St, City, State 12345'
};

const testOrderData = {
    _id: 'ORDER123456',
    createdAt: new Date(),
    status: 'Confirmed',
    totalAmount: 99.99,
    deliveryAddress: {
        fullName: 'John Doe',
        street: '123 Main St',
        city: 'City',
        postalCode: '12345',
        country: 'USA'
    },
    items: [
        {
            book: {
                name: 'The Great Gatsby',
                price: 29.99
            },
            quantity: 2
        },
        {
            book: {
                name: 'To Kill a Mockingbird',
                price: 19.99
            },
            quantity: 1
        },
        {
            book: {
                name: '1984',
                price: 19.99
            },
            quantity: 1
        }
    ]
};

const testPaymentData = {
    paymentMethod: 'Credit Card',
    cardLastFour: '1234',
    status: 'completed',
    createdAt: new Date()
};

// Test function
async function testInvoiceEmail() {
    try {
        console.log('Testing invoice email functionality...');
        console.log('Make sure you have EMAIL_USER and EMAIL_PASS environment variables set.');
        
        await sendInvoiceEmail('test@example.com', testUserData, testOrderData, testPaymentData);
        
        console.log('✅ Invoice email test completed successfully!');
        console.log('Check your email at test@example.com (or the email you configured)');
        
    } catch (error) {
        console.error('❌ Invoice email test failed:', error.message);
        console.log('Make sure your email configuration is correct:');
        console.log('- EMAIL_USER should be your Gmail address');
        console.log('- EMAIL_PASS should be your Gmail app password');
        console.log('- Enable 2-factor authentication and generate an app password');
    }
}

// Run the test if this file is executed directly
if (require.main === module) {
    testInvoiceEmail();
}

module.exports = { testInvoiceEmail }; 