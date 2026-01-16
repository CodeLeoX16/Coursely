const mongoose = require('mongoose');
const Listing = require('../models/listing');
const User = require('../models/user');
const initData = require('./data.js');

const MONGO_URL = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/wanderlust';
main()
.then (()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
    
}

const initDB = async () => {
    await Listing.deleteMany({});

    // Insert seed data as provided (no automatic admin creation)
    const seedData = initData.data;
    await Listing.insertMany(seedData);
    console.log("Database seeded!");
    mongoose.connection.close();
};

initDB();
