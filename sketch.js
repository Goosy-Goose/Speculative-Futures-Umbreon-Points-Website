var SWidth, SHeight;
var FNameList, LNameList;
var Conthrax, SofachromeIt, Sofachrome;
var FName, LName, UserName;
var StartPts;


function preload(){
  FNameList = loadTable('./resources/csv/FirstNames.csv', 'csv', 'header');
  LNameList = loadTable('./resources/csv/LastNames.csv', 'csv', 'header');
  Conthrax = loadFont('./resources/fonts/conthrax-sb.ttf');
  SofachromeIt = loadFont('./resources/fonts/sofachrome rg it.ttf');
  Sofachrome = loadFont('./resources/fonts/sofachrome rg.ttf');
}


function setup(){
  SWidth = window.innerWidth;
  SHeight = window.innerHeight;
  FName = "test";
  LName = "text";
  makeUserName();
  createCanvas(SWidth, SHeight);
  textAlign(CENTER);
  rectMode(CENTER);
  print(SHeight);
}

function draw(){
  background(220);
  displayName();
}

function displayName(){
  push();
  textFont(Sofachrome);
  textSize(SHeight/20);
  text("Welcome", SWidth/2, SHeight/5);
  pop();
  push();
  textFont(Conthrax);
  textSize(SHeight/26);
  text(FName, SWidth/2, SHeight/3);
  text(LName, SWidth/2, SHeight/3 + SHeight/26+10)
  pop();
}


function makeUserName(){
  let fNameInt = floor(random(0, FNameList.getRowCount()));
  let lNameInt = floor(random(0, LNameList.getRowCount()));
  FName = FNameList.getColumn('Name')[fNameInt];
  LName = LNameList.getColumn('name')[lNameInt].toLowerCase();
  LName = LName.charAt(0).toUpperCase() + LName.substring(1).toLowerCase();
}