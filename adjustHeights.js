const leftPanel = document.getElementById("left");
const rightPanel = document.getElementById("right");

const headerDiv = document.querySelector(".header");

const footerDiv = document.querySelector(".footer");

const rightPanelHeight = rightPanel.getBoundingClientRect().height;

leftPanel.style.height = rightPanelHeight + 'px';

footerDiv.style.height = headerDiv.getBoundingClientRect().height + 'px';
footerDiv.style.width = headerDiv.getBoundingClientRect().width + 'px';
