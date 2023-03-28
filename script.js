/* input */
const cashInput = document.getElementById('inputCash');
const inputNumberOfPeople =  document.getElementById('inputNumberOfPeople');
const reset =  document.getElementById('reset');
const allProcents = document.querySelectorAll('.allProcents');
const customValue = document.getElementById('customValue');

/* variables */
let inputCash = 1;
let inputPeople = 1;
let tipAmount = document.getElementById('tipAmount');
let totalAmount = document.getElementById('totalAmount');
let tempNumber; //variable without "%" ;


/* functions */
function CashValue() {
    if (this.value <= 0){
        this.value = 1;
        alert("$1 is minimal value");
        AllReset();
    }
    else
    inputCash = this.value;
}

function AddPeople () {
    if (this.value < 1 ){
        this.value = 1;
        alert("1 is minimal value");
        AllReset();
    }
    else
    inputPeople = this.value;
}

function AllReset() {
        location.reload();
}

function Procentage () {
    allProcents.forEach((button) => {
    button.classList.remove('selection');
    customValue.classList.remove('selection');
   });

    this.classList.add('selection');
    tempNumber = parseInt(this.innerHTML.replace("%",""));
    tipAmount.innerHTML = '$' + parseFloat(tempNumber / inputPeople).toFixed(2);
    totalAmount.innerHTML = '$' + parseFloat((inputCash / inputPeople) + ((tempNumber / inputPeople) / inputPeople)).toFixed(2);
}
function CustomValueFunction () {
    allProcents.forEach((button) => {
        button.classList.remove('selection');
        customValue.classList.remove('selection');
       });
        this.classList.add('selection');
        const procent = parseInt(this.innerHTML.replace("%",""));

    if (procent <= 0){
        procent = 1;
        alert("1% is minimal value");
        AllReset();
    }
    else if (procent > 100){
        procent = 1;
        alert("100% is maximal value");
        AllReset();
    }

    else

    tipAmount.innerHTML = '$' + parseFloat(this.value / inputPeople).toFixed(2);
    totalAmount.innerHTML = '$' + parseFloat((inputCash / inputPeople) + ((this.value / inputPeople) / inputPeople)).toFixed(2);
}


/* events listeners */
cashInput.addEventListener('change', CashValue);
inputNumberOfPeople.addEventListener('change', AddPeople);
reset.addEventListener('click', AllReset);
allProcents.forEach((button) => {
    button.addEventListener('click', Procentage)
customValue.addEventListener('change', CustomValueFunction);
});
