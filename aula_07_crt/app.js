
const app = {
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
        }
    }
};

Vue.createApp(app).mount("#app");

// Vue.createApp({}).mount("#app");
