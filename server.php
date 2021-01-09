<?php 

	include("db-link.php");


	$data = $_REQUEST;

	$user_name = $data['user_name'];
	$user_comment = $data['user_comment'];

	if ( isset($user_name) && isset($user_comment) ) 

	{
		$insert_query = "INSERT INTO chats (user_name,user_comment)
					 	VALUES ('".$user_name."','".$user_comment."')";
		$insert_result = mysqli_query($link,$insert_query);

		if (!$insert_result) 
		{
			echo "Failed to Insert in Database:-" ."\n". mysqli_error($link);
		}
	}


	$last_displayed_chat_id = $data['last_displayed_chat_id'];

		$select_query = "SELECT * FROM chats 
						WHERE chat_id > '".$last_displayed_chat_id."'";	
		$select_result = mysqli_query($link,$select_query);

		if (!$select_result) 
		{
			echo "Failed to Update Chat:-" ."\n". mysqli_error($link);
		}

		$row_count = mysqli_num_rows($select_result);

		$response = array();

		if($row_count > 0)

		{
			while ( $row = mysqli_fetch_array($select_result) ) 
			{
				array_push($response, $row);
			}

		}

	mysqli_close($link);

	echo json_encode($response);


?>