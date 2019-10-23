class Producto {
  //Constructor
  constructor(n, s, p, d = true){
    //Atributos 
    this.nombre = n
    this.stock = s
    this.precio = p
    this.disponible = d //<-- Por default asigna "true"
  }

  //Propiedades Lectura/Escritura (getters(para leer...las propiedades privadasen minuscula y las publicas empiezan con mayusculas) & setters (para cambiar el dato))El signo de exclamacion adelante me lo invierte
      get Precio (){
    return "u$s" + (this.precio * 1.21).toFixed(2)

  }

    set Precio(value){
  
  if( isNaN(value) != true ){ //<-- aquise puede trabajar con una logica propia para ese dato en particular
    this.precio = value 
  } else {
    console.error("ERROR: Valor Ingresado NO valido")
  }
 }

  //<--creo un setter solo el que necesite trabajar
    set Disponible(value){

    if( value == this.disponible ){
alert("La disponibilidad ya está en: "+ value)
    return
    } 



      let estado = value ? "habilitado" : "deshabiltado"

      if( confirm(`Desea $(estado) el producto "$(this.nombre)"`) ) {

          this.disponible = value
    }
}



  //Metodos de Instancia
  Mostrar(){
    let color = this.disponible ? "green" : "red"

    document.write(`<p style="color:${color}">Hay <strong>${this.stock}</strong> unid. de <strong>${this.nombre}</strong> que valen <em>ARG${this.precio}</em> c/u</p>`)
  }

  aplicarDescuento(valor){
    let importe = (this.precio * valor) / 100

    this.precio = this.precio - importe
  }

  //Metodos de Clase (estáticos)
  static parse(json){//<-- Ej: ({"nombre": Café Torrado, "stock":600. "precio":85.65."disponible":}
    //Aca hay que hacer magia para que se conviertan en Objetos "producto"
    let datos = JSON.parse(json)//<-- de JSON a Object

    console.log("Estos son los datos:")
    console.log(datos)

  if( datos instanceof Array ){ //<--En java script un array es un objeto que almacena objetos
    //1) Crear un array vacio para guardar los objetos Producto
    let productos = new Array()

//2)Recorrer el array de object para instancear objetos Producto
    datos.forEach(item => {     //todo lo que implique callback va con arrow function, que reemplaza a function solo

//3) Instancear objetos Producto con los datos de cada Object
      let producto = new Producto(item.nombre, item.stock, item.precio, item.disponible)

//4) Guardar el objeto Producto instanceado en el array nuevo
      productos.push(producto)

      console.log(producto)
    })

//5) Retornar el Array nuevo una vez que se haya instanciado todos los objetos Producto
      return productos



    } else if (datos instanceof Object ){
      let producto = new Producto(datos.nombre, datos.precio, datos.stock, datos.disponible)
      console.log("Voy a convertir un Object en producto")
    } else { 
      console.log("Ya fue...no convierto nada en producto")
    }    
    }
  }

