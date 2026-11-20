//Experiment 7 and 8

<!-- 
test> show collections

test> show colllections
MongoshInvalidInputError: [COMMON-10001] 'colllections' is not a valid argument for "show".
test> show collections

test> use studentDB
switched to db studentDB
studentDB> db.createCollection("students")
{ ok: 1 }
studentDB> db.students.insertMany([  { rollNo: 2, name: "Diya", age: 21, branch: "IT", marks: 91 },  { rollNo: 3, name: studentDB> db.students.insertMany([  {rollNo: 1, name: "Gaurav", age: 20, branch: "CSE", marks: 91},{ rollNo: 2, name: "Diya", age: 21, branch: "IT", marks: 91 },  { rollNo: 3, name: "Kabir", age: 19, branch: "CSE", marks: 74 },  { rollNo: 4, name: "Meera", age: 22, branch: "ECE", marks: 88 } ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6b002337ba03adf432c598c5'),
    '1': ObjectId('6b002337ba03adf432c598c6'),
    '2': ObjectId('6b002337ba03adf432c598c7'),
    '3': ObjectId('6b002337ba03adf432c598c8')
  }
}
studentDB> db.students.Find()
TypeError: db.students.Find is not a function
studentDB> db.students.find()
[
  {
    _id: ObjectId('6b002337ba03adf432c598c5'),
    rollNo: 1,
    name: 'Gaurav',
    age: 20,
    branch: 'CSE',
    marks: 91
  },
  {
    _id: ObjectId('6b002337ba03adf432c598c6'),
    rollNo: 2,
    name: 'Diya',
    age: 21,
    branch: 'IT',
    marks: 91
  },
  {
    _id: ObjectId('6b002337ba03adf432c598c7'),
    rollNo: 3,
    name: 'Kabir',
    age: 19,
    branch: 'CSE',
    marks: 74
  },
  {
    _id: ObjectId('6b002337ba03adf432c598c8'),
    rollNo: 4,
    name: 'Meera',
    age: 22,
    branch: 'ECE',
    marks: 88
  }
]
studentDB> db.students.find({age : {$gt : 20}})
[
  {
    _id: ObjectId('6b002337ba03adf432c598c6'),
    rollNo: 2,
    name: 'Diya',
    age: 21,
    branch: 'IT',
    marks: 91
  },
  {
    _id: ObjectId('6b002337ba03adf432c598c8'),
    rollNo: 4,
    name: 'Meera',
    age: 22,
    branch: 'ECE',
    marks: 88
  }
]
studentDB> db.students.update({rollNo: 2},{$set : {age: 19}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
studentDB> db.students.find({age : {$gt : 20}})
[
  {
    _id: ObjectId('6b002337ba03adf432c598c8'),
    rollNo: 4,
    name: 'Meera',
    age: 22,
    branch: 'ECE',
    marks: 88
  }
]
studentDB> db.students.deleteOne({ rollNo: 4 })
{ acknowledged: true, deletedCount: 1 }
studentDB> db.students.find({age : {$gt : 20}})

studentDB> -->