document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.getElementById("alertBtn");
    if(btn){
        btn.addEventListener("click",()=>{
            alert("Thanks for clicking!");
        });
    }
});