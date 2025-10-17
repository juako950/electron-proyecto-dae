// crear modelo de usuario general 
// para administrador y recepcionista 

class Usuario{
    constructor(rut, password, rol){
        this.rut = rut;
        this.password = password;
        this.rol = rol;
    
    }

}

// datos de prueba para el sistema momentaneamente
// luego se conectara a una base de datos

const UsuarioPrueba = [
    new Usuario("123456789", "soza123", "administrador"),
    new Usuario("987654321", "recep123", "recepcionista")
]

