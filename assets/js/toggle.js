var toggleButtons = document.getElementsByClassName('toggleButton');
var allAbstracts = document.getElementsByClassName('abstractContent');

function toggleAbstract(event) {
    if (event.target.hasAttribute('data-executed')) {
        return; // 如果已经执行过函数，则直接返回，不再执行
    }

    for (var j = 0; j < allAbstracts.length; j++) {
        if (allAbstracts[j] !== event.target.nextElementSibling) {
            allAbstracts[j].classList.add('hidden');
        }
    }
    var content = event.target.nextElementSibling;
    content.classList.toggle('hidden');

    event.target.setAttribute('data-executed', 'true'); // 设置标志表示已经执行过函数
}

for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', toggleAbstract);
}