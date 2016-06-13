<?php
$name=$_POST['name'];
$email=$_POST['email'];
$msg=$_POST['msg'];

$to="js@jovanasunjka.dx.am";
$subject=$name;
$header="from:".$email;
$retval = mail($to,$subject,$msg,$header);
if( $retval == true ) {
    echo "Message sent successfully...";
} else {
	echo "Message could not be sent...";
}
?>

<script type="text/javascript">
	setTimeout(function() {
		window.location.href = "http://jovanasunjka.dx.am/";
	}, 3000);
</script>