var toggleButtons = document.getElementsByClassName('toggleButton');

for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        // 隐藏所有的 Abstract 内容，除开当前的Abstract
        var allAbstracts = document.getElementsByClassName('abstractContent');
        for (var j = 0; j < allAbstracts.length; j++) {
            if (allAbstracts[j] !== event.target.nextElementSibling) {
                allAbstracts[j].classList.add('hidden');
            }
        }
        // 显示与当前按钮相关的 Abstract 内容
        var content = event.target.nextElementSibling; // 获取紧随其后的元素（即要展示/隐藏的内容）
        // console.log(event.target); // 输出点击的按钮元素
        // console.log(event.target.nextElementSibling); // 输出点击的按钮元素
        content.classList.toggle('hidden');
    });
}
