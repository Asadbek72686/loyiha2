let Pr = localStorage.getItem("products");
Pr = Pr ? JSON.parse(Pr) : [];

console.log(Pr);

let product = [];


if (Pr.length > 2) {
    product = Pr;
} else {
    console.log("Mahsulotlar ro'yxati kam. Yaratilmoqda...");

    product = [
        {
            id: 1,
            title: "Samsung Galaxy S21 Ultra",
            price: 100,
            image: "https://cdn1.ozone.ru/s3/multimedia-1-9/c600/7061610177.jpg",
        },
        {
            id: 2,
            title: "Samsung Galaxy Note 20",
            price: 90,
            image: "https://cdn1.ozone.ru/s3/multimedia-e/6555584846.jpg",
        },
    ];

    localStorage.setItem("products", JSON.stringify(product));
}

console.log(product);
