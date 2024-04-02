<?php
require_once "../vendor/autoload.php";
use Bramus\Router\Router;
use Dotenv\Dotenv;
use Phoenix\App;

Dotenv::createImmutable(dirname(__DIR__))->load();

$app = new App(new Router());
$app->run();
