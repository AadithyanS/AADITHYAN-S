
<?php
$servername = "localhost";
$username ="root";
$password="";
$dbname="guvi";
$connect=mysqli_connect($servername,$username,$password,$dbname);

$a = $_POST['name'];
$b = $_POST['password'];
if($a!='' && $b!='')
{
    $sql = "INSERT INTO aadi11(names,password) VALUES ('".addslashes($a)."','".addslashes($b)."')";
    $connect->query($sql);
    echo "aaddi";
}

?>