/**
 * Loads content from a tab and updates tab statuses.
 * @param {int} num 
 */
function loadTab(num) {
    const hiddenElem = document.getElementsByClassName("tab");
    for(let i = 0; i < hiddenElem.length; i++) {
        hiddenElem[i].style.visibility = "hidden";
        hiddenElem[i].style.display = "none";
    }

    const selectedElem = document.getElementById(`tab${num}`);
    selectedElem.style.visibility = "visible";
    selectedElem.style.display = "block";

    const selectedTabs = document.getElementsByClassName("tablink");
    for(let i = 0; i < selectedTabs.length; i++) {
        selectedTabs[i].classList.remove("selectedTabLink");
    }

    selectedTabs[num-1].classList.add("selectedTabLink");
}