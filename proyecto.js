  program();
  
  function program(){

  //Variables utiles 
  //Precio base de la cotización, en quetzales, lo puede cambiar
  var precio_base = 2000

  //Valores de los recargos 
  var edad_18 = 0.1; // 10%
  var edad_25 = 0.2; // 20%
  var edad_50 = 0.3; // 30%

  var casado_18 = 0.1; // 10%
  var casado_25 = 0.2; // 20%
  var casado_50 = 0.3; // 30%

  var hijos_recargo = 0.2; // 20%
  var propiedades_recargo = 0.35; // 35%
  var salario_recargo = 0.05;

  //Recargo
  var recargo = 0;
  var recargo_total = 0;

  //Precio final 
  var precio_final = 0
  
  var nombre = prompt("Ingrese su nombre, por favor");
  
  do{

    var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números"));
    if(edad<18){
      alert("No puede ser menor de edad!");
    }

  }while(edad<18); 

  switch (true){

  case edad>=18 && edad<25:
    recargo = recargo + (precio_base * edad_18);
    break;
  case edad>=25 && edad<50:
    recargo = recargo + (precio_base * edad_25);
    break;
  case edad>50:
    recargo = recargo + (precio_base * edad_50);
    break;
  }

  var casado = prompt("¿Está casado actualmente? si/no");
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge;
  if("SI" == casado.toUpperCase()){
    edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"));
    
    switch (true){

      case edad_conyuge>=18 && edad_conyuge<25:
        recargo = recargo + (precio_base * casado_18);
        break;
      case edad_conyuge>=25 && edad_conyuge<50:
        recargo = recargo + (precio_base * casado_25);
        break;
      case edad_conyuge>50:
        recargo = recargo + (precio_base * casado_50);
        break;  
      }
  }

  var hijos = prompt("¿Tiene hijos o hijas? si/no");
  //Comprobamos la cantidad de hijos solamente si los tienen
  if(hijos.toUpperCase() == "SI"){

  var cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));

  for(var i=0; i < cantidad_hijos; i++)

  recargo = recargo + (precio_base * hijos_recargo);

  }

  var propiedades = prompt("¿Tiene propiedades? si/no");
  //Comprobamos la cantidad de hijos solamente si los tienen
  if(propiedades.toUpperCase() == "SI"){

  //Calculo de recargo por cantidad de propiedades  
  var cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"));

  for(var i=0; i < cantidad_propiedades; i++)

  recargo = recargo + (precio_base * propiedades_recargo);

  }

  //Calculo de recargo por salario
  var salario = parseInt(prompt("Ingrese su salario mensual:"));

  recargo = recargo + (salario * salario_recargo);

  //Suma total de recargos
  recargo_total = recargo;


  precio_final = precio_base + recargo_total;

  //Resultado
  alert ("Para el asegurado "+nombre);
  alert ("El recargo total sera de: "+recargo_total);
  alert ("El precio sera de: "+precio_final);

  var comprobar_salir = false;
  
  while(comprobar_salir == false){
    var repetir = prompt("¿Quiere realizar otra cotización? si/salir");
    
    if(repetir.toUpperCase() == "SI"){
        
      program();
      comprobar_salir = true;

    }
    else if(repetir.toUpperCase() == "SALIR"){
      alert("Cerrando programa...");
      comprobar_salir = true;
    }
    else{
      alert("Escriba una opción correcta (si/salir)"); 
    }
    }
  

  }

 


