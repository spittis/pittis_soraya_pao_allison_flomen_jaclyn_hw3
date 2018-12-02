<?php
    include 'connect.php';
    // get one fact first
    function get_single_fact($pdo, $fact) {
        $query = "SELECT * FROM tbl_features WHERE features_ID = $fact"; 
        //attach the id in the thumnail to ensure you are getting the right image

        $get_fact = $pdo->query($query);
        $results = array();

        while($row = $get_fact->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }

    //get all facts
    function get_all_facts($pdo) {
        $query = "SELECT * FROM tbl_features";
        
        $get_fact = $pdo->query($query);
        $results = array();
        
        while($row = $get_fact->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        
        return $results; 
        }


        // get one detail first
    function get_single_detail($pdo, $details) {
        $query = "SELECT * FROM tbl_facts WHERE facts_id = $details"; 
        //attach the id in the thumnail to ensure you are getting the right image

        $get_detail = $pdo->query($query);
        $results = array();

        while($row = $get_detail->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }

    //get all details
    function get_all_details($pdo) {
        $query = "SELECT * FROM tbl_facts";
        
        $get_detail = $pdo->query($query);
        $results = array();
        
        while($row = $get_detail->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        
        return $results; 
        }


?>