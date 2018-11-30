<?php
    include 'functions.php';
    
    //single fact route
    if (isset($_GET["fact"])){
        $data = get_all_facts($conn, $_GET["fact"]);
        echo json_encode($data);
    } else {
        $data = get_all_facts($conn);
        echo json_encode($data);
        //can use this for portfolio pieces too - does not only apply to media
    }

?>