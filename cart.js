showLikedProducts();

function showLikedProducts() {
  let productLiked = localStorage.getItem('cards');
  let cardItems = JSON.parse(productLiked);
  
  let  html=``;
  Array.from(cardItems).forEach(function (element , index) {
    html += `
    <div class="card" style="width: 18rem;" id="a4">
    <img src="${element.productImg}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.productPrice}</h5>
      <p class="card-text">${element.productName}</p>
      <a href="#" class="btn btn-primary " onclick="RemoveFromCart(${index})">Remove</a>
    </div>
  </div>`;
  console.log(element);
 
});
let allLikedPProducts = document.getElementById('allLikedPProducts');
allLikedPProducts.innerHTML = html;


}

function RemoveFromCart(removeProductId){

  let productsLiked=localStorage.getItem(`cards`);
  let ProductArray=JSON.parse(productsLiked);
  ProductArray.splice(removeProductId,removeProductId);
  console.log(ProductArray);
  localStorage.setItem('cards',JSON.stringify(ProductArray));
  location.reload();


}

