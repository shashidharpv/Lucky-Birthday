const inputDob = document.querySelector("#dob-input");
var luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-button");
const textarea = document.querySelector("#text-area");
console.log(document.querySelector("#lucky-num"))
textarea.style.display = "none";

const addDate = ()=>{
    let datesum = 0;
    console.log(inputDob.value.split("-"));
    for (let i = 0; i < inputDob.value.length; i++) {
        const num = parseInt(inputDob.value.charAt(i));
        if (!isNaN(num)) {
            datesum += num;
        }
    }
    return datesum;
}


const checkLucky = ()=>{
    const dob = addDate();
    var dateCon = inputDob.value.split("-").length;
    var number = luckyNum.value;
    
    if(number !== "" && dateCon === 3){
        if(dob%number === 0){
          
            textarea.style.display = "block";
            textarea.innerText = "Yayy! "+ number+" is lucky!";
        }else {
    
            textarea.style.display = "block";
            textarea.innerText = "Oops! It's not lucky.";
        }
    } else {

        textarea.style.display = "block";
        textarea.innerText = "Please enter both the fields";
    }
    
    
    
    }
    
checkBtn.addEventListener("click", checkLucky)