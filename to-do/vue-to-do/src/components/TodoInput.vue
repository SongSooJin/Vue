<template lang="html">

  <section class="src-components-todo-input">
    <div class="input-group mb-3">
      <input v-model="newTodo" type="text" class="form-control" placeholder="Type your task here...">
      <div class="input-group-append">
        <button v-on:click="addTodo" class="btn btn-outline-secondary" type="button" id="button-addon2">Add Todo</button>
      </div>
    </div>
  </section>

</template>

<script lang="js">
// const button = document.querySelector('button');
// const input = document.querySelector('input[type="text"]');
// 
// button.addEventListener('click', () => {
//   if (input.value === '') {
//     const div = document.createElement('div');
//     div.classList.add('alert', 'alert-warning', 'animated', 'bounceIn');
//     div.appendChild(document.createTextNode('Ooops! There is nothing to add.'));
// 
//     // container.insertBefore(div, list);
// 
//     setTimeout(() => {
//       div.remove();
//     }, 3000);
// 
//   } else {
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     const div = document.createElement('div');
// 
//     li.classList.add('list-group-item', 'd-flex',
//       'justify-content-between', 'align-items-center',
//       'animated', 'flipInX');
//     span.classList.add('badge', 'badge-primary', 'badge-pill');
//     div.classList.add('alert', 'alert-success', 'animated', 'fadeInUp');
// 
//     li.appendChild(document.createTextNode(input.value));
//     span.appendChild(document.createTextNode('x'));
//     div.appendChild(document.createTextNode('Task added successfully!'));
// 
//     li.appendChild(span);
//     list.appendChild(li);
// 
//     // container.insertBefore(div, list);
// 
//     setTimeout(() => {
//       div.remove();
//     }, 3000);
// 
//     input.value = '';
//   }
// });

export default {
  name: 'src-components-todo-input',
  props: [],
  mounted() {

  },
  data() {
    return {
      newTodo: null
    }
  },
  methods: {
    addTodo() {
      // alert('addTodo');
      if (typeof this.newTodo === 'string') {
        this.newTodo = this.newTodo.trim();
      }
      if (this.newTodo) {
        this.$emit('addTodo', this.newTodo);
        this.newTodo = null;
      } else {
        alert('할 일을 입력하세요');
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.src-components-todo-input {}
</style>
