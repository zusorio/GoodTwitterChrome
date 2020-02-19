// Remove warning banners that the browser is outdated
let topBannerContainer = document.getElementById("banners");
if (topBannerContainer !== null) {
    topBannerContainer.classList.add("hidden")
}
// Remove search warning banner
let searchWarningContainer = document.getElementsByClassName("BannersContainer");
if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
    searchWarningContainer[0].classList.add("hidden")
}
// Resize the large padding removing the banner creates
let topSpacerBar = document.getElementsByClassName("topbar-spacer");
if (topSpacerBar !== null && topSpacerBar[0] !== undefined) {
    topSpacerBar[0].style.paddingTop = "50px";
}

