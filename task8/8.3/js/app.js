let icon = document.querySelector(".icon")
let topmenu = document.getElementById("topmenu")
let links = $('.menu_link')
//console.log(links)

icon.addEventListener("click", function (e) {
    icon.classList.toggle("ac");
    topmenu.classList.toggle("hidden");
})

for (let i = 0; i< links.length; i++) {
    let link = links[i];
    $(link).mouseover(function() {
        $(link).css("color", "black");;
    });
        $(link).mouseout(function() {
        $(link).css("color", "white");;
    });
}