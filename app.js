const words=document.querySelectorAll("p");

words.forEach((words)=>{
    words.addEventListener("click",(e)=>{
e.target.classList.toggle("active");
    });
});