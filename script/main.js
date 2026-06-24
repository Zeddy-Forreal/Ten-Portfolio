let nav_buttons = document.querySelectorAll(".nav_button");
let contacts_inputs = document.querySelectorAll("#contacts .inp")
let nav_buttons_parent = document.querySelector("#side_bar")
let page_buttons = document.querySelectorAll(".page_button");
let pages = document.querySelectorAll("#container > section");
let page_titles = document.querySelectorAll("#page_title")
let side_bar_button = document.querySelector("#side_bar_button");
let side_bar_close = document.querySelector("#close");
let theme_mode = document.querySelector(".theme_mode");
let form = document.querySelector("#contacts form")
let light_mode = true;
let troll_elems = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M7 8l-4 4l4 4" />
	<path d="M17 8l4 4l-4 4" />
	<path d="M14 4l-4 16" />
</svg>`,
  
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
	<path d="M12 12h3.5" />
	<path d="M12 7v5" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coffee">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
	<path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
	<path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
	<path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" />
	<path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-imac-heart">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M10 17h-6a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
	<path d="M3 13h9" />
	<path d="M8 21h3.5" />
	<path d="M10 17l-.5 4" />
	<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
</svg>`
];
window.onload = ()=>{
    page_buttons[0].click()
}
nav_buttons.forEach((elem)=>{
    elem.onmouseenter = ()=>{
        Dactivate(document.querySelectorAll("#side_bar hr"))
        elem.previousElementSibling.classList.add("active")
        elem.nextElementSibling.classList.add("active")
    }
    elem.onmouseleave = ()=>{
        Dactivate(document.querySelectorAll("#side_bar hr"))
    }

})

page_buttons.forEach((elem,ind)=>{
    elem.onclick = ()=>{

        if(!elem.classList.contains("active")){
            Dactivate(page_buttons, elem)
            Dactivate(pages, pages[ind])
            if(pages[ind].getAttribute("id") == "home"){
                troll()
            }
            if(nav_buttons_parent.classList.contains("active")){
                side_bar_button.style.transform = "scale(1)"
                nav_buttons_parent.classList.remove("active");
                document.querySelector("#container").classList.remove("un_active")
        }
        }
    }
})


dark_colors = ["#24273c", "#474c58", "#373d49", "#39415b", "#f8f5f1", "#ffffff", "#ffc557", "#171627","1px 4px 6px rgb(0 0 0)", "0 0 25px var(--main_color)", "0 0 25px var(--main_color)", "0 0 50px var(--main_color)"]
light_colors = ["#F6EDE3", "#353535", "#d3c8bb", "#6f68ad", "#181818", "#e8dbff", "#ffc557","#272727","1px 4px 6px rgba(0, 0, 0, 0.25)", "2px 2px var(--color1)", "0 0 0 var(--main_color)", "0 0 var(--main_color)"]


theme_mode.onclick = ()=>{
    light_mode = !light_mode;

    if(light_mode){
        change_colors(light_colors)
                theme_mode.firstElementChild.classList.remove("fa-sun-bright")
        theme_mode.firstElementChild.classList.add("fa-moon")

    }else{
        change_colors(dark_colors)
                theme_mode.firstElementChild.classList.add("fa-sun-bright")
        theme_mode.firstElementChild.classList.remove("fa-moon")
    }
}
function troll(){
        
        document.querySelectorAll(".troll").forEach((troll)=>{
            ind = Math.floor(Math.random()*troll_elems.length)

            troll.innerHTML = troll_elems[ind];
            troll_elems.splice(ind,1)
        })
        troll_elems = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M7 8l-4 4l4 4" />
	<path d="M17 8l4 4l-4 4" />
	<path d="M14 4l-4 16" />
</svg>`,
  
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
	<path d="M12 12h3.5" />
	<path d="M12 7v5" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coffee">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
	<path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
	<path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
	<path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" />
	<path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
</svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-imac-heart">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M10 17h-6a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
	<path d="M3 13h9" />
	<path d="M8 21h3.5" />
	<path d="M10 17l-.5 4" />
	<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
</svg>`
];

}
function change_colors(arr){
    document.documentElement.style.setProperty("--body", arr[0])
    document.documentElement.style.setProperty("--color1", arr[1])
    document.documentElement.style.setProperty("--color2", arr[2])
    document.documentElement.style.setProperty("--color3", arr[3])
    document.documentElement.style.setProperty("--dark_text", arr[4])
    document.documentElement.style.setProperty("--light_text", arr[5])
    document.documentElement.style.setProperty("--main_color", arr[6])
    document.documentElement.style.setProperty("--home", arr[7])
    document.documentElement.style.setProperty("--sh", arr[8])
    document.documentElement.style.setProperty("--tsh", arr[9])
    document.documentElement.style.setProperty("--tsh2", arr[10])
    document.documentElement.style.setProperty("--sh2", arr[11])
}
function Dactivate (arr, elem) {
    if(arr){
            arr.forEach((t)=>{
        t.classList.remove("active")
    });
    }
    if (elem){
        elem.classList.add("active")
    }
}
page_titles.forEach((elem)=>{
    [...elem.children].forEach((child,ind) =>{
        child.style.transitionDelay = `${0.45 + ind*0.05}s`
    })
})

side_bar_button.onclick = ()=>{
    Dactivate(false, nav_buttons_parent);

    side_bar_button.style.transform = "scale(0)"
    document.querySelector("#container").classList.add("un_active")
}

side_bar_close.onclick = ()=>{
    if(nav_buttons_parent.classList.contains("active")){
        nav_buttons_parent.classList.remove("active");
        side_bar_button.style.transform = "scale(1)"
    document.querySelector("#container").classList.remove("un_active")

    }
}


contacts_inputs.forEach((inp)=>{
    inp.onfocus = ()=>{
        Dactivate(document.querySelectorAll("#contacts form > div"), inp.parentElement)
    }
    inp.onblur = ()=>{
                Dactivate(document.querySelectorAll("#contacts form > div"), false)

    }
})





