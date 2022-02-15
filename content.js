const nb_sounds = 5;
function random_sound(nb_file) {
    var nb_sound = Math.ceil(Math.random() * nb_file);
    return nb_sound;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false);
    function onclick() {
        const nb_sound = random_sound(nb_sounds);
        new Audio(`./sounds/fart${nb_sound}.mp3`).play();
    }
});