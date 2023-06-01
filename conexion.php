<?php

class conexion {

    private $servidor="localhost";
    private $usuario="postgres";
    private $contrasenia="Acdxalj99";
    private $conexion;

    public function __construct() 
    {
        try {
            $this->conexion=new PDO("pgsql:host=$this->servidor;dbname=pictionary",$this->usuario,$this->contrasenia);
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        }
        catch(PDOException $e) {
            return "Falla de conexion ".$e;
        }
    }

    public function ejecutar($sql) {
        $this->conexion->exec($sql);
    }

    public function consultar($sql) {
        $sentencia = $this->conexion->prepare($sql);
        $sentencia->execute();
        return $sentencia->fetchAll();
    }
}


?>