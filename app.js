const dropdwonMenu = document.querySelectorAll(".d-item")


dropdwonMenu.forEach((menu)=>{
    menu.addEventListener("click", function (e) {
        e.preventDefault()
        let menuActive = document.querySelector(".active")

        dropdwonMenu.forEach((item)=>{
            item.classList.remove('active')
            item.nextElementSibling.style.height=(0)
        })

        menu.classList.toggle('active')
       

        if(
            menu.classList.contains('active')
        ){
            menu.nextElementSibling.style.height= menu.nextElementSibling.scrollHeight + "px"
        }
        else{
            menu.nextElementSibling.style.height=(0)
        }
        
        
    })

})



// tab section 

const menu_tab = document.querySelectorAll(".left-body .lest-body-menu ul li a")
const tab = document.querySelectorAll(".tab-pen")

menu_tab.forEach(item => {
    item.addEventListener("click", function(){

        tab.forEach((data)=>{
            data.classList.remove("active")

        })
    let datafile = document.querySelector(this.getAttribute('href'))
    datafile.classList.add("active")

    console.log(datafile);



    })
    
});