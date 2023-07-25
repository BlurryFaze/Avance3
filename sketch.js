var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"
var botonregresar
var amboton1
var veboton2
var moboton3
var roboton4
var veoboton5
var aviso
var vecboton6
var moboton7
var azboton8
var click
var la
var fondo2
var lar1
var lar2
var score=0
var lap
var gameover
var victory
var ba1
var bar1
var bar2
var rst1
var rst2
var sr
var rca1
var rca2
var ca
var rmg1
var rmg2
var rbe1
var rbe2
var mg
var logo
var matrazn
var be
var matrazt
var matrazf
var botonhow
var botoncredits
var credits
var howto
var fscore

function preload() {
  gameoverimg = loadImage ("gameover.png")
  lapimg = loadImage ("pregunta.png")
  laimg = loadImage ("LA.webp")
  lar1img = loadImage ("Rla1.png")
  lar2img = loadImage ("Rla2.png")
  backgroundImage = loadImage("fondo.png");
  tituloimg = loadImage ("titulo2.png")
  tablaimg = loadImage("tablasd4.jpg");
  fondo2img = loadImage ("fondo.png");
  moradoimg = loadImage ("Botonmo1.png");
  amarilloimg = loadImage ("Botonam1.png");
  verdeimg = loadImage ("Botonvc1.png");
  regresarimg= loadImage ("regresar.png");
  botonplayimg = loadImage ("play2.png")
 roimg = loadImage ("Botonroj1.png");
 veoimg = loadImage ("Botonve1.png");
 avisoimg = loadImage ("aviso.png")
 vecimg = loadImage ("Botonci1.png")
 moimg2 = loadImage ("Botonro1.png")
 azimg = loadImage ("Botonaz1.png");
 clickimg = loadImage ("click3.png");
 ba1img = loadImage ("ba1.png");
 bar1img = loadImage ("Rba1.png");
 bar2img = loadImage ("Rba2.png");
 rst1img = loadImage ("Rst1.png");
 rst2img = loadImage ("Rst2.png")
 srimg = loadImage ("Sr.jpg");
 rca1img = loadImage ("Rca1.png");
 rca2img = loadImage ("Rca2.png");
 caimg = loadImage ("Ca.png");
 rmg1img  = loadImage ("Rmg1.png");
 rmg2img = loadImage ("Rmg2.png");
 mgimg = loadImage ("mgimg.jpg");
 logoimg = loadImage ("logo.png");
 matraznimg = loadImage ("matraznormal.png")
 rbe1img = loadImage ("Rbe1.png");
 rbe2img = loadImage ("Rbe2.png");
 beimg = loadImage ("beimg.png");
 matraztimg = loadImage ("matraztriste.png");
 victoryimg = loadImage ("Congrats2.png");
 matrazfimg = loadImage ("matrazfeliz.png");
 botonhowimg = loadImage ("Botonh.png");
 botoncreditsimg = loadImage ("Botonc.png");
 creditsimg = loadImage ("Credits.png");
 howtoimg = loadImage ("Howto.png");
 fscoreimg = loadImage ("fscore.png");
}

function setup() {
  //1350,60
  canvas = createCanvas(windowWidth, windowHeight);
  fondo = createSprite(width/2,height/2,width,height);

  fondo.addImage(backgroundImage)
  fondo.scale=100000000000000000000;

 titulo = createSprite(800,220,50,50);
 titulo.addImage(tituloimg);
 titulo.scale =0.5;

 botonplay = createSprite(800,520,50,50)
 botonplay.addImage(botonplayimg);
 botonplay.scale=0.2;
 
 botonhow = createSprite(500,520,50,50)
 botonhow.addImage(botonhowimg);
 botonhow.scale=0.2;

 botoncredits = createSprite(1100,520,50,50)
 botoncredits.addImage(botoncreditsimg);
 botoncredits.scale=0.2;

 fondo2 = createSprite(width/2,height/2,width,height);
 fondo2.addImage (fondo2img)
 fondo2.scale= 1000
 fondo2.visible = false;

 fondo3 = createSprite(width/2,height/2,width,height);
 fondo3.addImage (fondo2img)
 fondo3.scale= 1000
 fondo3.visible = false;

 tabla = createSprite (width/2,height/2,100,100)
 //tabla = createSprite (800,400,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
 tabla.visible = false;

 botonregresar = createSprite(70,675,50,50)
 botonregresar.visible =false
 botonregresar.addImage(regresarimg)
 botonregresar.scale=0.2;

 botonregresar2 = createSprite(70,675,50,50)
 botonregresar2.visible =false
 botonregresar2.addImage(regresarimg)
 botonregresar2.scale=0.2;

 botonregresar3 = createSprite(770,450,50,50)
 botonregresar3.visible =false
 botonregresar3.addImage(regresarimg)
 botonregresar3.scale=0.2;

 botonregresar4 = createSprite(770,450,50,50)
 botonregresar4.visible =false
 botonregresar4.addImage(regresarimg)
 botonregresar4.scale=0.2;

 botonregresar5 = createSprite(140,615,50,50)
 botonregresar5.visible =false
 botonregresar5.addImage(regresarimg)
 botonregresar5.scale=0.3;

 botonregresar6 = createSprite(140,615,50,50)
 botonregresar6.visible =false
 botonregresar6.addImage(regresarimg)
 botonregresar6.scale=0.3;


 amboton1 = createSprite(313.5,59.5,50,50)
 amboton1.visible = false
 amboton1.addImage(amarilloimg)
  amboton1.scale=0.12;
  
 veboton2 = createSprite (440,124,50,50)
  veboton2.visible=false;
veboton2.addImage(verdeimg)
veboton2.scale=0.12;
  
  moboton3 = createSprite (313.5,190.5,50,50)
  moboton3.visible=false;
  moboton3.addImage(moradoimg)
  moboton3.scale =0.12;
 

  roboton4 = createSprite (597,59.5,50,50)
  roboton4.visible = false
  roboton4.addImage(roimg)
  roboton4.scale =0.12;

  veoboton5 = createSprite (740,125,50,50)
  veoboton5.visible = false
  veoboton5.addImage(veoimg)
  veoboton5.scale = 0.12;

  aviso = createSprite (800,625,50,50)
  aviso.visible = false
  aviso.addImage(avisoimg)
  aviso.scale = 0.3;

  vecboton6 = createSprite (597,190,50,50)
  vecboton6.visible = false;
  vecboton6.addImage(vecimg)
  vecboton6.scale=0.12;

  moboton7 = createSprite (880,59,50,50)
  moboton7.visible = false;
  moboton7.addImage (moimg2)
  moboton7.scale=0.12;

  azboton8 =createSprite (880,190.5,50,50)
  azboton8.visible = false
  azboton8.addImage(azimg)
  azboton8.scale=0.12;

  //click = createSprite (400,630,50,50)
 // click.visible = false
  //click.addImage (clickimg)
  //click.scale =0.3;

  la = createSprite (770,300,50,50)
  la.visible = false
  la.addImage (laimg)
  la.scale = 1;

  ba1 = createSprite (770,300,50,50)
  ba1.visible = false
  ba1.addImage (ba1img)
  ba1.scale = 1;

  
  bar1 = createSprite (335,548,50,50)
  bar1.visible = false;
  bar1.addImage (bar1img)
  bar1.scale = 0.2;

  bar2 = createSprite (1200,548,50,50)
  bar2.visible = false;
  bar2.addImage (bar2img)
  bar2.scale = 0.2;

  lar1 = createSprite (335,550,50,50)
  lar1.visible = false;
  lar1.addImage (lar1img)
  lar1.scale = 0.2;


  lar2 = createSprite (1200,550,50,50)
  lar2.visible = false;
  lar2.addImage (lar2img)
  lar2.scale = 0.2;

  sr = createSprite (770,300,50,50)
  sr.visible = false
  sr.addImage (srimg)
  sr.scale = 0.2;


  rst1 = createSprite (335,225,50,50)
  rst1.visible = false;
  rst1.addImage (rst1img)
  rst1.scale = 0.2;

  rst2 = createSprite (1200,225,50,50)
  rst2.visible = false;
  rst2.addImage (rst2img)
  rst2.scale = 0.2;

  ca = createSprite (770,300,50,50)
  ca.visible = false
  ca.addImage (caimg)
  ca.scale = 0.2;

  rca1 = createSprite (1200,550,50,50)
  rca1.visible = false;
  rca1.addImage (rca1img)
  rca1.scale = 0.2;

  rca2 = createSprite (335,550,50,50)
  rca2.visible = false;
  rca2.addImage (rca2img)
  rca2.scale = 0.2;

  rmg1 = createSprite (1200,225,50,50)
  rmg1.visible = false;
  rmg1.addImage (rmg1img)
  rmg1.scale = 0.2;


  rmg2 = createSprite (335,225,50,50)
  rmg2.visible = false;
  rmg2.addImage (rmg2img)
  rmg2.scale = 0.2;
  
  rbe1 = createSprite (335,550,50,50)
  rbe1.visible = false;
  rbe1.addImage (rbe1img)
  rbe1.scale = 0.2;
  
  rbe2 = createSprite (1200,550,50,50)
  rbe2.visible = false;
  rbe2.addImage (rbe2img)
  rbe2.scale = 0.2;

  mg = createSprite (770,300,50,50)
  mg.visible = false
  mg.addImage (mgimg)
  mg.scale = 0.2;


  be = createSprite (770,300,50,50)
  be.visible = false
  be.addImage (beimg)
  be.scale = 0.2;


  lap = createSprite (770,620,50,50)
  lap.visible = false;
  lap.addImage (lapimg);
  lap.scale = 0.2;

  gameover = createSprite (770,305,50,50)
  gameover.visible = false;
  gameover.addImage (gameoverimg);
  gameover.scale = 0.5;

  victory = createSprite (770,305,50,50)
  victory.visible = false;
  victory.addImage (victoryimg);
  victory.scale = 0.5;

  logo = createSprite (1400,650,40,40)
  logo.addImage (logoimg);
  logo.scale = 0.1;
  logo.visible = false;

  matrazn = createSprite (770,470,40,40)
  matrazn.addImage (matraznimg);
  matrazn.scale = 0.1;
  matrazn.visible = false;

  matrazt = createSprite (770,120,40,40)
  matrazt.addImage (matraztimg);
  matrazt.scale = 0.1;
  matrazt.visible = false;

  matrazf = createSprite (770,120,40,40)
  matrazf.addImage (matrazfimg);
  matrazf.scale = 0.1;
  matrazf.visible = false;

  credits = createSprite (800,370,50,50)
  credits.addImage (creditsimg);
  credits.scale = 0.7;
  credits.visible = false;

  howto = createSprite (800,370,50,50)
  howto.addImage (howtoimg);
  howto.scale = 0.7;
  howto.visible = false;

  fscore = createSprite (1371,57,50,50)
  fscore.addImage (fscoreimg);
  fscore.scale = 0.1;

  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  
 
    
    
  if(mousePressedOver (botonplay)&&botonplay.visible === true) {
   botonplay.visible = false;
   botonhow.visible = false;
   botoncredits.visible = false;
   titulo.visible = false;
   botonregresar.visible = true;
   tabla.visible = true;
  veboton2.visible = true
   amboton1.visible = true
   moboton3.visible = true;
   roboton4.visible =true;
   veoboton5.visible = true;
   aviso.visible = true;
   vecboton6.visible = true;
   moboton7.visible = true;
   azboton8.visible = true;
   tabla.scale=0.9
   console.log(1)
  }

  if(mousePressedOver(botoncredits)&&botoncredits.visible === true){
  
    botonplay.visible = false;
    titulo.visible = false;
    botonhow.visible = false;
    botoncredits.visible = false;
    
    botonregresar5.visible = true;
    credits.visible = true;
  }

  if(mousePressedOver(botonhow)&&botonhow.visible === true){
  
    botonplay.visible = false;
    titulo.visible = false;
    botonhow.visible = false;
    botoncredits.visible = false;
    
    botonregresar6.visible = true;
    howto.visible = true;
  }

  if(mousePressedOver(botonregresar5)&&botonregresar5.visible === true) {
    botonplay.visible = true;
    titulo.visible = true;
    botonhow.visible = true;
    botoncredits.visible = true;
    
    botonregresar5.visible = false;
    credits.visible = false;
   }

   if(mousePressedOver(botonregresar6)&&botonregresar6.visible === true) {
    botonplay.visible = true;
    titulo.visible = true;
    botonhow.visible = true;
    botoncredits.visible = true;
    
    botonregresar6.visible = false;
    howto.visible = false;
   }

  if(mousePressedOver(botonregresar)&&botonregresar.visible === true) {
    botonplay.visible = true;
    botoncredits.visible = true;
    botonhow.visible = true;
    titulo.visible = true;
    botonregresar.visible = false;
    tabla.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    
   }
   if (mousePressedOver(lar1)&&lar1.visible === true){
    score+=5
   matrazf.visible = true;
   victory.visible = true;
   botonregresar4.visible = true;
   fondo3.visible = true;
   
   lar1.visible = false;
   lar2.visible = false;
   la.visible = false;
   lap.visible = false;
   matrazn.visible = false;

   }
   
   
   if (mousePressedOver(lar2)&&lar2.visible === true){
    
    la.visible = false;
    score-=5
    fondo2.visible = true;
    lar1.visible = false;
    lar2.visible = false;
    lap.visible = false;
    matrazn.visible= false;
    gameover.visible = true;
    botonregresar3.visible = true;
    matrazt.visible = true;

   }

   if(mousePressedOver(botonregresar3)&&botonregresar3.visible === true) {
   
    botonregresar.visible = true;
    tabla.visible = true;
   veboton2.visible = true
    amboton1.visible = true
    moboton3.visible = true;
    roboton4.visible =true;
    veoboton5.visible = true;
    aviso.visible = true;
    vecboton6.visible = true;
    moboton7.visible = true;
    azboton8.visible = true;
   
    gameover.visible = false;
    matrazt.visible = false;
    botonregresar3.visible = false;
    tabla.scale=0.9
    fondo2.visible = false;
   }
   
 
   if (mousePressedOver (azboton8)&&azboton8.visible === true){
 
    tabla.visible = false;
    botonregresar.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    
    
    
    la.visible = true;
    fondo2.visible = true;
    lar1.visible = true;
    lar2.visible = true;
    lap.visible = true;
    matrazn.visible= true;
    
 }
 if (mousePressedOver (moboton3)&&moboton3.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  ba1.visible = true;
  fondo2.visible = true;
  bar1.visible = true;
  bar2.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}
if (mousePressedOver(bar2)&&bar2.visible === true){
    
  ba1.visible = false;
  score-=5
  fondo2.visible = true;
  bar1.visible = false;
  bar2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }
 
 if (mousePressedOver(bar1)&&bar1.visible === true){
  score+=5


 rst1.visible = true;
 rst2.visible = true;
 sr.visible = true;


 ba1.visible = false;
 
 bar1.visible = false;
 bar2.visible = false;
 
 }
 

 if (mousePressedOver(rst2)&&rst2.visible === true){
    
  sr.visible = false;
  score-=5
  fondo2.visible = true;
  rst1.visible = false;
  rst2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rst1)&&rst1.visible === true){
  score+=5
    
  rca1.visible = true;
 ca.visible = true;
 rca2.visible = true;
 
 rst1.visible = false;
 rst2.visible = false;
 sr.visible = false;


 
 }
 
if (mousePressedOver(rca1)&&rca1.visible === true){
  score+=5
    
  rmg1.visible = true;
 mg.visible = true;
 rmg2.visible = true;
 
 rca1.visible = false;
 rca2.visible = false;
 ca.visible = false;


 
 }
 
 if (mousePressedOver(rca2)&&rca2.visible === true){
    
  ca.visible = false;
  score-=5
  fondo2.visible = true;
  rca1.visible = false;
  rca2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rmg2)&&rmg2.visible === true){
    
  mg.visible = false;
  score-=5
  fondo2.visible = true;
  rmg1.visible = false;
  rmg2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rmg1)&&rmg1.visible === true){
  score+=5
    
  rbe1.visible = true;
 be.visible = true;
 rbe2.visible = true;
 
 rmg1.visible = false;
 rmg2.visible = false;
 mg.visible = false;


 
 }

 if (mousePressedOver(rbe1)&&rbe1.visible === true){
 
  score+=5
  matrazf.visible = true;
  victory.visible = true;
  botonregresar4.visible = true;
  fondo3.visible = true;
  
  rbe1.visible = false;
  rbe2.visible = false;
  be.visible = false;
  lap.visible = false;
  matrazn.visible = false;

 }


 if (mousePressedOver(rbe2)&&rbe2.visible === true){
 
  score-=5
  be.visible = false;

  fondo2.visible = true;
  rbe1.visible = false;
  rbe2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if(mousePressedOver(botonregresar4)&&botonregresar4.visible === true) {
   
  botonregresar.visible = true;
  tabla.visible = true;
 veboton2.visible = true
  amboton1.visible = true
  moboton3.visible = true;
  roboton4.visible =true;
  veoboton5.visible = true;
  aviso.visible = true;
  vecboton6.visible = true;
  moboton7.visible = true;
  azboton8.visible = true;
 

  victory.visible = false;
  matrazf.visible = false;
  botonregresar4.visible = false;
  tabla.scale=0.9
  fondo3.visible = false;
  fondo2.visible = false;
 }

 //botonplay.visible = false;
 //  titulo.visible = false;
  // botonregresar.visible = true;
 //  tabla.visible = true;
 // veboton2.visible = true
 //  amboton1.visible = true
 //  moboton3.visible = true;
 //  roboton4.visible =true;
  // veoboton5.visible = true;
  // aviso.visible = true;
   //vecboton6.visible = true;
  // moboton7.visible = true;
  // azboton8.visible = true;
  // click.visible = true;
 //  la.visible = false;
  // fondo2.visible = false;
  // lar1.visible = false;
 //  lar2.visible = false;
 //  lap.visible = false;
 //  matrazn.visible= false;

 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
    text("Score: "+ score, 1350,60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

