const fs = require ('fs')
const Employee = function (note){
    let newNote = JSON.parse(note)
    const EmployeeLists = newNote.map(function(n, idx){
        return n.Employee
    })
    console.log (EmployeeLists)
}
module.exports = Employee