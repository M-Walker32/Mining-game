let cash = 100

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
    price: 50,
    quantity: 0,
    multiplier: 50
  },
  zoomies: {
    price: 100,
    quantity: 0,
    multiplier: 100
  }
}

let points = 0

function mine() {
  points++
  updatePoints()
  multiplier()
}

function updatePoints() {
  document.getElementById('goodgirlpoints').innerText = points
  // console.log(points)
}

function buyPeanutButter() {
  let price = clickUpgrades.peanutbutter.price
  if (cash >= price) {
    cash -= price
    let newquantity = clickUpgrades.peanutbutter.quantity += 1
    // console.log('buy', cash, newquantity)
  }
  else {
    console.log('no money fo peanot buttor')
  }
  updateMoney()
  updateQuantity()
}

function buyChicken() {
  let price = clickUpgrades.chicken.price
  if (cash >= price) {
    cash -= price
    let newquantity = clickUpgrades.chicken.quantity += 1
    // console.log('buy', cash, newquantity)
  }
  else {
    console.log('no money fo chicken')
  }
  updateMoney()
  updateQuantity()
}

function buyWalk() {
  let price = autoUpgrades.walk.price
  if (cash >= price) {
    cash -= price
    let newquantity = autoUpgrades.walk.quantity += 1
    // console.log('buy', cash, newquantity)
  }
  else {
    console.log('no money fo walk')
  }
  updateMoney()
  updateQuantity()
}

function buyZoomies() {
  let price = autoUpgrades.zoomies.price
  if (cash >= price) {
    cash -= price
    let newquantity = autoUpgrades.zoomies.quantity += 1
    // console.log('buy', cash, newquantity)
  }
  else {
    console.log('no money fo zoomies')
  }
  updateMoney()
  updateQuantity()
}

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
}

function multiplier() {
  let multiplier = clickUpgrades.peanutbutter.quantity
  points += multiplier
  updatePoints()
}

// testing auto upgrades does it log 50 if I purchase 1 walk
function collectAutoUpgrades() {
  let walkpoints = autoUpgrades.walk.quantity * autoUpgrades.walk.multiplier
  points += walkpoints
  updatePoints()
}


setInterval(collectAutoUpgrades, 3000);