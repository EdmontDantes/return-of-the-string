/*******************
 * YOUR CODE HERE! *
 *******************/

//capitalize function
function capitalize (thisStrToCapitalize) {
  return thisStrToCapitalize.toUpperCase();
}

function exclaim (thisExtraExclainChar) {
  return thisExtraExclainChar.concat('!');
}

function firstCharacter (aStrFirstCharGiveback) {
  return aStrFirstCharGiveback.charAt(0);
}

function lastCharacter (aStrLastCharGiveback) {
  return aStrLastCharGiveback.slice(-1);
}

function oneCharacter (aStrArbitraryCharOne, x) {
  return aStrArbitraryCharOne.charAt(x);
}

function twoCharacters (aStrArbitraryCharTwo, x, y) {
  return aStrArbitraryCharTwo.charAt(x) + aStrArbitraryCharTwo.charAt(y);
}

function yeller (aStrYeller) {
  return aStrYeller.toUpperCase() + '!!!';
}

//for this stretch goal I've used information from : https://stackoverflow.com/questions/33076177/getting-name-initials-using-js
function initials (fullName) {
  const separateString = fullName.split(' ');
  return separateString.substring(0).charAt(0).toUpperCase + '.' + separateString.substring(1).charAt(0).toUpperCase + '.';
  
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};