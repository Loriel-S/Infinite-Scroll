const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
let photosArray = []


// Unsplash API
const count = 10;
const apiKey = 'R1LtbIlprioZuZUfQnbUBCPTyWJtb5eDJYzCrr7ycY0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Create elements for links, photos, add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        // _blank will open it in a new tab
        item.setAttribute('target', '_blank')
        // Create image or photo 
        const img = document.getElement('img')
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)

        item.appendChild(img)
        imageContainer.appendChild(item)
    })

}

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (error) {

    }
}

// On Load
getPhotos()