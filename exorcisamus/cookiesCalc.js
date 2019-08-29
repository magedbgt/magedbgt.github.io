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
document.getElementById('saveBtn').onclick = saveSlot;

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

document.getElementById('loadBtn').onclick = loadSlot;
