import {myMixin} from "./myMixin.js";


Vue.component('simple-component-2', {

    mixins: [myMixin],
    template: `
      <button v-on:click="pressMe">Click me - Component 2</button>
     `

})