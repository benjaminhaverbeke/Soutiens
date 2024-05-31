<?php





class PageManager {
    
    
    private PDO $db;
    
    public function __construct()
    {
        
    $host = "db.3wa.io";
    $port = "3306";
    $dbname = "benjaminhaverbeke_poo_soutien";
    $connexionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8";

    $user = "benjaminhaverbeke";
    $password = "052a871a0c9fd8d6553a4521eb1cee3b";
        
        
        $this->db = new PDO(
    $connexionString,
    $user,
    $password);
        
    }
    
    
    
    
     public function getAllPages() : array
     {
         
        
         $query = $this->db->prepare('SELECT * FROM pages');
        $query->execute();
        $pageList = $query->fetchAll(PDO::FETCH_ASSOC);
        $pageTable = [];
        
        foreach($pageList as $page){
            
            $newpage = new Page($page["title"], $page["content"], 
            $page["route"]);
            $newpage->setId($page['id']);
            array_push($pageTable, $newpage);
         
         
         
        }
        
        
        
        return $pageTable;
    
     }
    
    public function getPageByRoute(string $route) : Page
    {
        $parameters = [
    'route' => $route
    ];
    
    
        $query = $this->db->prepare('SELECT * FROM pages WHERE route = :route');
        
        $query->execute($parameters);
        
        
        $page = $query->fetch(PDO::FETCH_ASSOC);
        
        $pageByRoute = new Page($page["title"], $page["content"], $page["route"]);
        
        
        return $pageByRoute;
    }
    
    public function getAllRoutes() : array {
        
         $query = $this->db->prepare("SELECT `route` FROM `pages`");
         
        $query->execute();
        $routeList = $query->fetchAll(PDO::FETCH_ASSOC
        );   
        
        return $routeList;
        
        
    }
    
    
    
    
}




?>