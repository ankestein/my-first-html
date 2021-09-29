console.clear();
const student1 = {
    id: 1,
    name: "Lara Jones"
}

const student2 = {
    id: 2,
    name: "Tim Burton"
}

const studentArray = [student1, student2];
console.log(student1);
console.log("Before updating:", JSON.parse(JSON.stringify(studentArray))); // ohne stringify gibt web browser hier schon den updated Array aus. In CodePen sollte es auch ohne stringify funktionieren


function updateStudentName (myArray, id, newName) {
    const foundStudent = myArray.find(element => element.id === id);
    if(foundStudent) {
        foundStudent.name = newName;
    }
}

updateStudentName(studentArray, 2, "Tim Henry Burton");
console.log("Now student2 will be updated:")
console.log(studentArray);



function renameStudentByReplace (myArray, id, newName) {
    const foundStudent = myArray.find(element => element.id === id);
    const index = myArray.findIndex(element => element.id === id);
    const updatedStudent = {...foundStudent, name: newName};
    myArray[index] = updatedStudent;
}

renameStudentByReplace(studentArray, 1, "Lara Miller");
console.log("Now student1 will be replaced:")
console.log(studentArray);


// Florians Version für renameStudentByReplace:
function renameImmutable(studentArray, studentId, newName) {
    return studentArray.map(student => {
        if (student.id === studentId) {
            return {...student, name: newName}
        }
        return student
    })
}

console.log('before immutable', JSON.parse(JSON.stringify(studentArray)))
const newStudents = renameImmutable(studentArray, 2, 'Ludmilla')
console.log('after immutable', JSON.parse(JSON.stringify(studentArray)))
console.log('copied students', newStudents)