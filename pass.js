let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox     = document.getElementById('passBox');
let lowercase   = document.getElementById('lowercase');
let uppercase   = document.getElementById('uppercase');
let number      = document.getElementById('number');
let symbol      = document.getElementById('symbol');
let genBtn      = document.getElementById('genBtn');
let copyIcon    = document.getElementById('copyIcon');

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumber = "0123456789";
let allSymbol = "~!@#$%^&*";
// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars    = "";

    allChars  += lowerChars.checked ? lowerChars: "";
    allChars  += upperChars.checked ? upperChars: "";
    allChars  += number.checked ? number: "";
    allChars  += symbol.checked ? symbol: "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
        
    
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.vlaue);
        copyIcon.innerText = "check";
        copyIcon.title = "password copyed";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";

        },3000)
    }
});
