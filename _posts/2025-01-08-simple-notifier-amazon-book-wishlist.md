---
layout: post
title: "A Simple Notification System for Amazon Book Wishlist"
date: 2025-01-08 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

Creating a program to monitor a publicly accessible Amazon book wish list and notify you when a new book is added can be approached using a combination of scraping, scheduling, and notification tools. Here’s a structured approach:

1. High-Level Design:
Scraper: Periodically scrape the public Amazon wish list for its current contents.
Change Detector: Compare the current list to the last known list.
Notifier: Send a notification (e.g., email, text, or push notification) when a new book is detected.
Scheduler: Use a scheduling tool like cron or Kafka for periodic checks.
2. Components:
Scraper:
Use a library like BeautifulSoup (Python) or Puppeteer (Node.js) to scrape the wish list.
Amazon's web pages often use dynamic content and anti-bot measures, so tools like Selenium or Playwright may be necessary.
Change Detector:
Store the wish list data locally (e.g., in a JSON file, SQLite, or a small database).
Compare the latest scraped data to the stored data.
Notifier:
Use an API or service to send notifications:
Email: Use smtplib (Python) or a service like SendGrid.
SMS: Use Twilio or a similar service.
Push Notifications: Use Pushover, Pushbullet, or a similar service.
Custom Dashboard: Build a simple web app to display updates.
Scheduler:
Use cron for periodic execution on a local machine or server.
For more scalable solutions:
Use Kafka to process and distribute events.
Use a task scheduler like Celery (with periodic tasks) or AWS Lambda with EventBridge (cloud-based).
3. Implementation Outline:
Here’s an example using Python:

Step 1: Scraper
python
Copy code
import requests
from bs4 import BeautifulSoup

def scrape_amazon_wishlist(wishlist_url):
    headers = {"User-Agent": "Your User Agent String"}  # To bypass Amazon's bot protection
    response = requests.get(wishlist_url, headers=headers)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        books = []
        for item in soup.select(".g-item-sortable"):
            title = item.select_one(".a-list-item .a-size-base").text.strip()
            books.append(title)
        return books
    else:
        print(f"Failed to fetch wishlist. Status code: {response.status_code}")
        return None
Step 2: Change Detector
python
Copy code
import json

def detect_changes(new_list, storage_file="wishlist.json"):
    try:
        with open(storage_file, "r") as file:
            old_list = json.load(file)
    except FileNotFoundError:
        old_list = []

    new_books = [book for book in new_list if book not in old_list]

    # Save the new list
    with open(storage_file, "w") as file:
        json.dump(new_list, file)

    return new_books
Step 3: Notifier
python
Copy code
import smtplib
from email.mime.text import MIMEText

def send_notification(new_books, recipient_email):
    if not new_books:
        return

    msg_content = "\n".join(new_books)
    msg = MIMEText(f"New books added to your wishlist:\n\n{msg_content}")
    msg["Subject"] = "Amazon Wishlist Update"
    msg["From"] = "your_email@example.com"
    msg["To"] = recipient_email

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login("your_email@example.com", "your_password")
        server.send_message(msg)
Step 4: Scheduler
Using Cron:

Create a script check_wishlist.py that combines the above functions:
python
Copy code
wishlist_url = "https://www.amazon.com/hz/wishlist/ls/your_wishlist_id"
recipient_email = "your_email@example.com"

books = scrape_amazon_wishlist(wishlist_url)
if books:
    new_books = detect_changes(books)
    send_notification(new_books, recipient_email)
Add a cron job to run the script periodically:
bash
Copy code
*/30 * * * * python3 /path/to/check_wishlist.py
Using Kafka:

Produce an event whenever the wish list changes.
Consumers process the event and send notifications.
4. Additional Considerations:
Dynamic Web Pages: If the Amazon page loads dynamically, you may need Selenium or Playwright for more advanced scraping.
Anti-Bot Protections: Be cautious about Amazon’s terms of service and anti-scraping mechanisms. Consider using Amazon’s APIs if available.
Error Handling: Add retries and error logging to handle network issues.
Cloud Deployment: Host the program on a serverless platform (e.g., AWS Lambda) for better availability.
5. Scaling and Enhancements:
Use a cloud database like DynamoDB to store wish list data.
Send notifications to multiple platforms (email, SMS, and push).
Add a web interface to configure wish list URLs and notification settings.
Let me know if you’d like a detailed explanation or code for any of these steps!
