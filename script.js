
let div1 = document.createElement("div")
let infodesk = document.querySelector(".Infodesk")
let imgfood = document.querySelector(".imgfood")
let paragraph = document.querySelector(".paragraph")
let form = document.getElementById("form")
const nameInput = document.getElementById('nameInput');
const urlInput = document.getElementById('urlInput');
const descriptionArea = document.getElementById("description")
const setApIButton = document.querySelector("#setApIButton")
const setApiDiv = document.createElement("div")
const textsend = document.getElementById("textsend")
const button = document.querySelector('.button')


function getAPI(state = []) {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(function (res) {
            res.categories.forEach(function (res) {
                state.push(res)
            },)



            for (let i = 0; i < state.length; i++) {
                let divs = document.createElement("div")
                let buttondiv = document.createElement("div")
                let button = document.createElement("button")
                let img = document.createElement("img")
                let h2 = document.createElement("h2")
                h2.className = "h2"
                div1.className = "div1"
                button.innerHTML = "Info"
                divs.className = "productdivs"
                buttondiv.className = "buttondiv"
                h2.innerHTML = state[i].strCategory
                img.src = state[i].strCategoryThumb
                buttondiv.append(button)
                divs.append(img, h2, buttondiv)



                button.addEventListener("click", function (e) {
                    infodesk.style.display = "block"
                    imgfood.src = state[i].strCategoryThumb
                    paragraph.innerHTML = state[i].strCategoryDescription
                })
                div1.append(divs)
                document.body.append(div1, setApiDiv)
            }
        })

}
getAPI()

cancle.addEventListener("click", function () {
    document.querySelector(".Infodesk").style.display = "none"
})



form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.reset()
})


function success() {
    let interval = setInterval(() => {
        if (nameInput.value === "" || urlInput.value === "" || textsend.value === "") {
            button.disabled = true;
        }
        if (nameInput.value !== "" || urlInput.value !== "" || textsend.value !== "") {
            button.disabled = false;
        }
        else {
            button.disabled = true
        }
    }, 1000)
}
success()



setApIButton.addEventListener('click', function (e, array = []) {

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: payload,
    })
        .then(res => res.json())
        .then(function (res) {
            array.push(res)
            let div = document.createElement("div")


            for (let i = 0; i < array.length; i++) {

                let h2 = document.createElement("h2")
                let buttondiv = document.createElement("buttondiv")
                let button = document.createElement("button")
                let deleteButton = document.createElement("button")
                deleteButton.innerHTML = "delete"
                deleteButton.className = "deletebutton"
                button.innerHTML = "info"
                buttondiv.className = "buttondiv"
                h2.className = "h2"
                let apiImg = document.createElement("img")
                div.className = "productdivs"
                apiImg.src = array[i].form.url
                h2.innerHTML = array[i].form.name
                buttondiv.append(button)
                div.append(deleteButton, apiImg, h2, buttondiv)

                let arr = sessionStorage.data ? JSON.parse(sessionStorage.data) : []
                let obj = array[i]
                
                arr.push(obj)

                sessionStorage.setItem("data", JSON.stringify(arr))


                button.addEventListener("click", function () {
                    infodesk.style.display = "block"
                    imgfood.src = array[i].form.url
                    paragraph.innerHTML = array[i].form.description
                })


                deleteButton.addEventListener("click", function () {
                    div.style.display = "none"

                })

            }
            div1.append(div)
        })
})



function go_myProduct() {
    document.location.href = "Myproducts.html"
}