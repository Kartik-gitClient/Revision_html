const tablebody = document.getElementById('table-body');
const form = document.getElementById("myform");
let studentDATA = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted....")
    const student = {};
    const dataInput = document.querySelectorAll("input");

    dataInput.forEach((data) => {
        console.log("values", data.value, data.id);
        student[data.id] = data.value;
    });
    
    studentDATA.push(student);
    fetchTabledata(studentDATA);
})

const fetchTabledata = (studentArray) => {
    // Clear the table before appending new data
    tablebody.innerHTML = "";
    studentArray.forEach((studentDts) => {
        let dataRow = document.createElement("tr"); // Move inside the loop
        Object.values(studentDts).forEach((value) => {
            let data = document.createElement("td");
            data.textContent = value;
            dataRow.appendChild(data);
        })
        tablebody.appendChild(dataRow);
    })
    document.querySelector('.data-container').style.transform = "rotateY(180deg)";
}
