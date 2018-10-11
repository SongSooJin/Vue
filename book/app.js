var app = new Vue({
	el: '#app',
	data: {
		'message': 'Hello world'
	},
});
Vue.component('todo',{
	template: '<div class="container">'+
		'<div class="row justify-content-center">'+
			'<div class="col-md-6">'+
				'<h1 class="text-center">Todolist</h1>'+
				'<hr>'+
				'<input type="text" class="form-control" placeholder="Input todolist & enter" v-model="todo.name" >'+
				'<hr>'+
				'<ul class="list-group">'+
					'<li class="list-item" v-for="item in todos">{{ item.name }}</li>'+
				'</ul>'+
			'</div>'+
		'</div>'+
	'</div>',
	data: function(){
		return {
			todos: [
				{
					name: 'Todo 1',
					done: true,
				},
				{
					name: 'Todo 2',
					done: false,
				},
				{
					name: 'Todo 3',
					done: false,
				},	
			],
			todo: {
				name: '',
				done: false
			}
		}
	},
});