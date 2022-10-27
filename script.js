//Ask user what they want to do
let message = prompt('What would you like to do?');

//this arr is to store all the todos user enters and also to start with something
const todos = ['bring me some pen', 'wash dishes'];

while(message !== 'quit' && message !== 'q'){
    if(message === 'list'){
        console.log('****************');
        for(let i=0; i<todos.length; i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('****************');
    }
    else if(message === 'new'){
        const newTodoInput = prompt('Add new item to the list');
        todos.push(newTodoInput);
        console.log(`${newTodoInput} added to the list`);
    }
    else if(message === 'delete'){
        const index = parseInt(prompt('Okay, enter valid index number to delete:'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        }
        else{
            console.log('Unknown index');
        }
    }
    message = prompt('What would you like to do?');
}
console.log('OKAY YOU QUIT THE APP!');