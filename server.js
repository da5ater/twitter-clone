const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

// Export the app for testing or further usage
module.exports = app;
