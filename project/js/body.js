

var animationOne = function (dom, out) {
    for (let i = 0; i < dom.length; i++) {
        var animation
        out == 'out' ? animation = ['fadeOutUp', 'fadeOutDown'] : animation = ['fadeInDown', 'fadeInUp']
        const odd = (i + 1) % 2
        dom[i].className = 'animated ' + animation[odd]
        dom[i].style.animationName = animation[odd]
        // var timer = setTimeout(() => {
        //     dom[i].className = ''
        //     dom[i].style.animationName = ''
        //     clearTimeout(timer)
        // }, 2000)
        out == 'out' ? dom[i].style.opacity = '0' : dom[i].style.opacity = '1'
    }
}
var scrollTop = 0
var _body = document.getElementById("body");
let a;
let isUpAndDown = function (a) {
    if (a == 'down') {
        head.className = "animate-slider"
    } else {
        console.log(a)
        head.className = "animate";
        headtwo.className = "change"
        logo.src = "./img/redLogo.png";
        for (var v of lis) { v.style.color = "balck" }
        for (var a of as) { a.style.color = "black"; a.style.borderColor = "black" }
        head.className = "animated";
    }
}
function scrollAnimate() {
    scrollTop = _body.scrollTop || _body.scrollTop
    // console.log(scrollTop)
    var d2Lis = document.querySelectorAll("#d2>ul>li")
    var d3divs = document.querySelectorAll("#d3_animation>div")
    //  当滚动条大于673，开始进场动画,前两个为向下进场，后两个为向上进场
    // 进场动画  675  690
    // 退场动画  660  675
    var d4 = document.querySelector("#d4")
    var d5 = document.querySelector("#d5")
    var d6 = document.querySelector("#d6")
    // console.log(d4one)
    // 头部滚动条事件

    if (scrollTop > 673 && scrollTop < 790) {
        if (a == 'down') {
            // 向下滚动
            animationOne(d2Lis)
        } else {
            animationOne(d2Lis, 'out')
        }
    } else if (scrollTop > 2099 && scrollTop < 2209) {
        if (a == 'down') {
            animationOne(d3divs)
        } else {
            animationOne(d3divs, 'out')
        }
    } else if (scrollTop > 2694 && scrollTop < 3041) {
        if (a == 'down') {
            d4.className = ''
        } else {
            d4.className = 'active'
        }
    } else if (scrollTop > 4075 && scrollTop < 4282) {
        if (a == 'down') {
            d5.className = ''
        } else {
            d5.className = 'active'
        }
    } else if (scrollTop > 4980 && scrollTop < 5200) {
        if (a == 'down') {
            d6.className = ''
        } else {
            d6.className = 'active'
        }
    }
}

var beforeScrollTop = _body.scrollTop
// console.log(a)
_body.onscroll = function () {
    var afterScrollTop = _body.scrollTop;
    const delta = afterScrollTop - beforeScrollTop;
    if (delta === 0) return false;
    // fn(delta > 0 ? "down" : "up");
    a = delta > 0 ? "down" : "up"
    beforeScrollTop = afterScrollTop;
    isUpAndDown(a)
    scrollAnimate();
}
var logo = document.querySelector("#head-second>div:first-child>img")
var lis = document.querySelectorAll("#head-second>div:nth-child(2) li")
var as = document.querySelectorAll("#head-second>div:nth-child(3) a")
var head = document.querySelector("#head")
var lunbo = document.querySelector("#lunbo")
window.onmousewheel = function (e) {
    // 如果是向下滚动就是-180,就改变下面的样式。top为0；
    if (scrollTop === 0) {
        // console.log(e.srcElement)
        if (e.wheelDelta < 0 && e.srcElement.nodeName == 'IMG') {
            _body.style.top = 0
            // 需要改变头二的背景和图片一、字体颜色
            // headMove(head,'headmovedelay')
            // 首先是头缩上去，改变样式后，头缩下来
            head.className = "animate";
            setTimeout(function () {
                headtwo.className = "change"
                logo.src = "./img/redLogo.png";
                for (var v of lis) { v.style.color = "black" }
                for (var a of as) { a.style.color = "black"; a.style.borderColor = "black" }
                head.className = "animated";
            }, 600)

        } else if (e.wheelDelta < 0 && e.srcElement.nodeName == 'IMG') {

            head.className = "animate-slider"
        } else if (e.wheelDelta > 0 && e.srcElement.nodeName !== 'IMG') {
            // console.log(1)
            // console.log(e.srcElement==lunbo)
            _body.style.top = "100%"
            head.className = "animate";
            setTimeout(function () {
                headtwo.className = "not-change"
                logo.src = "./img/whiteLogo.png";
                for (var v of lis) { v.style.color = "white" }
                for (var a of as) { a.style.color = "white"; a.style.borderColor = "white" }
                head.className = "animated";
            }, 600)
        }
    }
}
//，判断是否向上或向下

// console.log(a)
// _body.addEventListener('scroll',function(){
//     console.log(a)

// })

// 点击箭头事件
// 寻找箭头元素
var jiantou = document.getElementById("jiantou");
// 给箭头元素添加点击事件，点击之后可以下一个页面提升
//箭头编程白色,这是悬停！！！！
jiantou.onclick = function () {
    _body.style.top = 0
    // 需要改变头二的背景和图片一、字体颜色
    // headMove(head,'headmovedelay')
    // 首先是头缩上去，改变样式后，头缩下来
    head.className = "animate";
    setTimeout(function () {
        headtwo.className = "change"
        logo.src = "./img/redLogo.png";
        for (var v of lis) { v.style.color = "black" }
        for (var a of as) { a.style.color = "black"; a.style.borderColor = "black" }
        head.className = "animated";
    }, 600)
}


// 楼3动画效果
var mySwiper2 = new Swiper('.swiper', {
    autoplay: true,//可选选项，自动滑动
    speed: 1000,
    loop: true
})

