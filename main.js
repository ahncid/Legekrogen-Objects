const slideData = [
  {
    source: "/heros/forsiden.jpg",
    alt: "Billede 1",
    description: "LaLa Billede1",
  },
  {
    source: "/products/product1.jpg",
    alt: "Billede 2",
    description: "LaLa Billede2",
  },
  {
    source: "/products/product2.jpg",
    alt: "Billede 3",
    description: "LaLa Billede3",
  },
  {
    source: "/products/product3.jpg",
    alt: "Billede 4",
    description: "LaLa Billede4",
  },
];

const slideContainer = document.querySelector(".front-page");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slideData.length - 1;
  } else if (slideIndex >= slideData.length) {
    currentSlide = 0;
  }

  const newSlideHTML = `
      <div class="single-slide">
        <div class="slide-content">${slideData[currentSlide].description}</div>
        <img src="${slideData[currentSlide].source}" alt="${slideData[currentSlide].alt}" />
      </div>
    `;

  slideContainer.innerHTML = ""; // Clear the container
  slideContainer.insertAdjacentHTML("beforeend", newSlideHTML);

  currentSlide++;
}

showSlide(currentSlide);
setInterval(() => {
  showSlide(currentSlide);
}, 3000);

const productData = [
  {
    source: "./products/product1.jpg",
    alt: "Product 1",
    description: "LaLa Billede1",
  },
  {
    source: "./products/product2.jpg",
    alt: "Product 2",
    description: "LaLa Billede2",
  },
  {
    source: "./products/product3.jpg",
    alt: "Product 3",
    description: "LaLa Billede3",
  },
  {
    source: "./products/product4.jpg",
    alt: "Product 4",
    description: "LaLa Billede 4",
  },
];

const productContainer = document.querySelector(".toy-container");

productData.forEach((product) => {
  const html = `
      <div class="toy-div">
        <img src="${product.source}" alt="${product.alt}" />
        <div class="toy-price">
          <p>Tiny Republic Play</p>
          <p>Tandlægesæt i træ</p>
          <p>849 kr</p>
        </div>
      </div>
    `;
  productContainer.insertAdjacentHTML("beforeend", html);
});

const statementData = [
  {
    text: "“Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, da der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest.”",
    author: "Heidi, mor til Hugo på 3 år",
  },
  {
    text: "“Efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars”",
    author: "Karsten Hansen, Morfar",
  },
  {
    text: "“Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert”",
    author: "Omar, onkel til Anton på 11 år",
  },
];

const statementContainer = document.querySelector(".statement-container");

statementData.forEach((statement) => {
  const html = `
      <div class="statement-div">
        <p>${statement.text}</p>
        <i>- ${statement.author}</i>
      </div>
    `;
  statementContainer.insertAdjacentHTML("beforeend", html);
});
