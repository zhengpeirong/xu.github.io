var toggleButtons = document.getElementsByClassName('toggleButton');

for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        // 隐藏所有的 Abstract 内容
        var allAbstracts = document.getElementsByClassName('abstractContent');
        for (var j = 0; j < allAbstracts.length; j++) {
            allAbstracts[j].classList.add('hidden');
        }
    });
}

var content = this.nextElementSibling; // 获取紧随其后的元素（即要展示/隐藏的内容）
// 显示与当前按钮相关的 Abstract 内容
content.classList.toggle('hidden');
