Vue.component('blog-post', {

    props: ['post'],

    template: `
     <div class="blog-post">
     <h1>{{post.id}}</h1>
      <h3>{{ post.title }}</h3>
  
      <div v-html="post.content"></div>
    </div>
    `
})