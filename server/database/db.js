import mongoose  from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb://${username}:${password}@ac-qxkr8vl-shard-00-00.9lhmhid.mongodb.net:27017,ac-qxkr8vl-shard-00-01.9lhmhid.mongodb.net:27017,ac-qxkr8vl-shard-00-02.9lhmhid.mongodb.net:27017/DOC?ssl=true&replicaSet=atlas-c8mitz-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;