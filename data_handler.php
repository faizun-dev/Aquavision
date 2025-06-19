<?php
/*header('Content-Type: application/json');

// Database connection (you'll need to configure these values)
$host = 'localhost';
$dbname = 'fish_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    
    $sql = "SELECT day, temperature FROM fish_farming_data";
    $stmt = $conn->query($sql);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $days = [];
    $temperature = [];
    
    foreach ($rows as $row) {
        $days[] = $row['day'];
        $temperature[] = $row['temperature'];
    }
    
    // Return JSON data
    echo json_encode(['days' => $days, 'temperature' => $temperature]);
    ?>
    

    // Get water quality data
    /*if ($_GET['type'] === 'fish_farming_data') {
        $stmt = $pdo->query("SELECT * FROM fish_farming_data ORDER BY timestamp DESC LIMIT 1");
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($data);*/
    }
*/
/*
    // Get fish measurements
    if ($_GET['type'] === 'fish_measurements') {
        $stmt = $pdo->query("SELECT * FROM fish_measurements ORDER BY timestamp DESC LIMIT 10");
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }

} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);*/
}*?
?> 