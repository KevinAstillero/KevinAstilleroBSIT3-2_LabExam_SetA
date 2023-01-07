const fs = require ('fs')
const role = function (note){
    let newNote = JSON.parse(note)
    const roleLists = newNote.map(function(n, idx){
        return n.role
    })
    console.log ("Role: " + roleLists)
}
module.exports = role