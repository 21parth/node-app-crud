const express = require('express');
const app = express();
const PORT = 4000;

// Enable JSON parsing for incoming request
app.use(express.json());

let people = [
    {id:1, name:'parth'}
];

//Route for '/people' path to get all the people
app.get('/api/people',(req,res)=>{
    res.status(200).json(people);
})

//Route for creating new person
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    const newPerson = {id:people.length +1,name}
    people.push(newPerson);
    res.status(201).send(newPerson);
})

//Route to get the person through unique id
app.get('/api/people/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const person = people.find(p => p.id === id);
    if(person){
        res.json(person)
    }
    else{
        res.status(404).send('Person not found')
    }
})

//Route to update the data
app.put('/api/people/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const personId = people.findIndex(p => p.id === id);
    if(personId !== -1){
        people[personId].name = name;
        res.status(202).json(people[personId]);
    }
    else{
        res.status(404).send("Person not found");
    }
})

//Route to delete the person
app.delete('/api/people/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    people = people.filter(p => p.id !== id);
    res.status(200).send("Person deleted successfully")
})

// listen to the external requests on this port.
app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})