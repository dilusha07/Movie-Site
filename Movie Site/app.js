const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectionAll("img").length;
    let clickCounter = 0;
    arrow.assEventListner("click", () =>{
      const ratio = Math.floor(window.innerWidth/270);
      clickCounter++;
       if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`; 

      } else {
          movieLists[i].style.transform = "translateX(0)";
          clickCounter = 0;
      }

    });
    console.log(Math.floor(window.innerWidth / 270));
});

//Toggle

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  "container,.movie-list-title,.nav-barr-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) =>{
    item.classlist.toggle("active");
  });
  ball.classList.toggle("active");
});