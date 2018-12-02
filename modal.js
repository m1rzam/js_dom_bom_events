var modal =  document.getElementById("modal");
var button =  document.getElementById("openModal");
var span = document.getElementsByClassName("closeModal")[0]; 
button.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}