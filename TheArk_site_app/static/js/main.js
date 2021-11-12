"use strict";

// locations

let imagesAfrica = [
  {
    imageDescription: "Swaziland landscape 1",
    imageSelection: "Swaziland_Copy.JPG",
  },

  {
    imageDescription: "Swaziland landscape 2",
    imageSelection: "Swaziland_landscape_Copy.JPG",
  },

  {
    imageDescription: "Swaziland Kid's Health Center",
    imageSelection: "Swaziland_Kids_Health_Center.jpg",
  },

  {
    imageDescription: "Swaziland Kid's Health Center 2",
    imageSelection: "Swaziland_Kids_Health_Center2.jpg",
  },
];

$(function () {
  let currentImage = 0;
  setImage(currentImage);

  //image container
  let imageContainer = document.querySelector(".js-images-container");
  imageContainer.style.transform = "translateX(" + currentImage + "px)";
  //next button
  let nextPage = document.querySelector(".next-page");

  nextPage.addEventListener("click", (event) => {
    event.preventDefault();

    imageContainer.style.transition = "all 1.5s ease-in-out";
    console.log("works!!!");
    currentImage++;
    console.log(currentImage);
    imageContainer.style.transform = "translateX(" + currentImage + "px)";

    if (currentImage === imagesAfrica.length) {
      currentImage = 0;
    }
    setImage(currentImage);
    console.log("works");
  });

  // previous button
  let prevPage = document.querySelector(".prev-page");
  prevPage.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("works");
    //event.preventDefault();
    imageContainer.style.transition = "all 1.5s ease-in-out";
    currentImage--;
    imageContainer.style.transform = "translateX(" + currentImage + "px)";
    if (currentImage < 0) {
      currentImage = imagesAfrica.length - 1;
    }
    setImage(currentImage);
  });
});

//function that establishes an image over to the designated picture
const setImage = (idx) => {
  let image = imagesAfrica[idx];
  //let imageContainer = $(".js-images-container");
  let imageContainer = document.querySelector(".js-images-container");
  // imageContainer.style.transition = "transform 11s ease-in-out";
  imageContainer.style.backgroundImage = "url(" + image.imageSelection + ")";

  //imageContainer.css("background-image", `url(${image.imageSelection})`);
  //imageContainer.css("color", "#fff");
  // imageContainer.css("font-size", "20px");
  imageContainer.style.color = "#fff";
  imageContainer.style.fontSize = "20px";

  $(".image-description").text(`${image.imageDescription}`);
};

//Portfolio Selections
selectedProjectPortfolio();

const webSite = document.querySelector(".web-site");
const modal = document.querySelector(".modal");
/*
const responsiveSite = document.querySelector(".responsive");
selectedElement();
responsiveSite.addEventListener("click", function () {
  console.log("works");
  window.open("https://fewd-fylo-landing-page.netlify.com", "_blank");
});
webSite.addEventListener("click", function () {
  modal.style.display = "block";
  //  window.open("https://jacobwebsite.netlify.com", "_blank");
});

const quizApp = document.querySelector(".quiz-app");
quizApp.addEventListener("click", function () {
  window.open("https://javascriptquizapp.netlify.com", "_blank");
});

const bootStrap = document.querySelector(".bootstrap");
bootStrap.addEventListener("click", function () {
  window.open("https://harmonyhotel.nfshost.com/", "_blank");
});
*/
const closeModal = document.querySelector(".modal_close-bar");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

function selectedProjectPortfolio() {
  window.addEventListener(
    "click",
    function (event) {
      if (event.target.classList.contains("responsive")) {
        window.open("https://fewd-fylo-landing-page.netlify.com", "_blank");
        this.console.log("selectedElement works!!");
      } else if (event.target.classList.contains("web-site")) {
        modal.style.display = "block";
      } else if (event.target.classList.contains("quiz-app")) {
        window.open("https://javascriptquizapp.netlify.com", "_blank");
      } else if (event.target.classList.contains("bootstrap")) {
        window.open("https://harmonyhotel.nfshost.com/", "_blank");
      } else if (event.target.classList.contains("api")) {
        window.open(
          "https://internationalexchangeconverter.netlify.app/",
          "_blank"
        );
      }
    },
    false
  );
}
/*
function createListItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
}
function appendChildren(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}
*/

//GOOGLE Map

const locations = [
  {
    name: "Washington DC",
    position: { lat: 38.88974, lng: -77.0143747 },
  },

  {
    name: "Northern Ireland",
    position: { lat: 54.7877, lng: -6.4923 },
    content: "Giants Causeway 06/12/19",
  },

  {
    name: "Swaziland",
    position: { lat: -26.3054, lng: 31.1367 },
    content: "Sidvokodvo, Swaziland",
  },

  {
    name: "South Africa",
    position: { lat: -26.2041, lng: 28.0473 },
    content: "Johannesburg, South Africa 10/01/2017",
  },

  {
    name: "Hawaii",
    position: { lat: 19.8968, lng: -155.5828 },
    content: "Honolulu, HI",
  },

  {
    name: "Philippines",
    position: { lat: 12.8797, lng: 121.774 },
    content: "Manila, Philippines",
  },

  {
    name: "Ireland",
    position: { lat: 53.3498, lng: -6.2603 },
    content: "Dublin, Ireland",
  },
];

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[0].position,
  });

  for (let location of locations) {
    const marker = new google.maps.Marker({
      position: location.position,
      map,
    });
    if (location.content) {
      const popup = new google.maps.InfoWindow({
        content: location.content,
      });
      // adding an event listener
      marker.addListener("click", function () {
        popup.open(map, marker); //two parameters position specified for zoomed area and
        //the marker of Ireland
      });
    }
  }
}
