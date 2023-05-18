const dialogflow = require('dialogflow');
const uuid = require('uuid');
const pdfParse = require('pdf-parse');
const csvParse = require('csv-parser');
const JSONParse = require('JSON.parse');
const multer = require('multer');

// Set up Dialogflow client
const projectId = 'YOUR_PROJECT_ID';
const privateKey = require('path/to/private/key.json');
const sessionClient = new dialogflow.SessionsClient({
  projectId: projectId,
  credentials: {
    private_key: privateKey,
    client_email: 'YOUR_CLIENT_EMAIL'
  }
});

// Set up file upload middleware
const upload = multer({ dest: 'uploads/' });

// Process uploaded files
const files = {};
const processPDF = (file) => {
  const data = pdfParse(file.buffer);
  files[file.filename] = data.text;
};
const processCSV = (file) => {
  const data = [];
  csvParse()
    .on('data', (row) => data.push(row))
    .on('end', () => files[file.filename] = data);
  file.pipe(csvParser);
};
const processJSON = (file) => {
  const data = JSONParse(file.buffer.toString());
  files[file.filename] = data;
};
const processTXT = (file) => {
  files[file.filename] = file.buffer.toString();
};

// Handle chat requests
app.post('/chat', upload.single('file'), async (req, res) => {
  const sessionId = uuid.v4();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const query = req.body.message;

  // Detect intent and extract parameters
  const request = {
    session: sessionPath,
    queryInput: {
      text: _Validate request    if(!req.body.message) {
  throw new Error('Message is required') {
    text: query,
      languageCode: 'en-US'
  }
}
 };
const response = await sessionClient.detectIntent(request);
const intent = response.queryResult.intent.displayName;
const fileId = response.queryResult.parameters.fileId;

// Return results based on intent and parameters
let result;
if (intent === 'real estate law files') {
  result = searchRealEstateLaw(files[fileId]);
} else if (intent === 'phone call transcript files') {
  result = searchPhoneCallTranscripts(files[fileId]);
} else {
  result = 'Sorry, I don\'t understand.';
}
res.send(result);
  } catch (error) {
  console.error(error);
  res.status(400).send(error.message);
}
});

// Helper functions for searching files
// Helper function for searching real estate law files
const searchRealEstateLaw = (fileContents) => {
  // Define search terms
  const searchTerms = [
    'real estate',
    'property law',
    'landlord-tenant',
    'homeowners association',
    'zoning',
    'construction law'
  ];
  // Split file contents into words
  const words = fileContents.split(/[^\w]/);

  // Check for presence of search terms
  const results = [];
  for (const term of searchTerms) {
    if (words.includes(term)) {
      results.push(term);
    }
  }
  // Return results
  if (results.length > 0) {
    return `The file contains the following real estate law topics: ${results.join(', ')}`;
  } else {
    return 'The file does not appear to contain any real estate law topics';
  }
};

// Helper function for searching phone call transcript files
const searchPhoneCallTranscripts = (fileContents) => {
  // Define search terms
  const searchTerms = [
    'customer service',
    'sales',
    'complaints',
    'product inquiries',
    'technical issues',
    'billing'
  ];

  // Split file contents into lines
  const lines = fileContents.split('\n');

  // Check for presence of search terms in each line
  const results = [];
  for (const line of lines) {
    for (const term of searchTerms) {
      if (line.toLowerCase().includes(term)) {
        results.push(line.trim());
        break;
      }
    }
  }

  // Return results
  if (results.length > 0) {
    return `The file contains the following phone call topics: ${results.join(' | ')}`;
  } else {
    return 'The file does not appear to contain any phone call topics';
  }
};