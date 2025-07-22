const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import all forms
const commonFormRoute = require('./forms/commonform');
const customerFormRoute = require('./forms/customerform');
const eventFormRoute = require('./forms/eventform');
const franchiseFormRoute = require('./forms/franchiseform');

// Use Routes
app.use('/common-form', commonFormRoute);
app.use('/customer-form', customerFormRoute);
app.use('/event-form', eventFormRoute);
app.use('/franchise-form', franchiseFormRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
