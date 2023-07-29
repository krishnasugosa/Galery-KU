const all = document.querySelectorAll("img")
const btn = document.querySelector("#Btn")

all.forEach(panel => {
    panel.addEventListener("click",()=>{
      remove()
      panel.classList.add("blur")
      btn.style.display = "block"
    })
})
function remove(){
    all.forEach((remove)=>{
        remove.classList.remove("blur")
    })
}

btn.addEventListener('click',alertBackAll)

function alertBackAll(){
  all.forEach((panel)=>{
 panel.classList.remove("blur")
 btn.style.display = "none"
  })

  
}