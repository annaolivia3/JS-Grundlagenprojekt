//zufällige Werbebilder
/*Variable werbebilder anlegen um Array also eine Liste zu machen*/
var werbebilder;

//Array anlegen
/*Bilderdateien in Array speichern, Index in der Informatik fängt immer bei 0 an */
werbebilder = new Array();

werbebilder[0] = "werbebanner/banner1.jpg";
werbebilder[1] = "werbebanner/banner2.jpg";
werbebilder[2] = "werbebanner/banner3.jpg";
werbebilder[3] = "werbebanner/banner4.jpg";
werbebilder[4] = "werbebanner/banner5.jpg";
werbebilder[5] = "werbebanner/banner6.jpg";
werbebilder[6] = "werbebanner/banner7.jpg";

//Zufall
/*Funktion für Zufall bereitstellen- ein bild soll durch zufall angezeigt werde, d.h. ich brauche eine liste von bildern also ein array mit einem index, was eine zahl bereithält die die math.random methode greifen kann. da wir 7 bilder haben und math.random eine zahl zwischen null und 1 ausspuckt nehme ich die randomzahl mal 7 runde dies mit math.floor ab. Die innere Klammer wird immer zuerst behandelt */
var zufall;

/* die abgerundete mal sieben genommene zufällige zahl wird in der variable zufall gespeichert. weiter wird in dem bereich werbebild das array mit der variable zufall gelegt und somit bei jedem refresh ein neues bild gezeigt, weil eine variable mit einer zufälligen indexzahl aufgerufen wird*/
function bild(){
    zufall = Math.floor(7*Math.random());
    document.getElementById("werbebild").src = werbebilder[zufall];
}

//zufällige Werbeslogan
/*anstatt von bildern kann man auch strings in einen array packen-gleiches prinzip, bloß wird hier dann in ein bereich mit inner.HTML "geschrieben" als dass eine quelle bereitgestellt wird*/

var slogan;
slogan = new Array();

slogan[0]="Es ist soweit!";
slogan[1]="Das Portal geht online!";
slogan[2]="Skriptsprachen im Zusammenspiel!";
slogan[3]="Erleben und entdecken Sie die Welt des WWW";
slogan[4]="Aktuelle News, Informationen und vieles mehr ...!";

var zufallszahl;

function werbespruch() {
    zufallszahl = Math.floor(5*Math.random());
    document.getElementById("werbeslogan").innerHTML = slogan[zufallszahl]; 
}

//bewegter Banner
/*die funktion bewegen enthält den bereich des werbebanners in der variable bild gespeichert und eine startposition und eine variabel mit der funktion setinterval die alle 10milisekunden die funktion frame aufruft. die funktion frame stellt klar ab wann die setInterval funktion aufhören soll also wenn der werbebanner bereich die position 400 einnimmt. sonst wird die position des werbebanners immer weiter sich von seiner startposition entfernen durch das inkrementieren (erhöht sich um 1) pos++ - die position wird anhand der css methode style.top für den werbebannerbereich jedes mal neu bestimmt*/


function bewegen() {
    var bild = document.getElementById("werbebanner");
    var pos = -100;
    var id = setInterval(frame, 10);

  function frame() {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++;
      bild.style.top = pos + 'px';
    }
      
  }
   
} 

/*alle funktionen werden nach dem laden der html seite augerufen und die werbebannerfunktion nach 3sek aufgerufen*/
window.onload = function (){
    werbespruch();
         bild();
   setTimeout(bewegen,3000);
    
}