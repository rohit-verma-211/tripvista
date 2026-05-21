function setTab(el) {
  document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
 const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".tab-indicator");
const tabTitle = document.getElementById("tab-title");
const tabText = document.getElementById("tab-text");

const tabData = {
  flights: {
    title: "Flights",
    text: "Search and book your flights easily."
  },
  hotels: {
    title: "Hotels",
    text: "Find the best hotels with amazing offers."
  },
  holidays: {
    title: "Holidays",
    text: "Explore holiday packages for your next trip."
  },
  bus: {
    title: "Bus",
    text: "Book bus tickets quickly and safely."
  },
  trains: {
    title: "Trains",
    text: "Check train routes and book train tickets."
  },
  cabs: {
    title: "Cabs",
    text: "Book cabs for local and outstation travel."
  }
};

function moveIndicator(tab) {
  indicator.style.left = tab.offsetLeft + "px";
  indicator.style.width = tab.offsetWidth + "px";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    moveIndicator(tab);

    const selectedTab = tab.getAttribute("data-tab");
    tabTitle.textContent = tabData[selectedTab].title;
    tabText.textContent = tabData[selectedTab].text;
  });
});

window.addEventListener("load", () => {
  const activeTab = document.querySelector(".tab.active");
  moveIndicator(activeTab);
});

window.addEventListener("resize", () => {
  const activeTab = document.querySelector(".tab.active");
  moveIndicator(activeTab);
});
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.querySelector("input").value;

  alert("Thank you for subscribing: " + email);

  this.reset();
});
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();

    const serviceName = this.querySelector("h3").textContent;
    alert("You selected: " + serviceName);
  });
});