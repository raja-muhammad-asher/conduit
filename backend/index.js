const express = require('express');

require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is now running on http://localhost:${process.env.PORT}`);
});
