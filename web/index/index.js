window.addEventListener("load", function(){
    let left_b = document.querySelectorAll(".left-b")
    let choose = document.querySelector(".cls-choose")
    let divs = left_b[0].children
    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener("mouseenter", function(){
            choose.style.display = "block"
        })
        divs[i].addEventListener("mouseleave", function(){
            choose.style.display = "none"
        })
    }

    let imgs = ["image/guanggao.jpg", "image/guanggao1.jpg"]
    let bot_btn = document.querySelector(".bot-btn")
    let img = document.querySelector("#guanggao")
    let right_b = document.querySelector(".right-b")
    for(let i = 0; i < imgs.length; i++){
        let new_di = document.createElement("buttom")
        new_di.className = `di${i+1}`
        new_di.addEventListener("click", function(){
            img.src = imgs[i]
            img.setAttribute("index", i)
        })
        bot_btn.appendChild(new_di)
    }
    let l_btn = document.querySelector(".left-btn")
    let r_btn = document.querySelector(".right-btn")
    l_btn.addEventListener("click", function(){
        let index = parseInt(img.getAttribute("index"))
        index = (index==0)?imgs.length-1:index-1
        img.src = imgs[index]
        img.setAttribute("index", index)
    })
    r_btn.addEventListener("click", function(){
        let index = parseInt(img.getAttribute("index"))
        index = (index==imgs.length-1)?0:index+1
        img.src = imgs[index]
        img.setAttribute("index", index)
    })
    let timer = this.setInterval(function(){
        r_btn.click()
    }, 2000)
    right_b.addEventListener("mouseenter", function(){
        clearInterval(timer)
        timer = null
    })
    right_b.addEventListener("mouseleave", function(){
        timer = setInterval(function(){
            r_btn.click()
        }, 2000)
    })
})