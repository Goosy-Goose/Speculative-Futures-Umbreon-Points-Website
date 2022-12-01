var SWidth, SHeight;
var FNameList, LNameList;
var Conthrax, SofachromeIt, Sofachrome;
var FName, LName;
var StartPts;


function preload(){
  FNameList = loadTable('./resources/csv/FirstNames.csv', 'header');
  LNameList = loadTable('./resources/csv/LastNames.csv', 'header');
  Conthrax = loadFont('./resources/fonts/conthrax-sb.ttf');
  SofachromeIt = loadFont('./resources/fonts/sofachrome rg it.ttf');
  Sofachrome = loadFont('./resources/fonts/sofachrome rg.ttf');
}


function setup(){
  SWidth = window.innerWidth;
  SHeight = window.innerHeight;
  FName = "";
  LName = "";
  createCanvas(SWidth, SHeight);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw(){
  background(220);

}