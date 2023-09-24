const btn1 = document.getElementById("btn");
const ratingEls = document.querySelectorAll(".rating");
const containerE1 = document.getElementById("container")

let selectedRating = "";

ratingEls.forEach((ratingE1)=>{
    ratingE1.addEventListener("click",(event) => {
        //console.log(event.target.innertext || event.target.parentNode.innertext);
        removeActive();
        selectedRating=
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});



btn1.addEventListener("click",() => {
    if(selectedRating != ""){
        containerE1.innerHTML= `
        <strong> Thankyou ! </strong>
        <br> 
        <br>
        <strong> Feedback : ${selectedRating}
        </strong>
        <p> we'll use your feedback to improve our customer support . </p>


        `;
    }
})











function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingE1.classList.remove("active");
    });
}