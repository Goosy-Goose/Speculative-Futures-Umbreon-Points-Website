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
  Pts = floor(random(10, 2000))/100;
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
}

function mousePressed(){
  
}

function displayName(){
  push();
  textFont(Sofachrome);
  textSize(SHeight/18);
  text("Welcome", SWidth/2, SHeight/7);
  pop();
  push();
  textFont(Conthrax);
  textSize(SHeight/18);
  text(FName, SWidth/2, SHeight/4);
  text(LName, SWidth/2, SHeight/4 + SHeight/18+10)
  pop();
}

function displayPoints(){
  push();
  textFont(Conthrax);
  textSize(SHeight/20)
  text(Pts, SWidth/2, SHeight/2)
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


function makeUserName(){
  let fNameInt = floor(random(0, FNameList.getRowCount()));
  let lNameInt = floor(random(0, LNameList.getRowCount()));
  FName = FNameList.getColumn('Name')[fNameInt];
  LName = LNameList.getColumn('name')[lNameInt].toLowerCase();
  LName = LName.charAt(0).toUpperCase() + LName.substring(1).toLowerCase();
}