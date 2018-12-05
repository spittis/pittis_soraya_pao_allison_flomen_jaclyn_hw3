<?php
$host = "localhost";
$user = "root";
$password = "root";
$db = "db_auto_app";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    echo "something broke... connection isn't working";
    exit;
}


//get one item from database
if (isset($_GET["features_ID"])) {
    $facts = $_GET["features_ID"];

    $myQuery = "SELECT * FROM tbl_features WHERE features_ID='$facts'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    //fill the array with the result set and send it to the browser
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

    echo json_encode($rows);
}

?>


