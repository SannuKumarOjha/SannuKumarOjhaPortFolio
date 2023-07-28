const MenuBtn = () =>{
    document.getElementById('OpenNavbar').style.height='100vh' ;
    document.getElementById('menubtn').style.display ='none';
}
const CloseBtn = () =>{
    document.getElementById('OpenNavbar').style.height='0vh' ;
    document.getElementById('menubtn').style.display ='block';
}

setTimeout (function(){

 $('.loding').fadeToggle();
    
}, 1400);