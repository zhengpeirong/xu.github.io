var toggleButtons = document.getElementsByClassName('toggleButton');
var allAbstracts = document.getElementsByClassName('abstractContent');
var flag = false;

function toggleAbstract(event) {
    if (flag) return; // 如果标志为true，则直接返回，不执行函数
    flag = true; // 第一次执行函数时设置标志为true

    for (var j = 0; j < allAbstracts.length; j++) {
        if (allAbstracts[j] !== event.target.nextElementSibling) {
            allAbstracts[j].classList.add('hidden');
        }
    }
    var content = event.target.nextElementSibling;
    content.classList.toggle('hidden');

    flag = false; // 在函数执行完毕后将标志重置为false

}

for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', toggleAbstract);
}