// API https://fakestoreapi.com/products 

async function getAll() {
    return fetch('https://fakestoreapi.com/products')
              .then(res=>res.json());       
  }
  
  async function fetchData() {
    const products = await getAll();
    console.log(products);
  
    const productsDiv = document.getElementById("products")
    for (let item of products) {
      productsDiv.innerHTML += `
      <div class="im">
      
      <h3>${item.title}</h3>
      <img src = "${item.image} " </br>
      <p class="desc">${item.description}</p>
      <b>Price: ${item.price}</b>
      <p>${item.rating.count} sản phẩm</p>
      <p>${item.rating.rate}</p>


      </div>
      `;
     
    }
  }