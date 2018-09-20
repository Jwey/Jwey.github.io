<?php

$page=$_POST['page'];
$imgAll=json_decode(file_get_contents("img.json"),true);
$startData=($page-1)*15;
$pageData=array_slice($imgAll,$startData,15);

echo json_encode($pageData);


