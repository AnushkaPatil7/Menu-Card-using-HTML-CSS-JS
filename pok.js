const moodToPokemon = {
   excited: ["jigglypuff", "togepi"],
  angry: ["charmeleon","primeape","cubone"],
  calm: ["squirtle", "marill"],
  confused:["psyduck", "slowpoke"],
  happy: ["pikachu", "eevee"],
  scared: ["gastly", "mimikyu"],
  bored: ["snorlax", "slaking"]
};

const imageLinks = {
  pikachu: "https://24.media.tumblr.com/e16e113810cac2e63707fb1a653f6d20/tumblr_mlfiv5grFI1s9bsrdo1_500.gif",
  togepi: " https://i.pinimg.com/originals/f5/cc/54/f5cc54838ba74fbe1a2885244bccb1bc.gif",
  charmeleon: "https://i.pinimg.com/originals/64/2b/2f/642b2f9f59c945b6aeee06a3ddb69038.gif",
  primeape: "https://i.pinimg.com/originals/56/de/3c/56de3cd450954b94b54d8e32a5cfbd7c.gifg",
  squirtle: "https://i0.wp.com/media3.giphy.com/media/qNfYSvQFtXeH6/giphy.gif",
  cubone: "https://pa1.aminoapps.com/6151/94c292aa34764e6954d9635135af38a14d4fd34b_00.gif",
  psyduck: "https://gifdb.com/images/high/psyduck-sleeping-behind-lapras-1cc6g51eid5b2j5c.gif",
  slowpoke: "https://yt3.ggpht.com/DbO-Kj5zLY2mIS8VL1jikdDyk-Ph83to6hQ90LxgIYkswQNRl-iFYG2TgC93dLnrRL1QW821yHxf=s540-nd-v1",
  gastly: "https://i.pinimg.com/originals/60/b9/88/60b9882bb8b8bcecc4b3271bc3481aad.gif",
  mimikyu: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRP5Htt0loLXoJvL_OTdrF_A6JpvbXrXhjQ&s",
  snorlax: "https://media.tenor.com/NvKlIRfuoiYAAAAM/snorlax-laborday.gif",
  slaking: "https://pa1.aminoapps.com/7221/835afc0b1552a6b289aa18443c7c0f1d947145d0r1-500-257_hq.gif",
  eevee: "https://i.pinimg.com/originals/b8/53/4d/b8534d8fa3c0aca24298e194137d04f5.gif",
  jigglypuff: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6K6MQyEQhdfFLo3THxcVFjhOnIHNZ2KY2w&s",
   marill :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlUJGLWdNr9Py472ZnBDoFk2vq4vq4dKxYA&s"
};

let lastShown = {};

function showPokemon() {
   

  const mood = document.getElementById("moodInput").value.toLowerCase().trim();
  const display = document.getElementById("pokemonDisplay");
   document.body.className = "";  // Clear previous
document.body.classList.add(mood);  // Add new mood class

  if (!moodToPokemon[mood]) {
    display.innerHTML = `<p>No Pokémon for this mood.</p>`;
    return;
  }

  const options = [...moodToPokemon[mood]];
  const last = lastShown[mood];

  if (last) {
    const index = options.indexOf(last);
    if (index > -1) options.splice(index, 1); // remove last shown
  }

  const selected = options[Math.floor(Math.random() * options.length)];
  lastShown[mood] = selected;

  const imageUrl = imageLinks[selected];

  display.innerHTML = `
    <h2>${selected.charAt(0).toUpperCase() + selected.slice(1)}</h2>
    <img src="${imageUrl}" alt="${selected}">
  `;
}
