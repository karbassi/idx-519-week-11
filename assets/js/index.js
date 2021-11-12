// get a list of images from articles
let article_images = document.querySelectorAll('.article-image')

// get the first image from our list of images
let first_image = article_images[0]

function onImageClicked(event) {
  console.log('image click went through')
  // figure out which image is clicked
  let image = event.target

  // get the image width
  //   console.log(image.style)

  // double the width of the image
  image.width = 2 * image.width

  //   // CSS way
  //   image.style.maxWidth = 'none'
  //   image.style.width = 2 * image.width + 'px'
}

// when the mouse is clicked on the image from the articles
first_image.addEventListener('click', onImageClicked)

// determine check total
// allow user to choose tip percentage
// calculate tip by (total * tip percentage)
// goal: return tip amount in dollars
