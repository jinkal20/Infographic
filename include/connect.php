<?php
    $user = "root";
    $password = "root";
    $host = "localhost";
    $db = "db_mini";

    $conn = mysqli_connect($host, $user, $password, $db);
    mysqli_set_charset($conn, 'utf8');
    if(!$conn){
        echo "connection didn't work";
        exit;
    }
    

    if (isset($_GET["carModel"])){
        $car = $_GET["carModel"];

        $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";

        $result = mysqli_query($conn, $myQuery);

        $rows = array();

        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
    }
    //send entire result as a json encode array
    echo json_encode($rows);
?>