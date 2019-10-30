static parse(json){ //<-- Ej: '[{"nombre":"Café Torrado","stock":600,"precio":85.65,"disponible":false},{"nombre":"Jugo de Naranja","stock":450,"precio":15.45,"disponible":true}]'
    //Acá hay que h acer magia para que se conviertan en objetos 'Producto'
    //let datos = JSON.parse(json) //<-- de JSON a Object
    //let datos = json //<-- de JSON a Object

    let datos = (typeof json == "string") ? JSON.parse(json) : json

    console.log("Estos son los datos:")
    console.log(datos)

    if( datos instanceof Array ){

      //1) Recorrer el Array de Object para instanciar objetos Producto y retornarlos
      return datos.map(item => new Producto(item.Nombre, item.Stock, item.Precio, item.Imagen) ) //2) <-- Instanciar un objeto Producto con los datos de cada Object

    } else if( datos instanceof Object ){

      return new Producto(datos.Nombre, datos.Stock, datos.Precio, datos.Imagen)

    } else {
      console.error("Ya fue... no convierto nada en Producto")
    }

  }