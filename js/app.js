document.getElementById('addBtn').onclick = function(){
    alert("Add Transaction Clicked");
};

document.getElementById('roleSelect').onchange = function(e){
    alert("Role changed to " + e.target.value);
};

document.getElementById('searchInput').oninput = function(e){
    console.log("Searching:", e.target.value);
};
const roleSelect = document.getElementById("roleSelect");
const addBtn = document.getElementById("addBtn");

roleSelect.addEventListener("change", function(e){
    const role = e.target.value;

    if(role === "Viewer"){
        addBtn.style.display = "none";
    } else {
        addBtn.style.display = "block";
    }
});

addBtn.addEventListener("click", function(){
    alert("Add Transaction Clicked");
});

document.getElementById("searchInput").addEventListener("input", function(e){
    console.log("Searching:", e.target.value);
});