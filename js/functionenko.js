//Begrüßung
/*zwei variablen die das new date() objekt, also aktuelles datum und uhrzeit speichert und dann mit der methode get.hours die gespeciherte uhrzeit bekommt*/
var zeit;
var aktuell;

/*im grußbereich wird unter bestimmten bedingungen(wenn die uhrzeit von 1-9 liegt dann string... ) ein bestimmter string zurückgegeben und im bereich "grussbereich" aufgerufen, dieser bereich wird in einer variable grussbereich gespeichert*/
function uhrzeit() {
    zeit= new Date();
    aktuell= zeit.getHours();
var grussbereich = document.getElementById("grussbereich");
    
    if(aktuell >= 1 && aktuell <= 9) {
        grussbereich.innerHTML="Guten Morgen Besucher - das Team von Professional Website begrüsst Sie im neuen Tag!";} 
    else if(aktuell >= 10 && aktuell <= 18) {
        grussbereich.innerHTML="Guten Tag Besucher - das Team von Professional Website  begleitet Sie durch den Tag!";}
     else if(aktuell >= 19 && aktuell <= 23) { 
        grussbereich.innerHTML="Guten Abend Besucher - das Team von Professional Website  wünscht Ihnen einen schönen Abend!";}
    
}

//Lightbox Bilder
/*anstatt lightbox bilder habe ich wieder ein einfaches popup fenster mit einer allgemeinen funktion zusammengestellt*/
var breite= screen.width;
var hoehe= screen.height;


function oeffnen(url, name, eigenschaften){
    window.open(url, name, eigenschaften);
}


//Emails
/*die allgemeine funktion email soll verhindern dass man die email adressen durch copy/paste vollspamt. dadurch wird das at-zeichen nicht gezeigt aber mit der verlinkung zu outlook angenommen  */
function email(pZieladresse, pAnbieter, pKennung){
	document.write('<a href="' + 'mai' + 'lto' + ':' + pZieladresse + '@'+ pAnbieter + '.' + pKennung + '">' + pZieladresse + '[at]'+ pAnbieter + '.' + pKennung + '</a></p>');
}

/* window.onload besitzt hier nur die fenster oeffnen funktion weil die uhrzeit funktion direkt im html aufgerufen wird */

window.onload = function() {
    
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