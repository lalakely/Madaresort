window.addEventListener("scroll", function(){
    const vis1 = document.querySelector(".titlevis1");
    const pvis1 = 300;
    const vis2 = document.querySelector(".titlevis2");
    const pvis2 = 910;
    const vis3 = document.querySelector(".titlevis3");
    const pvis3 = 1507;
    const resto = document.querySelector(".aboutresto");
    const presto = 410;
    const hotel = document.querySelector(".abouthotel");
    const photel = 1010;
    const parc = document.querySelector(".aboutparc");
    const pparc = 1610;
    const ceo1 = document.querySelector(".divCEO");
    const pceo1 = 2275;
    const ceo2 = document.querySelector(".ceotitle");
    const pceo2 = 2275;
    const chef1 = document.querySelector(".divchef");
    const pchef1 = 2736;
    const equip = document.querySelector(".diveq");
    const pequip = 3250;
    let mouse = window.scrollY;
    if(mouse > pvis1){
        vis1.classList.add("anim1");
    }else{vis1.classList.remove("anim1");}
    console.log(mouse);
    if(mouse > pvis2){
        vis2.classList.add("anim1");
    }else{vis2.classList.remove("anim1");}
    if(mouse > pvis3){
        vis3.classList.add("anim1");
    }else{vis3.classList.remove("anim1");}
    if(mouse > presto){
        resto.classList.add("anim2");
    }else{resto.classList.remove("anim2");}
    if(mouse > photel){
        hotel.classList.add("anim3");
    }else{hotel.classList.remove("anim3");}
    if(mouse > pparc){
        parc.classList.add("anim2");
    }else{parc.classList.remove("anim2");}
    if(mouse > pceo1){
        ceo1.classList.add("anim3");
    }else{ceo1.classList.remove("anim3");}
    if(mouse > pceo2){
        ceo2.classList.add("anim1");
    }else{ceo2.classList.remove("anim1");}
    if(mouse > pchef1){
        chef1.classList.add("anim3");
    }else{chef1.classList.remove("anim3");}
    if(mouse > pequip){
        equip.classList.add("anim2");
    }else{equip.classList.remove("anim2");}
});