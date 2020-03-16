window.addEventListener("load", populateSelects, false);

const opOp = "<option>",
endOp = "</option>";

function tabFun(el, a) {
  let i, tabC = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabC.length; i++) {
    tabC[i].style.display = "none";
    tabC[i].classList.remove('tabflex');
  }

  // for (i = 0; i < htabs.length; i++) {
  //     htabs[i].classList.remove('actvTab');
  //   }
      document.getElementById(a).classList.add('tabflex');
  // el.classList.add('actvTab');
}


function populateSelects(){
  let acolyteJobPt = document.getElementById("acolyteJobPt"),
  priestJobPt = document.getElementById("priestJobPt"),
  abJobPt = document.getElementById("abJobPt"),
  trans = document.getElementById("transCheck"),
  thor = document.getElementById('thorCheck');

  trans.checked = true;
  thor.checked = false;

  //acolyte
  let acoJobMin = 40,
  acoJobs = [];
  const acoJobMax = 50;
  //priest or high priest
  let priestJobs = [],
  priestJobMin = 60, priestJobMax = 70;
  //archbishop
  let abJobs = [],
  abJobMin = 1;
  const abJobMax = 60;

  thor.addEventListener("change", servidor, false);

  function servidor(){

      let serverSkill = ["acolyte1",
      "acolyte2"];
    for (let i = 0; i < serverSkill.length; i++) {
      // if (thor.checked == true) {
        document.getElementById(serverSkill[i]+'_').classList.toggle('toggleNone');
        document.getElementById(serverSkill[i]).disabled = document.getElementById(serverSkill[i]+'_').classList.contains('toggleNone');
      // }
    }
  }

  trans.addEventListener("change", ativar, false);
  function ativar() {
    if (trans.checked == true) {
      priestJobMin = 60;
      priestJobMax = 70;
      ativar_();
      hiddenSumo();
    }else {
      priestJobMin = 40;
      priestJobMax = 50;
      ativar_();
      hiddenSumo();
    }
    function ativar_(){
      //popular
      priestJobs = [];
      while(priestJobMin < priestJobMax+1){
        priestJobs.push(priestJobMin++);
      }
      priestJobPt.innerHTML = "";
      for (let i = 0; i < priestJobs.length; i++) {
        priestJobPt.innerHTML += opOp + priestJobs[i] + endOp;
      }
    }
    function hiddenSumo() {
      let sumo_ = [ document.getElementById("sumoSacer"),
      document.getElementById("priest18_"),
      document.getElementById("priest11_")],
      sumoSelect = [document.getElementById("priest18"),
      document.getElementById("priest11")];



      for (let i = 0; i < sumo_.length; i++) {
        if (i == 0) {
          sumo_[i].classList.toggle('toggleNone');
        }else {
          sumo_[i].classList.toggle('toggleHidden');
        }
      }

      for (let i = 0; i < sumoSelect.length; i++) {
          sumoSelect[i].disabled = sumo_[i+1].classList.contains('toggleHidden');
      }

    }
  }

  //popular acolyte
  while(acoJobMin < acoJobMax+1){
    acoJobs.push(acoJobMin++);
  }

  for (let i = 0; i < acoJobs.length; i++) {
    acolyteJobPt.innerHTML += opOp + acoJobs[i] + endOp;
  }

  //popular priest
  while(priestJobMin < priestJobMax+1){
    priestJobs.push(priestJobMin++);
  }
  for (let i = 0; i < priestJobs.length; i++) {
    priestJobPt.innerHTML += opOp + priestJobs[i] + endOp;
  }

  //popular ab
  while(abJobMin < abJobMax+1){
    abJobs.push(abJobMin++);
  }
  for (let i = 0; i < abJobs.length; i++) {
    abJobPt.innerHTML += opOp + abJobs[i] + endOp;
  }

  //populate skills
  const maxSkLvl = [1, 2, 3, 4, 5, 10];
  let minLvl = [0, 0, 0, 0, 0, 0];
  arrx = [[],[],[],[],[],[]],
  arrSkills = [[
    document.getElementById("acolyte0"),
    document.getElementById("acolyte3"),
    document.getElementById("acolyte5"),
    document.getElementById("acolyte6"),
    document.getElementById("acolyte13"),
    document.getElementById("priest7"),
    document.getElementById("priest14"),
    document.getElementById("priest22"),
    document.getElementById("archbishop3"),
    document.getElementById("archbishop7")
  ],
  [
    document.getElementById("acolyte1")
  ],
  [
    document.getElementById("priest17"),
    document.getElementById("archbishop2"),
    document.getElementById("archbishop6"),
    document.getElementById("archbishop19"),
    document.getElementById("archbishop20")
  ],
  [
    document.getElementById("acolyte2"),
    document.getElementById("priest4"),
    document.getElementById("priest8"),
    document.getElementById("archbishop15"),
    document.getElementById("archbishop16")
  ],
  [
    document.getElementById("priest1"),
    document.getElementById("priest2"),
    document.getElementById("priest3"),
    document.getElementById("priest11"),
    document.getElementById("priest12"),
    document.getElementById("priest16"),
    document.getElementById("priest20"),
    document.getElementById("archbishop0"),
    document.getElementById("archbishop4"),
    document.getElementById("archbishop5"),
    document.getElementById("archbishop8"),
    document.getElementById("archbishop13"),
    document.getElementById("archbishop14"),
    document.getElementById("archbishop17"),
    document.getElementById("archbishop18")
  ],
  [
    document.getElementById("acolyte4"),
    document.getElementById("acolyte7"),
    document.getElementById("acolyte8"),
    document.getElementById("acolyte9"),
    document.getElementById("acolyte10"),
    document.getElementById("acolyte11"),
    document.getElementById("acolyte12"),
    document.getElementById("acolyte14"),
    document.getElementById("priest0"),
    document.getElementById("priest5"),
    document.getElementById("priest6"),
    document.getElementById("priest9"),
    document.getElementById("priest10"),
    document.getElementById("priest13"),
    document.getElementById("priest15"),
    document.getElementById("priest18"),
    document.getElementById("priest19"),
    document.getElementById("priest21"),
    document.getElementById("archbishop1"),
    document.getElementById("archbishop9"),
    document.getElementById("archbishop10"),
    document.getElementById("archbishop11"),
    document.getElementById("archbishop12")
  ]];

for (let i = 0; i < arrx.length; i++) {
  while(minLvl[i] < maxSkLvl[i]+1){
    arrx[i].push(minLvl[i]++);
  }
}

for (let i = 0; i < arrx.length; i++) {
    for (let m = 0; m < arrx[i].length; m++) {
      for (var n = 0; n < arrSkills[i].length; n++) {
        arrSkills[i][n].innerHTML += opOp + arrx[i][m] + endOp;
      }
  }
}

  //imgs
  let totalItens = arrSkills[0].length+arrSkills[1].length+arrSkills[2].length+arrSkills[3].length+arrSkills[4].length+arrSkills[5].length;
  // alert(arrSkills[0].length+arrSkills[1].length+arrSkills[2].length+arrSkills[3].length+arrSkills[4].length+arrSkills[5].length-1);

  for (let i=0; i < totalItens; i++) {
      document.getElementById("s"+i).src = "./img/skills/"+i+".png";
  }

  acolyteJobPt.addEventListener('change', function(){points(this,this.id);},false);
  priestJobPt.addEventListener('change', function(){points(this,this.id);},false);
  abJobPt.addEventListener('change', function(){points(this,this.id);},false);

  function points(select, targetId){
    let target = document.getElementById(targetId+'s');
    target.innerHTML = select.value;
  }

}
