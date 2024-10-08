import mongoose  from 'mongoose';

const Connection = async (username = 'Priyush', password = 'Pass#123') => {
    const URL = `mongodb://localhost:27017`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;