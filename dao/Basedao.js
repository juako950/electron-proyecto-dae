const {db} = require('../database/database.js');

// aqui estoy creando la calse baseDAo
//la cual mas adelante voy a extender en las demas clases DAO
//esta clase recibe el nombre de la tabla para poder hacer las consultas dinamicamente
class Basedao{
    constructor(TableName){
        this.TableName = TableName;
        this.db = db

    }

    async findAll(){
    }

    
}