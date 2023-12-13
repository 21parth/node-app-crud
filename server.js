const express = require('express');
const app = express();
const PORT = 4000;

// Enable JSON parsing for incoming request
app.use(express.json());

app.use(express.static('public'));

let employees = [
    {id:1, name:'parth'}
];

app.get('/',(req,res)=>{

})
//Route for '/employees' path to get all the employees
app.get('/api/employees',(req,res)=>{
    res.status(200).json(employees);
})

//Route for creating new employee
app.post('/api/employees',(req,res)=>{
    const {name} = req.body;
    const newEmployee = {id:employees.length +1,name}
    employees.push(newEmployee);
    res.status(201).send(newEmployee);
})

//Route to get the employee by unique id
app.get('/api/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);
    if(employee){
        res.json(employee)
    }
    else{
        res.status(404).send({'message': 'employee not found'})
    }
})

//Route to update the data
app.put('/api/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const employeeId = employees.findIndex(e => e.id === id);
    if(employeeId !== -1){
        employees[employeeId].name = name;
        res.status(202).json(employees[employeeId]);
    }
    else{
        res.status(404).send({'message': 'employee not found'});
    }
})

//Route to delete the employee
app.delete('/api/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    employees = employees.filter(p => p.id !== id);
    res.status(200).send("employee deleted successfully")
})

// listen to the external requests on this port.
app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})