
// DOMContentLoaded, click, dblclick, keydown, keyup...

 //1a Forma
document.addEventListener('dblclick', inici);

function inici() {
    console.log('Has fet doble click');
}

//2a Forma
document.addEventListener('keydown', (tecla)=> {


    document.getElementsByTagName('h1')[0].style.color = 'red';
    document.getElementsByTagName('h1')[0].style.background = 'yellow';


    // console.log(tecla.key);
    // console.log(tecla.keyCode);

    if (tecla.key == 'ArrowUp') {
        console.log('amunt!');
    }
    if (tecla.key == 'ArrowDown') {
        console.log('abaix!');
    }
    if (tecla.key == 'ArrowLeft') {
        console.log('esquerra!');
    }
    if (tecla.key == 'ArrowRight') {
        console.log('dreta!');
    }
    if (tecla.key == ' ') {
        console.log('salta!');
    }


});

document.addEventListener('keyup', ()=> {
    console.log('Has deixat anar una tecla');

    document.getElementsByTagName('h1')[0].style.color = 'black';
    document.getElementsByTagName('h1')[0].style.background = 'white';
});