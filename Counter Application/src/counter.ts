const incr_btn = document.getElementById("increment") as HTMLButtonElement
const decr_btn = document.getElementById("decrement") as HTMLButtonElement
const num = document.getElementById("number") as HTMLHeadingElement
const reset_btn = document.getElementById("reset") as HTMLButtonElement

let counterNum: number = 0;
decr_btn.disabled = true

function handleIncrDesc(clickOn: "plus" | "minus"){
    if(clickOn == "plus") counterNum++;
    if(clickOn == "minus") counterNum--;
    if(counterNum === 0){
        decr_btn.disabled = true;
    }else{
        decr_btn.disabled = false;
    }
    num.innerText = counterNum.toString();
}

incr_btn.addEventListener('click', () => handleIncrDesc('plus'));
decr_btn.addEventListener('click', () => handleIncrDesc('minus'));
reset_btn.addEventListener('click', () => {
    counterNum = 0;
    num.innerText = counterNum.toString();
    decr_btn.disabled = true;
  });