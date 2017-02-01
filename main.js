const todoList = {
  todos: [],
  displayTodos: function() {

    if (this.todos.length > 0) {
      console.log('My todos: ');
      this.todos.map(todo => {
        if (todo.completed === true) {
          console.log(`(x) ${todo.text}`);
        } else {
          console.log(`( ) ${todo.text}`);
        }
      });
    } else {
      console.log('Your list is empty!');
    }

  },
  addTodo: function(text) {

    this.todos.push({
      text,
      completed: false
    });
    this.displayTodos();

  },
  editTodo: function(position, newText) {

      this.todos[position].text = newText;
      this.displayTodos();

  },
  deleteTodo: function(position) {

      this.todos.splice(position,1);
      this.displayTodos();

  },
  toggleCompleted: function(position) {

    let complete = this.todos[position];
    complete.completed = !complete.completed;
    this.displayTodos();

  },
  toggleAll: function() {

    let trueCheck = this.todos.filter(todo => {
          return todo.completed;
    });

    if (trueCheck.length === this.todos.length) {
        this.todos.map(todo => todo.completed = false);
    } else {
      this.todos.map(todo => todo.completed = true);
    }

    this.displayTodos();
  }
};
