window.addEventListener("load", selectLvlPopulate, false);
window.addEventListener("load", activate, false);
const opOp = "<option>",
endOp = "</option>";

//variables
//checkboxes
let
noWeapon = document.getElementById("noWeapon"),
noAmp = document.getElementById("noMystAmpl"),
noOratio = document.getElementById("noOratio"),
sprito = document.getElementById("priestSpirit");

//selects
let skills = document.getElementById("skillAB"),
skillLvl = document.getElementById("skillLvl"),
lvlChar = document.getElementById("level"),
atqmTotal = document.getElementById('atqmTotal'),
mdefMon = document.getElementById('mdefMon'),
mdefIgnore = document.getElementById('mdefIgnore'),
propertyMon = document.getElementById('propertyMon'),
lvlPropMon = document.getElementById('lvlPropMon'),
weaponBaseDmg = document.getElementById("weaponBaseDmg");



function populateArray(min, max, array){
  while(min < max+1){
    array.push(min++);
  }
}

function popularSelects(array, id){
    for (let i = 0; i < array.length; i++) {
      document.getElementById(id).innerHTML += opOp + array[i] + endOp;
    }
}

function activate() {

  //checked items
  noWeapon.checked = true;
  noOratio.checked = true;
  noAmp.checked = true;

  //change events
  skills.addEventListener("change", populateSkill, false);
  noWeapon.addEventListener("change", function(){disableOptions(noWeapon, ["weaponLvl","weaponRefine","weaponBaseDmg","weaponBaseMatk"]);}, false);
  noOratio.addEventListener("change", function(){disableOptions(noOratio, ["oratioLvl"]);}, false);
  noAmp.addEventListener("change", function(){disableOptions(noAmp, ["intAmpl","dexAmpl","sorAmpl","amplMistLvl"]);}, false);

  //call
  disableOptions(noWeapon, ["weaponLvl","weaponRefine","weaponBaseDmg","weaponBaseMatk"]);
  // disableWeapon();
  // disableOratio();
  disableOptions(noOratio, ["oratioLvl"]);
  // disableAmplification();
  disableOptions(noAmp, ["intAmpl","dexAmpl","sorAmpl","amplMistLvl"]);
}

function disableOptions(checkbox, array){
  for (let i = 0; i < array.length; i++) {
    document.getElementById(array[i]).disabled = checkbox.checked;
  }
}

// function disableWeapon() {
//   let weaponLvl_ = document.getElementById("weaponLvl"),
//   weaponRefine_ = document.getElementById("weaponRefine"),
//   weaponBaseDmg_ = document.getElementById("weaponBaseDmg"),
//   weaponBaseMatk_ = document.getElementById("weaponBaseMatk");
//
//     weaponLvl_.disabled = noWeapon.checked;
//     weaponRefine_.disabled = noWeapon.checked;
//     weaponBaseDmg_.disabled = noWeapon.checked;
//     weaponBaseMatk_.disabled = noWeapon.checked;
// }

// function disableOratio() {
//   let oratio_ = document.getElementById("oratioLvl");
//     oratio_.disabled = noOratio.checked;
// }

// function disableAmplification(){
//   let int = document.getElementById("intAmpl"),
//   dex = document.getElementById("dexAmpl"),
//   luk = document.getElementById("sorAmpl"),
//   ampLvl = document.getElementById("amplMistLvl"),
//   noAmp = document.getElementById("noMystAmpl");
//
//   int.disabled = noAmp.checked;
//   dex.disabled = noAmp.checked;
//   luk.disabled = noAmp.checked;
//   ampLvl.disabled = noAmp.checked;
// }

function populateSkill() {
  //popular select skill level
  let skillLvlArr = [],
  skillLevel = 1;
  let selectedSkill = skills.value;


  if (selectedSkill == "Luz Divina") {
      skillLvl.innerHTML = opOp+1+endOp;
    }
    else if (selectedSkill == "Magnus Exorcismus" || selectedSkill == "Adoramus") {
        skillLvl.innerHTML = "";
        populateArray(skillLevel, 10, skillLvlArr);
        // while(skillLevel < 11){
        //   skillLvlArr.push(skillLevel++);
        // }

        popularSelects(skillLvlArr, 'skillLvl');
        // for (let i = 0; i < skillLvlArr.length; i++) {
        //   skillLvl.innerHTML += opOp + skillLvlArr[i] + endOp;
        // }
    }
    else {
      skillLvl.innerHTML = "";
      populateArray(skillLevel, 5, skillLvlArr);
      // while(skillLevel < 6){
      //   skillLvlArr.push(skillLevel++);
      // }
      popularSelects(skillLvlArr, 'skillLvl');
      // for (let i = 0; i < skillLvlArr.length; i++) {
      //   document.getElementById("skillLvl").innerHTML += opOp + skillLvlArr[i] + endOp;
      // }
    }

    if (selectedSkill == "Luz Divina") {
      sprito.disabled = false;
    }else {
      sprito.disabled = true;
      sprito.checked = false;
    }
  }

function selectLvlPopulate() {
  //level do personagem / apenas para ABs
  let lvl = [],
  lvlMin = 1;
  const lvlMax = 175,

  //skills
  skills = ["Luz Divina", "Magnus Exorcismus", "Judex", "Adoramus"],

  //propriedades do monstro
  propMon = ["Neutro", "Água", "Terra", "Fogo", "Vento", "Veneno", "Sombrio", "Fantasma", "Maldito"],

  //lvl propMon
  propertyMonLvl = [1, 2, 3, 4],

  //base weapon dmg
  baseMATK = ["Sim", "Não"];

  //Refino
  let refine = [],
  refineMin = 0;
  const refineMax = 20;

  //oratioLvl
  let oratioLvl = [],
  oratioMin = 1;
  const oratioMax = 10;

  //popular as arrays


  //level personagem
  populateArray(lvlMin, lvlMax, lvl);
  // while(lvlMin < lvlMax+1){
  //   lvl.push(lvlMin++);
  // }

  //refine
  populateArray(refineMin, refineMax, refine);
  // while (refineMin < refineMax +1) {
  //   refine.push(refineMin++);
  // }

  //oratio
  populateArray(oratioMin, oratioMax, oratioLvl);
  // while (oratioMin < oratioMax +1) {
  //   oratioLvl.push(oratioMin++);
  // }

  //popular selects

  //lvl
  popularSelects(lvl, 'level');
  // for (let i = 0; i < lvl.length; i++) {
  //   document.getElementById("level").innerHTML += opOp + lvl[i] + endOp;
  // }

  //skills
  popularSelects(skills, 'skillAB');
  // for (let i = 0; i < skills.length; i++) {
  //   document.getElementById("skillAB").innerHTML += opOp + skills[i] + endOp;
  // }

  //refino
  popularSelects(refine, 'weaponRefine');
  // for (let i = 0; i < refine.length; i++) {
  //   document.getElementById("weaponRefine").innerHTML += opOp + refine[i] + endOp;
  // }

  //propriedade do monstro
  popularSelects(propMon, 'propertyMon');
  // for (let i = 0; i < propMon.length; i++) {
  //   document.getElementById("propertyMon").innerHTML += opOp + propMon[i] + endOp;
  // }

  //lvl propriedade do monstro
  popularSelects(propertyMonLvl, 'lvlPropMon');
  //lvl arma
  popularSelects(propertyMonLvl, 'weaponLvl');
  // for (let i = 0; i < propertyMonLvl.length; i++) {
  //   document.getElementById("lvlPropMon").innerHTML += opOp + propertyMonLvl[i] + endOp;
  //   document.getElementById("weaponLvl").innerHTML += opOp + propertyMonLvl[i] + endOp;
  // }

  //atkm base da arma
  popularSelects(baseMATK, 'weaponBaseMatk');
  // for (let i = 0; i < baseMATK.length; i++) {
  //   document.getElementById("weaponBaseMatk").innerHTML += opOp + baseMATK[i] + endOp;
  // }

  //lvl oratio
  popularSelects(oratioLvl, 'oratioLvl');

  //lvl amplificação mistica
  popularSelects(oratioLvl, 'amplMistLvl');
  // for (let i = 0; i < oratioLvl.length; i++) {
  //   document.getElementById("oratioLvl").innerHTML += opOp + oratioLvl[i] + endOp;
  //   document.getElementById("amplMistLvl").innerHTML += opOp + oratioLvl[i] + endOp;
  // }
}

//calculando o Dano
function calcResult() {
  //Personagem
  let selectedSkill = skills.value,
  lvlSkill = parseInt(skillLvl.value),
  lvlAb = parseInt(lvlChar.value),
  baseMATK = document.getElementById("weaponBaseMatk").value,
  weaponLvl = parseInt(document.getElementById("weaponLvl").value),
  weaponRefine = parseInt(document.getElementById("weaponRefine").value),
  oratioLvl_ = document.getElementById("oratioLvl").value,
  mystLvl = document.getElementById("amplMistLvl").value,
  atkm,  skmod;

  if (atqmTotal.value == "") {
      atkm = 0;
  }else {
      atkm = parseInt(atqmTotal.value);
  }

  if (selectedSkill == "Adoramus") {
    skmod = (((lvlSkill * 100) + 500) * (lvlAb / 100)) / 100;
  }else if (selectedSkill == "Judex") {
    skmod = (((lvlSkill * 20) + 300) * (lvlAb / 100)) / 100;
  }else if (selectedSkill == "Magnus Exorcismus") {
    skmod = 1;
  }else {
    skmod = 1.25;
  }

  //arma
  // let weaponLvl = parseInt(document.getElementById("weaponLvl").value),
  // weaponRefine = parseInt(document.getElementById("weaponRefine").value),
  // baseMATK = document.getElementById("weaponBaseMatk").value,
  // noWeapon = document.getElementById("noWeapon").checked,
  let refineBonus, baseWDmg, rndVariance, variance;

  if (noWeapon == true) {
    baseWDmg = 0;
  }else {
    if (weaponBaseDmg.value == "") {
      baseWDmg = 0;
    }else {
      baseWDmg = parseInt(weaponBaseDmg.value);
    }
  }


  //refineBonus
  if (noWeapon == true) {
    refineBonus = 0;
  }else {
    if (weaponLvl == 1) {
      refineBonus = weaponRefine * 2;
    }else if (weaponLvl == 2) {
      refineBonus = weaponRefine * 3;
    }else if (weaponLvl == 3) {
      refineBonus = weaponRefine * 5;
    }else {
      refineBonus = weaponRefine * 7;
    }
  }

  //variance
  if (noWeapon == true) {
    variance = 0;
    rndVariance = 0;
  }else {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(variance*(-1));
      max = Math.floor(variance);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (baseMATK == "Sim") {
      variance = 0.1 * weaponLvl * (baseWDmg + (weaponRefine * 2.5));
      rndVariance = getRandomIntInclusive();
    }else {
      variance = 0.1 * weaponLvl * ((baseWDmg + (refineBonus / 2)) + (weaponRefine * 2.5));
      rndVariance = getRandomIntInclusive();
    }
  }

  //over atqm
  const weapLvlArr = [1, 2, 3, 4];
  const overAtqmArr = [8, 7, 6, 5];
  const overMultArr = [2, 5, 8, 14];
  let overAtqm, overAtqmRnd;

  if (noWeapon == true) {
    overAtqm = 0;
    overAtqmRnd = 0;
  }else {
    for (let i = 0; i < weapLvlArr.length; i++) {
      if (weaponRefine >= overAtqmArr[i] && weaponLvl == weapLvlArr[i]) {
        overAtqm = (weaponRefine - overAtqmArr[i] + 1) * overMultArr[i]; //indica o bonus variavel max de atkm dependendo do refino e weapon lvl
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(0);
          max = Math.floor(overAtqm);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        } overAtqmRnd = getRandomIntInclusive(); //bonus variavel de atkm randomizado
      }else {
        overAtqm = 0;
        overAtqmRnd = 0;
      }
    }
  }

  //high upgrade
  let highUpg;

  if (noWeapon == true) {
    highUpg = 0;
  }else {
    if (weaponRefine >=16) {
      if (weaponLvl == 1) {
        highUpg = weaponRefine;
      }else if (weaponLvl == 4) {
        highUpg = weaponRefine * 3;
      }else {
        highUpg = weaponRefine * 2; //lvl 2 & 3
      }
    }else {
      highUpg = 0; //refine lvls < 16
    }
  }

  //weaponMatk (no variance)
  let weaponMatk;

  weaponMatk = baseWDmg + refineBonus + highUpg;

  //monstro
  //hard mdef
  let monMdef, mdefIg, hardMdef, hMdef;

  if (mdefMon.value == "") {
      monMdef = 0;
  }else {
    monMdef = parseInt(mdefMon.value);
  }

  if (mdefIgnore.value == "") {
      mdefIg = 0;
  }else {
   mdefIg = (parseFloat(mdefIgnore.value))/100;
  }

  hardMdef = monMdef - (monMdef * mdefIg);

  hMdef = (1000 + hardMdef) / (1000 + (hardMdef * 10));

  //propriedades
  let lvlProp = parseInt(lvlPropMon.value),
  monProp = propertyMon.value,
  propDmg;

  if (monProp == "Sombrio" && lvlProp == 1 ||
      monProp == "Veneno" && lvlProp == 3 ||
      monProp == "Veneno" && lvlProp == 4) {
    propDmg = 1.25;
  }else if (monProp == "Maldito" && lvlProp == 1 ||
            monProp == "Sombrio" && lvlProp == 2) {
    propDmg = 1.5;
  }else if (monProp == "Maldito" && lvlProp == 2 ||
            monProp == "Sombrio" && lvlProp == 3) {
    propDmg = 1.75;
  }else if (monProp == "Maldito" && lvlProp == 3 ||
            monProp == "Maldito" && lvlProp == 4 ||
            monProp == "Sombrio" && lvlProp == 4) {
    propDmg = 2;
  }else if (monProp == "Água" && lvlProp == 4 ||
            monProp == "Terra" && lvlProp == 4 ||
            monProp == "Vento" && lvlProp == 4 ||
            monProp == "Fogo" && lvlProp == 4) {
    propDmg = 0.75;
  }else {
    propDmg = 1;
  }

  //dano final
  let skillBonus, holyBonus, propBonus, raceBonus, protocolBonus, matkBonus, sizeBonus, monsterBonus,
  finalDmg, maxDmg, minDmg,
  idArr = ["skillBon", "holyBon", "propMonBon", "raceMon", "typeMon", "magicDmg", "sizeMon", "monsterName"],
  modArr = [skillBonus, holyBonus, propBonus, raceBonus, protocolBonus, matkBonus, sizeBonus, monsterBonus];

  for (let i = 0; i < idArr.length; i++) {
    if (document.getElementById(idArr[i]).value == "") {
        modArr[i] = 1;
    }else {
     modArr[i] = ((parseFloat(document.getElementById(idArr[i]).value))/100)+1;
    }
  }

  //priestSpirit
  let sprito_;

  if (sprito.checked == true) {
    sprito_ = 5;
  }else {
    sprito_ = 1;
  }

  //lexAeterna
  let lexAeterna = document.getElementById("lexAeterna").checked;

  if (lexAeterna == true) {
    lex = 2;
  }else {
    lex = 1;
  }

  //oratio
  let oratio;

  if (noOratio.checked == true) {
    oratio = 0;
  }else {
    oratio = (oratioLvl_)/100;
  }

  //status matk
  let statusMatk, statusInt, statusDex, statusLuk,
  statusIdArr = ["intAmpl", "dexAmpl","sorAmpl"],
  statusAttArr = [];

  for (let i = 0; i < statusIdArr.length; i++) {
    if (document.getElementById(statusIdArr[i]).value == "") {
        statusAttArr[i] = 1;
    }else {
     statusAttArr[i] = parseInt(document.getElementById(idArr[i]).value);
    }
  }

  statusInt = statusAttArr[0];
  statusDex = statusAttArr[1];
  statusLuk = statusAttArr[2];

  statusMatk = Math.floor(Math.floor(lvlAb/4) + statusInt + Math.floor(statusInt/2) + Math.floor(statusDex/5) + Math.floor(statusLuk/3));
  //43+50+25+10+16 = 144

  //mystical amplification
  let mysticalAmp, mystStatus, mystRnd, mystVar, mystOver;

  if (noAmp.checked == true) {
    mysticalAmp = 0;
  }else {
    mysticalAmp = (mystLvl * 5)/100;
  }

  mystStatus = Math.floor(mysticalAmp * statusMatk);
  mystRnd = Math.floor(mysticalAmp * (rndVariance + overAtqmRnd));
  mystVar = Math.floor(mysticalAmp * variance);
  mystOver = Math.floor(mysticalAmp * overAtqm);

  //rounding
  let divMod;

  if (selectedSkill == "Adoramus") {
    divMod = 10;
  }else if (selectedSkill == "Judex") {
    divMod = 3;
  }else {
    divMod = 1;
  }

  //dano final
  let roundModRnd = Math.floor((atkm + rndVariance + overAtqmRnd + mystRnd + mystStatus) * skmod),
  roundModMin = Math.floor((atkm - variance + mystVar + mystStatus) * skmod),
  roundModMax = Math.floor((atkm + variance + overAtqm + mystVar + mystOver + mystStatus) * skmod),
  roundArr = [roundModRnd, roundModMin, roundModMax],
  dmgArr = [finalDmg, minDmg, maxDmg];

  for (let i = 0; i < roundArr.length; i++) {
    dmgArr[i] = Math.floor(Math.floor(Math.floor(Math.floor(
      Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(
        Math.floor(Math.floor(roundArr[i]/divMod)*modArr[0])*modArr[3])*modArr[6])*modArr[2])*modArr[7])*modArr[4])*modArr[5])*modArr[1])*(propDmg + oratio))*hMdef)*divMod*sprito_*lex;
  }

  for (let i = 0; i < dmgArr.length; i++) {
    if (dmgArr[i] >= 0 && selectedSkill == "Magnus Exorcismus") {
      dmgArr[i] = dmgArr[i] * lvlSkill;
    }else if (dmgArr[i] < 0){
        dmgArr[i] = 0;
    }
  }

  let result1 = document.getElementById("result1"),
  result2 = document.getElementById("result2"),
  result3 = document.getElementById("result3"),
  resultArr = [result1, result2, result3];

  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i].innerHTML = dmgArr[i];
  }
}

slot = [
 "level", "skillAB", "skillLvl", "atqmTotal", "weaponLvl",
 "weaponRefine", "weaponBaseDmg", "weaponBaseMatk",
 "skillBon", "holyBon", "propMonBon", "raceMon",
 "typeMon", "sizeMon", "monsterName", "magicDmg",
 "mdefIgnore", "propertyMon", "lvlPropMon", "mdefMon", "oratioLvl",
 "amplMistLvl", "intAmpl", "dexAmpl", "sorAmpl"

],
slot2 = ["noWeapon","priestSpirit","lexAeterna","noOratio","noMystAmpl"];

let saveSlot = function(){
  let slots = document.getElementById('slots').value,
  skLvlOpt = document.getElementById('skillLvl').innerHTML,
  areas = [], areas2 = [];

    for (let i = 0; i < slot.length; i++) {
      areas.push(document.getElementById(slot[i]).value);
    }
    for (let i = 0; i < slot2.length; i++) {
      areas2.push(document.getElementById(slot2[i]).checked);
    }

    if (slots == 'alt0') {
        for (let i = 0; i < slot.length; i++) {
          localStorage.setItem(slot[i]+"0",areas[i]);
        }
        for (let i = 0; i < slot2.length; i++) {
          localStorage.setItem(slot2[i]+"0",areas2[i]);
        }
        localStorage.setItem('skLvlOpt0', skLvlOpt);
      }else if (slots == 'alt1') {
        for (let i = 0; i < slot.length; i++) {
          localStorage.setItem(slot[i]+"1",areas[i]);
        }
        for (let i = 0; i < slot2.length; i++) {
          localStorage.setItem(slot2[i]+"1",areas2[i]);
        }
        localStorage.setItem('skLvlOpt1', skLvlOpt);
      }else {
        for (let i = 0; i < slot.length; i++) {
          localStorage.setItem(slot[i]+"2",areas[i]);
        }
        for (let i = 0; i < slot2.length; i++) {
          localStorage.setItem(slot2[i]+"2",areas2[i]);
        }
        localStorage.setItem('skLvlOpt2', skLvlOpt);
      }
};

let loadSlot = function(){
  let slots = document.getElementById('slots').value;
  if (slots == 'alt0') {
    document.getElementById('skillLvl').innerHTML = localStorage.skLvlOpt0;
    for (let i = 0; i < slot.length; i++) {
      document.getElementById(slot[i]).value = localStorage.getItem(slot[i]+"0");
    }
    for (let i = 0; i < slot2.length; i++) {
      document.getElementById(slot2[i]).checked = JSON.parse(localStorage.getItem(slot2[i]+"0"));
    }
  }else if (slots == 'alt1') {
    document.getElementById('skillLvl').innerHTML = localStorage.skLvlOpt1;
    for (let i = 0; i < slot.length; i++) {
      document.getElementById(slot[i]).value = localStorage.getItem(slot[i]+"1");
    }
    for (let i = 0; i < slot2.length; i++) {
      document.getElementById(slot2[i]).checked = JSON.parse(localStorage.getItem(slot2[i]+"1"));
    }
  }else {
    document.getElementById('skillLvl').innerHTML = localStorage.skLvlOpt2;
    for (let i = 0; i < slot.length; i++) {
      document.getElementById(slot[i]).value = localStorage.getItem(slot[i]+"2");
    }
    for (let i = 0; i < slot2.length; i++) {
      document.getElementById(slot2[i]).checked = JSON.parse(localStorage.getItem(slot2[i]+"2"));
    }
  }
};

document.getElementById('saveBtn').onclick = saveSlot;
document.getElementById('loadBtn').onclick = loadSlot;
