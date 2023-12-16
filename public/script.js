const serverURL = window.location.origin;
const port = process.env.PORT || 4000; 
async function getAllEmployees() {
    const response = await fetch(`${serverURL}/api/employees`);
    const data = await response.json();
    displayResult(data);
  }

  async function getEmployeeById() {
    const employeeId = document.getElementById('employeeId').value;
    const response = await fetch(`${serverURL}/api/employees/${employeeId}`);
    const data = await response.json();
    displayResult(data);
  }

  async function createNewEmployee() {
    const newEmployeeName = document.getElementById('newEmployeeName').value;
    const response = await fetch(`${serverURL}/api/employees`, {
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
    const response = await fetch(`${serverURL}/api/employees/${updateEmployeeId}`, {
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
    const response = await fetch(`${serverURL}/api/employees/${deleteEmployeeId}`, {
      method: 'DELETE',
    });
    const data = await response.text();
    displayResult(data);
  }

  function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  }