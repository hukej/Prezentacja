let wlSlajdNumer=0;

let strzalkaL= document.querySelector(".strzalkaL");
let strzalkaP= document.querySelector(".strzalkaP");

let kr0 = document.querySelector("#kr0");
let kr1 = document.querySelector("#kr1");
let kr2 = document.querySelector("#kr2");
let kr3 = document.querySelector("#kr3");
let kr4 = document.querySelector("#kr4");
let kr5 = document.querySelector("#kr5");
let kr6 = document.querySelector("#kr6");
let kr7 = document.querySelector("#kr7");
let kr8 = document.querySelector("#kr8");
let kr9 = document.querySelector("#kr9");
let kr10 = document.querySelector("#kr10");
let kr11 = document.querySelector("#kr11");
let kr12 = document.querySelector("#kr12");

let slajd0 = document.querySelector("#slajd0");
let slajd1 = document.querySelector("#slajd1");
let slajd2 = document.querySelector("#slajd2");
let slajd3 = document.querySelector("#slajd3");
let slajd4 = document.querySelector("#slajd4");
let slajd5 = document.querySelector("#slajd5");
let slajd7 = document.querySelector("#slajd7");
let slajd8 = document.querySelector("#slajd8");
let slajd9 = document.querySelector("#slajd9");
let slajd10 = document.querySelector("#slajd10");
let slajd11 = document.querySelector("#slajd11");
let slajd12 = document.querySelector("#slajd12");



let ukryjAktywnySlajd=() => {
    let aktywnyElement= document.querySelector(".active");
    aktywnyElement.classList.remove("active");
};

let pokazSlajd=(nrSlajd) =>{
    ukryjAktywnySlajd();
    document.querySelector("#slajd"+ nrSlajd).classList.add("active");
};

let przesunP=()=>{
    if(wlSlajdNumer===12){
        wlSlajdNumer=0;
    }
    else{
        wlSlajdNumer=wlSlajdNumer+1;
    }
    pokazSlajd(wlSlajdNumer);

};
let przesunL=()=>{
    if(wlSlajdNumer===0){
        wlSlajdNumer=12;
    }
    else{
        wlSlajdNumer=wlSlajdNumer-1;
    }
    pokazSlajd(wlSlajdNumer);

};

let wlSlajd0 =()=>{
    wlSlajdNumer=0;
    pokazSlajd(0);
}
let wlSlajd1 =()=>{
    wlSlajdNumer=1;
    pokazSlajd(1);
}
let wlSlajd2 =()=>{
    wlSlajdNumer=2;
    pokazSlajd(2);
}
let wlSlajd3 =()=>{
    wlSlajdNumer=3;
    pokazSlajd(3);
}
let wlSlajd4 =()=>{
    wlSlajdNumer=4;
    pokazSlajd(4);
}
let wlSlajd5 =()=>{
    wlSlajdNumer=5;
    pokazSlajd(5);
}
let wlSlajd6 =()=>{
    wlSlajdNumer=6;
    pokazSlajd(6);
}
let wlSlajd7 =()=>{
    wlSlajdNumer=7;
    pokazSlajd(7);
}
let wlSlajd8 =()=>{
    wlSlajdNumer=8;
    pokazSlajd(8);
}

let wlSlajd9 =()=>{
    wlSlajdNumer=9;
    pokazSlajd(9);
}
let wlSlajd10 =()=>{
    wlSlajdNumer=10;
    pokazSlajd(10);
}
let wlSlajd11 =()=>{
    wlSlajdNumer=11;
    pokazSlajd(11);
}
let wlSlajd12 =()=>{
    wlSlajdNumer=12;
    pokazSlajd(12);
}

kr0.addEventListener('click', wlSlajd0);
kr1.addEventListener('click', wlSlajd1);
kr2.addEventListener('click', wlSlajd2);
kr3.addEventListener('click', wlSlajd3);
kr4.addEventListener('click', wlSlajd4);
kr5.addEventListener('click', wlSlajd5);
kr6.addEventListener('click', wlSlajd6);
kr7.addEventListener('click', wlSlajd7);
kr8.addEventListener('click', wlSlajd8);
kr9.addEventListener('click', wlSlajd9);
kr10.addEventListener('click', wlSlajd10);
kr11.addEventListener('click', wlSlajd11);
kr12.addEventListener('click', wlSlajd12);


strzalkaP.addEventListener("click", przesunP);
strzalkaL.addEventListener("click", przesunL);
