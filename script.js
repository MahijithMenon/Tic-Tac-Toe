const letterPiece=document.querySelectorAll('.board-letter');
const player=document.querySelectorAll('.player');
const p1=document.querySelector('.p-1');
const p2=document.querySelector('.p-2');
console.log(player);

// p1.textContent=prompt("Enter Your Name");
// p2.textContent=prompt("Enter Your Friend's Name");

for(letter of letterPiece){
letter.addEventListener('click',function(){
    console.log("Clicked")
})
}