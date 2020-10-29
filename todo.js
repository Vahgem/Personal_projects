
var input = prompt("What do you want to do?");
var todos = [];
while(input!=="quit"){
if(input=="list"){console.log("************");
	todos.forEach(function(todo, i){
		
		console.log(i+": "+todo);

}	);
	console.log("************");
}	
else if(input==="new"){
	var newtodo = prompt("enter new todo");
	todos.push(newtodo);
}
else if(input==="delete"){
	var index = prompt("Enter the index of the todo to be deleted");
todos.splice(index,1);	
}
var input = prompt("What do you want to do?");}
	console.log("Okay you quit loser");