<template lang="html">

  <section class="src-components-todo-list">
    <ul class="list-group">
      <li v-for="todo in propsTodos" class="list-group-item d-flex justify-content-between align-items-center">
        <label v-if="todo.editMode" v-on:dblclick="changeMode(todo.id)">
        <input type="text" v-model="todo.title" v-on:keyup.enter="changeMode(todo.id)">
        </label>
        <label v-else v-on:dblclick="changeMode(todo.id)">{{todo.title}}</label>
        <span v-on:click="removeTodo(todo.id)" class="badge badge-primary badge-pill">x</span>
      </li>
    </ul>
  </section>

</template>

<script lang="js">
// const list = document.querySelector('ul');

// list.addEventListener('click', (e) => {
//   if (e.target.classList.contains('badge') &&
//     confirm('Are you sure?') === true) {
//     e.target.parentElement.remove();
// 
//     const div = document.createElement('div');
//     div.classList.add('alert', 'alert-success', 'animated', 'fadeInUp');
//     div.appendChild(document.createTextNode('Task removed successfully!'));
// 
//     // container.insertBefore(div, list);
// 
//     setTimeout(() => {
//       div.remove();
//     }, 3000);
//   }
// });

export default {
  name: 'src-components-todo-list',
  // propsTodos 는 부모의 배열을 참조하는데 shallow copy이므로 
  // 사용시 주의 해야한다.
  props: ['propsTodos'],
  mounted() {

  },
  data() {
    return {
      myTodos: []
    }
  },
  created() {
    this.myTodos =  JSON.parse(JSON.stringify(this.propsTodos));
  },
  beforeUpdate() {
    this.myTodos =  JSON.parse(JSON.stringify(this.propsTodos));
  },
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id);
    },
    changeMode(id) {
      this.$emit('changeMode', id);
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.src-components-todo-list {}
</style>
