function hide(argument) {
 document.getElementById('myUL').style.height='0px';
}

function katalog(argument) {
   if (katalogOn==true) {
       document.getElementById('katalog').style.height='90px';
       katalogOn = false;
   }else if (katalogOn==false) {
    document.getElementById('katalog').style.height='964px';
       katalogOn  = true;
   }
}