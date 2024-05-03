let slids = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let count = 0;
slids.forEach((elm , index)=>{
   elm.style.left = ` ${index * 100}% `;
});

prevBtn.addEventListener('click', () => {
    if(count > 0  ){
        count--;
        img();

    }
   
});

nextBtn.addEventListener('click', () => {
    if(count < slids.length-1){

        count++;
        img();
    }

});

const img = ()=>{
    slids.forEach  ((elm , index)=>{
        elm.style.transform = ` translateX(-${count * 100}% )`;
    });
};

