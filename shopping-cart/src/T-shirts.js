const theProducts = items.results;

// console.log(theProducts)

const theProductsHTML = theProducts.map(function (item) {
  return `
    <div class = "product">
    <img src="${item.Images[0].url_fullxfull}" class ="product-bg">
 <p class="title">${item.title}</p> 
 <p class="shop">${item.Shop.shop_name}</p>
<span class="views"> views (${item.views})</span>
<p class="price"><strong>$${item.price}</strong></p>
     </div>`;
});

// document.querySelector("#grid").innerHTML = theProductsHTML.join("");

// products.img.normal
// products.title
//products.price
//products.installments
//A button
