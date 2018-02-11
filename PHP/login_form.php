<?php 
	$tag=$_POST['tag'];

	if(isset($tag)&&$tag!==''){
		if ($tag=='login') {
			if($_POST['username']=='rushqui')
				echo true;
			echo false;
		}
	}
 ?>