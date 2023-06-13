var btn = document.querySelector("button")
var h4 = document.querySelector("h4")

var flag = 0
btn.addEventListener("click", function (e) {
    if (flag == 0) {
        h4.innerHTML = "Friends";
        h4.style.color = "Green";
        console.log("clicked")
        btn.innerHTML = "Remove Friend"
        flag = 1
    }else{
        h4.innerHTML="Stranger"
        h4.style.color="red"
        console.log("click Again")
        btn.innerHTML="Add Friend"

        flag = 0
    }
})



