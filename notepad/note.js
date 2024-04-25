let notesData = [];
let noteTitle; // Declare noteTitle globally
let noteContent; // Declare noteContent globally

document.querySelector(".new").addEventListener("click", () => {
    document.querySelector(".add-wrap").style.visibility = "visible";
});

document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector(".add-wrap").style.visibility = "hidden";
});

document.querySelector("#add").addEventListener("click", () => {
    var colors = ['#ffcc00', '#ff1493', '#1e90ff', '#ffa500'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector(".add-wrap").style.visibility = "hidden";

    let noteLayout = document.querySelector(".note-layout");
    let titleTextarea = document.getElementById("titlearea");
    let noteTextarea = document.getElementById("notearea");
    let title = titleTextarea.value;
    let note = noteTextarea.value;

    let notesDiv = document.createElement("div");
    notesDiv.classList.add("notesdiv");
    notesDiv.style.backgroundColor = randomColor;

    noteTitle = document.createElement("p");
    noteTitle.textContent = title;

    let hr = document.createElement("hr");

    noteContent = document.createElement("p");
    noteContent.textContent = note;

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "editBtn");
    editButton.textContent = "🛠️";
    editButton.addEventListener("click", () => {
        document.getElementById("titleedit").value = title;
        document.getElementById("noteedit").value = note;
        document.querySelector(".edit-wrap").style.visibility = "visible";
    });

    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete");
    delBtn.textContent = "⛔";
    delBtn.addEventListener("click", () => {
        notesDiv.style.visibility = "hidden";
    });

    notesDiv.appendChild(noteTitle);
    notesDiv.appendChild(hr);
    notesDiv.appendChild(editButton);
    notesDiv.appendChild(delBtn);
    notesDiv.appendChild(noteContent);
    noteLayout.appendChild(notesDiv);

    let notesObject = {
        Title: title,
        Note: note,
        Color: randomColor
    };

    notesData.push(notesObject);

    titleTextarea.value = "";
    noteTextarea.value = "";

    console.log("Title:", title);
    console.log("Note:", note);
    console.log("Color:", randomColor);
    console.log(notesData);
});

document.getElementById("edit").addEventListener("click", () => {
    let title = document.getElementById("titleedit").value;
    let note = document.getElementById("noteedit").value;
    noteTitle.textContent = title;
    noteContent.textContent = note;
    document.querySelector(".edit-wrap").style.visibility = "hidden";
});

document.getElementById("cancele").addEventListener("click", () => {
    document.querySelector(".edit-wrap").style.visibility = "hidden";
});

localStorage.setItem(notesData);
console.table(notesObject);

