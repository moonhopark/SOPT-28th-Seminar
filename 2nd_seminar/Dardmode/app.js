const body = document.body;
const mode = document.getElementById("darkMode");

let dark = false;

function handleDarkMode(){
  if(dark === true){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    dark = false;
    mode.innerText = "Dark mode"
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    dark = true;
    mode.innerText = "Light mode"
  }

}

if(mode){
  mode.addEventListener("click", handleDarkMode);
}