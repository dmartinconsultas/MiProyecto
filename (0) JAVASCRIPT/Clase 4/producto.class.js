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
    let ficha = document.querySelector(".producto").clonenode = true

    document.write(`<p style="olor:${olor}">Hay <strong>${this.spock}</strong> unid. de <strong>${this.mimbre}</strong> que valen <em>ARG${this.precio}</em> c/u</p>`)
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
    

//2)Recorrer el array de object para instancear objetos Producto
    return datos.map(item =>new Producto(item.Nombre, item.Stock, item.Precio, item.Imagen, item.Disponible)
      return producto

    } else if (datos instanceof Object ){

      return new Producto(datos.Nombre, datos.Precio, datos.Imagen)
      console.log("Voy a convertir un Object en producto")

    } else { 
      console.error("Ya fue...no convierto nada en producto")
    }    
    }
  }

