window.addEventListener("load", selectLvlPopulate, false);
window.addEventListener("load", activate, false);
const opOp = "<option>",
endOp = "</option>";

function activate() {
  let noOratio = document.getElementById("noOratio"),
  skills = document.getElementById("skillAB"),
  noWeapon = document.getElementById("noWeapon"),
  noAmp = document.getElementById("noMystAmpl");

  //change events
  skills.addEventListener("change", populateSkill, false);
  noWeapon.addEventListener("change", disableWeapon, false);
  noOratio.addEventListener("change", disableOratio, false);
  noAmp.addEventListener("change", disableAmplification, false);

  //checked items
  noWeapon.checked = true;
  noOratio.checked = true;
  noAmp.checked = true;

  //call
  disableWeapon();
  disableOratio();
  disableAmplification();
}

function disableWeapon() {
  let weaponLvl_ = document.getElementById("weaponLvl"),
  weaponRefine_ = document.getElementById("weaponRefine"),
  weaponBaseDmg_ = document.getElementById("weaponBaseDmg"),
  weaponBaseMatk_ = document.getElementById("weaponBaseMatk");

  if (noWeapon.checked == true) {
    weaponLvl_.disabled = true;
    weaponRefine_.disabled = true;
    weaponBaseDmg_.disabled = true;
    weaponBaseMatk_.disabled = true;
  }else {
    weaponLvl_.disabled = false;
    weaponRefine_.disabled = false;
    weaponBaseDmg_.disabled = false;
    weaponBaseMatk_.disabled = false;
  }
}

function disableOratio() {
  let oratio_ = document.getElementById("oratioLvl");

  if (noOratio.checked == true) {
    oratio_.disabled = true;
  }else {
    oratio_.disabled = false;
  }
}

function disableAmplification(){
  let int = document.getElementById("intAmpl"),
  dex = document.getElementById("dexAmpl"),
  luk = document.getElementById("sorAmpl"),
  ampLvl = document.getElementById("amplMistLvl"),
  noAmp = document.getElementById("noMystAmpl");

  if (noAmp.checked == true) {
    int.disabled = true;
    dex.disabled = true;
    luk.disabled = true;
    ampLvl.disabled = true;
  }else {
    int.disabled = false;
    dex.disabled = false;
    luk.disabled = false;
    ampLvl.disabled = false;
  }
}

function populateSkill() {
  //popular select skill level
  let skillLvlArr = [],
  skillLevel = 1,
  selectedSkill = document.getElementById("skillAB").value,
  skillLvlEl = document.getElementById("skillLvl"),
  sprito = document.getElementById("priestSpirit");

  if (selectedSkill == "Luz Divina") {
      skillLvlEl.innerHTML = opOp+1+endOp;
    }
    else if (selectedSkill == "Magnus Exorcismus" || selectedSkill == "Adoramus") {
        skillLvlEl.innerHTML = "";
        while(skillLevel < 11){
          skillLvlArr.push(skillLevel++);
        }
        for (let i = 0; i < skillLvlArr.length; i++) {
          skillLvlEl.innerHTML += opOp + skillLvlArr[i] + endOp;
        }
    }
    else {
      skillLvlEl.innerHTML = "";
      while(skillLevel < 6){
        skillLvlArr.push(skillLevel++);
      }
      for (let i = 0; i < skillLvlArr.length; i++) {
        document.getElementById("skillLvl").innerHTML += opOp + skillLvlArr[i] + endOp;
      }
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
  while(lvlMin < lvlMax+1){
    lvl.push(lvlMin++);
  }

  //refine
  while (refineMin < refineMax +1) {
    refine.push(refineMin++);
  }

  //oratio
  while (oratioMin < oratioMax +1) {
    oratioLvl.push(oratioMin++);
  }

  //popular selects
  for (let i = 0; i < lvl.length; i++) {
    document.getElementById("level").innerHTML += opOp + lvl[i] + endOp;
  }

  for (let i = 0; i < skills.length; i++) {
    document.getElementById("skillAB").innerHTML += opOp + skills[i] + endOp;
  }

  for (let i = 0; i < refine.length; i++) {
    document.getElementById("weaponRefine").innerHTML += opOp + refine[i] + endOp;
  }

  for (let i = 0; i < propMon.length; i++) {
    document.getElementById("propertyMon").innerHTML += opOp + propMon[i] + endOp;
  }

  for (let i = 0; i < propertyMonLvl.length; i++) {
    document.getElementById("lvlPropMon").innerHTML += opOp + propertyMonLvl[i] + endOp;
    document.getElementById("weaponLvl").innerHTML += opOp + propertyMonLvl[i] + endOp;
  }

  for (let i = 0; i < baseMATK.length; i++) {
    document.getElementById("weaponBaseMatk").innerHTML += opOp + baseMATK[i] + endOp;
  }

  for (let i = 0; i < oratioLvl.length; i++) {
    document.getElementById("oratioLvl").innerHTML += opOp + oratioLvl[i] + endOp;
    document.getElementById("amplMistLvl").innerHTML += opOp + oratioLvl[i] + endOp;
  }
}
