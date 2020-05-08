//base att
let baseInt = 120,
baseDex = 120,
baseLuk = 120;

//att bonus
let intelligence = 0,
luck = 0,
dexterity = 0;

//damage bonus

//atkm
let atkm = 0,
atkmBonus = 0,

//skills
adoramusBonus = 0,
judexBonus = 0,
magnusBonus = 0,
hlightBonus = 0,

//propriedade de skill
holyBonus = 0,

//propriedade do monstro - não inclui Holy........
neutralBonus = 0,
fireBonus = 0,
windBonus = 0,
earthBonus = 0,
waterBonus = 0,
darkBonus = 0,
unholyBonus = 0,
poisonBonus = 0,
ghostBonus = 0,

//tamanho
smallBonus = 0,
mediumBonus = 0,
bigBonus = 0,

//raça - apenas PVM
bruteBonus = 0,
demonBonus = 0,
dragonBonus = 0,
demihumanBonus = 0,
amorfoBonus = 0,
undeadBonus = 0,
insectBonus = 0,
fishBonus = 0,
plantBonus = 0,
angelBonus = 0,

//protocolo
bossBonus = 0,
normalBonus = 0,

//mdef ignore
//protocolo
bossMIg = 0,
normalMIg = 0,
allMIg = 0,
//race
bruteMIg = 0,
demonMIg = 0,
dragonMIg = 0,
demihumanMIg = 0,
amorfoMIg = 0,
undeadMIg = 0,
insectMIg = 0,
fishMIg = 0,
plantMIg = 0,
angelMIg = 0;

//elementos


//classe slot
class slot{
    constructor(name, type, action, combo){
        this.name = name;
        this.type = type;
        this.action = action;
        this.combo = combo;
    }
}


let addOns = {
    //runas
    rm1: new slot('RM 1', 'runa', function(refine){
        if(refine >= 7){intelligence += 5;}
        if(refine >= 10){atkmBonus += 0.05;}
    },),
        
    rm2: new slot('RM 2', 'runa', function(refine){
        if(refine >= 7){intelligence += 6;}
        if(refine >= 11){intelligence += 1;atkmBonus += 0.07;}
    },),
    
    rm3:new slot('RM 3', 'runa', function(refine){
        if(refine >= 7){intelligence += 7;}
        if(refine >= 12){intelligence += 1;atkmBonus += 0.08;}
        if(refine >= 13){intelligence += 1;atkmBonus += 0.02;}
    },),

    //diagramas
    diag1: new slot('A-INT', 'diagrama', function(refine){
        atkm += Math.floor(baseInt/10);
        if(refine >= 7){
            atkm += 10;
        }
    }),

    diag2: new slot('A-ATQM', 'diagram', function(){atkm += 20}),

    //pedras de encantamento
    spell1: new slot('PE 1', 'encantamento', function(){atkm += 6;},),
    spell2: new slot('PE 2', 'encantamento', function(){atkm += 9;},),
    spell3: new slot('PE 3', 'encantamento', function(){atkm += 12;},),
    spell4: new slot('PE 4', 'encantamento', function(){atkm += 15;},),
    spell5: new slot('PE 5', 'encantamento', function(){atkm += 18;},),
    spell6: new slot('PE 6', 'encantamento', function(){atkm += 21;},),
    spell7: new slot('PE 7', 'encantamento', function(){atkm += 24;},),
    
    //int
    int1: new slot('INT+1', 'encantamento', function(){intelligence += 1;}),
    int2: new slot('INT+2', 'encantamento', function(){intelligence += 2;}),
    int3: new slot('INT+3', 'encantamento', function(){intelligence += 3;}),
    int4: new slot('INT+4', 'encantamento', function(){intelligence += 4;}),

    //dex
    dex1: new slot('DES+1', 'encantamento', function(){dexterity += 1;}),
    dex2: new slot('DES+2', 'encantamento', function(){dexterity += 2;}),
    dex3: new slot('DES+3', 'encantamento', function(){dexterity += 3;}),
    
    //atkmBonus
    atkmBonus1: new slot('ATKM+1%', 'encantamento', function(){atkmBonus += 0.01;}),
    atkmBonus2: new slot('ATKM+2%', 'encantamento', function(){atkmBonus += 0.02;}),
    atkmBonus3: new slot('ATKM+3%', 'encantamento', function(){atkmBonus += 0.03;}),

    //apenas cartas de dano/mdef ignore
    //hat
    card1: new slot('Vesper', 'hat', function(){bossMIg += 0.3;}),
    card2: new slot('Vesper Selada', 'hat', function(){bossMIg += 0.15;}),
    card3: new slot('Fenris Fenrir', 'hat', function(refine){atkm += (50+(5*refine));}),
    card4: new slot('Fenris', 'hat', function(){atkm += 25}),
    card5: new slot('Celacanto Mutante', 'hat', function(refine){atkmBonus += (0.02+(0.01*refine))}),

    //armadura
    card6: new slot('Amon-Ra do Pesadelo', 'armor', function(){
        unholyBonus += 0.5;
        darkBonus += 0.5;
        undeadBonus += 0.5;
        demonBonus += 0.5;
    }),

    card7: new slot('Ant Buyanne', 'armor', function(){atkm += 100;}),
    card8: new slot('Amdarais Sombrio', 'armor', function(){atkmBonus += 0.2}),
    card9: new slot('Amdarais', 'armor', function(){atkmBonus += 0.15;}),
    card10: new slot('Agav', 'armor', function(){atkmBonus += 0.05;}),
    card11: new slot('Banshee Master', 'armor', function(){atkm += 10;}),

    //armas
    card12: new slot('Vigia do Tempo', 'weapon', function(){atkmBonus += 0.2;}),
    card13: new slot('Celini Kimi', 'weapon', function(){atkmBonus += 0.1;}),
    card14: new slot('Árvore Anciã', 'weapon', function(){undeadBonus += 0.1;}),
    card15: new slot('Apocalipse Infernal', 'weapon', function(){demonBonus += 0.1;}),
    card16: new slot('Marca-Tempo', 'weapon', function(){
        demonBonus += 0.05;
        amorfoBonus += 0.05;
    }),

    card17: new slot('Neo Punk', 'shield', function(combo){
        if(combo == this.combo){
            amorfoMIg += 0.5;
            demonMIg += 0.5;
        }
    }, 'card16'),

    card18: new slot('Bijou', 'shield', function(){atkmBonus += 0.1;}),

    //capa
    card19: new slot('Antigo Livro Danificado', 'garment', function(){
        atkm += Math.floor(baseInt/10)*5;
    }),

    //acessório
    card20: new slot('Mula sem Cabeça', 'accessory', function(){holyBonus += 0.2;}),
    card21: new slot('Scaraba', 'accessory', function(){atkm += 20;}),

    //pets
    pet1: new slot('Dokebi', 'pet', function(){atkmBonus += 0.01;}),
    pet2: new slot('Deviruchi', 'pet', function(){atkmBonus += 0.01;}),
    pet3: new slot('Miyabi Ningyo', 'pet', function(){intelligence += 1;}),
    pet4: new slot('Pesadelo', 'pet', function(){intelligence += 1;})
}

// let teste = [],
// teste1 = Object.keys(addOns);

// for(let i = 0; i<teste1.length; i++){
//     if(addOns[teste1[i]].type == 'pet'){
//         teste.push(addOns[teste1[i]].name);
//     }
// }

// console.log(teste);
