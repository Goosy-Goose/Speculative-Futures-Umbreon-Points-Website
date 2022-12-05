var SWidth, SHeight;
var FNameList, LNameList;
var Conthrax, SofachromeIt, Sofachrome;
var FName, LName, UserName;
var Pts;


function preload(){
  FNameList = loadTable('./resources/csv/FirstNames.csv', 'csv', 'header');
  LNameList = loadTable('./resources/csv/LastNames.csv', 'csv', 'header');
  Conthrax = loadFont('./resources/fonts/conthrax-sb.ttf');
  SofachromeIt = loadFont('./resources/fonts/sofachrome rg it.ttf');
  Sofachrome = loadFont('./resources/fonts/sofachrome rg.ttf');
}


function setup(){
  SWidth = window.innerWidth-14;
  SHeight = window.innerHeight;
  FName = "test";
  LName = "text";
  let num = floor(random(10, 2000))
  Pts = num;
  makeUserName();
  createCanvas(SWidth, SHeight);
  textAlign(CENTER);
  rectMode(CENTER);
  print(SHeight);
}

function draw(){
  background(191, 208, 242);
  displayName();
  displayPoints();
  displaySubtract();
  displayAdd();
  displayStatus();
}

function mousePressed(){
  if(mouseY >= SHeight/2-40 && mouseY <= SHeight/2+5){
    if(mouseX>=SWidth/4 - 20 && mouseX<=SWidth/4 + 20){
      subpoints()
    }
    if(mouseX>=SWidth*3/4 - 20 && mouseX<=SWidth*3/4 + 20){
      addpoints()
    }
  }
  
}

function subpoints(){
  Pts-= 36;
}

function addpoints(){
  Pts+=33;
}

function displayName(){
  push();
  textFont(Sofachrome);
  textSize(SHeight/20);
  text("Welcome", SWidth/2, SHeight/7);
  pop();
  push();
  textFont(Conthrax);
  textSize(SHeight/24);
  text(FName, SWidth/2, SHeight/4);
  text(LName, SWidth/2, SHeight/4 + SHeight/24+SHeight*0.012)
  pop();
}

function displayPoints(){
  push();
  textFont(Conthrax);
  textSize(SHeight/20)
  let numTxt = Pts/100
  let numNum = numTxt.toString()
  text(numNum, SWidth/2, SHeight/2)
  pop();
}

function displaySubtract(){
  push();
  textFont(Conthrax);
  textSize(SHeight/20);
  text("-", SWidth/4, SHeight/2);
  pop();
}

function displayAdd(){
  push();
  textFont(Conthrax);
  textSize(SHeight/20);
  text("+", SWidth*3/4, SHeight/2);
  pop();
}

function displayStatus(){
  push();
  textFont(Conthrax);
  textSize(SHeight/24);
  text("STATUS", SWidth/2, SHeight*3/4);
  text("----------------------", SWidth/2, SHeight*3/4 + SHeight/20-SHeight*0.009);
  text("GREEN ACCESS", SWidth/2, SHeight*3/4 + SHeight/20 + SHeight*0.024)
}

function makeUserName(){
  let fNameInt = floor(random(0, FNameList.getRowCount()));
  let lNameInt = floor(random(0, LNameList.getRowCount()));
  FName = FNameList.getColumn('Name')[fNameInt];
  LName = LNameList.getColumn('name')[lNameInt].toLowerCase();
  LName = LName.charAt(0).toUpperCase() + LName.substring(1).toLowerCase();
}