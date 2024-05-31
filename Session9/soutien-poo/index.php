<?php
require "config/autoload.php";


$route = "home";


if(isset($_GET["route"])){
    
    $route = $_GET["route"];
    
    
    
}
else {
    
    $route = "home";
    
    
}

$page = new Routing();

$page->dispatch($route);






?>