const products ={
     
{
    name: "123",
    price: 10000,
    description: "ghi chú vào",
    link: "chitiet.html",
    Image:"../assets/images/tailoc.jpg#"
},
 
{
  name: "123",
    price: 10000,
    description: "ghi chú vào",
    link: "chitiet.html",
    Image:"../assets/images/tailoc.jpg#"  
},
{
    name: "123",
    price: 10000,
    description: "ghi chú vào",
    link: "chitiet.html",
    Image:"#../assets/images/tailoc.jpg"
},

{
    name: "14443",
    price: 10000,
    description: "ghi chú vào",
    link: "chitiet.html",
    Image:"#../assets/images/tailoc.jpg"
}
}

function createItem(obj)
{
    const productlist = document.getElementById("product-list")
    productlist.innerHTML +=
    `   <div class ="col text-center product-item">
            <div class ="card ">
                 <div class ="ratio ratio-1x1 product-image">
                   <img src="${obj.Image}" alt="${obj.name}" class="card-img-top">   
                </div>
            <div class ="card-body product-info">
                  <h4 class ="card-title text-danger">${obj.name}</h4>   
                   <h5 class ="text-danger">${obj.price}</h5>
                    <p style="text-align: justify;"> ${description}</p>
                     <a href="${obj.link}" class ="btn btn-info">xemmmmm chi tiết</a>
                </div>
            </div>
          </div>
    `
}

function loadAllProducts(objArray)
{
    let i = 0;
    while(i<objArray.Length)
 {
    createItem(objArray[i]);
    i++;
 }   
}





/*<!DOCTYPE html>
<html lang="vi">
<head>
	<title>thông tin sản phẩm</title>
	<meta charset="utf-8">

    <!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

</head>
    <body>
        <div class ="container">
          <h2>Ảnh Minh Họa</h2>
           <div class ="row row-cols-1 row-cols-md-4 g-4">
             <div class ="col text-center product-item">
            <div class ="card ">
                 <div class ="ratio ratio-1x1 product-image">
                   <img src="../assets/images/tailoc.jpg" alt="tailoc" class="card-img-top">   
                </div>
            <div class ="card-body product-info">
                  <h4 class ="card-title text-danger">tài lộc</h4>   
                   <h5 class ="text-danger">giá 10k</h5>
                    <p style="text-align: justify;"> quá đã gòi</p>
                     <a href="" class ="btn btn-info">xemmmmm chi tiết</a>
                </div>
            </div>
          </div>
          </div>
        
    
</body>
</html> */