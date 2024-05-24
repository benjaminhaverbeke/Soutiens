<?php 

require "./data/posts.php";

            $design = [
    $posts["design"][0],
    $posts["design"][1],
    $posts["design"][2]
];

$dev = [
    $posts["development"][0],
    $posts["development"][1],
    $posts["development"][2]
];

$access = [
    $posts["accessibility"][0],
    $posts["accessibility"][1],
    $posts["accessibility"][2]
];




$route = null;
$param = null;
$post = null;

if(isset($_GET["route"]))
{
    
    $route = $_GET["route"];
    
    if($route !== "home" && $route !== "article" && $route !== "categories")
{
    
    
    $route = "home";
}
}

else
{
    $route = "home";
    
    
};

require "layout.phtml";


?>