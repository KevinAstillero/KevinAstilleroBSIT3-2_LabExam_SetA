const read = require ('./read')
const write = require ('./write')
const add = require ('./add')
const present = require ('./present')

const employee = require ('./employee')
const role = require ('./role')
const department = require ('./department')

const data = process.argv


if (data[2] == 'add'){
    note = {
        employee: data [3],
        role: data [4],
        department: data [5]
    }
    var oldNote = read()
    add (note, oldNote)
    
}
if (data[2] == 'read'){
    present(read())
}
if (data[2] == 'employee'){
    employee(read())
}
if (data[2] == 'role'){
    role(read())
}
if (data[2] == 'department'){
    department(read())
}