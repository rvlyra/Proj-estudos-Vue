
const app = {
    data () {
        return {
            name: 'Rubens',
            lastName: 'Lyra',
            product: {
                title: 'Bolo de Morango',
                description: 'Sem glúten, açúcar natural, morangos fresquinhos e ideal para acompanhar o nosso Latte Macchiato',
                image: './assets/img/bolo.png',
            },
            product2: {
                title: 'Pão caseiro',
                description: 'Sem glúten, sódio (491 mg) e baixíssimo valor calórico',
                image: './assets/img/pao.png',
            },
        }
    }
};

Vue.createApp(app).mount("#app");

// Vue.createApp({}).mount("#app");
