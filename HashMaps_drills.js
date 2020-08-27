const HashMap = require('./hashmap');

function main() {
    const lotr = new HashMap();
    
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set({'Hobbit' : 'Bilbo'});
    lotr.set({'Hobbit' : 'Frodo'});
    lotr.set({'Wizard' : 'Gandald'});
    lotr.set({'Elf' : 'Legolas'});
    lotr.set({'Maiar' : 'The Necromancer'});
    lotr.set({'Maiar' : 'Sauron'});
    lotr.set({'RingBearer' : 'Gollum'});
    lotr.set({'LadyOfLight' : 'Galadriel'});
    lotr.set({'HalfElven' : 'Arwen'});
    lotr.set({'Ent' : 'Treebeard'});

    lotr.get('Maiar');
    lotr.get('Hobbit');

    return lotr;
}

//what is the output of the following code?
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10); // key: 'Hello World.' value: 10
    map1.set(str2,20); // key: 'Hello World.' value: 20
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20); // key: 'Hello World.' value: 20
    map2.set(str4,10); // key: 'Hello World.' value: 10

    console.log(map1.get(str1)); //10
    console.log(map2.get(str3)); //20
}

main();

