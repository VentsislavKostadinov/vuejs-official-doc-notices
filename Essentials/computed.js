computedTest = new Vue({

    el: '#computed-example',
    data: {
        message: 'Hello World'
    },

    computed: {

        // a computed getter
        reservedMessage: function () {

            // `this` points to  the computedTest instance

            return this.message.split('').reverse().join('');
        }
    }

})