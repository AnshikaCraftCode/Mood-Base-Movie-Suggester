const movies = {
  happy: [

      
    {
      title: "Paddington",
      img: "https://contentserver.com.au/assets/603772_p10569889_p_v8_ac.jpg",
      text: "Pure joy and kindness 🧸"
    },
    {
      title: "The Intern",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu68X3M7a-yXF0sYB3oGJi100hDurXgpWylmnftrRWOR27NOPS",
      text: "Warm, light & comforting ☀️"
    }
  ],

  sad: [
    {
      title: "The Pursuit of Happyness",
      img: "https://image.tmdb.org/t/p/w500/f6l9rghSHORkWLurUGJhaKAiyjY.jpg",
      text: "Hope never gives up 🌈"
    },
    
    {
      title: "A Beautiful Day in the Neighborhood",
      img: "https://image.tmdb.org/t/p/w500/p9vCAVhDK375XyobVcKqzqzsUHE.jpg",
      text: "Soft healing vibes 🌿"
    }
  ],

  motivated: [
    
    {
      title: "Coach Carter",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-5TNhnknHdtWB8QH0Ms6TY6qJInc6N_JoPBO_euib420_b_zM",
      text: "Discipline creates winners 💪"
    },
    {
      title: "October Sky",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJTKYWUSlAOEL00iXTwrV4G7Ot5Mn-ru2cekOGfbBqx3Za_ks",
      text: "Dreams beyond limits 🚀"
    }
  ],

  relaxed: [
    {
      title: "Forrest Gump",
      img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      text: "Life is simple & beautiful 🌸"
    },
    {
      title: "Little Miss Sunshine",
      img: "https://image.tmdb.org/t/p/w500/wKn7AJw730emlmzLSmJtzquwaeW.jpg",
      text: "Warm, real & human ☀️"
    },
    {
      title: "Chef",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOeXv4-xf9AgU-rtq20cABkrPpWKtzm9swFD7mNKwYhydmMeLm",
      text: "Food, travel & happiness 🍔"
    }
  ]
};

function showMovies() {
  const mood = document.getElementById("mood").value;
  const movieList = document.getElementById("movieList");

  movieList.innerHTML = "";

  if (!mood) {
    movieList.innerHTML = "<p>Please select a mood 😊</p>";
    return;
  }

  movies[mood].forEach((movie, index) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.style.animationDelay = `${index * 0.15}s`;

    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.text}</p>
    `;

    movieList.appendChild(card);
  });
}

