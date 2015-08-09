angular.module('app', []).controller('mainController', function(){

	function Todo(text){
		this.text = text
	}

	var vm = this;
	vm.todos = []

	vm.createTodo = function(){
		vm.emptyTodo = false
		vm.repeatTodo = false

		if (!vm.newTodo){
			vm.emptyTodo = true
			return
		}
		for (var i=0; i < vm.todos.length; i++){
			if (vm.todos[i].text == vm.newTodo){
				vm.repeatTodo = true;
				vm.newTodo = '';
				return
			}
		}
		vm.todos.push(new Todo(vm.newTodo));
		vm.newTodo = ''
	}

	vm.clearAll = function(){
		vm.todos = [];
	}
})

