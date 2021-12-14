import {myMixin} from "./myMixin.js";


Vue.component('simple-component', {

    mixins: [myMixin],
     template: `
      <button v-on:click="pressMe">Click me - Component 1</button>
     `

})