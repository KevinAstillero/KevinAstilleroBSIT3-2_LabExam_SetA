const fs = require ('fs')
const Department = function (note){
    let newNote = JSON.parse(note)
    const DepartmentLists = newNote.map(function(n, idx){
        return n.Department
    })
    console.log (DepartmentLists)
}
module.exports = Department