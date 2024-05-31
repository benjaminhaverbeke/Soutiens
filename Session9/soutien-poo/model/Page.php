<?php

class Page {
    
    private ? int $id = null;
    
    public function __construct(private string $title, private string $content, private string $route)
        {
    
        }    
    
     public function getId() : int
    {
        return $this->id;
        
    }
    public function setId(int $id) : void
    {
        $this->id = $id;
        
    }
    
    public function getTitle() : string
    {
        return $this->title;
        
    }
    public function setTitle(string $title) : void
    {
        $this->title = $title;
        
    }
    
    public function getContent() : string
    {
        return $this->content;
        
    }
    public function setContent(string $content) : void
    {
        $this->title = $content;
        
    }
    
    public function getRoute() : string
    {
        return $this->route;
        
    }
    
    public function setRoute(string $route) : void
    {
        $this->title = $route;
        
    }
    
    public function render() : void {
        
        $content = $this->content;
        
        require "templates/layout.phtml";
        
    }
    
    
    
    
}




?>