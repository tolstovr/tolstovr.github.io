/* IO scroll animation */
function element_visible(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add("shown");            
        };
    });
};

let options = {threshold: [0.15]};
let observer = new IntersectionObserver(element_visible, options);
let elements = $(".fade-right, .fade-left, .fade-up");

for (let elm of elements) {
    observer.observe(elm);
};

/* projects styling */
var projects = $(".project");
for (let i = 0; i < projects.length; i++) {
    if (i % 2 != 0) {
        $(projects[i]).addClass("odd");
    }
}

/* input masks */
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").click(function(){
    $(this).setCursorPosition(3);
  }).mask("+7 (h99) 999-99-99");

/* form styling */
$(".contact .rectangle").height($(".contact form").height() - $(".contact form > div").height() - 25);

/* current year */
$("#year").html(new Date().getFullYear());