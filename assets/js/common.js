$(document).ready(function() {
    // add toggle functionality to abstract and bibtex buttons
    $('a.abstract').click(function() {
      $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
      $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
      $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
      $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
  
    // bootstrap-toc
    if($('#toc-sidebar').length){
      var navSelector = "#toc-sidebar";
      var $myNav = $(navSelector);
      Toc.init($myNav);
      $("body").scrollspy({
        target: navSelector,
      });
    }
  
    // add css to jupyter notebooks
    const cssLink = document.createElement("link");
    cssLink.href  = "../css/jupyter.css";
    cssLink.rel   = "stylesheet";
    cssLink.type  = "text/css";
  
    let theme = localStorage.getItem("theme");
    if (theme == null || theme == "null") {
      const userPref = window.matchMedia;
      if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
    }
  
    $('.jupyter-notebook-iframe-container iframe').each(function() {
      $(this).contents().find("head").append(cssLink);
  
      if (theme == "dark") {
        $(this).bind("load",function(){
          $(this).contents().find("body").attr({
            "data-jp-theme-light": "false",
            "data-jp-theme-name": "JupyterLab Dark"});
        });
      }
    });
  });
  


/* 
总共有以下11个期刊、会议的类别：
  INFOCOM
  CVPR
  ICML
  NIPS
  IEEE WC
  TWC
  TMC
  TPDS
  TVT
  TITS
  JAS 
*/

document.addEventListener("DOMContentLoaded", function() {
  // 获取所有abbr元素，分别分配颜色
    let abbrElements = document.querySelectorAll('abbr.badge');

    // 关键词和颜色的映射
    const keywordColorMap = {
        "INFOCOM": "#FF9999",
        "CVPR": "#FFCC99",
        "ICML": "#FFFF99",
        "NIPS": "#CCFF99",
        "IEEE WC": "#99FF99",
        "TWC": "#99FFCC",
        "TMC": "#99FFFF",
        "TPDS": "#99CCFF",
        "TVT": "#9999FF",
        "TITS": "#CC99FF",
        "JAS": "#FF99FF"
    };

    abbrElements.forEach(element => {
        for (let keyword in keywordColorMap) {
            if (element.textContent.includes(keyword)) {
                element.style.backgroundColor = keywordColorMap[keyword];
                element.style.color = "white";
                break;  // 匹配到关键词后跳出循环
            }
        }
    });
});