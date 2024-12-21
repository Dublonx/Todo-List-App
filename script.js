// Todō List App
const addTask = document.querySelector("#addTask");

addTask.addEventListener("click", () => {
  const task = document.querySelector("#task").value;
  const output = document.querySelector("#output");
  const li = document.createElement("li");
  const xmark = document.createElement("i");
  const mark = document.createElement("i");
  
  li.textContent = task;
  xmark.className = 'fa-solid fa-xmark';
  mark.className = 'fa-solid fa-check';
  output.appendChild(li);
  li.appendChild(xmark);
  li.appendChild(mark);
  
  // event listener icon
  xmark.addEventListener("click", () => {
    output.removeChild(li);
  });
  
  mark.addEventListener("click", () => {
    li.classList.add("marked");
  })
  
  // if
  if (task === "") {
    Swal.fire({
      text: "Please add a task first!",
      icon: "error",
      confirmButtonText: "Okay",
      confirmButtonColor: "red"
    });
    output.removeChild(li);
  } else {
    // timeout
    setTimeout(function() {
      document.querySelector("#task").value = "";
    }, 1000);
  }
});