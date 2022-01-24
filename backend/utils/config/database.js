const mongoose = require('mongoose');

require('dotenv').config();

const db = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    // eslint-disable-next-line no-console
    console.log('MongoDB Connected...');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    // Exit process on failure
    process.exit(1);
  }
};

module.exports = connectDB;
