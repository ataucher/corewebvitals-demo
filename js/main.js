document.getElementById("btn").disabled = true;
function submitPoll(){
    setTimeout(function() {
        document.getElementById("btn").disabled = false;
    }, 5000);
    
}

window.addEventListener("load", submitPoll);