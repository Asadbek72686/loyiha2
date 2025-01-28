document.addEventListener("DOMContentLoaded",(e)=>{
    let row=document.querySelector(".row")
    products.forEach(tel=>{
        let div=document.createElement("div")
  div.classList.add("col-3","mt-2")
  div.innerHTML = `
  <div class="bg"></div>
  <div class="nft">
    <div class="main">

      <a href="productDetail.html?id=${tel.id}">
        <img class="tokenImage" src="${tel.rasmi[0]}" style="height: 200px;  object-fit: cover;" alt="NFT"  />
      </a>
      <h2>${tel.nomi}</h2>
      <p class="description">${tel.brend}</p>
      <div class="tokenInfo">
        <div class="price">
          <p>${tel.narxi} </p>
        </div>

      </div>
      <hr />
      <div class="creator">
        <div class="wrapper">
        </div>

      </div>
    </div>
  </div>
`;
  row.append(div)
    })
  
  document.querySelector("#searchInp").addEventListener("keyup",(e)=>{
    row.innerHTML=""
  let inpVal=document.querySelector("#searchInp").value.trim()
  products.forEach(tel=>{
  if (tel.nomi.toLowerCase().includes(inpVal.toLowerCase())) {
    let div=document.createElement("div")
    div.classList.add("col-3","mt-2")
    div.innerHTML=`
   <div class="bg"></div>
  <div class="nft">
    <div class="main">

      <a href="productDetail.html?id=${tel.id}">
        <img class="tokenImage" src="${tel.rasmi[0]}" style="height: 200px;  object-fit: cover;" alt="NFT"  />
      </a>
      <h2>${tel.nomi}</h2>
      <p class="description">${tel.description}</p>
      <div class="tokenInfo">
        <div class="price">
          <p>${tel.narxi} </p>
        </div>

      </div>
      <hr />
      <div class="creator">
        <div class="wrapper">
        </div>

      </div>
    </div>
  </div>
    `
    row.append(div)
  }
  
  
  
  })
  
  
  })
  
  })