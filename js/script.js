let menu = document.getElementById("menu") 

function mostrarMenu() {
  if(menu.style.display == "none"){
    menu.style.dislay = "flex"
  }else{
    menu.style.display = "none"
  }
  
}

function mostrarPopup() {
    window.alert("eae parça")
}