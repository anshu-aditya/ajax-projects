<?php

	$server = "localhost";
	$user_name = "root";
	$password = "root";
	$database = "group_chat";



	$link = mysqli_connect($server,$user_name,$password,$database);

		if(mysqli_connect_errno())
		{
			echo "Database Connection Failed" ."\n" .mysqli_connect_error();
		}
		

?>