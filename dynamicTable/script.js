
const employees  = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
];


let tbody = document.getElementById("tableBody");

for (let i = 0; i < employees.length; ++i) {
    let employeeTrContainer = document.createElement("tr");
    for (let key in employees[i]) {
        let tdPoint = document.createElement("td");
        if (typeof employees[i][key] == "object") {
            employees[i][key] = Object.values(employees[i][key]).join(", ");
        }

        tdPoint.innerText = employees[i][key];
        employeeTrContainer.append(tdPoint);
    }
    tbody.append(employeeTrContainer);
}