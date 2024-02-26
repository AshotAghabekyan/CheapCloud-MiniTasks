const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
];



class DisplayProducts {
    #products

    constructor(products) {
        this.#products = products;
    }

    displayProducts(container) {
        container.innerHTML = "";

        if (this.#products.length == 0) {
            let emptyMessage = document.createElement("div");
            emptyMessage.innerText = "Product not found!";
            return container.append(emptyMessage);
        }
        

        for (let item of this.#products) {
            let product = document.createElement("div");
            product.className = "product";
            product.innerHTML = `<h3>${item.name}</h3>
                                <p>price: ${item.price}$</p>
                                <p>category: ${item.category}</p>
                                <p>tags: <i>${item.tags.join(", ")}</i></p>`
            container.append(product);
        }
        return container;
    }
}




class Application {
    #selectorValue;
    #tagCheckboxes;
    #products

    constructor(products) {
        this.#selectorValue = document.getElementById("category").value;
        this.#tagCheckboxes = document.querySelectorAll('.filter-checkbox input');
        this.#products = products;
    }

    #checkedTags() {
        let checkedOptions = [];
        for (let i = 0; i < this.#tagCheckboxes.length; ++i) {
            if (this.#tagCheckboxes[i].checked) {
                checkedOptions.push(this.#tagCheckboxes[i].value);
            }
        }
        return checkedOptions;
    }


    #updateFilterOptions() {
        this.#selectorValue = document.getElementById("category").value;
        this.#tagCheckboxes = document.querySelectorAll('.filter-checkbox input');
    }


    #filter() {
        let checkedProductsTags = this.#checkedTags();

        if (this.#selectorValue == "all") {
            return this.#products.filter((product) => {
                return checkedProductsTags.some(tag => product.tags.includes(tag))
            })
            
        }

        let filteredProducts = this.#products.filter((product) => {
            if (product.category.toLowerCase() == this.#selectorValue.toLowerCase()) {
                return checkedProductsTags.some(tag => product.tags.includes(tag))
            }
        })
        return filteredProducts;
    }

    showProducts(container) {
        this.#updateFilterOptions();
        let products = this.#filter();
        let display = new DisplayProducts(products);
        return display.displayProducts(container);
    }
}




let productContainer = document.getElementById("products");
let application = new Application(products);
application.showProducts(productContainer);

let productSelector = document.getElementById("category");
window.addEventListener("change", function() {
    application.showProducts(productContainer);
});

