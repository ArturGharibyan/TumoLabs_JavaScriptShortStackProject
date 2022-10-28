
const myproductsdiv=document.createElement("div")

myproductsdiv.className="myproductsdiv"

const myProducts = sessionStorage.data
let state = null


function parseStorage() {
    state = JSON.parse(myProducts)
}
parseStorage()


for (let i = 0; i < state.length; i++) {
    
    let myProductdivs = document.createElement("div")
    let myProductImg = document.createElement("img")
    let h1 = document.createElement("h1")
    let myProductdescription =document.createElement("p")

    myProductdescription.className=" myProductdescription"
    myProductImg.className="myProductImg"

    myProductImg.src=state[i].form.url
    h1.innerHTML=state[i].form.name
    myProductdescription.innerHTML=state[i].form.description
    myProductdivs.append(myProductImg,h1,myProductdescription)
    myproductsdiv.append(myProductdivs)
    document.body.append(myproductsdiv)


    
}

