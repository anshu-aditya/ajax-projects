// this function will inset new users and new comments to database
function addComment()
{
	if ( $('#user_name').val().length == 0 ) 
	{
		alert('Please, pick a user name');
		// this statement will stop function from futher execution
		return false;
	}

	$user_name = $('#user_name').val();
	$user_comment = $('#user_comment').val();

	$.ajax(
	{

		url: "http://localhost/ajax-projects/chatApp/server.php",
		type: "get",
		data: {user_name: $user_name, user_comment: $user_comment},
		dataType: "json",
		success: function(response)
			{
				$.each(response,function(index,element){

					$('#user_name').val(element.user_name);

				});
			},
		error: function(error)
			{
				alert(error);
			}

	});
}


// this function will periodcially update chat-box with new comments
function updateChat()
{

	$last_displayed_chat_id = $('#last_displayed_chat_id').val();

	$.ajax(
	{

		url: "http://localhost/ajax-projects/chatApp/server.php",
		type: "get",
		data: {last_displayed_chat_id: $last_displayed_chat_id},
		dataType: "json",
		success: function(response)
			{
				$.each(response,function(index,element){

					$('#last_displayed_chat_id').val(element.chat_id);
					var chat_data = 
						(
							'User: '+ element.user_name + "\n" +
							'Message: '  + element.user_comment 
						);

					$('#user_chats').val(chat_data + "\n");

				});
			},
		error: function(error)
			{
				alert(error);
			}

	});

}

// call updateChat function after interval of one seconds
setInterval(updateChat,1000);


// check for user name pre-existence


