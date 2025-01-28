document.addEventListener("DOMContentLoaded", (e)=>{
    // console.log(JSON.stringify(product));
    // console.log(product);
    // localStorage.setItem("product", JSON.stringify(product))

product.forEach( p=>{
    let col3 = document.createElement("div")
    col3.classList.add("col-3", "mt-2")
    col3.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.price}$</p>
    <a href="#" class="btn btn-primary">buy</a>
  </div>
</div>
    `
document.querySelector(".row").append(col3)
})
})
