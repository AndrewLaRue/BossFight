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
    // bonedog:{
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Monster BoneDog.gif',
    //     level: 1
    // },
    // MurderTree:{
    //     health: 100,
    //     attack: 25,
    //     img: 'assets/Monster Tree.gif',
    //     level: 1
    // },
    TriEye:{
        health: 100,
        attack: 25,
        img: 'assets/Monster Eye.gif',
        level: 1
    },
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

const companions = {
  wolf: {
    rounds: 0,
    img: 'assets/Companion Wolf.gif'
  }
}

let gold = 50

function startGame() {
drawHeroImg()
drawMonsterImg()
drawMonsterStats()
  drawHeroStats()
  setInterval(bossAttack, 2000)
}

function drawHeroImg(){
    let template = ''
    for(let key in heroes){
        let hero = heroes[key]
      template += `<img class="hero-size" src="/assets/Hero gun.gif" alt="">`
    let heroElm = document.getElementById('hero')
    heroElm.innerHTML = template
}
}


function drawMonsterImg(){
    let template = ''
    for(let key in monsters){
        let monster = monsters[key]
    template += `
    <img class="monster-size" src="/assets/Monster Eye.gif" alt="">
    `    
    let monsterElm = document.getElementById('monster')
    monsterElm.innerHTML = template   
}
}


function drawHeroStats() {
  let template = ''
  for (let key in heroes) {
    let hero = heroes[key]
    template += `
          <div class="col-3">
              ${key}
          </div>
          <div class="col-9 mt-2">
              <div class="progress">
                <div class="hero-bar progress-bar" role="progressbar" style="width: ${hero.health}%;" aria-valuenow="" aria-valuemin="0"
                aria-valuemax="100">${hero.health}%</div>
              </div>
          </div>
    `
    let heroElm = document.getElementById('heroStats')
    heroElm.innerHTML = template
  }
}

function drawMonsterStats() {
  let template = ''
  for (let key in monsters) {
    let monster = monsters[key]
    template += `
            <div class="progress mt-2">
              <div class="monster-bar progress-bar" role="progressbar" style="width: ${monster.health}%;">${monster.health}%</div>
            </div>
            <p class="d-flex align-items-center justify-content-between fs-2 mb-0 pb-0">${key}<span class="fs-5 level"> Level: <span class="level">${monster.level}</span></span></p>
    `
    let monsterElm = document.getElementById('monsterStats')
    monsterElm.innerHTML = template
  }
}


function attack() {
  let monster = monsters.TriEye
  let atk = Math.floor(Math.random()*5)
  monster.health -= atk
  if (monster.health <= 0) {
    monster.level++
    gold += monster.level*10
    monster.health = 100* monster.level
  }
  // let monsterElm = document.getElementById('monsterStats')
  // let healthBar = monsterElm.querySelector('.monster-bar') 
  // healthBar.style.width = `${monster.health}%`
  // healthBar.innerHTML = monster.health
  drawMonsterStats()
  wolfAtk()
}

function bossAttack() {
  for (let key in heroes) {
    let hero = heroes[key]
    let atk = Math.floor(Math.random()*3)
    hero.health -= atk*monsters.TriEye.level
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
  let monster = monsters.TriEye
  monster.health = 100
  monster.level = 1
    let monsterElm = document.getElementById('monsterStats')
  let healthBar = monsterElm.querySelector('.monster-bar') 
  healthBar.style.width = `${monster.health}%`
  healthBar.innerHTML = monster.health
  let level = monsterElm.querySelector('.level')
  level.innerHTML = monster.level
}
function resetHero() {
  let hero = heroes.soldier76
  hero.health = 100
    let heroElm = document.getElementById('heroStats')
  let healthBar = heroElm.querySelector('.hero-bar') 
  healthBar.style.width = `${hero.health}%`
  healthBar.innerHTML = hero.health
}

function buyPotion() {
  let hero = heroes.soldier76
  if (gold >= 25) {
    gold -= 25
    hero.health += 25
    if (hero.health > 100) {
      hero.health = 100
    }
        let heroElm = document.getElementById('heroStats')
  let healthBar = heroElm.querySelector('.hero-bar') 
  healthBar.style.width = `${hero.health}%`
  healthBar.innerHTML = hero.health
  }
    
}

//#region  testing


function buyWolf() {
  if (gold >= 50) {
    gold -= 50
    companions.wolf.rounds += 10
  }
}

function drawWolf() {
  
}

function wolfAtk() {
  let dog = companions.wolf
  let atk = Math.floor(Math.random()*5)
  if (dog.rounds > 0) {
    dog.rounds--
    monsters.TriEye.health -= atk
    drawMonsterStats()
    
}
}


//#endregion

startGame()
