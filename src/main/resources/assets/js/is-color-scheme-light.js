(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('class', 'has-background-light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('class', 'has-background-dark');
    }
})()
