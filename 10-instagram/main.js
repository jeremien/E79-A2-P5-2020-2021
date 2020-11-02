let images = []
let index = 0
let keyword = 'computer'

const textX = 20
const textY = 50

let word = ""

let showSearch = false

function preload() {
  let url = `https://www.instagram.com/explore/tags/${keyword}/?__a=1`
  loadJSON(url, getData)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
 
function draw () {
  background(0) 
  fill(255)

  textSize(15)
  text(keyword, textX, 40)

  if (images.length > 0) {
    image(images[index].image, 
          width / 2 - (images[index].largeur / 4), 
          height / 2 - (images[index].hauteur / 4),
          images[index].largeur / 2, 
          images[index].hauteur / 2
          )
    
    if (images[index].infos) text(images[index].infos, textX, textY, width/2, height/2); else text('no text', textX, textY, width/2, height/2) 
  } else {
    text('sorry, no data here', textX, textY)
  }

  newSearch()

}

function getData(data) {
  const rawData = data.graphql.hashtag.edge_hashtag_to_media.edges
  let cleanData = []
  for (const index in rawData) {
    const { display_url, owner, accessibility_caption, taken_at_timestamp, dimensions } = rawData[index].node
    const image = loadImage(display_url)
    const obj = {
      id: owner.id,
      image,
      date: taken_at_timestamp,
      infos: accessibility_caption,
      largeur: dimensions.width,
      hauteur: dimensions.height
    }
    cleanData.push(obj)
  }
  images = cleanData
}

function keyPressed() {
  switch (key) {
    case 'ArrowRight':
      if (index < images.length - 1) {
        index++
      } else {
        index = 0
      }
      break
    case 'ArrowLeft':
      if (index > 0) {
        index--
      } else {
        index = 0
      }
      break
    case ' ':
      showSearch = !showSearch
      break
    case 'Enter':
      keyword = word.trim()
      let url = `https://www.instagram.com/explore/tags/${keyword}/?__a=1`
      loadJSON(url, getData)
      showSearch = false
      word = ""

  }
}

function newSearch() {
  if (showSearch) {
    fill(0)
    rect(0, 0, width, height)
    fill(255)
    textSize(30)
    text(word, width/2 - 50, height/2)
  }
}

function keyTyped() {
  if (showSearch) {
    word += key
  }
}