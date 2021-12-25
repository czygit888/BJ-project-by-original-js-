window.onload=init
function init(){
    var pre = [
        `<pre>
        北大是常为新的，
    
        改进的运动的先锋，
        
        要使中国向着好的，
    
        网上的道路走。
        </pre>`,
        `<pre>
        燕园画卷美不胜收，
    
        恰似你将要留在这里的，
    
        青春年华，
    
        北京大学欢迎您！
        </pre>`,
        `<pre>
        勤奋，严谨，
    
        求实，创新。
        </pre>`,
        `<pre>
        思想兼容、自由并包
    
    
    
        教育应指导社会，
    
        而非追逐社会。
        </pre>`,
        `<pre>
        博学之，审问之，
    
        慎思之，明辨之，
    
        笃行之。
        </pre>`,
        `<pre>
        志于道，据与德，
    
        依于仁，游于艺。
        </pre>`,
        `<pre>
        秋冬春夏，
    
        伴随着四时的运行，
    
        青春和燕园融为一体，
    
        北大成为永恒。
        </pre>`
    ]
    var ul = [
        { ul1: ["北大简介", "组织机构", "标识系统"], ul2: ["现任领导", "历史名人"], ul3: ["历任领导", "信息公开"] },
        { ul1: ["本科生", "继续教育"], ul2: ["研究生", "学生奖助信息"], ul3: ["留学生", "暑期学校"] },
        { ul1: ["理学院", "社会科学学部", "跨学科类"], ul2: ["信息与工程科学部", "经济与管理学部", "深圳研究生院"], ul3: ["人文学部", "医学部"] },
        { ul1: ["师资队伍", "海外学习", "教学网"], ul2: ["管理部门", "课表查询", "证书验证"], ul3: ["课程设置", "慕课", "燕云直播"] },
        { ul1: ["科研成果", "管理部门"], ul2: ["研究机构"], ul3: ["学术期刊"] },
        { ul1: ["国际交流", "港澳台交流"], ul2: ["国内合作", "北京论坛"], ul3: ["教育基金会", "孔子学院"] },
        { ul1: ["菁菁校园", "体育健康", "管理服务"], ul2: ["讲座演出", "社团活动", "校历"], ul3: ["艺术生活", "档案馆藏"] },
    ]
    var content = [
        { img: "./img/headFirst.jpg", pre: pre[0], ul: ul[0] },
        { img: "./img/headSecond.jpg", pre: pre[1], ul: ul[1] },
        { img: "./img/headThird.jpg", pre: pre[2], ul: ul[2] },
        { img: "./img/headFour.jpg", pre: pre[3], ul: ul[3] },
        { img: "./img/headFive.jpg", pre: pre[4], ul: ul[4] },
        { img: "./img/headSix.jpg", pre: pre[5], ul: ul[5] },
        { img: "./img/headSeven.jpg", pre: pre[6], ul: ul[6] },
    ]
    var position=["40px","40px",'80px','160px',"300px","450px","600px"]
    // console.log(content[0].img)
    // 添加事件处理函数，对应填充内容
    // 查找对需要绑定事件函数的元素
    var lis = document.querySelectorAll("#head-second>div>ul>li")
    // console.log((lis))
    // 获得整个伪数组，进行循环遍历
    for (let i = 0; i < lis.length; i++) {
        // 在first-second中追加一个div，这个div脱离文档流，不占据页面空间
        // div里有三个div，采用弹性布局，图片，pre，三个 ul
        var pdiv = document.createElement("div");
        //这个div得类名都没有找到
        pdiv.className = "hide-div";
        var headtwo = document.getElementById("head-second")
        var kdiv = document.createElement("div")
        var img = document.createElement("img")
        var pre = document.createElement("pre")
        // 开始添加kdiv中的三个ul
        var ul1=document.createElement("ul")
        var ul2=document.createElement("ul")
        var ul3=document.createElement("ul")
        lis[i].onmouseenter = function () {
            // 寻找修改的元素--就是给pdiv添加三个div，填充内容
            img.src = content[i].img
            pdiv.appendChild(img);
            // 开始添加pre
            pre.innerHTML=content[i].pre
            pdiv.appendChild(pre)
            const str1 = ul[i].ul1.map(li=>`<li>${li}</li>`).join('')
            ul1.innerHTML=str1
            const str2=ul[i].ul2.map(li=>`<li>${li}</li>`).join("")
            // console.log(str2)
            ul2.innerHTML=str2
            const str3=ul[i].ul3.map(v=>`<li>${v}</li>`).join("")
            ul3.innerHTML=str3
            kdiv.appendChild(ul1)
            kdiv.appendChild(ul2)
            kdiv.appendChild(ul3)
            pdiv.appendChild(kdiv);
            headtwo.appendChild(pdiv);
            pdiv.style.left=position[i]
        }
        lis[i].onmouseleave = function () {
            headtwo.removeChild(pdiv)
        }
    }
    
    let a;
    let isUpAndDown = function (a) {
        if (a == 'down') {
            head.className = "animate-slider"
        } else {
            head.className = "animate";
            headtwo.className = "change"
            logo.src = "./img/redLogo.png";
            for (var v of lis) { v.style.color = "balck" }
            for (var a of as) { a.style.color = "black"; a.style.borderColor = "black" }
            head.className = "animated";
        }
    }
    // 头部滚动条事件
    var logo = document.querySelector("#head-second>div:first-child>img")
    var lis = document.querySelectorAll("#head-second>div:nth-child(2) li")
    var as = document.querySelectorAll("#head-second>div:nth-child(3) a")
    var head = document.querySelector("#head")
    var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    window.addEventListener('scroll',()=>{

        var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        // fn(delta > 0 ? "down" : "up");
        a = delta > 0 ? "down" : "up"
        beforeScrollTop = afterScrollTop;
        isUpAndDown(a)
    })
}
