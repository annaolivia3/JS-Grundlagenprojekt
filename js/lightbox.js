var breite= screen.width;
var hoehe= screen.height;


function oeffnen(url, name, eigenschaften){
    window.open(url, name, eigenschaften);
}

window.onload= function(){
    var light1= document.getElementById("light1");
    light1.onclick= function(){
       oeffnen("lightbox1.html", "Nummer 1", "top=50,left=2100,width=600,height=600");
   }
     var light2= document.getElementById("light2");
    light2.onclick= function(){
       oeffnen("lightbox2.html", "Nummer 2", "top=50,left=2100,width=600,height=600");
   }
     var light3= document.getElementById("light3");
    light3.onclick= function(){
       oeffnen("lightbox3.html", "Nummer 3", "top=50,left=2100,width=600,height=600");
   }
     var light4= document.getElementById("light4");
    light4.onclick= function(){
       oeffnen("lightbox4.html", "Nummer 4", "top=50,left=2100,width=600,height=600");
   }
}
