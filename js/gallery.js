const modal = document.querySelector('.modal');
const img = document.querySelectorAll('#gallery-item');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');




img.forEach(preview => {
    preview.addEventListener('click',()=>{
        modal.classList.add("open")
        original.classList.add("open");
        

        // dynamic img
        const originalSrc = preview.getAttribute('class');
        original.src = originalSrc;
        console.log(originalSrc);
        
        
        
    });
});


modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove("open");
    }
});

