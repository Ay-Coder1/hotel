var menu  = document.getElementById("menu")
var main = document.getElementById("main")
var list = document.getElementById("list")

   main.style.right ="-290px";

menu.onclick = function(){
       if(main.style.right == "-250px"){
           main.style.right = "0";
           list.src = "images/closemenu.png";
       }
       else{
           main.style.right = "-250px";
           list.src = "images/menu1.png";
       }
};


