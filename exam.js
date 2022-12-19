const read = require ('./read')
const write = require ('./write')
const add = require ('./add')
const present = require ('./present')

const Employee = require ('./Employee')
const Role = require ('./Role')
const Department = require ('./Department')

const data = process.argv

if (data[2] == 'add'){
    note = {
        Employee: data [3],
        Role: data [4],
        Department: data [5]
    }
    var oldNote = read()
    add (note, oldNote)
    present(read())
}
if (data[2] == 'read'){
    const present = require ('./present')
    present(read())
}
if (data[2] == 'Employee'){
    Employee(read())
}
if (data[2] == 'Role'){
    Role(read())
}
if (data[2] == 'Department'){
    Department(read())
}