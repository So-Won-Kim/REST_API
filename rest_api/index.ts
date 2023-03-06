import express, { Request, Response } from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Update package route
app.put('/package/:name', (req: Request, res: Response) => {
  // Update package logic here

});

// Upload package route
const upload = multer({ dest: 'uploads/' });
app.post('/package', upload.single('package'), (req: Request, res: Response) => {
  // Upload package logic here
});

// Download package route
app.get('/package/:name', (req: Request, res: Response) => {
  // Download package logic here
});

app.listen(3000, () => console.log('Server listening on port 3000'));
//npm install --save @types/multer

