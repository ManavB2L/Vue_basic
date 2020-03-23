

var app = new Vue({
    el: "#app",
    data:{
        product: "Socks",
        image: "./images/vmSocks-green-onWhite.jpg",
        inventory: 0,
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }

})