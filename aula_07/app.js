
const app = {
    data () {
        return {
            name: 'Rubens',
            lastName: 'Lyra',
            title: 'Curso Vue3',
           
            products: [
                {
                    title: 'Bolo de Morango',
                    description: 'Sem glúten, açúcar natural, morangos fresquinhos e ideal para acompanhar o nosso Latte Macchiato',
                    image: './assets/img/bolo.png',
                    stars: 3,
                },
                {
                    title: 'Pão caseiro',
                    description: 'Sem glúten, sódio (491 mg) e baixíssimo valor calórico',
                    image: './assets/img/pao.png',
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
        inCart(product) {
            return this.cart.indexOf(product) != -1;
        },
        removeCart(product) {
            this.cart = this.cart.filter((prod, index) =>  products !=  prod);

        }
    }
};

Vue.createApp(app).mount("#app");

// Vue.createApp({}).mount("#app");
