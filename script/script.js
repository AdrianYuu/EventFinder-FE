const visibilityButton = document.getElementById("button-visible")
const visibilityButton2 = document.getElementById("button-visible2")
visibilityButton.addEventListener("click", toggle)
visibilityButton2.addEventListener("click", toggle2)

function toggle(){
    const passwordInput = document.getElementById("input-password")
    const img = document.getElementById("eye")
    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        img.src="assets/Hidden.png"
    } else {
        passwordInput.type = "password"
        img.src="assets/Unhidden.png"
    }
}   

function toggle2(){
    const passwordInput = document.getElementById("input-confirmpassword")
    const img = document.getElementById("eye2")
    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        img.src="assets/Hidden.png"
    } else {
        passwordInput.type = "password"
        img.src="assets/Unhidden.png"
    }
}  