import express from 'express';
const app = express();
let users = [
{id :1,name: 'A',email: 'A@example.com'},
{id:2,name:'b',email: 'B@example.com'}
];
//GEt:fetch the all details of user
app.get('/users',(req,res) => {
res.json(users);
});
//Post:to add the details;
app.post('/user',(req,res) => {
let user={
    id:users.length+1,
    name:req.body.name,
    email:req.body.email
};
users.push(user);
res.json(user);
});

app.listen(8000,()=> {
console.log("server is running on hhtps://localhost:8000");
});
//DELETE
app.delete("/user/:id",(req,res)=>{
    users=users.filter(u=>u.id!=req.paramas.id);

    res.send("User deleted");
});
