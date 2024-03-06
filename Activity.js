let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);
    // console.log(delBtn.innerText);

    ul.appendChild(li);
    inp.value = "";
});


// let itemDel = document.querySelectorAll(".delete");
// for (delItem of itemDel) {
//     delItem.addEventListener("click", function () {
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});