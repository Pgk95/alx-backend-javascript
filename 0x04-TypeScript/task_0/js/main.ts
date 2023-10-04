interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "kidanekal",
    lastName: "kifle",
    age: 21,
    location: "san fransicsco"
};

const student2: Student = {
    firstName: "mahderekal",
    lastName: "bekele",
    age: 30,
    location: "london"
};

let studentsList = Array<Student>();

studentsList.push(...[student1, student2])
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const cell1: HTMLTableCellElement = document.createElement('td');
    const cell2: HTMLTableCellElement = document.createElement('td');
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
});