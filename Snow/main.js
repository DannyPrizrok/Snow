function mainPage() {
    window.location.href = 'index.html';
}
function aboutPage() {
    window.location.href = 'about.html';
}
function contactPage() {
    window.location.href = 'contact.html';
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


