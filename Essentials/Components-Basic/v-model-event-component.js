
Vue.component('custom-input', {
    props: ['value'],

   /* template: `
    <input
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  ` */

    template: `
    <input
      type="text"
      v-bind:value="value"
      v-on:input="updateInput($event.target.value)"
    >
    `,
    methods: {

        updateInput: function (ev) {
          return  this.$emit('input', ev)
        }
    }
})