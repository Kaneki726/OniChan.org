let iframe=document.getElementById('iframe')
let episods=['https://www.youtube.com/watch?v=3bpBLjfkJrE']
let darkOn = false ;
let navigationOn = false;
let newsereiesOn = false;
let katalogOn = false;

function changeEpisod(argument) {
   iframe.src=argument;
}
function changeColor(argument) {
    if (darkOn==true) {
        document.getElementById('intro2').style.background='rgba(240, 46, 102, 0.7)';
        document.getElementById('intro').style.background='rgba(240, 48, 102, 0.7)';
        document.getElementById('manga').style.background='rgba(240, 48, 102, 0.7)';
        document.getElementById('footerPage').style.background='rgba(240, 48, 102, 0.7)';
        document.body.style.color='white';
        darkOn = false

    } else if (darkOn==false) {
        document.getElementById('intro2').style.background='rgba(172, 172, 172, 0.7)';
        document.getElementById('intro').style.background='rgba(172, 172, 172, 0.7)';
        document.getElementById('manga').style.background='rgba(172, 172, 172, 0.7)';
        document.getElementById('footerPage').style.background='rgba(172, 172, 172, 0.7)';
        document.body.style.color='black';
        darkOn = true
    }

   //document.getElementById('intro2').style.background='rgba(172, 172, 172, 0.7)'
   //document.getElementById('intro').style.background='rgba(172, 172, 172, 0.7)'
   //document.getElementById('manga').style.background='rgba(172, 172, 172, 0.7)'
   //document.getElementById('footerPage').style.background='rgba(172, 172, 172, 0.7)'
}

function navigation(argument) {
    if (navigationOn==true) {
       document.getElementById('intro').style.height='300px';
       navigationOn = false
   }else if (navigationOn==false) {
       document.getElementById('intro').style.height='0px';
       navigationOn = true
   }
}

function newsereies(argument) {
    if (newsereiesOn==true) {
       document.getElementById('manga').style.height='1900px';
       newsereiesOn = false
   }else if (newsereiesOn==false) {
       document.getElementById('manga').style.height='0px';
       newsereiesOn = true
   }
}

function surchBar() {
    document.getElementById('myUL').style.height='46px';
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function hide(argument) {
 document.getElementById('myUL').style.height='0px';
}

function katalog(argument) {
   if (katalogOn==true) {
       document.getElementById('katalog').style.height='80px';
       katalogOn = false;
   }else if (katalogOn==false) {
    document.getElementById('katalog').style.height='450px';
       katalogOn  = true;
   }
}