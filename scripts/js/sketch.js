var s = 20
var a
var b
const PREV = []
function setup() {
  let cnv = createCanvas(windowWidth / 3, windowHeight / 3)
  a = (windowWidth - width) / 2 + (windowWidth - width) / 3
  b = (windowHeight - height) / 2

  cnv.position(a, b)
}

function draw() {}

function shuff(array) {
  array.sort(() => Math.random() - 0.5)
}

function main() {
  if (PEOPLE > 0 && GROUPS > 0) {
    // } else if (w < 600 && h < 550) {
    //   if (550 - h > 600 - w) {
    //     s *= 600 / h
    //   } else {
    //     s *= 550 / w
    //   }
    // }
    background(235)
    const V = []
    const F = []

    for (let i = 0; i < PEOPLE; i++) {
      V[i] = i + 1
    }

    for (let i = 0; i < GROUPS; i++) {
      F[i] = []
    }
    shuff(V)

    var x = 0
    var y = 0
    while (y < PEOPLE) {
      F[x].push(V[y])
      y++
      x = (x + 1) % GROUPS
    }

    for (let j = 0; j < PREV.length; j++) {
      PREV[j].remove()
    }
    PREV.splice(0, PREV.length)

    for (let i = 0; i < GROUPS; i++) {
      let out = F[i].join(", ")
      myPTag = createP("Group " + (i + 1) + ": " + out)
      myPTag.style("font-size", s + "px")
      myPTag.position(10 + a, 10 + i * 20 + b)
      PREV.push(myPTag)
    }
  }
}
