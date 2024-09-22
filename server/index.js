const express = require('express')
const app = express()
const connectDB = require('./database/db.js')
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const coursesRoutes = require('./routes/courseRoutes.js'); 
const enrollmentRoutes = require('./routes/enrollmentRoutes.js');

const port = process.env.PORT

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.listen(port,()=>{
    console.log(`SERVER is currently live at: http://localhost:${port}`);
})