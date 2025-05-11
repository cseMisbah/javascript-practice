// Problem 27: E-commerce app [Math methods]
const products = [
  {
    id: 101,
    title: "iphone 9",
    description: "brilliant phone with 4k camera",
    price: 549,
    discountPercentage: 8.5,
    rating: 4.69,
    brand: "Apple",
    insuranceCost: 8,
  },
  {
    id: 102,
    title: "iphone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    brand: "Apple",
    insuranceCost: 8,
  },
  {
    id: 103,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    brand: "Samsung",
    insuranceCost: 8,
  },
  {
    id: 104,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    brand: "Oppo",
    insuranceCost: 8,
  },
];

const priceAfterDiscount = () => {
  if (discountPercentage < 0) {
    console.log("Not a valid discount percentage");
  } else {
    const discount = (price * discountPercentage) / 100;
    return Math.round(price - discount);
  }
};

// printing product details
function printProductDetails(product) {
  console.log("id : " + product.id);
  console.log("title : " + product.title);
  console.log("description : " + product.description);
  console.log("rating : " + product.rating);
  console.log("brand : " + product.brand);
  console.log("Original price : " + product.price + " euros");
  console.log("Discount Percentage : " + product.discountPercentage);
  console.log(
    "After the discount price : " +
      priceAfterDiscount(product.price, product.discountPercentage) +
      " euros"
  );
}

for (let index = 0; index <= products.length; index++) {
  printProductDetails(products[index]);
  console.log("-------------------------");
}
