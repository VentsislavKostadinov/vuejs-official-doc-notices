myObject = new Vue({
    el: '#app',
    data: {
        products: [
            'Boots',
            'Jackets',
            'Socks'
        ]
    }
})

app2 = new Vue({
    el: '#app2',
    data: {
        seen: true,
        href: 'www.google.com'
    }
})


app2.seen = true;

app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

app3.todos.push({
    text: 'A new value'
})

// Event handler

app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Hello Vue.js!'
    },

    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
