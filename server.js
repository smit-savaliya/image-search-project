const accessekey  = "-RZ9nKS_8u6PR1_EsM26PYn2T9Pf6qKCUiqbhCHs-oI"

const formelement = document.querySelector("form")
const inputelement = document.getElementById("search-input")
const searchresults = document.querySelector('.search-results')
const showmore = document.getElementById("show-more")

let inputdata = ""
let pages = 1

async function searchimages(){
    inputdata = inputelement.value
    const url = `https://api.unsplash.com/search/photos?pages=${pages}&query=${inputdata}&client_id=${accessekey}`
    const responce = await fetch(url)
    const data = await responce.json()

    const results = data.results

    if(pages == 1){
        searchresults.innerHTML = ""
    }

    results.map((result)=>{
        const imagewrapepr = document.createElement("div")
        imagewrapepr.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html 
        imagelink.target = "_blank"
        imagelink.textContent = result.alt_description


        imagewrapepr.appendChild(image)
        imagewrapepr.appendChild(imagelink)
        searchresults.appendChild(imagewrapepr)
    })

    pages++
    if(pages >1){
        showmore.style.display = "block"
    }
}


formelement.addEventListener("submit",(event)=>{
    event.preventDefault()
    pages = 1
    searchimages()
})

showmore.addEventListener("click",()=>{
    searchimages()
})

function calculator(a,b, sum){
    sum(a, b)
}
calculator(1,2 , (a,b)=>{
    console.log(a+b)
})





