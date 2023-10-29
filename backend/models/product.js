import { v4 as newId } from 'uuid';

let products = [
    {
        id: newId(),
        category: 'Electronics',
        name: 'Mac Book Air',
        price: '3000',
        url: 'https://img.freepik.com/premium-photo/modern-laptop-computer-png-background_180633-6442.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais'
    },
    {
        id: newId(),
        category: 'Electronics',
        name: 'IPhone',
        price: '800',
        url: 'https://www.clickx.be/wp-content/uploads/2020/10/iStock-1197063336.jpg'
    },
    {
        id: newId(),
        category: 'Apparel',
        name: 'Jeans CK',
        price: '40',
        url: 'https://i5.walmartimages.com/seo/FAIWAD-Women-s-Straight-Wide-Leg-Jeans-Loose-Plus-Size-Distressed-Denim-Pants-with-Pockets-Small-Gray_660af2bd-0b80-4b7c-8a5a-fc26a027e9d4.35b154f9691f7eaf2ac74548da28f73c.jpeg'
    },
    {
        id: newId(),
        category: 'Apparel',
        name: 'T-sirt black',
        price: '8',
        url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQM5s9t3bbmZov49xqP3RkBwvQk5Pj-0NKb8L2x-OgQwJ7NKrO37EopuYuioIl5MAkUdIyVw5n4DHWpmDrxDiSJbfLq6akTH5eywzuS3LdihWNdFuD3yGHIf6PYXceRf70umoaQWGRLhxE&usqp=CAc'
    },
    {
        id: newId(),
        category: 'Beverage',
        name: 'BUD beer',
        price: '2',
        url: 'https://www.drinksstore.be/media/products/61f4715a22176_150011_product..jpg'
    },
    {
        id: newId(),
        category: 'Beverage',
        name: 'Coca-Cola bottle',
        price: '1',
        url: 'https://www.coca-cola.com/content/dam/onexp/be/nl/home-images/brands/coca-cola/BE_coca-cola-regular_750x750.jpg'
    }
];

class Product {
    constructor(category, name, price, url) {
        this.id = newId();
        this.category = category;
        this.name = name;
        this.price = price;
        this.url = url;
    }

    // methods
    static getProducts = () => {
        return products;
    };
    static getProduct = (id) => {
        return products.find((product) => product.id === id);
    };
    static updateProduct = (id, updatedProduct) => {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
            return false;
        } else {
           products[index] = { id, ...updatedProduct };
            return true;
        }
    };

    addProduct = () => {
        products.push(this);
    };
    static deleteProduct= (id) => {
        const productExist =products.findIndex((product) => product.id === id);
        if (productExist === -1) {
            return false;
        } else {
            products = products.filter((product) => product.id !== id);
            return true;
        }
    };
}

export default Product;
