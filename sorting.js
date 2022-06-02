const btn = document.getElementById("sortBtn");
const liArray = document.querySelectorAll(".expenses-li"); 
const ul = document.getElementById("expenses-list");

btn.addEventListener('click', ()  =>{
    let liArrayAmount = [salary.innerHTML,clubs.innerHTML,clothes.innerHTML,food.innerHTML,sport.innerHTML,eatingOut.innerHTML,lottery.innerHTML,taxi.innerHTML,gifts.innerHTML];
    // liArrayAmount.map(() => {
    //     for(let i = 0;i < liArrayAmount.length-1;i++){
    //         if(Number(liArrayAmount[i]) > Number(liArrayAmount[i+1])){
    //             let temp = liArrayAmount[i];
    //             liArrayAmount[i] = liArrayAmount[i+1];
    //             liArrayAmount[i+1] = temp;
    //             let tempSec = liArray[i];
    //             ul.replaceChild(liArray[i+1],liArray[i]);
    //             ul.replaceChild(tempSec,liArray[i+1]);
    //         }
    //     }
    // })
    
    //console.log(liArrayAmount);
})