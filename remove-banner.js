// Remove warning banners that the browser is outdated
let topBannerContainer = document.getElementById("banners");
if (topBannerContainer !== null) {
    topBannerContainer.classList.add("hidden")
}


// Resize the large padding removing the banner creates
let topSpacerBar = document.getElementsByClassName("topbar-spacer");
if (topSpacerBar !== null && topSpacerBar[0] !== undefined) {
    topSpacerBar[0].style.paddingTop = "50px";
}


// Remove search warning banner
let searchWarningContainer = document.getElementsByClassName("BannersContainer");
if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
    searchWarningContainer[0].classList.add("hidden");
}


// make sure that if the banner doesn't exist, wait until it does before removing it
let searchObserver = new MutationObserver(mutations => {
    let searchWarningContainer = document.getElementsByClassName("BannersContainer");
    if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
        searchWarningContainer[0].classList.add("hidden");
        searchObserver.disconnect();
    }
});
searchObserver.observe(document.body, {childList: true, subtree: true});
