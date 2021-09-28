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
console.log(JSON.stringify(studentArray)); // ohne stringify gibt web browser hier schon den updated Array aus. In CodePen sollte es auch ohne stringify funktionieren

console.log("Now student2 will be updated:")
function updateStudentName (myArray, id, newName) {
    const foundStudent = myArray.find(element => element.id === id);
    foundStudent.name = newName;
}

updateStudentName(studentArray, 2, "Tim Henry Burton");
console.log(studentArray);

console.log("Now student1 will be replaced:")
function renameStudentByReplace (myArray, id, newName) {
    const foundStudent = myArray.find(element => element.id === id);
    const index = myArray.findIndex(element => element.id === id);
    const updatedStudent = {...foundStudent, name: newName};
    myArray[index] = updatedStudent;
}

renameStudentByReplace(studentArray, 1, "Lara Miller");
console.log(studentArray);


