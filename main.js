const heroes = {
    soldier76:{
        health: 100,
        attack: 25,
        img: 'assets/Hero gun.gif'
    },
    // blade: {
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Hero Sword.gif'
    // },
    // magica: {
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Hero Wizard.gif'
    // },  
    // legolas: {
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Hero Archer.gif'
    // },  
}

const monsters = {
    bonedog:{
        health: 100,
        attack: 25,
        img: 'assets/Monster BoneDog.gif'
    },
    // threeeyes:{
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Monster Eye.gif'
    // },
    // ghost:{
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Monster Ghost.gif'
    // },
    // robocop:{
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Monster Robot.gif'
    // },
}


function drawHeroImg(){
    let template = ''
    for(let key in heroes){
        let hero = heroes[key]
    template += `
    <img class="img-fluid" src="/assets/Hero gun.gif" alt="">`
    let heroElm = document.getElementById('hero')
    heroElm.innerHTML = template
}
}
drawHeroImg()

function drawMonsterImg(){
    let template = ''
    for(let key in monsters){
        let monster = monsters[key]
    template += `
    <img class="monster-size" src="/assets/Monster BoneDog.gif" alt="">
    `    
    let monsterElm = document.getElementById('monster')
    monsterElm.innerHTML = template   
}
}
drawMonsterImg()

