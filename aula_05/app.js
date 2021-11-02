
const app = {
    data () {
        return {
            name: 'Rubens',
            lastName: 'Lyra',
           
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
            ]
        }
    }
};

Vue.createApp(app).mount("#app");

// Vue.createApp({}).mount("#app");
