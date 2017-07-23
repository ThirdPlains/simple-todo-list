//click event that checks off specific item when clicked on
//In order for this event to work for future elements, such as when we add a new todo onto the list, you need to 
//target the parent element and when an li is clicked inside a ul run the following code.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove()
	});
	event.stopPropagation();
});
//the stopPropagation method stops the span click event to buble up into other events. For example, since the span
//is inside the li, it fires the li click event above as well. So using this will stop it from inheriting other events 
//from its parent elements.

//the parent method is used to remove the parent element of the child element. So since the span is inside the li,
// using the parent() will remove the li item as well.

//also when using fadeOut, it does not completely remove the item from the DOM. It will just set the display to none.
//You have to provide a callback function with the remove() method to remove it after the fadeOut is complete.

//the append method is like using push in vanilla javascript. Below we wanted to append a new li onto the existing ul.

//add a new item onto the list
$("input").on("keypress", function(event){
	if(event.which === 13){
		//in order to grab the input field text
		var text = $(this).val();
		//in order to clear the input field after adding a item onto the list
		$(this).val("")
		//create a new li and adds it to the existing ul
		$("ul").append("<li><span><i class='fa fa-eraser' aria-hidden='true'></i></span> " + text + "</li>")
	}
});


$(".fa-pencil-square").click(function(){
	$("input").fadeToggle();
})
