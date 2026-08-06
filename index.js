const username=document.getElementById("username")
const lengthIcon=document.getElementById("lengthIcon")
const letterIcon=document.getElementById("letterIcon")
const startLetterIcon=document.getElementById("startLetterIcon")
const spaceIcon=document.getElementById("spaceIcon")


const password=document.getElementById("password")
const lengthIconPass=document.getElementById("lengthIconPass")
const upperIcon=document.getElementById("upperIcon")
const numberIcon=document.getElementById("numberIcon")
const specialIcon=document.getElementById("specialIcon")

username.addEventListener("input",()=>{
    if(username.value.length>=8)
    {
        lengthIcon.classList.remove("bi-check-circle");
        lengthIcon.classList.add("bi-check-circle-fill");
    }
    else
    {
        lengthIcon.classList.remove("bi-check-circle-fill");
        lengthIcon.classList.add("bi-check-circle");
    }
    if(/^\w+$/.test(username.value))
    {
        letterIcon.classList.remove("bi-check-circle");
        letterIcon.classList.add("bi-check-circle-fill");
    }
    else{
        letterIcon.classList.remove("bi-check-circle-fill");
        letterIcon.classList.add("bi-check-circle");
    }
    if(/^[a-zA-Z]/.test(username.value))
    {
        startLetterIcon.classList.remove("bi-check-circle");
        startLetterIcon.classList.add("bi-check-circle-fill");
    }
    else
    {
        startLetterIcon.classList.remove("bi-check-circle-fill");
        startLetterIcon.classList.add("bi-check-circle");
    }
    if(/^\w+$/.test(username.value))
    {
        spaceIcon.classList.remove("bi-check-circle");
        spaceIcon.classList.add("bi-check-circle-fill");
    }
    else
    {
        spaceIcon.classList.remove("bi-check-circle-fill");
        spaceIcon.classList.add("bi-check-circle");
    }
})

password.addEventListener("input",()=>{
    if(password.value.length>=8)
    {
        lengthIconPass.classList.remove("bi-check-circle");
        lengthIconPass.classList.add("bi-check-circle-fill");
    }
    else
    {
        lengthIconPass.classList.remove("bi-check-circle-fill");
        lengthIconPass.classList.add("bi-check-circle");
    }
    if(/[A-Z]/.test(password.value))
    {
        upperIcon.classList.remove("bi-check-circle");
        upperIcon.classList.add("bi-check-circle-fill");
    }
    else{
        upperIcon.classList.remove("bi-check-circle-fill");
        upperIcon.classList.add("bi-check-circle");
    }
    if(/[0-9]/.test(password.value))
    {
        numberIcon.classList.remove("bi-check-circle");
        numberIcon.classList.add("bi-check-circle-fill");
    }
    else
    {
        numberIcon.classList.remove("bi-check-circle-fill");
        numberIcon.classList.add("bi-check-circle");
    }
    if(/[!@#$%^&*(),.?"":{}|<>_]/.test(password.value)){
        specialIcon.classList.remove("bi-check-circle");
        specialIcon.classList.add("bi-check-circle-fill");
    }
    else
    {
        specialIcon.classList.remove("bi-check-circle-fill");
        specialIcon.classList.add("bi-check-circle");
    }
})

const submitButton=document.getElementById("submitButton")



submitButton.onclick=function()
{
    const usernameLengthValid=username.value.length>=8;
    const usernameLetterValid=/^\w+$/.test(username.value)
    const usernameStartValid=/^[a-zA-Z]/.test(username.value)
    const usernameSpaceValid=/^\w+$/.test(username.value)

    const passwordLengthValid=password.value.length>=8
    const passwordUpperValid=/[A-Z]/.test(password.value)
    const passwordNumberValid=/[0-9]/.test(password.value)
    const passwordSpecialValid=/[!@#$%^&*(),.?"":{}|<>_]/.test(password.value)

    if(usernameLengthValid &&usernameLetterValid &&usernameStartValid &&usernameSpaceValid &&passwordLengthValid &&passwordUpperValid &&passwordNumberValid &&passwordSpecialValid )
    {
        document.getElementById("signupPage").style.display="none";
        document.getElementById("SuccessPage").style.display="flex";
    }

    else
    {
        document.getElementById("signupPage").style.display="none";
        document.getElementById("NotSuccessPage").style.display="flex";
    }
}