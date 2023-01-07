const fs = require ('fs')
const department = function (note){
    let newNote = JSON.parse(note)
    const departmentLists = newNote.map(function(n, idx){
        return n.department
    })
    console.log ("Department: " + departmentLists)
}
module.exports = department