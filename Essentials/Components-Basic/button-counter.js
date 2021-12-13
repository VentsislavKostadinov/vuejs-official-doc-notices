Vue.component('button-counter', {

    data: function () {

        return {
            count: 0
        }
    },

    template: `<div>
                <button class="btn btn-primary" v-on:click= "count++">You clicked me {{ count }} times.</button>
                <br/>
               <button class="btn btn-info" v-on:click="count= 0">Reset Counter</button>
              </div>`,

})


