const themeToggler = document.getElementById("theme-toggler")
themeToggler.addEventListener("click", () => {
    let currentTheme = themeToggler.dataset.theme
    if (currentTheme === "dark") {
        document.querySelector('link[href*="dark.css"]').remove()
        document.head.innerHTML += '<link rel="stylesheet" href="./assets/css/light.css">';
        themeToggler.dataset.theme = "light"
    } else {
        document.querySelector('link[href*="light.css"]').remove()
        document.head.innerHTML += '<link rel="stylesheet" href="./assets/css/dark.css">';
        themeToggler.dataset.theme = "dark"
    }
})