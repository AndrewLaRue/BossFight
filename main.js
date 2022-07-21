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

function drawHeroStats() {
  let template = ''
  for (let key in heroes) {
    let hero = heroes[key]
    template += `
          <div class="col-4">
              ${key}
            </div>
            <div class="col-6">
              <div class="progress">
                <div class=" hero-bar progress-bar" role="progressbar" style="width: ${hero.health}%;" aria-valuenow="" aria-valuemin="0"
                aria-valuemax="100">${hero.health}%</div>
                </div>
              </div>
            <div class="col-2">
            <img class="mini-img" src="/assets/Potion.gif" alt="">
          </div>
    `
    let heroElm = document.getElementById('heroStats')
    heroElm.innerHTML = template
  }
}
drawHeroStats()
function drawMonsterStats() {
  let template = ''
  for (let key in monsters) {
    let monster = monsters[key]
    template += `
            <div class="progress">
          <div class="monster-bar progress-bar" role="progressbar" style="width: ${monster.health}%;" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100">${monster.health}%</div>
        </div>
        <p class="fs-2 text-center">${key}</p>
    `
    let monsterElm = document.getElementById('monsterStats')
    monsterElm.innerHTML = template
  }
}
drawMonsterStats()

function attack() {
  let monster = monsters.bonedog
  monster.health -= 5
  if (monster.health < 0) {
    monster.health = 0
  }
  let monsterElm = document.getElementById('monsterStats')
  let healthBar = monsterElm.querySelector('.monster-bar') 
  healthBar.style.width = `${monster.health}%`
  healthBar.innerHTML = monster.health
}

function bossAttack() {
  for (let key in heroes) {
    let hero = heroes[key]
    hero.health -= 10
    if (hero.health < 0) {
      hero.health = 0
    }
    drawHeroStats()
  }
}

function reset() {
// location.reload()
  resetMonster()
  resetHero()
  
}

function resetMonster() {
  let monster = monsters.bonedog
  monster.health = 100
    let monsterElm = document.getElementById('monsterStats')
  let healthBar = monsterElm.querySelector('.monster-bar') 
  healthBar.style.width = `${monster.health}%`
  healthBar.innerHTML = monster.health
}
function resetHero() {
  let hero = heroes.soldier76
  hero.health = 100
    let heroElm = document.getElementById('heroStats')
  let healthBar = heroElm.querySelector('.hero-bar') 
  healthBar.style.width = `${hero.health}%`
  healthBar.innerHTML = hero.health
}



setInterval(bossAttack, 2000)