let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Function to set up complete button functionality
function setupCompleteButton(completeBtn) {
    completeBtn.addEventListener("click", function() {
        const taskText = this.parentElement.querySelector("span");
        if (this.innerText === "Complete") {
            this.innerText = "Completed";
            taskText.style.textDecoration = "line-through";
        } else {
            this.innerText = "Complete";
            taskText.style.textDecoration = "none";
        }
    });
}

// Set up complete buttons for existing tasks
document.querySelectorAll('.complete').forEach(button => {
    setupCompleteButton(button);
});

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let taskText = document.createElement("span");
    taskText.innerText = inp.value;
    item.appendChild(taskText);

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("complete");
    setupCompleteButton(completeBtn);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(completeBtn);
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});