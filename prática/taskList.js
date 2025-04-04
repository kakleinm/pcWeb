const bTask = document.querySelector("#addTask");

bTask.onclick = function() {
    let task = document.querySelector("#iTask").value;
    let taskList = document.querySelector("#taskList");
    let obj = document.createElement("li")
    obj.append(task);
    taskList.append(obj);
}