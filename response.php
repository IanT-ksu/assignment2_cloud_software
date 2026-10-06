<?php
header('Content-Type: application/json');
$username = $_POST["username"]; 
$flower = $_POST["flower"];

    echo json_encode([
        "username" => $username,
        "flower" => $flower,
        "message" => "Hello {$username}, you have planted {$flower}s in the garden."
    ]);
?>