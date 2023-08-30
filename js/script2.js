window.addEventListener("scroll", function(){
    let sc = window.scrollY;
    const s_L1 = document.querySelector(".mtitle21");
    const s_c1 = document.querySelector(".mtitle22");
    const c_L1 = document.querySelector(".mtitle23");
    const c_c1 = document.querySelector(".mtitle24");
    const fmL1 = document.querySelector(".fam1");
    const dL1 = document.querySelector(".deux1");
    const snf1 = document.querySelector(".fam2");
    const sdn1 = document.querySelector(".deux2");
    const fcL1 = document.querySelector(".fam3");
    const dcL1 = document.querySelector(".deux3");
    const fcn1 = document.querySelector(".fam4");
    const dcn1 = document.querySelector(".deux4");
    const psc1 = 950;
    const pcL1 = 1917;
    const pcc1 = 2592;
    const psL1 = 250;
    const pfmL1 = 350;
    const pdL1 = 695;
    const psnf1 = 1140;
    const psdn1 = 1480;
    const pfcL1 = 2023;
    const pdcL1 = 2413;
    const pfcn1 = 2638;
    const pdcn1 = 2980;
    if(sc > psL1){
        s_L1.classList.add("animate1");
    }else{s_L1.classList.remove("animate1");}
    if(sc > pcL1){
        c_L1.classList.add("animate1");
    }else{c_L1.classList.remove("animate1");}
    if(sc > psc1){
        s_c1.classList.add("animate1");
    }else{s_c1.classList.remove("animate1");}
    if(sc > pcc1){
        c_c1.classList.add("animate1");
    }else{c_c1.classList.remove("animate1");}
    if(sc > pfmL1){
        fmL1.classList.add("anim");
    }else{fmL1.classList.remove("anim");}
    if(sc > pdL1){
        dL1.classList.add("anim2");
    }else{dL1.classList.remove("anim2");}
    if(sc > psnf1){
        snf1.classList.add("anim");
    }else{snf1.classList.remove("anim");}
    if(sc > psdn1){
        sdn1.classList.add("anim2");
    }else{sdn1.classList.remove("anim2")}
    console.log(sc);
    if(sc > pfcL1){
        fcL1.classList.add("anim");
    }else{fcL1.classList.remove("anim");}
    if(sc > pdcL1){
        dcL1.classList.add("anim2");
    }else{dcL1.classList.remove("anim2");}
    if(sc > pfcn1){
        fcn1.classList.add("anim");
    }else{fcn1.classList.remove("anim");}
    if(sc > pdcn1){
        dcn1.classList.add("anim2");
    }else{dcn1.classList.remove("anim2");}
});