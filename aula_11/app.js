
const myApp = {
    data () {
        return {
            name: 'Rubens',
            lastName: 'Lyra',
            title: 'Curso Vue3',
           
            products: [
                {
                    title: 'Filme 1',
                    
                    image: './assets/img/filme_1.png',
                    stars: 3,
                },
                {
                    title: 'Filme 2',
                    
                    image: './assets/img/filme_2.png',
                    stars: 0,
                },                
            ],
            cart: [],
            styles: {
                backgroundColor: '#5d5d5d',
                color: '#ddd7d7',
                padding: '15px',
                
            },
            dark: true, 

            digiTitle: 'É muito bom, ter você aqui!',

        }
    },
    methods: {
        addCart (product) {
            this.cart.push(product)
        },
        inCart (product) {
            return this.cart.indexOf(product) != -1
        },
        removeCart (product) {
            this.cart = this.cart.filter((prod, index) => product != prod)
        },
        toggleTheme () {
            this.dark = !this.dark

            if (this.dark){
                this.styles.backgroundColor = '#5d5d5d',
                this.styles.color = '#ddd7d7'

            } else {
                this.styles.backgroundColor = '#ddd7d7',
                this.styles.color = '#5d5d5d'
        
            }
        },
        
    },

    computed: {
        fullName(){
           return this.name + ' ' + this.lastName
        } 
    }
}

const productDetail = {
    template: `
    <h1 class="tl-film">{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title">
    <strong class="tl-stars" v-if="product.stars > 0">
      {{ product.stars }}
    </strong>
    <button 
        @click.prevent="addCart(product)"                              
        :disabled="inCart(product)"
        class="['btn-normal', {'btn-disable' : inCart(product)}]"
    >

        Adicionar

    </button>
                              

    `,

    props: ['product', ''],
    
    data() {
        return {
            example: 123,
        }
    },

    methods: {
        addCart(product){
            console.log('AddCart in progress')
        }
    }
    
}

const app = Vue.createApp(myApp)

app.component('product-detail', productDetail)

app.mount('#app');

// Vue.createApp({}).mount("#app");
