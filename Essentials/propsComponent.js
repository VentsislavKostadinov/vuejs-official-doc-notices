
Vue.component('todo-item', {

    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
})

 appComponent = new Vue({

    el: '#props-component',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})