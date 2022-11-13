
function start(){
    el = document.getElementById( "Kvadrati" );
    str = "";
    imgHTML = el.innerHTML;
    var i;

    for(i=1;i<=70;i++){
        str+="<figure>";
        str+="<img id=\"kvadratZajak"+i+"\" src=\"square.png\" alt=\"Square\" width=\"43vw\" height=\"43vw\"></img>"+" ";
        str+="<br>";
        str+="<img id=\"kvadratZhelka"+i+"\" src=\"square.png\" alt=\"Square\" width=\"43vw\" height=\"43vw\"></img>"+" ";
        str+="<figcaption>" + i +"</figcaption>";
        str+="<br>"
        str+="</figure>";
    }
    el.innerHTML = str;

    slikaZhelka=document.getElementById( "kvadratZhelka1" );
    slikaZajak=document.getElementById( "kvadratZajak1" );
    slikaZhelka.setAttribute( "src", "turtleroller.jpg" );
    slikaZhelka.setAttribute( "alt","TURTLE" );
    slikaZajak.setAttribute( "src", "rabbitroller.png" );
    slikaZajak.setAttribute( "alt","RABBIT" );
}

function mrdaj(numzajak,numzhelka){
    slikaZhelka=document.getElementById( "kvadratZhelka"+zhelka );
    slikaZajak=document.getElementById( "kvadratZajak"+zajak );
    slikaZhelka.setAttribute( "src", "square.png" );
    slikaZhelka.setAttribute( "alt","SQUARE" );
    slikaZajak.setAttribute( "src", "square.png" );
    slikaZajak.setAttribute( "alt","SQUARE" );

    zhelka+=numzhelka;
    zajak+=numzajak;

    if(zhelka<1){
        zhelka=1;
    }
    if(zajak<1){
        zajak=1;
    }
    if(zhelka>70){
        zhelka=70;
    }
    if(zajak>70){
        zajak=70;
    }
    if(zajak==zhelka){
        if(zhelka!=1){
            win=window.open("",'','width=200,height=200,left=5,top=3');
            win.document.write("<p>OUCH!</p>");
            setTimeout(function() { win.close();}, 800);
        }
    }

    slikaZhelka=document.getElementById( "kvadratZhelka"+zhelka );
    slikaZajak=document.getElementById( "kvadratZajak"+zajak );
    slikaZhelka.setAttribute( "src", "turtleroller.jpg" );
    slikaZhelka.setAttribute( "alt","TURTLE" );
    slikaZajak.setAttribute( "src", "rabbitroller.png" );
    slikaZajak.setAttribute( "alt","RABBIT" );

    if(zajak==70){
        window.alert("POBEDNIK E ZAJAKOT");
        clearInterval(interval);
    }
    if(zhelka==70){
        window.alert("POBEDNIK E ZHELKATA");
        clearInterval(interval);
    }
    return "<br>Zajakot e na pozicija "+zajak+", a zhelkata na pozicija "+zhelka+".<br>";
}

function move(){
    tekst= "";
    tekst+="Se padna ";
    num=(Math.floor(Math.random() * 10) + 1);
    tekst+="brojot "+num +"<br>";
    if(num<3){
        tekst+="Zajakot stoi vo mesto<br>Zhelkata 3 kvadrati vo desno" + "\n";
        tekst+=mrdaj(0,3);
    }
    else if(num<5){
        tekst+="Zajakot 9 kvadrati vo desno<br>Zhelkata 3 kvadrati vo desno" + "\n";
        tekst+=mrdaj(9,3);
    }
    else if(num<6){
        tekst+="Zajakot 12 kvadrati vo levo<br>Zhelkata 3 kvadrati vo desno" + "\n";
        tekst+=mrdaj(-12,3);
    }
    else if(num<8){
        tekst+="Zajakot 1 kvadrati vo desno<br>Zhelkata 6 kvadrati vo levo" + "\n";
        tekst+=mrdaj(1,-6);
    }
    else if(num<9){
        tekst+="Zajakot 1 kvadrati vo desno<br>Zhelkata 1 kvadrati vo desno" + "\n";
        tekst+=mrdaj(1,1);
    }
    else{
        tekst+="Zajakot 2 kvadrati vo levo<br>Zhelkata 1 kvadrati vo desno" + "\n";
        tekst+=mrdaj(-2,1);
    }
    tekst+="<br>";
    return tekst; 
}

var time = document.getElementById('time'),
    timeIt = document.getElementById('timeIt'),
    interval, count = 0;

timeIt.addEventListener('click',function(){
    start();
    clearInterval(interval);
    count=0;
    zhelka=1;
    zajak=1;
    interval = setInterval(function(){
        time.innerHTML ="Igrata trae "+ ++count + " sekundi<br>" + move();
    }, 1000);
});
