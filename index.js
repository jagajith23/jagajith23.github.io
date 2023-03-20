const updateScrollPercentage = function () {
  const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector("[data-scrollPercentage] .percentage");
  percentageVal = document.querySelector("#percentage-value");

  if (bodyHeight - contentScrolled <= heightOfWindow) {
  } else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got / total) * 100);
    percentage.style.width = percent + 1 + "%";
  }
};

window.addEventListener("scroll", updateScrollPercentage);

const navbarToggle = navbar.querySelector("#navbar-toggle");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

var screenWidth = window.innerWidth;
if (screenWidth > 768) {
  educationalInfo = document.getElementsByClassName("educational-info")[0];
  workInfo = document.getElementsByClassName("work-info")[0];

  educationalInfo.addEventListener("mouseover", function () {
    if (workInfo.classList.contains("hover")) {
      workInfo.classList.remove("hover");
    }
    if (!educationalInfo.classList.contains("hover")) {
      educationalInfo.classList.add("hover");
    }
  });

  workInfo.addEventListener("mouseover", function () {
    if (educationalInfo.classList.contains("hover")) {
      educationalInfo.classList.remove("hover");
    }
    if (!workInfo.classList.contains("hover")) {
      workInfo.classList.add("hover");
    }
  });
  educationalInfo.classList.add("hover");
}

function inViewport(element) {
  var bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0);
}

window.addEventListener("scroll", function () {
  var welcomeEle = document.getElementsByClassName("welcome-container")[0];
  if (inViewport(welcomeEle)) {
    welcomeEle.classList.add("is-inViewport");
  } else {
    if (welcomeEle.classList.contains("is-inViewport")) {
      welcomeEle.classList.remove("is-inViewport");
    }
  }

  var elements = document.querySelectorAll(".proj-row");
  for (var i = 0; i < elements.length; i++) {
    if (inViewport(elements[i])) {
      elements[i].classList.add("is-inViewport");
    } else {
      if (elements[i].classList.contains("is-inViewport")) {
        elements[i].classList.remove("is-inViewport");
      }
    }
  }

  var contactEle = document.getElementById("contact-section");
  if (inViewport(contactEle)) {
    contactEle.classList.add("is-inViewport");
  } else {
    if (contactEle.classList.contains("is-inViewport")) {
      contactEle.classList.remove("is-inViewport");
    }
  }
});

document.getElementsByClassName("copyright")[0].innerHTML =
  "&copy; " +
  new Date().getFullYear() +
  " " +
  document.getElementsByClassName("copyright")[0].innerHTML;

const items = document.querySelectorAll(".skill");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.5)";
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        const distance = Math.sqrt(
          Math.pow(item.offsetLeft - otherItem.offsetLeft, 2) +
            Math.pow(item.offsetTop - otherItem.offsetTop, 2)
        );
        if (distance >= 250) {
          otherItem.style.transform = "scale(1.)";
        }
        if (distance < 250 && distance >= 150) {
          otherItem.style.transform = "scale(1.2)";
        }

        if (distance < 150 && distance >= 50) {
          otherItem.style.transform = "scale(1.4)";
        }
      }
    });
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "";
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.transform = "";
      }
    });
  });
});
