function reducCalc() {
  //hard mdef
  let monMdef, mdefIg, hardMdef, hMdef,
  result0 = document.getElementById("result0"), result1 = document.getElementById("result1"), result2 = document.getElementById("result2");

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

  result0.innerHTML = Math.floor(hardMdef);
  result1.innerHTML = Math.floor((1 - hMdef)*10000) / 100 + "%";
  result2.innerHTML = Math.ceil(hMdef*10000) / 100 + "%";

}
