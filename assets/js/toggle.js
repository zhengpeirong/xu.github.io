var toggleButtons = document.getElementsByClassName('toggleButton');
var allAbstracts = document.getElementsByClassName('abstractContent');

// for (var i = 0; i < toggleButtons.length; i++) {
//     toggleButtons[i].addEventListener('click', function() {
//         // 隐藏所有的 Abstract 内容，除开当前的Abstract
//         for (var j = 0; j < allAbstracts.length; j++) {
//             if (allAbstracts[j] !== event.target.nextElementSibling) {
//                 allAbstracts[j].classList.add('hidden');
//             }
//         }
//         // 显示与当前按钮相关的 Abstract 内容
//         var content = event.target.nextElementSibling; // 获取紧随其后的元素（即要展示/隐藏的内容）
//         // console.log(event.target); // 输出点击的按钮元素
//         // console.log(event.target.nextElementSibling); // 输出点击的按钮元素
//         content.classList.toggle('hidden');
//         // if (allAbstracts[i] == event.target.nextElementSibling) {
//         //     // 不管点击到谁，都会有反应，但是只改变点击到的那个，也就是i
//         //     content.classList.toggle('hidden');
//         // allAbstracts[i].classList.toggle('hidden');
//     });
// }


for (var i = 0; i < toggleButtons.length; i++) {
    (function(index) {
        toggleButtons[index].addEventListener('click', function(event) {
            for (var j = 0; j < allAbstracts.length; j++) {
                if (allAbstracts[j] !== event.target.nextElementSibling) {
                    allAbstracts[j].classList.add('hidden');
                }
            }
            var content = event.target.nextElementSibling;
            content.classList.toggle('hidden');
        });
    })(i);
}
// 在这个修改后的代码中，我将事件监听器函数包装在一个 IIFE (立即调用的函数表达式）中，并传入了当前的 i 值。这为每次迭代创建了一个新的作用域，i 的值能够被正确地捕获到每个事件监听器中。



