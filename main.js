const container = document.querySelector(".container")

fetch("https://dummyjson.com/products")
    .then((x) => x.json())
    .then((data) => renderProducts(data.products));

function renderProducts(dataArray) {
    dataArray.forEach((x) => {
        const card = document.createElement("div");
        card.className = 'card'
        const titleSpan = document.createElement("span");
        titleSpan.className = "title"
        const descriptionSpan = document.createElement("span");
        descriptionSpan.className = "description"
        const priceSpan = document.createElement("price");
        priceSpan.className = "price"
        const imgElement = document.createElement("img")
        imgElement.className = "card_img"
        const call = document.createElement("span")
        call.className = "call"

        const title = x.title
        const description = x.description
        const price = x.price
        const img = x.images[0]
        imgElement.src = img



        titleSpan.innerText = title
        descriptionSpan.innerText = description
        priceSpan.innerText = price + " " + "Azn"
        call.innerText = "Zəng edin"

        card.appendChild(imgElement)
        card.appendChild(titleSpan)
        card.appendChild(descriptionSpan)
        card.appendChild(priceSpan)
        card.appendChild(call)
        container.appendChild(card)
    });
}