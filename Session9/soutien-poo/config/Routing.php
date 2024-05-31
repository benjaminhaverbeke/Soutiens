<?php

class Routing {
    
    public function __construct(){
        
        
    }
    
    public function dispatch(string $route) : void {
        
        
        $allRoutes = new PageManager();
        
        
        
        $getRoutes = $allRoutes->getAllRoutes();
        
        
        
        $page = null;
        $pageByRoute;
        foreach($getRoutes as $RouteData){
            
            
            if($RouteData["route"] === $route)
            {
                
               $page = $allRoutes->getPageByRoute($route);
               
                $title = $page->getTitle();
                $content = $page->getContent();
                $route = $page->getRoute();
                
               $pageByRoute = new Page($title, $content, $route);
            }
            
            
            
            
        }
        $pageByRoute->render();
    }
    
    
    
    
    
    
    
    
}






?>