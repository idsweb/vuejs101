Vue.component('product',{
    template: `
        <div class="product">
                <div class="product-image">
                    <img :src="image" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <a :href="more">More info..</a>
                    <p v-if="inStock">In stock</p>
                    <p v-else :class=" { outOfStock: !inStock }">Out of stock</p>
                    <span v-show="onSale">On sale now</span>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                </div>
                <div class="color-box" 
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)"
                    >
                </div>
                <ul>
                    <li v-for="size in sizes" :key="size">Size {{ size }}</li>
                </ul>
                <div class="cart">
                    <p>Cart {{cart}}</p>
                    <button 
                    :disabled="!inStock" 
                    :class="{ disabledButton: !inStock }"
                    v-on:click="addToCart">Add to cart</button>
                    <button v-on:click="removeFromCart">Remove from cart</button>
                </div>
            </div>
    `,
    data() {
        return {
            product: "Socks",
            description: "A pair of warm, fuzzy socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            more: "#more",
            inventory: 100,
            onSale: true,
            details: ["80% cotton","20% polyester","Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "assets/vmSocks-green-onWhite.jpg",
                    variantQuantity:10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "assets/vmSocks-blue-onWhite.jpg",
                    variantQuantity:0
                }
            ],
            sizes: ["4","5","6"],
            cart: 0
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})

var app = new Vue({
    el: '#app'
})