const { response, application, json } = require("express");

async function getAllEmployees() {
    const response = await fetch('http://localhost:4000/api/employees');
    const data = await response.json();
    displayResult(data);
  }

  async function getEmployeeById() {
    const employeeId = document.getElementById('employeeId').value;
    const response = await fetch(`http://localhost:4000/api/employees/${employeeId}`);
    const data = await response.json();
    displayResult(data);
  }

  async function createNewEmployee() {
    const newEmployeeName = document.getElementById('newEmployeeName').value;
    const response = await fetch('http://localhost:4000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newEmployeeName}),
    });
    const data = await response.json();
    displayResult(data);
  }

  async function updateEmployee() {
    const updateEmployeeId = document.getElementById('updateEmployeeId').value;
    const updateEmployeeName = document.getElementById('updateEmployeeName').value;
    const response = await fetch(`http://localhost:4000/api/employees/${updateEmployeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: updateEmployeeName}),
    });
    const data = await response.json();
    displayResult(data);
  }

  async function deleteEmployee() {
    const deleteEmployeeId = document.getElementById('deleteEmployeeId').value;
    const response = await fetch(`http://localhost:4000/api/employees/${deleteEmployeeId}`, {
      method: 'DELETE',
    });
    const data = await response.text();
    displayResult(data);
  }

  // Function to display result on the page
  function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  }