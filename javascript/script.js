 // ============================ Mostrar menu mobile =========================
 function abrir_menu_mobile(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
 document.querySelector('.mobile-icone').src = "../imagens/_icones/icone_open.png" ;
    } else {
        menuMobile.classList.add('open');
      document.querySelector('.mobile-icone').src="../imagens/_icones/icone_close.png";
    }
}

// ============================ Especialidades =========================
function mostrar_cardiologia(){
let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let dermatologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='flex';
neurologia.style.display ='none';
hepatologia.style.display ='none';
pediatria.style.display ='none';
oftamologia.style.display ='none';
farmacologia.style.display ='none';

}

function mostrar_neurologia(){
  let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let farmacologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='none';
neurologia.style.display ='flex';
hepatologia.style.display ='none';
pediatria.style.display ='none';
oftamologia.style.display ='none';
farmacologia.style.display ='none';
}

function mostrar_hepatologia(){
  let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let farmacologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='none';
neurologia.style.display ='none';
hepatologia.style.display ='flex';
pediatria.style.display ='none';
oftamologia.style.display ='none';
farmacologia.style.display ='none';
}

function mostrar_pediatria(){
  let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let farmacologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='none';
neurologia.style.display ='none';
hepatologia.style.display ='none';
pediatria.style.display ='flex';
oftamologia.style.display ='none'
farmacologia.style.display ='none';;
}

function mostrar_oftamologia(){
  let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let farmacologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='none';
neurologia.style.display ='none';
hepatologia.style.display ='none';
pediatria.style.display ='none';
oftamologia.style.display ='flex';
farmacologia.style.display ='none';
}

function mostrar_farmacologia(){
  let neurologia = document.querySelector('.secao-neurologia');
let cardiologia = document.querySelector('.secao-cardiologia');
let hepatologia = document.querySelector('.secao-hepatologia');
let pediatria = document.querySelector('.secao-pediatria');
let oftamologia = document.querySelector('.secao-oftamologia');
let farmacologia = document.querySelector('.secao-farmacologia');

cardiologia.style.display ='none';
neurologia.style.display ='none';
hepatologia.style.display ='none';
pediatria.style.display ='none';
oftamologia.style.display ='none';
farmacologia.style.display ='flex';
}


