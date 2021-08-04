var links = document.getElementsByTagName('a');

for (var i = 0, l = links.length; i < l; i++) {
    links[i].onmousedown = (event) => {
        if (Math.random() < 0.01) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
            event.preventDefault();
        }
    }
}