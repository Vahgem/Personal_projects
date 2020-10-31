//checks off clicked tasks
$("ul").on("click", "li", function(){	
$(this).toggleClass("completed")
});

//deletes tasks
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//adds task
$("input").keypress(function(event){
if(event.which=== 13){
	var newtd = $(this).val()
	$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> "+ newtd +"</li>")
$(this).val("")
}

});