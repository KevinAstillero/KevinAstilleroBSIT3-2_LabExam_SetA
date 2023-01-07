const fs = require ('fs')
const employee = function (note){
    let newNote = JSON.parse(note)
    const employeeLists = newNote.map(function(n, idx){
        return n.employee
    })
    console.log ("Employee: " + employeeLists)
}
module.exports = employee