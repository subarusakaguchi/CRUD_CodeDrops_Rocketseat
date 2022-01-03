import 'reflect-metadata';

import express from 'express';

const app = express();

const PORT = 5555;

app.listen(PORT, () => console.log(`Server is Running on port: ${PORT}`));
