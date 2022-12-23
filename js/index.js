//dark theme activator
var is_dark = window.matchMedia("(prefers-color-scheme: dark)").matches
if (is_dark) {
    $("*").addClass("dark");
    $("#theme-toggler").removeClass("bi-sun");
    $("#theme-toggler").addClass("bi-moon");
}

$("#theme-toggler").click(function() {
    $(this).toggleClass("bi-sun");
    $(this).toggleClass("bi-moon");
    $("*").toggleClass("dark");
    is_dark = !is_dark;
    var current = `<li>Стек: HTML, CSS, JS, TS, JQuery, Bootstrap, Python/Tkinter</li>
    <li>Английский: B2 (upper-intermediate)</li>
    <li>Увлекаюсь техникой и готовлюсь к ЕГЭ</li>
    <li>Люблю вкусно покушать</li>`
    $("#ul-head").html(is_dark ? current+'<li>Потихоньку веду свой телеграм: <a href="https://t.me/robertproducts" target="_blank">https://t.me/robertproducts</a></li>' : current+"<li>Переходи на темную сторону - в правом верхнем углу</li>")
});


//scroll animation
function element_visible(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-shown');            
        };
    });
};

let options = {threshold: [0.15]};
let observer = new IntersectionObserver(element_visible, options);
let elements = $(".fade-up, .scale");

for (let elm of elements) {
    observer.observe(elm);
};


//navbar script
$("#navbar-toggler").click(function() {
    $(this).toggleClass("bi-list");
    $(this).toggleClass("bi-box-arrow-up");
    $(".navbar-content").fadeToggle(125);
});

$(".navbar-content a").click(function() {
    $("#navbar-toggler").addClass("bi-list");
    $("#navbar-toggler").removeClass("bi-box-arrow-up");
    $(".navbar-content").fadeOut(125);
});

$(window).click(function() {
    $("#navbar-toggler").addClass("bi-list");
    $("#navbar-toggler").removeClass("bi-box-arrow-up");
    $(".navbar-content").fadeOut(125);
});

$('.navbar-content, #navbar-toggler').click(function(event){
    event.stopPropagation();
});


//scrollspy
$(document).ready(function() {
    var $menu = $(".scrollspy");
    var $menu_a = $(".nav-link", $menu);
    var id = false;
    var sections = [];
    var hash = function(hash) {
        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            location.hash = h;
        }
    }
    $menu_a.click(function(event) {
        event.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top
            },
            {
                duration: 0,
                complete: hash($(this).attr("href"))
            }
        );
    });
    $menu_a.each(function() {
        sections.push($($(this).attr("href")));
    });
    $(window).scroll(function(event) {
        var scrolling = $(this).scrollTop() + $(this).height() / 3;
        var scroll_id;
        for (var i in sections) {
            var section = sections[i];
            if (scrolling > section.offset().top) {
                scroll_id = section.attr("id");
            }
        }
        if (scroll_id !== id) {
            id = scroll_id;
            $menu_a.removeClass("selected");
            $("a[href='#"+id+"']", $menu).addClass("selected");
        }
    });
});