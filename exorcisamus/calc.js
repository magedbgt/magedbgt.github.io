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
lvlPropMon = document.getElementById('lvlPropMon');


//values
let
selectedSkill = skills.value,
lvlSkill = parseInt(skillLvl.value),
lvlAb = parseInt(lvlChar).value),
baseMATK = document.getElementById("weaponBaseMatk").value,
weaponLvl = parseInt(document.getElementById("weaponLvl").value),
weaponRefine = parseInt(document.getElementById("weaponRefine").value),
weaponBaseDmg = document.getElementById("weaponBaseDmg").value,
oratioLvl_ = document.getElementById("oratioLvl").value,
mystLvl = document.getElementById("amplMistLvl").value;

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
