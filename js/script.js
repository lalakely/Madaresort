window.addEventListener("scroll" , function (){
    const scrolldve = document.querySelector(".dve");
    const scrolldpi = document.querySelector(".dpi");
    const scrolldba = document.querySelector(".dba");
    const scrolldimm = document.querySelector(".dimm");
    const scrolldpl = document.querySelector(".dpl");
    const test = window.scrollY;
    const scrollTdpi = 1050;
    const scrollTdve = 1400;
    const scrollTdba = 1600;
    const scrollTdimm = 2000;
    const scrollTdpl = 2170;

    if(test > scrollTdpi){
        scrolldpi.classList.add("animate");
    }
    else{ 
        scrolldpi.classList.remove("animate");
    }
    if(test > scrollTdve){
        scrolldve.classList.add("animate");
    }
    else{
        scrolldve.classList.remove("animate");
    }
    if(test > scrollTdba){
        scrolldba.classList.add("animate");
    }
    else{
        scrolldba.classList.remove("animate");
    }
    if(test > scrollTdimm){
        scrolldimm.classList.add("animate");
    }
    else{
        scrolldimm.classList.remove("animate");
    }
    if(test > scrollTdpl){
        scrolldpl.classList.add("animate");
    }
    else{
        scrolldpl.classList.remove("animate");
    }
});