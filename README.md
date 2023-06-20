# Dialogflow File Search
This Node.js project integrates with Google's Dialogflow API to handle chat requests and perform search operations in various file types including PDF, CSV, JSON and TXT files.



**Features**
 - File upload functionality with multer.
 - File processing and text extraction for PDF, CSV, JSON, and TXT files.
 - Natural Language Processing through Dialogflow for understanding user chat requests.
 - Search functionality in file contents based on the detected intent.



**Setup**<br>
Clone the repository to your local machine.

Install the required npm modules by running the following command in your terminal:<br>
 **- npm install**

Replace the placeholder values in the code with your actual Dialogflow projectId, privateKey path, and client_email.

Run the application:<br>
    **- node app.js**

**Usage**<br>
Make a POST request to /chat endpoint with a file and a message in the body of the request.
