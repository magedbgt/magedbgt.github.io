window.addEventListener("load", selectLvlPopulate, false);
window.addEventListener("load", activate, false);
const opOp = "<option>",
endOp = "</option>";

function activate() {
  let noOratio = document.getElementById("noOratio"),
  noWeapon = document.getElementById("noWeapon");

  //change events
  document.getElementById("skillAB").addEventListener("change", populateSkill, false);
  noWeapon.addEventListener("change", disableWeapon, false);
  noOratio.addEventListener("change", disableOratio, false);

  //checked items
  noWeapon.checked = true;
  noOratio.checked = true;

  //call
  disableWeapon();
  disableOratio();
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

function populateSkill() {
  //popular select skill level
  let skillLvlArr = [],
  skillLevel = 1,
  selectedSkill = document.getElementById("skillAB").value,
  skillLvlEl = document.getElementById("skillLvl");

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
  }

function selectLvlPopulate() {
  //level do personagem / apenas para ABs
  let lvl = [],
  lvlMin = 99;
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
  }
}


//calculando o Dano
function calcResult() {
  //Personagem
  let lvlAb = parseInt(document.getElementById("level").value),
  lvlSkill = parseInt(document.getElementById("skillLvl").value),
  skill = document.getElementById("skillAB").value,
  atkm,  skmod;

  if (document.getElementById("atqmTotal").value == "") {
      atkm = 0;
  }else {
      atkm = parseInt(document.getElementById("atqmTotal").value);
  }

  if (skill == "Adoramus") {
    skmod = (((lvlSkill * 100) + 500) * (lvlAb / 100)) / 100;
  }else if (skill == "Judex") {
    skmod = (((lvlSkill * 20) + 300) * (lvlAb / 100)) / 100;
  }else if (skill == "Magnus Exorcismus") {
    skmod = 1;
  }else {
    skmod = 1.25;
  }

  //arma
  let weaponLvl = parseInt(document.getElementById("weaponLvl").value),
  weaponRefine = parseInt(document.getElementById("weaponRefine").value),
  baseMATK = document.getElementById("weaponBaseMatk").value,
  noWeapon = document.getElementById("noWeapon").checked,
  refineBonus, baseWDmg, rndVariance, variance;

  if (document.getElementById("weaponBaseDmg").value == "") {
      baseWDmg = 0;
  }else {
    baseWDmg = parseInt(document.getElementById("weaponBaseDmg").value);
  }

  if (weaponLvl == 1) {
    refineBonus = weaponRefine * 2;
  }else if (weaponLvl == 2) {
    refineBonus = weaponRefine * 3;
  }else if (weaponLvl == 3) {
    refineBonus = weaponRefine * 5;
  }else {
    refineBonus = weaponRefine * 7;
  }

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

  //monstro
  //hard mdef
  let monMdef, mdefIg, hardMdef, hMdef;

  if (document.getElementById("mdefMon").value == "") {
      monMdef = 0;
  }else {
    monMdef = parseInt(document.getElementById("mdefMon").value);
  }

  if (document.getElementById("mdefIgnore").value == "") {
      mdefIg = 0;
  }else {
   mdefIg = (parseInt(document.getElementById("mdefIgnore").value))/100;
  }

  hardMdef = monMdef - (monMdef * mdefIg);

  hMdef = (1000 + hardMdef) / (1000 + (hardMdef * 10));

  //propriedades
  let lvlProp = parseInt(document.getElementById("lvlPropMon").value),
  monProp = document.getElementById("propertyMon").value,
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

  //lexAeterna
  let lexAeterna = document.getElementById("lexAeterna").checked;

  if (lexAeterna == true) {
    lex = 2;
  }else {
    lex = 1;
  }

  //oratio
  let noOratio = document.getElementById("noOratio"),
  oratioLvl_ = document.getElementById("oratioLvl").value,
  oratio;

  if (noOratio.checked == true) {
    oratio = 0;
  }else {
    oratio = (oratioLvl_)/100;
  }

  //rounding
  let divMod;

  if (skill == "Adoramus") {
    divMod = 10;
  }else if (skill == "Judex") {
    divMod = 3;
  }else {
    divMod = 1;
  }

  //array pra condicional
  let modificadores = [propDmg];

  for (let i = 0; i < modArr.length; i++) {
    modificadores.push(modArr[i]);
  }

  //função para todos os valores serem iguais
  function checkEqualValue(arrayItem) {
    return arrayItem == 1;
  }

  let roundModRnd = Math.floor((atkm + rndVariance + overAtqmRnd) * skmod),
  roundModMin = Math.floor((atkm - variance) * skmod),
  roundModMax = Math.floor((atkm + variance + overAtqm) * skmod),
  roundArr = [roundModRnd, roundModMin, roundModMax],
  dmgArr = [finalDmg, minDmg, maxDmg];

  /*if (modificadores.every(checkEqualValue) == true && oratio == 0) {
    for (let i = 0; i < roundArr.length; i++) {
      dmgArr[i] = Math.floor(Math.floor(Math.floor(roundArr[i]* hMdef) / divMod) * divMod)*lex;
    }
  }else {*/
    for (let i = 0; i < roundArr.length; i++) {
      dmgArr[i] = Math.floor(Math.floor(Math.floor(Math.floor(
        Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(
          Math.floor(Math.floor(roundArr[i]/divMod)*modArr[0])*modArr[3])*modArr[6])*modArr[2])*modArr[7])*modArr[4])*modArr[5])*modArr[1])*(propDmg + oratio))*hMdef)*divMod*lex;
    }
//  }

  for (let i = 0; i < dmgArr.length; i++) {
    if (dmgArr[i] >= 0 && skill == "Magnus Exorcismus") {
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

  alert(modificadores.every(checkEqualValue) +"/"+oratio);
  //result2.innerHTML = minDmg - (minDmg * 0.071); //correção a testar
  //result3.innerHTML = maxDmg + (maxDmg * 0.052); //correção a testar
}
