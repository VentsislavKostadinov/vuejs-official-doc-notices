Vue.component('blog-post', {

    //props: ['age', 'year', 'date'],

    // Validating props
    props: {

        age: {
            type: Number,
            required: true,
           // default: 22  // can have default value
        },

        year: {
            type: Number,
            required: true
        },

        date: {
            type: Date,
            required: true
        },

    },

    template: `
     <div class="blog-post">
        <h3>{{ age }}</h3>
        <h3>{{ year }}</h3>
        <h3>{{ date }}</h3> 
        <button class="btn btn-info" v-on:click="$emit('enlarge-text', 1.5)">Enlarge Button</button>
     </div>
    `
})

