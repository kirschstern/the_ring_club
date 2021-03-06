<?php

include '../library/init.php';

App::check_spam();

$response = array(
    'ok' => false,
    'response' => '',
    'errors' => array(),
);
$data = array(
    'name' => _var('name', $_PAYLOAD),
    'phone' => _var('phone', $_PAYLOAD),
    'email' => _var('email', $_PAYLOAD),
    'course' => _var('course', $_PAYLOAD),
);


if(!is_string($data['name']) || strlen($data['name']) < 2) {
    array_push($response['errors'], array('name', 'Bitte tragen Sie einen richtigen Namen ein.'));
}
if(!is_string($data['phone']) || strlen($data['phone']) < 2) {
    array_push($response['errors'], array('phone', 'Bitte tragen Sie eine richtige Telefonnummer ein.'));
}
if(!is_string($data['email']) || strlen($data['email']) < 5 || !strstr($data['email'], '@')) {
    array_push($response['errors'], array('email', 'Bitte tragen Sie eine richtige E-Mail ein.'));
}
if(!is_string($data['course']) || empty($data['course'])) {
    array_push($response['errors'], array('course', 'Bitte wählen Sie einen Kurs aus.'));
}

if(empty($response['errors'])) {
    Xjsondb::insert('trials', $data);
    $response['ok'] = true;
    $response['response'] = 'Sie sind eingetragen.';
}

echo json_encode($response);
