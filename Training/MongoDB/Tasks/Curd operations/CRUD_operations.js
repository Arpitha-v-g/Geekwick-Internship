// TO Switch / Create Database
use universityDB

// To Create Collection
db.learners.createCollection("records")

// To Insert One Document
db.records.insertOne({
  name: "Arpi",
  age: 20,
  department: "AI-ML",
  skills: ["JavaScript", "AI", "NodeJS"],
  location: {
    city: "Mysuru",
    state: "Karnataka"
  }
})


// To Insert Many Documents
db.records.insertMany([
  {
    name: "Megha",
    age: 21,
    department: "IT",
    skills: ["Python", "Django"],
    location: { city: "Tumkur", state: "Karnataka" }
  },
  {
    name: "Arjun",
    age: 19,
    department: "CS",
    skills: ["C", "Algorithms"],
    location: { city: "Udupi", state: "Karnataka" }
  },
  {
    name: "Pooja",
    age: 22,
    department: "EEE",
    skills: ["Circuits", "MATLAB"],
    location: { city: "Belagavi", state: "Karnataka" }
  }
])


// Read (Get All Documents)
db.records.find()

// In Pretty Format
db.records.find().pretty()

// Read (Get One Document)
db.records.findOne({ name: "Megha" })

// Filter Data
db.records.find({ age: 20 })

// To Select Specific Fields
db.records.find({}, { name: 1, department: 1 })

// To get Query with Conditions
db.records.find({ age: { $gt: 20 } })
db.records.find({ age: { $lt: 21 } })

// AND Condition
db.records.find({ age: { $gt: 19 }, department: "IT" })

// OR Condition
db.records.find({ $or: [{ age: { $gt: 21 } }, { department: "CS" }] })

// Update (Update One Document)
db.records.updateOne(
  { name: "Arpitha" },
  { $set: { age: 21 } }
)

// Update (Update Many Documents)
db.records.updateMany(
  { department: "IT" },
  { $set: { department: "Information Tech" } }
)

// For Adding the new field
db.records.updateOne(
  { name: "Arjun" },
  { $set: { internship: "InternPe" } }
)

// To increment value
db.records.updateOne(
  { name: "Arpitha" },
  { $inc: { age: 1 } }
)


// Delete (Delete One Document)
db.records.deleteOne({ name: "Pooja" })

// Delete (Delete Many Documents)
db.records.deleteMany({ age: { $gt: 21 } })

// To Drop Collection
db.records.drop()

// To Drop Database
db.dropDatabase()

// To Show Collections
show collections

// To Show Databases
show dbs

// To Get Count of Documents
db.records.countDocuments()

// To Get Distinct Values
db.records.distinct("department")

// To Sort Documents
db.records.find().sort({ age: 1 }) // Ascending
db.records.find().sort({ age: -1 }) // Descending

//  To Limit the Number of Documents
db.records.find().limit(2)

// To Skip Documents
db.records.find().skip(1).limit(2)

// To Create Index
db.records.createIndex({ name: 1 }) // Ascending Index on name field

// To Create Compound Index
db.records.createIndex({ department: 1, age: -1 })

// To Get Indexes
db.records.getIndexes()

// To Drop Index
db.records.dropIndex({ name: 1 })

// To Drop Compound Index
db.records.dropIndex({ department: 1, age: -1 })

// To Aggregate Data
db.records.aggregate([
  { $match: { department: "IT" } },
  { $group: { _id: "$department", avgAge: { $avg: "$age" } } }
])