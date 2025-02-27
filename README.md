# Cotizador Automático de Seguros TK-U

## Descripción del Proyecto
Este programa permite realizar cotizaciones automáticas para la empresa de seguros TK-U, ubicada en la ciudad de Jedha. Su objetivo es agilizar el proceso de cotización, evitando el retraso y la limitación de 50 cotizaciones diarias que existía en el sistema manual.

## Funcionamiento del Programa
El programa toma en cuenta diferentes factores para calcular el costo total del seguro de un cliente:
1. **Edad del asegurado:** Se verificará que sea mayor de edad y se aplicarán recargos según su rango de edad.
2. **Estado civil:** Si el asegurado está casado, se solicitará la edad del cónyuge para aplicar un recargo correspondiente.
3. **Número de hijos:** Se aplicará un recargo adicional por cada hijo del asegurado.
4. **Cantidad de propiedades:** Se aplicará un recargo del 35% sobre la cotización por cada propiedad que posea el asegurado.
5. **Ingresos del asegurado:** Se aplicará un recargo del 5% sobre el salario del asegurado.
6. **Cálculo del precio final:** Se suma el precio base con los recargos calculados para obtener la cotización final.
7. **Cotización continua:** El programa permite realizar múltiples cotizaciones hasta que el usuario ingrese la palabra "Salir".

## Factores Considerados
### Recargos según edad:
- 18 a 24 años: 10% del precio base.
- 25 a 49 años: 20% del precio base.
- 50 años o más: 30% del precio base.

### Recargos adicionales:
- Carga adicional por edad del cónyuge (si está casado) según la misma escala anterior.
- 20% adicional por cada hijo registrado.
- 35% adicional por cada propiedad que posea el asegurado.
- 5% adicional basado en el salario del asegurado.

## Posibles Mejoras
1. **Interfaz Gráfica:** Actualmente, el programa funciona en consola. Una interfaz gráfica mejoraría la experiencia del usuario.
2. **Base de Datos:** Implementar almacenamiento de cotizaciones para futuras referencias y análisis de datos.
3. **Optimización de Algoritmo:** Evaluar mejoras en la lógica del cálculo para reducir tiempos de procesamiento en grandes volúmenes de datos.
4. **Integración Web:** Permitir cotizaciones en línea a través de un portal web.


