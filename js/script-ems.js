// localStorage.clear(); // clears local storage for testing purposes

// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, 'John Smith', 1234, 'johnsmith@randomemail.com', 'Marketing'],
    [23456789, 'Jane Doe', 2345, 'janedoe@randomemail.com', 'Sales'],
    [34567890, 'Bob Johnson', 3456, 'bobjohnson@randomemail.com', 'Administrative'],
    [11110000, 'Elvis Presley', 1111, 'elvispresley@randomemail.com', 'Quality Assurance'],
    [11112222, 'Abraham Lincoln', 2222, 'abrahamlincoln@randomemail.com', 'Executive']
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
let storage = localStorage.getItem('employees'); // Check to see if there is already data in storage for employee array

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (storage) {  // empty storage would produce null, a falsy value
    employees = JSON.parse(storage);
}

// GET DOM ELEMENTS
let form     = document.getElementById('addForm');
let empTable = document.getElementById('empTable');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId    = document.getElementById('id').value;
    let empName  = document.getElementById('name').value;
    let empExt   = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDept  = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empId, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    // CONFIRM THE DELETE
    if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex - 1, 1);

        // BUILD THE GRID
        buildGrid();
    }
}

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector('tbody').remove(); // selects and removes the tbody inside the empTable table

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    empTable.appendChild(tbody);

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees) {
        // CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-sm btn-danger delete';
        deleteBtn.innerHTML = ' X ';
        deleteBtn.addEventListener('click', deleteEmployee);

        // CREATE THE BUTTON (TD)
        let buttonTd = document.createElement('td');
        buttonTd.appendChild(deleteBtn);

        // REBUILDING THE ROW STRUCTURE
        let row = `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
                <td>${employee[4]}</td>
                <td>${buttonTd.innerHTML}</td>
            </tr>
        `;

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbody.innerHTML += row;
    }

    // UPDATE EMPLOYEE COUNT
    let empCount = document.getElementById('empCount');
    empCount.value = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));

};
