import express from 'express'
import Connection from './database/db.js'

// import mongoose from 'mongoose';
// import cors from 'cors';
// // import todoRoutes from './routes';

const app = express()

const PORT = process.env.PORT || 8000
Connection()
// app.use(cors());
// app.use(todoRoutes);
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// const options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.set('useFindAndModify', false);
app.listen(PORT, () => {
  console.log('port listening to', PORT)
})
// mongoose
//   .connect(uri, options)
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => {
//     throw error;
//   });
