# Chatbot-for-PDFs-csv-json-txt 

This code sets up a webhook to handle chat requests with a Dialogflow agent. It uses the Dialogflow SDK to detect the intent of incoming messages and extract relevant parameters. If a file is uploaded with the message, it processes the file based on its type (PDF, CSV, JSON, or TXT) and saves the result to an in-memory object. When a file ID is detected as a parameter, it searches the relevant file for certain keywords based on the intent of the request and returns the results. The code uses multer middleware to handle file uploads, and uuid to generate unique session IDs. 

The example provided is a simplified version of a chatbot that could be used to search for specific types of information within uploaded files. In this case, the bot is designed to search for real estate law topics and phone call transcript topics. However, the code can be modified to handle other types of requests and file types.
