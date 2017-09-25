defaultLanguage = navigator.language.toLocaleLowerCase();

var currentLanguage = document.querySelectorAll("span.lang-" + defaultLanguage);
currentLanguage[0].classList.add('visible');
currentLanguage[1].classList.add('visible');

var radio = document.querySelectorAll("div#languages label input");

for (var q = 0; q < radio.length; q++) {
    radio[q].onclick = function(){
        var dell = document.getElementsByClassName('visible');
        console.log(dell);
        for (var j = 0; j < dell.length; j++) {
            var invisible = dell[j];
            invisible.classList.remove('visible');
            console.log(j);
        }

        var currentLang = this.value;

        var langEls = document.getElementsByClassName('lang-' + currentLang);

        for (var i = 0; i < langEls.length; i++) {
            var langEl = langEls[i];
            langEl.classList.add('visible');
        }
    };
}

var $save = document.querySelector('html body input submit#save')

$save.addEventListener('click', function(){
    alert("You choose " );
});