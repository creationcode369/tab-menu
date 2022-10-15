onload = init;
var tabs, contents;

function init() {
    tabs = document.querySelectorAll(".tab");    
    contents = document.querySelectorAll(".content");    
    
    onTab(0);
}

function onTab(i) {
    tabs.forEach( (_,n) => {
        tabs[n].className = "tab inactive";
        contents[n].className = "content off";
    })
    tabs[i].className = "tab active";
    contents[i].className = "content show";
}