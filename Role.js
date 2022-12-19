const fs = require ('fs')
const Role = function (note){
    let newNote = JSON.parse(note)
    const RoleLists = newNote.map(function(n, idx){
        return n.Role
    })
    console.log (RoleLists)
}
module.exports = Role