<?php

    if(isset($__POST['sumbit'])){

      $name = $__POST['name'];
      $mailFrom = $__POST['email'];
      $subject = $__POST['subject'];
      $message = $__POST['messgae'];

      $mailTo = "wardle2106@gmail.com";
      $headers = "From: ".$mailFrom;

      $txt = "You have recieved an email from ".$name.".\n\n".$message;
      mail($mailTo, $subject, $txt, $headers);

      header("Location: index.php?mailsend");
    }

 ?>
