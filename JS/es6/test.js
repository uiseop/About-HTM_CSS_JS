const hand = [randFace(),randFace(),randFace()]
for(let face of hand){
    console.log(`You rolled ..${face}`);
}

function randFace(){
    return ['crown','anchor','heart','club','diamond'][rand(0,5)]
}

function rand(a,b){
    return a + Math.floor((b-a+1)*Math.random())
}