Vue.component('simple-component', {

    template: `<h1>This is a simple component</h1>`
})

newComponent = new Vue({

    el: '#define-component',

    data: {
        template: 'simple-component'
    }
})