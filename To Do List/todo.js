// creates todo list array
var todos = [];

// overarching function froces page to load first
window.setTimeout(function() {
    // looping thorught the options
    // while(input !== "quit"){
    //     // inputs to the array
    //     var input = prompt("What would you like to do?");

    //     // input check for list
    //     if(input === "new item"){
    //         list();
    //     }
    //     else if(input === "view list"){
    //         view();
    //     }
    //     else if(input === "remove"){
    //        remove();
    //     }

        // function list(){
        //     var newTodo = prompt("Please enter your to do item.");
        //     todos.push(newTodo);
        //     console.log(newTodo + " was added to the list.")
        // }
        // function view(){
        //     console.log("**********");
        //     todos.forEach(function(todo, i){
        //         console.log(i + ": " + todo);
        //     });
        //     console.log("**********");
        // }
        // function remove(){
        //     var itemRemove = prompt("which index would you like to remove?");
        //     console.log("deleted "+ todos[itemRemove]);
        //     todos.splice(itemRemove, 1);
        // }
    // }
  }, 500);