<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Send the email (you can customize this as needed)
        $to = "nandakishore.p24@gmail.com";
        $subject = "Contact Us Form Submission from " . $name;
        $headers = "From: " . $email;

        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for contacting us, $name. We will get back to you soon!";
        } else {
            echo "Sorry, there was an error sending your message. Please try again later.";
        }
    } else {
        echo "Please fill in all fields.";
    }
} else {
    header("Location: contact.html");
    exit();
}
?>
