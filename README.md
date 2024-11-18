# Email Sender Dashboard

## Description
The **Email Sender Dashboard** is a powerful web application designed to streamline the process of sending invoice reminder emails to customers. This tool enables users to efficiently schedule and dispatch emails to multiple recipients, monitor the status of sent emails, and analyze email performance metrics. It serves as an essential foundation for automating email reminders, helping businesses enhance their communication and improve cash flow.

## Features
- **Automated Email Sending**: Effortlessly send invoice reminder emails to a list of recipients.
- **Email Status Tracking**: Monitor the delivery status of sent emails, including delivery confirmations and open rates.
- **Comprehensive Email Analytics**: Gain insights into your email campaigns with detailed metrics, such as the number of sent, scheduled, failed, delivered, and bounced emails.
- **CORS Support**: Cross-Origin Resource Sharing (CORS) is enabled for seamless integration with frontend applications.

## Setup

### Prerequisites
To run this application, ensure you have the following installed:
- Python 3.x
- Flask
- smtplib
- python-dotenv
- flask-cors

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/email-sender-dashboard.git
   cd email-sender-dashboard

### Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

### Install required packages:
```bash
pip install Flask smtplib python-dotenv flask-cors
```

### Configure your email credentials:
Create a .env file in the project root with the following content:
```plaintext
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_password
```

### Running the Application
Start the Flask server with:
```bash
python app.py
```

### Open your browser and navigate to http://localhost:5000.
### API Endpoints

#### 1. Send Emails

- **Endpoint**: `/api/send-emails`
- **Method**: `POST`

##### Request Body:
A JSON array containing recipient data such as name, email, invoice number, and amount.

**Example:**
```json
[
    {"name": "John Doe", "email": "john@example.com", "invoice_no": "12345", "amount": 1000},
    {"name": "Jane Smith", "email": "jane@example.com", "invoice_no": "12346", "amount": 2000}
]
```
Response: JSON message indicating the result of the email scheduling.
Retrieve Email Status
## Endpoints

### 1. **Email Scheduling**
   - **Endpoint:** `/api/email-schedule`
   - **Method:** `POST`
   - **Response:** JSON message indicating the result of the email scheduling.

### 2. **Retrieve Email Status**
   - **Endpoint:** `/api/email-status`
   - **Method:** `GET`
   - **Response:** JSON array containing the statuses of sent emails.

### 3. **Get Email Analytics**
   - **Endpoint:** `/api/email-analytics`
   - **Method:** `GET`
   - **Response:** JSON object with analytics data related to email performance.

## Example Data for Testing

The following example data can be used for testing purposes:

```json
[
    {"name": "John Doe", "email": "john@example.com", "invoice_no": "12345", "amount": 1000},
    {"name": "Jane Smith", "email": "jane@example.com", "invoice_no": "12346", "amount": 2000},
    {"name": "Alice Johnson", "email": "alice@example.com", "invoice_no": "12347", "amount": 1500}
]
```
In a production environment, users can input their own data to send emails. The application will respond within seconds with the status of all dispatched messages.

## Important Notes
Ensure your email provider allows SMTP access.
For production use, handle sensitive data securely and follow best practices for email delivery.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

Feel free to customize any sections to better fit your project's specific needs or branding!
