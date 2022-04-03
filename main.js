let cash = 100
let points = 0

let clickUpgrades = {
  peanutbutter: {
    price: 15,
    quantity: 0,
    multiplier: 1
  },
  chicken: {
    price: 25,
    quantity: 0,
    multiplier: 5
  }
}

let autoUpgrades = {
  walk: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
  zoomies: {
    price: 50,
    quantity: 0,
    multiplier: 100
  }
}


function mine() {
  points++
  updatePoints()
  multiplier()
}

function drawcost() {
  let chickenPrice = clickUpgrades.chicken.price
  document.getElementById('chickenCost').innerText = '$' + chickenPrice
  let PBPrice = clickUpgrades.peanutbutter.price
  document.getElementById('PBCost').innerText = '$' + PBPrice
  let walkPrice = autoUpgrades.walk.price
  document.getElementById('walkCost').innerText = '$' + walkPrice
  let zoomPrice = autoUpgrades.zoomies.price
  document.getElementById('zoomCost').innerText = '$' + zoomPrice
}

//#region Click Upgrades

function buyPeanutButter() {
  let price = clickUpgrades.peanutbutter.price
  if (cash >= price) {
    cash -= price
    let newquantity = clickUpgrades.peanutbutter.quantity += 1
    clickUpgrades.peanutbutter.price += 5
    insertClickerPeanut()
    // console.log('buy', cash, newquantity)
  }
  else {
    alert('no mor money')
  }
  updateMoney()
  updateQuantity()
}

function insertClickerPeanut() {
  let peanuts = clickUpgrades.peanutbutter.quantity
  if (peanuts >= 1) {
    document.getElementById('clickIconPeanut').classList.add('mdi', 'mdi-peanut')
  }
}
function insertClickerChicken() {
  let chicken = clickUpgrades.chicken.quantity
  if (chicken >= 1) {
    document.getElementById('clickIconChicken').classList.add('mdi', 'mdi-food-drumstick')
  }
}

function buyChicken() {
  let price = clickUpgrades.chicken.price
  if (cash >= price) {
    cash -= price
    let newquantity = clickUpgrades.chicken.quantity += 1
    clickUpgrades.chicken.price += 10
    // console.log('buy', cash, newquantity)
  }
  else {
    alert('no mor money')
  }
  updateMoney()
  updateQuantity()
  insertClickerChicken()
}

//#endregion

//#region Auto Upgrades

function buyWalk() {
  let price = autoUpgrades.walk.price
  if (cash >= price) {
    cash -= price
    let newquantity = autoUpgrades.walk.quantity += 1
    autoUpgrades.walk.price += 50
    walk()
    // console.log('buy', cash, newquantity)
  }
  else {
    alert('no mor money')
  }
  updateMoney()
  updateQuantity()
}

function walk() {
  // on each zoomies purchase myra runs faster for 5 seconds
  let quantity = autoUpgrades.zoomies.quantity
  let num1 = quantity -= 10
  if (num1 <= 1) { num1 += 5 }
  let zoom = document.getElementById('marquee')
  let zoomAmount = zoom.setAttribute('scrollamount', num1, num1)
}

function buyZoomies() {
  let price = autoUpgrades.zoomies.price
  if (cash >= price) {
    cash -= price
    let newquantity = autoUpgrades.zoomies.quantity += 1
    autoUpgrades.zoomies.price += 100
    // console.log('buy', cash, newquantity)
    zoomies()
  }
  else {
    alert('no mor money')
  }
  updateMoney()
  updateQuantity()
}

function zoomies() {
  // on each zoomies purchase myra runs faster for 5 seconds
  let quantity = autoUpgrades.zoomies.quantity
  let num1 = quantity += 10
  let zoom = document.getElementById('marquee')
  let zoomAmount = zoom.setAttribute('scrollamount', num1, num1)
}

function collectAutoUpgrades() {
  let walkpoints = autoUpgrades.walk.quantity * autoUpgrades.walk.multiplier
  cash += walkpoints
  let zoompoints = autoUpgrades.zoomies.quantity * autoUpgrades.zoomies.multiplier
  cash += zoompoints
  updateMoney()
}
//#endregion

//#region Updates

function updateMoney() {
  document.getElementById('cash').innerText = cash
}

function updateQuantity() {
  let PBquantity = clickUpgrades.peanutbutter.quantity
  document.getElementById('PBQuantity').innerText = PBquantity
  let chickenquantity = clickUpgrades.chicken.quantity
  document.getElementById('chickenQuantity').innerText = chickenquantity
  let walkquantity = autoUpgrades.walk.quantity
  document.getElementById('walkQuantity').innerText = walkquantity
  let zoomquantity = autoUpgrades.zoomies.quantity
  document.getElementById('zoomiesQuantity').innerText = zoomquantity
  drawcost()
}

function updatePoints() {
  document.getElementById('goodgirlpoints').innerText = points
  // console.log(points)
}

function multiplier() {
  let pbmultiplier = clickUpgrades.peanutbutter.quantity * clickUpgrades.peanutbutter.multiplier
  let chickenmultiplier = clickUpgrades.chicken.quantity * clickUpgrades.chicken.multiplier
  let multiplier = pbmultiplier + chickenmultiplier
  points += multiplier
  updatePoints()
}

//#endregion

setInterval(collectAutoUpgrades, 3000);
drawcost()