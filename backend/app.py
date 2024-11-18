from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Email configuration
SENDER_EMAIL = os.getenv("SENDER_EMAIL")  # Replace with your email
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")  # Replace with your password

# @app.route('/api/send-emails', methods=['POST'])
# def send_emails():
#     # Manual data for testing
#     manual_data = [
#         {"name": "John Doe", "email": "john@example.com", "invoice_no": "12345", "amount": 1000},
#         {"name": "Jane Smith", "email": "jane@example.com", "invoice_no": "12346", "amount": 2000},
#         {"name": "Alice Johnson", "email": "alice@example.com", "invoice_no": "12347", "amount": 1500},
#     ]
#
#     # Loop through the manual data and send emails
#     for row in manual_data:
#         subject = f"Invoice Reminder: Invoice {row['invoice_no']}"
#         content = f"Hi {row['name']},\n\nThis is a reminder that {row['amount']} INR for invoice {row['invoice_no']} is due.\n\nBest regards,\nYour Company"
#         send_email(subject, row['email'], content)
#
#     return jsonify({"message": "Emails scheduled successfully!"}), 200

@app.route('/api/send-emails', methods=['POST'])
def send_emails():
    data = request.get_json()  # Parse the JSON data
    if not data:
        return jsonify({"error": "Invalid JSON data"}), 400

    # Process the data
    for row in data:
        subject = f"Invoice Reminder: Invoice {row['invoice_no']}"
        content = f"Hi {row['name']},\n\nThis is a reminder that {row['amount']} INR for invoice {row['invoice_no']} is due.\n\nBest regards,\nYour Company"
        send_email(subject, row['email'], content)

    return jsonify({"message": "Emails scheduled successfully!"}), 200


def send_email(subject, receiver_email, content):
    """Send an email using SMTP."""
    msg = MIMEText(content)
    msg['Subject'] = subject
    msg['From'] = SENDER_EMAIL
    msg['To'] = receiver_email

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
            smtp_server.login(SENDER_EMAIL, SENDER_PASSWORD)
            smtp_server.sendmail(SENDER_EMAIL, receiver_email, msg.as_string())
            print(f"Email sent to {receiver_email}")
    except Exception as e:
        print(f"Failed to send email to {receiver_email}: {e}")

@app.route('/api/email-status', methods=['GET'])
def email_status():
    # Mock data for email status; replace with actual data retrieval logic
    status_data = [
        {"id": 1, "companyName": "Company A", "email": "a@example.com", "sendStatus": "Sent",
         "deliveryStatus": "Delivered", "opened": True},
        {"id": 2, "companyName": "Company B", "email": "b@example.com", "sendStatus": "Failed",
         "deliveryStatus": "Bounced", "opened": False},
    ]
    return jsonify(status_data), 200

@app.route('/api/email-analytics', methods=['GET'])
def email_analytics():
    # Mock analytics data; replace with actual data retrieval logic
    analytics_data = {
        "sent": 50,
        "scheduled": 10,
        "failed": 5,
        "delivered": 45,
        "bounced": 5
    }
    return jsonify(analytics_data), 200

if __name__ == '__main__':
    app.run(port=5000)
