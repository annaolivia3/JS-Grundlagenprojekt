//Begrüßung
/*Funktion mit Eingabeaufforderung(Name) und Schleife, falls Besucher nichts angibt oder Abbrechen drückt 
Aufruf der Funktion erfolgt im Divbereich Begrüßung, damit der Besucher beim wechseln der Seiten in der Website(also Webpartner und Kontakt) nicht immer wieder die Begrüßung bekommt*/

function begruessung() {

    var name = prompt("Wen dürfen wir bei Professional-Website begrüßen?");

    if (name == null || name == "" || name === "null") name = "Besucher";
    document.getElementById("eingabebegruessung").innerHTML = "<p id='eingabebegruessung'><strong>Herzlich Willkommen " + name + ", wir begr&uuml;ssen Sie bei Professional Website!</strong></p>";

}

//Auflösung und Browser
//Breite und Höhe des Userbildschirms auslesen und speichern
var breite = screen.width;
var hoehe = screen.height;

/*Funktion um Besucher zu informieren wie hoch und breit die Auflösung(Bildgröße der Rastergrafik) seines Bildschirms ist. Funktion wird unten in window.onload aufgerufen */
function aufloesung() {
    document.getElementById("aufloesungstext").innerHTML = "<p id='ausloesungstext'>Sie betrachten die Website mit einer Auflösung von " + breite + " Pixeln und " + hoehe + " Pixeln.</p>";

}
/* Abfrage des Browsers über navigator.appName; Firefox, Chrome und Safari werden als Netscape identifiziert. Funktion wird unten in window.onload aufgerufen */
function browser() {
    document.getElementById("browsertext").innerHTML = ("<p id='browsertext'>Ihre Ansicht erfolgt über den " + navigator.appName + ".</p>");

}


//Zahlenboxen
/*allgemein Funktion um Bilder zu tauschen die einen Rollover-Effekt machen sollen über mouseover mouseout Events. Parameter werden beim Aufruf der Funktion übergeben Siehe window.onload*/
function bildtausch(pidname, pquelle) {
    document.getElementById(pidname).src = pquelle;
}
//Textboxen
/* allgemeine Funktion um bei click Events Sichtbarkeit der Divboxen die über CSS hintereinanderliegen abwechselnd sichtbar zu machen */
function sichtbarkeit(pidname, sichtbarkeitsstatus) {
    document.getElementById(pidname).style.visibility = sichtbarkeitsstatus;

}
/*allgemeine Funktion, um ein PopUp zu erstellen, welches eine neue html-Seite nimmt und in einer bestimmten Auflösung präsentiert- also einfach nur ein kleines neues Fenster öffnet */ 
function oeffnenf(pHTMLDok, pFenstername, pEigenschaften) {
    window.open(pHTMLDok, pFenstername, pEigenschaften);
}


/*Onload-alle Funktionen außer die explizit rausgenommen wurden, werden hier bei fertig geladener Webseite aufgerufen*/
window.onload = function () {

 

//Zahlen- und Textboxen    
/* erst werden übers DOM Konzept, also hier über document.getElementbyId die Bildbereiche gespeichert und dann über Events getauscht oder sichtbar gemahct; die Funktionen wurden oben als allgemeine Funktion konstruiert */    
    var info1 = document.getElementById("info1");
    info1.onmouseover = function () {
        bildtausch("box1", "kleinbilder/eins_aktiv.jpg");
    }
    info1.onmouseout = function () {
        bildtausch("box1", "kleinbilder/eins_inaktiv.jpg");
    }
    info1.onclick = function () {
        sichtbarkeit("text1", "visible");
        sichtbarkeit("text2", "hidden");
        sichtbarkeit("text3", "hidden");
        sichtbarkeit("text4", "hidden");

    }

    var info2 = document.getElementById("info2");
    info2.onmouseover = function () {
        bildtausch("box2", "kleinbilder/zwei_aktiv.jpg");
    }
    info2.onmouseout = function () {
        bildtausch("box2", "kleinbilder/zwei_inaktiv.jpg");
    }
    info2.onclick = function () {
        sichtbarkeit("text1", "hidden");
        sichtbarkeit("text2", "visible");
        sichtbarkeit("text3", "hidden");
        sichtbarkeit("text4", "hidden");

    }

    var info3 = document.getElementById("info3");
    info3.onmouseover = function () {
        bildtausch("box3", "kleinbilder/drei_aktiv.jpg");
    }
    info3.onmouseout = function () {
        bildtausch("box3", "kleinbilder/drei_inaktiv.jpg");
    }
    info3.onclick = function () {
        sichtbarkeit("text1", "hidden");
        sichtbarkeit("text2", "hidden");
        sichtbarkeit("text3", "visible");
        sichtbarkeit("text4", "hidden");

    }

    var info4 = document.getElementById("info4");
    info4.onmouseover = function () {
        bildtausch("box4", "kleinbilder/vier_aktiv.jpg");
    }
    info4.onmouseout = function () {
        bildtausch("box4", "kleinbilder/vier_inaktiv.jpg");
    }
    info4.onclick = function () {
        sichtbarkeit("text1", "hidden");
        sichtbarkeit("text2", "hidden");
        sichtbarkeit("text3", "hidden");
        sichtbarkeit("text4", "visible");

    }
//PopUp
    /* ein neues Fenster wird in einer bestimmten Größe angezeigt über oben verallgmeinerte Funktion
    auch hier müssen erstmal bereiche übers DOM Konzept zur weiteren Anwendung gespeichert werden- allgemeine Funktion befindet sich oben*/
    
    var popup1 = document.getElementById("popup1");

    popup1.onclick = function () {
        oeffnenf("bildangebot1.html", "PopUp1", "top=50,left=2100,width=600,height=600")
    }
    /*die eigenschaften sind hier mit 2 bildschirmen berechnet, deswegen ist das fenster bei 2100px left- sonst würde das fenster sich auf dem linken fenster öffnen */
    var popup2 = document.getElementById("popup2");
    popup2.onclick = function () {
        oeffnenf("bildangebot2.html", "PopUp2", "top=50,left=2100,width=600,height=600")
    }
    var popup3 = document.getElementById("popup3");
    popup3.onclick = function () {
        oeffnenf("bildangebot3.html", "PopUp3", "top=50,left=2100,width=600,height=600")
    }
    var popup4 = document.getElementById("popup4");
    popup4.onclick = function () {
        oeffnenf("bildangebot4.html", "PopUp4", "top=50,left=2100,width=600,height=600")
    }



}
