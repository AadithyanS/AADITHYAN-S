<?php
$servername = "localhost";
$username ="root";
$password="";
$dbname="guvi";
$connect=mysqli_connect($servername,$username,$password,$dbname);



if(isset($_POST['name']) && $_POST['name']!='' && isset($_POST['password']) && $_POST['password']!='')
{
    $sql = "SELECT * FROM aadi11 WHERE names = '$_POST['Email']' AND pass = '$_POST['Password']'"; }
    $result = $connect->query($sql);
    if ($result->num_rows > 0) {
        echo "Login successfully";
      } else {
        echo "Login failed";
      }
    

?>