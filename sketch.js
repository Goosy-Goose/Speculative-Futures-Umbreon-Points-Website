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
  UserName = makeUserName();
  createCanvas(SWidth, SHeight);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw(){
  background(220);
  push();
  textFont(Conthrax);
  textSize(36);
  text(UserName, window.innerWidth/2, window.innerHeight/2)
  pop();
}

function makeUserName(){
  let fNameInt = floor(random(0, FNameList.getRowCount()));
  let lNameInt = floor(random(0, LNameList.getRowCount()));
  FName = FNameList.getColumn('Name')[fNameInt];
  LName = LNameList.getColumn('name')[lNameInt].toLowerCase();
  LName = LName.charAt(0).toUpperCase() + LName.substring(1).toLowerCase();
  return FName + " " + LName;
}