
let data = { firstName: 'Venk',  dynamicId: 'dynamicID-test'};


let vm = new Vue({
    el: '#prefixes-test',
    data: data,


    created: function() {
        console.log(this.$data.firstName)
    },

    mounted: function () {
      data.firstName = 'Tony';
        console.log(this.$data.firstName)
    }
})

console.log(vm.$data === data.firstName); // => true