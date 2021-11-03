
const productDetail = {
    template: `
    <h1 class="tl-film">{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title">
    <strong class="tl-stars" v-if="product.stars > 0">
      {{ product.stars }}
    </strong>
    <button 
        @click.prevent="addCart(product)"                              
        :disabled="productInCart"
        class="['btn-normal', {'btn-disable' : productInCart}]"
    >
        Adicionar
    </button>
    `,

    emits: ['add-prod-cart'],

    props: ['product', 'productInCart'],

    // props: {
    //     product: {
    //         type: Object,
    //         required: true,
    //     },
    //     productInCart: {
    //         type: boolean,
    //         required: true,
    //     }
    // },
    
    data() {
        return {
            example: 123,
        }
    },

    methods: {
        addCart (product) {
            console.log('AddCart in progress')
            this.$emit('add-prod-cart', product)
        }
    },
    
}

app.component('product-detail', productDetail)

