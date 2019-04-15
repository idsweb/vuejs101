var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: "assets/vmSocks-green-onWhite.jpg",
        inStock: true,
        more: "#more",
        inventory: 100,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "assets/vmSocks-green-onWhite.jpg" 
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "assets/vmSocks-blue-onWhite.jpg"
            }
        ],
        sizes: ["4","5","6"],
        cart: 0,
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateProductImage(variantImage){
            this.image = variantImage
        }
    }
})