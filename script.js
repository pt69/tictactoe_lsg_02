var dL;
var kD;
var relLinienL;
var linienL;
var boolKreuzKreis = false;
var  kd=100
var hL1X;
var hL1Y;
var hL2X;
var hL2Y;
var vL1X;
var vL1Y;
var vL2X;
var vL2Y;

var xKlick = 0;
var yKlick = 0;
var numKlick = 0;

var sFBelegung = [];

function setup() {
createCanvas(windowWidth, windowHeight);
spielfeldBerechnen();
for (var i = 0; i < 9; i++) {
sFBelegung[i] = 0;
}
}

function draw() {
background(mouseX,mouseY,(150));
spielfeldBauen();
textSize(20);
text(xKlick, 10, 20);
text(yKlick, 10, 50);
text(numKlick, 10, 80);

zeichneSymbol(vL1X-dL/2,hL1Y-dL/2, sFBelegung[0]);
zeichneSymbol(vL1X+dL/2,hL1Y-dL/2, sFBelegung[1]);
zeichneSymbol(vL2X+dL/2,hL1Y-dL/2, sFBelegung[2]);
zeichneSymbol(vL1X-dL/2,hL1Y+dL/2, sFBelegung[3]);
zeichneSymbol(vL1X+dL/2,hL1Y+dL/2, sFBelegung[4]);
zeichneSymbol(vL2X+dL/2,hL1Y+dL/2, sFBelegung[5]);
zeichneSymbol(vL1X-dL/2,hL2Y+dL/2, sFBelegung[6]);
zeichneSymbol(vL1X+dL/2,hL2Y+dL/2, sFBelegung[7]);
zeichneSymbol(vL2X+dL/2,hL2Y+dL/2, sFBelegung[8]);
gewinnen();
}

function mousePressed() {
xKlick = mouseX;
yKlick = mouseY;
if (sFBelegung[0]==0 && xKlick > hL1X && xKlick < vL1X && yKlick > vL1Y && yKlick < hL1Y) {
numKlick = 1;
if (boolKreuzKreis) { sFBelegung[0] = 1; } else { sFBelegung[0] = 2; }
boolKreuzKreis = !boolKreuzKreis;
}
if (sFBelegung[1]==0 && xKlick > vL1X && xKlick < vL2X && yKlick > vL1Y && yKlick < hL1Y) {
numKlick = 2;
if (boolKreuzKreis) { sFBelegung[1] = 1; } else { sFBelegung[1] = 2; }
boolKreuzKreis = !boolKreuzKreis; }
if (sFBelegung[2]==0 && xKlick > vL2X && xKlick < hL1X + linienL && yKlick > vL1Y && yKlick < hL1Y) {
numKlick = 3;
if (boolKreuzKreis) { sFBelegung[2] = 1; } else { sFBelegung[2] = 2; }
boolKreuzKreis = !boolKreuzKreis; }
 if (sFBelegung[3]==0 && xKlick > hL1X && xKlick < vL1X && yKlick > hL1Y && yKlick < hL2Y) {numKlick = 4;
if (boolKreuzKreis) { sFBelegung[3] = 1; } else { sFBelegung[3] = 2; }boolKreuzKreis = !boolKreuzKreis; }
if (sFBelegung[4]==0 && xKlick > vL1X && xKlick < vL2X && yKlick > hL1Y && yKlick < hL2Y) {
numKlick = 5;
if (boolKreuzKreis) { sFBelegung[4] = 1; } else { sFBelegung[4] = 2; }
boolKreuzKreis = !boolKreuzKreis;}
if (sFBelegung[5]==0 && xKlick > vL2X && xKlick < hL1X + linienL && yKlick > hL1Y && yKlick < hL2Y) {
numKlick = 6;if (boolKreuzKreis) { sFBelegung[5] = 1; } else { sFBelegung[5] = 2; }boolKreuzKreis = !boolKreuzKreis; }
if (sFBelegung[6]==0 && xKlick > hL1X && xKlick < vL1X && yKlick > hL2Y && yKlick < vL1X + linienL) {
numKlick = 7;
if (boolKreuzKreis) { sFBelegung[6] = 1; } else { sFBelegung[6] = 2; }
 boolKreuzKreis = !boolKreuzKreis; }
if (sFBelegung[7]==0 && xKlick > vL1X && xKlick < vL2X && yKlick > hL2Y && yKlick < vL1X + linienL) {
numKlick = 8;
if (boolKreuzKreis) { sFBelegung[7] = 1; } else { sFBelegung[7] = 2; }
boolKreuzKreis = !boolKreuzKreis; }
if (sFBelegung[8]==0 && xKlick > vL2X && xKlick < hL1X + linienL && yKlick > hL2Y && yKlick < vL1X + linienL) {
numKlick = 9;
if (boolKreuzKreis) { sFBelegung[8] = 1; } else { sFBelegung[8] = 2; }
boolKreuzKreis = !boolKreuzKreis; }

}
function gewinnen(){
if(sFBelegung[0]==1 && sFBelegung[1]==1 && sFBelegung[2]==1 )
text( "kreuz gewinnt",50,100,kd,kd);


if(sFBelegung[3]==1 && sFBelegung[4]==1 && sFBelegung[5]==1 )
text( "kreuz gewinnt",50,100,kd,kd);

if(sFBelegung[6]==1 && sFBelegung[7]==1 && sFBelegung[8]==1 )  
text( "kreuz gewinnt",50,100,kd,kd); 

if(sFBelegung[0]==2 && sFBelegung[1]==2 && sFBelegung[2]==2 )  
text("kreis gewinnt",50,100,kd,kd);

  
if(sFBelegung[3]==2 && sFBelegung[4]==2 && sFBelegung[5]==2 )
text( "kreis gewinnt",50,100,kd,kd);

if(sFBelegung[6]==2 && sFBelegung[7]==2&& sFBelegung[8]==2 ) 
text( "kreis gewinnt",50,100,kd,kd);
  
  
  if(sFBelegung[2]==2 && sFBelegung[4]==2 && sFBelegung[6]==2 )
  text( "kreis gewinnt",50,100,kd,kd); 
  
  if(sFBelegung[0]==2 && sFBelegung[4]==2 && sFBelegung[8]==2 )  
 text( "kreis gewinnt",50,100,kd,kd); 
 
  
  if(sFBelegung[2]==1 && sFBelegung[4]==1 && sFBelegung[6]==1 ) 
  text( "kreuz gewinnt",50,100,kd,kd); 
  
  
   if(sFBelegung[0]==1 && sFBelegung[4]==1 && sFBelegung[8]==1 ) 
  text( "kreuz gewinnt",50,100,kd,kd); 
  
  
   if(sFBelegung[1]==1 && sFBelegung[4]==1 && sFBelegung[7]==1 )
  text( "kreuz gewinnt",50,100,kd,kd);  
  
  
   if(sFBelegung[0]==1 && sFBelegung[3]==1 && sFBelegung[6]==1 )
  text( "kreuz gewinnt",50,100,kd,kd); 
  
  
   if(sFBelegung[2]==1 && sFBelegung[5]==1 && sFBelegung[8]==1 )
  text( "kreuz gewinnt",50,100,kd,kd); 
  
  
   if(sFBelegung[1]==2 && sFBelegung[4]==2 && sFBelegung[7]==2 )
     text( "kreis gewinnt",50,100,kd,kd); 
     

   if(sFBelegung[0]==2 && sFBelegung[3]==2 && sFBelegung[6]==2 )
  text( "kreis gewinnt",50,100,kd,kd);
  
  
   if(sFBelegung[2]==2 && sFBelegung[5]==2 && sFBelegung[8]==2 )
  text( "kreis gewinntn",50,100,kd,kd); 
  
}



function spielfeldBerechnen() {
relLinienL = 0.7;
if (windowHeight >= windowWidth) { linienL = windowWidth*relLinienL; }
else { linienL = windowHeight*relLinienL; }
dL = linienL/3;
kD = dL*0.7;
}

function spielfeldBauen() {
vL1X = windowWidth/2-dL/2;
vL1Y = windowHeight/2-3*dL/2;
vL2X = windowWidth/2+dL/2;
vL2Y = vL1Y;
hL1X = windowWidth/2-3*dL/2;
hL1Y = windowHeight/2-dL/2;
hL2X = hL1X;
hL2Y = windowHeight/2+dL/2;
push();
translate(vL1X,vL1Y);
line(0,0,0,linienL);
pop();
push();
translate(vL2X,vL2Y);
line(0,0,0,linienL);
pop();
push();
translate(hL1X,hL1Y);
line(0,0,linienL,0);
pop();
push();
translate(hL2X,hL2Y);
line(0,0,linienL,0);
pop();
}

function zeichneSymbol(xKoord, yKoord, symbolTyp) {
if (symbolTyp == 1) {
push();
translate(xKoord,yKoord);
line(-kD/2,-kD/2,kD/2,kD/2);
line(-kD/2,kD/2,kD/2,-kD/2);
pop();
}
if (symbolTyp == 2) {
ellipse(xKoord,yKoord,kD,kD);
}
}