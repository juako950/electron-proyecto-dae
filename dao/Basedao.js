const {db} = require('../database/database.js');

// aqui estoy creando la calse baseDAo
//la cual mas adelante voy a extender en las demas clases DAO
//esta clase recibe el nombre de la tabla para poder hacer las consultas dinamicamente
class Basedao{
    constructor(TableName){

        //con el this.tablename guardamos el ombre de la tala 

        this.TableName = TableName;
        this.db = db

    }

async Crear(data){
    // con el data creamos un objeto los cuales va a tomar los datos que le pasemos 
    //para crear un nuevo registro en la tabla

    const {data: result, error} = await db 
    .from(this.TableName) // seleccionamos el nombre de la tabla 
    .insert([data]) // insertamos los datos en la tabla seleccionada 

    if(error) throw error // lanzamos el error en caso de algun fallo con la incercion de los datos 

    return result // retornamos el resultado de la insercion de los datos

}


// aqui obtenemos todos los datos de la tablas 
// dependiendo de la tabla seleccionada 

async ObtenerTodos(){
    const {data, error} = await db
    .from(this.TableName) // lo mismo seleccionamos la tabla dependiendo del nombre
    .select('*') // aqui selecionamos todas las columnas de la tabla 

    if (error) throw error
    return data // devuelve la lista con todos los reg istros seleccionados
}



// obtenenmos los datos de una tabla 
// por una columna espesifica 

async ObtenerPor(columna,valor){
    const {data,error} = await db
    .from(this.TableName)
    .select('*')
    .eq(columna,valor) // filtra por su columna y su valor 
    .single() // solo devuelve un solo registro 
    // se puede cambiar en caso de algun problema o detalle 

    if (error) throw error
    return data

}


async Actualizar(columna, valor, nuevosDatos){
    const {data, error} = await db
    .from(this.TableName)
    .update(nuevosDatos) // actualizammos los datos con sus nuevos datos 
    .eq(columna, valor) // aqui desimos la columna con su valor para hacer el filtro y actualizar los datos 

    if (error) throw error
    return data

}


async Eliminar(columna, valor){
    const {data, error} = await db
    .from(this.TableName)
    .delete()
    .eq(columna, valor) // filtramos por la columna y su valor para eliminar los datos

    if (error) throw error
    return data

}

}
