<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = 'Website Mailer: ' + $_POST['subject'];
	$mesage = $_POST['message'];
	$to = 'uland.jf@gmail.com';

	$body = "From: $name\n Message:\n $message";

	if ($_POST['submit']) {
		if (mail( $to, $subject, $body, $from)) {
			echo '<p>Your message has been sent!</p>';
		} else {
			echo '<p>Oops! Something went wrong. Please try again!</p>'
		}
	}

?>

	<form method="post" action="contact.php">
		
		<label>Name</label>
		<input name="name" placeholder="Full Name">

		<label>E-mail Address</label>
		<input name="email" type="email" placeholder="E-mail Adress">

		<label>Subject</label>
		<input name="subject" placeholder="Message Subject">

		<label>Message</label>
		<input name="message" placeholder="Type your message here.">

		<input name="submit" type="submit" value="Submit">

	</form>

</body>
</html>