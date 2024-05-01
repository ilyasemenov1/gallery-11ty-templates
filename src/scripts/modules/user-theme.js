function getAutoTheme() {
    if (window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark-theme");
            return "active";
        } else {
            document.documentElement.classList.remove("dark-theme");
            return "disactive";
        }
}

function getUserTheme() {
    const theme = JSON.parse(localStorage.getItem("theme"));

    if (!isNaN(theme)) {

        localStorage.setItem("theme", JSON.stringify("sys"));
        userTheme = getAutoTheme();
        setUpMode("sys", userTheme);
        return;
    }

    switch(theme) {
        case "active":
            document.documentElement.classList.add("dark-theme");
            setUpMode(theme);
            break
        case "sys":
            userTheme = getAutoTheme();
            setUpMode(theme, userTheme);
            break
        case "disactive":
            document.documentElement.classList.remove("dark-theme");
            setUpMode(theme);
            break
        default:
            getAutoTheme();
            localStorage.setItem("theme", JSON.stringify("sys"));

            setUpMode("sys");
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    getAutoTheme();
});

getUserTheme();
