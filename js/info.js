const products = [
    {
        name: "sting",
        price: "10.000đ",
        image: "../assets/images/tailoc.jpg",
        info: "uong qua da",
        link: "../html/sp1.html"
    },
    {
        name: "sting",
        price: "10.000đ",
        image: "../assets/images/tailoc.jpg",
        info: "uong sieu da",
        link: "#"
    },
    {
        name: "sting",
        price: "10.000đ",
        image: "../assets/images/tailoc.jpg",
        info: "uong sieu da",
        link: "#"
    },
    {
        name: "sting",
        price: "10.000đ",
        image: "../assets/images/tailoc.jpg",
        info: "uong sieu da",
        link: "#"
    }
]

function createItem(obj) 
{
    const productList = document.getElementById("product-list")
    productList.innerHTML += `
    <div class ="col product-item">
				<div class="card ">
					<div class=" ratio ratio-1x1 product-image">
						<img src= "${obj.image}" alt="${obj.name}" class="card-img-top object-fit-cover">
					</div>
					<div class="card-body product-info">
						<h4 class="card title">${obj.name}</h4>
						<h6 class="text-danger">${obj.price}</h6>
						<p>${obj.info}</p>
						<a href="${obj.link}" class="btn btn-primary">Còn hàng</a>
					</div>
	            </div>
    </div>`;
}

function AllItem (objArray) {
    let i = 0;
    while (i<objArray.length) {
        createItem(objArray[i]);
        i++;
    }
} 