// Load 5 random dog images
async function loadRandomDogs() {
  const container = document.getElementById('dogContainer');
  container.innerHTML = "Loading...";
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random/5');
    const data = await res.json();
    displayDogs(data.message);
  } catch (err) {
    container.innerHTML = "Failed to load dogs 😢";
  }
}

// Load dogs by breed
async function loadBreedImages() {
  const breed = document.getElementById('breedInput').value.toLowerCase();
  const container = document.getElementById('dogContainer');
  container.innerHTML = "Loading...";
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
    const data = await res.json();
    if (data.status === 'success') {
      displayDogs(data.message);
    } else {
      container.innerHTML = "Breed not found 😕";
    }
  } catch (err) {
    container.innerHTML = "Error fetching breed 😢";
  }
}

// Display dog images in the container
function displayDogs(images) {
  const container = document.getElementById('dogContainer');
  container.innerHTML = '';
  images.forEach((url) => {
    const div = document.createElement('div');
    div.className = 'dog-card';
    div.innerHTML = `<img src="${url}" alt="Dog" />`;
    container.appendChild(div);
  });
}

// Load default images on page load
window.onload = loadRandomDogs;
