var toggleButtons = document.getElementsByClassName('toggleButton');
var allAbstracts = document.getElementsByClassName('abstractContent');

function toggleAbstract(event) {
    for (var j = 0; j < allAbstracts.length; j++) {
        if (allAbstracts[j] !== event.target.nextElementSibling) {
            allAbstracts[j].classList.add('hidden');
        }
    }
    var content = event.target.nextElementSibling;
    content.classList.toggle('hidden');
}

// for (var i = 0; i < toggleButtons.length; i++) {
//     toggleButtons[i].addEventListener('click', toggleAbstract);
// }

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('toggleButton')) {
        toggleAbstract(event);
    }
});