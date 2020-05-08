const opOp = "<option>",
endOp = "</option>";
//seções
let characterAtt = document.getElementById('charAtt'),
consumiveis = document.getElementById('consuVIP'),
sombrios = document.getElementById('sombrioEkip'),
topo = document.getElementById('topoEkip'),
meio = document.getElementById('meioEkip'),
baixo = document.getElementById('baixoEkip'),
arma = document.getElementById('armaEkip'),
armadura = document.getElementById('armaduraEkip'),
capa = document.getElementById('capaEkip'),
escudo = document.getElementById('escudoEkip'),
sapato = document.getElementById('sapatoEkip'),
acessorio1 = document.getElementById('acc1Ekip'),
acessorio2 = document.getElementById('acc2Ekip');

let topoCarta = topo.getElementsByClassName('cards');
let meioCarta = meio.getElementsByClassName('cards');
let armaCarta = arma.getElementsByClassName('cards');
let armaduraCarta = armadura.getElementsByClassName('cards');
let capaCarta = capa.getElementsByClassName('cards');
let escudoCarta = escudo.getElementsByClassName('cards');
let sapatoCarta = sapato.getElementsByClassName('cards');
let acessorio1Carta = acessorio1.getElementsByClassName('cards');
let acessorio2Carta = acessorio2.getElementsByClassName('cards');

let topoRef = topo.getElementsByClassName('refine');
let armaRef = arma.getElementsByClassName('refine');
let armaduraRef = armadura.getElementsByClassName('refine');
let capaRef = capa.getElementsByClassName('refine');
let escudoRef = escudo.getElementsByClassName('refine');
let sapatoRef = sapato.getElementsByClassName('refine');

let jobLevel = characterAtt.getElementsByClassName('jobLevel'),
pets = consumiveis.getElementsByClassName('pets');

let refinoSombrio = sombrios.getElementsByClassName('refine');

let keys = Object.keys(addOns);


window.addEventListener('load', popularBonusCalc, false);

function popularRefinos(el, lim){
    for(let i = 0; i<=lim; i++){
        el.innerHTML += opOp+'+'+i+endOp;
    }
}

function popularCartas(elArr, type){
    for(let l = 0; l < elArr.length; l++){
        for(let i = 0; i < keys.length; i++){
            if(addOns[keys[i]].type == type){
                elArr[l].innerHTML += '<option value='+keys[i]+'>'+addOns[keys[i]].name +endOp;
            }
        }
    }
}

function popularBonusCalc(){
    //geral
    //job
    for(i=1; i<=60; i++){
        jobLevel[0].innerHTML += opOp+i+endOp;
    }

    //pets
    popularCartas(pets, 'pet');
  
    //visual sombrio
    for(let i = 0; i < refinoSombrio.length; i++){
        popularRefinos(refinoSombrio[i], 10);
    }

    popularRefinos(topoRef[0], 20);
    popularRefinos(armaRef[0], 20);
    popularRefinos(armaduraRef[0], 20);
    popularRefinos(capaRef[0], 20);
    popularRefinos(escudoRef[0], 20);
    popularRefinos(sapatoRef[0], 20);

    popularCartas(topoCarta, 'hat');
    popularCartas(meioCarta, 'hat');
    popularCartas(armaCarta, 'weapon');
    popularCartas(armaduraCarta, 'armor');
    popularCartas(capaCarta, 'garment');
    popularCartas(escudoCarta, 'shield');
    popularCartas(sapatoCarta, 'shoes');
    popularCartas(acessorio1Carta, 'accessory');
    popularCartas(acessorio2Carta, 'accessory');
    

}