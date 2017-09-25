defaultLanguage = navigator.language.toLocaleLowerCase();

var currentLanguage = document.querySelectorAll("span.lang-" + defaultLanguage);
currentLanguage[0].classList.add('visible');
currentLanguage[1].classList.add('visible');

var radio = document.querySelectorAll("div#languages label input");

for (var q = 0; q < radio.length; q++) {
    radio[q].onclick = function(){
        var visibl = document.getElementsByClassName('visible');

        for (var j = 0; j < visibl.length; j++) {
            var invisible = visibl[j];
            invisible.classList.remove('visible');
        }

        var currentLang = this.value;

        var langEls = document.getElementsByClassName('lang-' + currentLang);

        for (var i = 0; i < langEls.length; i++) {
            var langEl = langEls[i];
            langEl.classList.add('visible');
        }
    };
}

var $save = document.querySelector('html body button.save')

$save.addEventListener('click', function(){
    alert("You choose ");
});