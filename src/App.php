<?php

namespace Phoenix;

use Bramus\Router\Router;

class App
{
    private Router $router;

    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    public function loadRoute()
    {
        $this->router->setNamespace("\Phoenix\Controller");
        $this->router->post("/mail", "MailController@send");
    }

    public function run()
    {
        $this->loadRoute();
        $this->router->run();
    }
}
