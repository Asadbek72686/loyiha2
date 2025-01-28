document.addEventListener("DOMContentLoaded", function (e) {
    let BigProducts=localStorage.getItem("products")
    BigProducts=JSON.parse(BigProducts)
    console.log(BigProducts);
    document.querySelector("#addPr").addEventListener("submit", (e) => {
        e.preventDefault()
        let title = document.querySelector("#title").value.trim()
        let price = document.querySelector("#price").value.trim()
        let image = document.querySelector("#image").value.trim()
        
        BigProducts.push({ id: BigProducts.length + 1,
            title:  title ,
            price:  price ,
            image:  image 
        })
        console.log(BigProducts);
  localStorage.setItem("products", JSON.stringify(BigProducts))

    })
})