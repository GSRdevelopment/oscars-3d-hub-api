const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const cors = require('cors');

app.use(cors());

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<dbpassword>',
  process.env.DATABASE_PASSWORD
);

// CONNECT DATABASE
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Successfully connected to DB!');
  });

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
