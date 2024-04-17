interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});

