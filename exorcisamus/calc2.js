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

  if (noWeapon == true) {
    baseWDmg = 0;
  }else {
    if (document.getElementById("weaponBaseDmg").value == "") {
      baseWDmg = 0;
    }else {
      baseWDmg = parseInt(document.getElementById("weaponBaseDmg").value);
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

  if (document.getElementById("mdefMon").value == "") {
      monMdef = 0;
  }else {
    monMdef = parseInt(document.getElementById("mdefMon").value);
  }

  if (document.getElementById("mdefIgnore").value == "") {
      mdefIg = 0;
  }else {
   mdefIg = (parseFloat(document.getElementById("mdefIgnore").value))/100;
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

  //priestSpirit
  let sprito = document.getElementById("priestSpirit"),
  sprito_;

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
  let noOratio = document.getElementById("noOratio"),
  oratioLvl_ = document.getElementById("oratioLvl").value,
  oratio;

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
  let mysticalAmp, mystStatus, mystRnd, mystVar, mystOver,
  noMyst = document.getElementById("noMystAmpl"),
  mystLvl = document.getElementById("amplMistLvl").value;

  if (noMyst.checked == true) {
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

  if (skill == "Adoramus") {
    divMod = 10;
  }else if (skill == "Judex") {
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
}
