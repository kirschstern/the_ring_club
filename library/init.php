<?php

//Define Constants
define('DIR_LIB', str_replace('\\', '/', __DIR__) . '/');
define('ROOT', str_Replace('library/', '', DIR_LIB));
define('DIR_BACKEND', ROOT . '_backend/');
define('DIR_BACKEND_CLASSES', DIR_BACKEND . 'classes/');

if (isset($_ENV['environment'])) {
    define('ENV', strtolower($_ENV['environment']));
} else if (isset($_ENV['env'])) {
    define('ENV', strtolower($_ENV['env']));
} else {
    $ENV_dev = (bool) preg_match('/(192\.168\.\d+\.\d+|localhost|.+\.docker)/i', $_SERVER['SERVER_NAME']);
    if ($ENV_dev) {
        define('ENV', 'dev');
    } elseif ($_SERVER['SERVER_NAME'] == 'staging.the-ring-club.de') {
        define('ENV', 'staging');
    }
}
define('IS_LIVE', ENV == 'live');

include DIR_LIB . 'functions.php';

//Kickstart Backend.
include DIR_BACKEND . 'init.php';
