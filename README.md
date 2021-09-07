This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Puntos de interés
Comento algunos puntos de interes de este proyecto para explicar mejor como se ha realizado

- [Uso de Redux](#uso-de-Redux)
- [Uso de Patrones Componentes](#uso-de-patrones-componentes)
- [Uso de RX-JS](#uso-de-rxjs)
- [Uso de Typescript](#uso-de-Typescript)
- [Uso de Code_Splitting](#Uso-de-Code-Splitting)
- [Uso de paginacion](#Uso-de-paginacion)
- [Puntos de mejora posibles](#Puntos-de-mejora-posibles)
 


- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Uso de Redux
En este proyecto he utilizado Redux para el sistema de control de estados , utilizando su estructura basica, seria :
- Store
- Reducer
- Actions
- Efectos
- Uso de conectores-contendores par conectar los componentes con el estado

## Actulización de datos 
la actualización de datos se hace a traves del store-redux en el cual se na guardando los datos .
## Uso de patrones componentes
Se ha utilizado el patron de componentes , contenedor-presentación para generar todos los componentes , de tal forma que los componentes de presentacion solo realizar el interface y delegan el proceso de datos y estado a sus padres contenedores, solo haciendo lectura de datos y cuando es necesario se invoca a las llamadas callback para que el padre en este caso componentes contenedor Redux haga los dispacher al store.  


## Uso de rxjs
Se ha utilizado la libreria de Rxjs para el tema de manejar los efectos de Redux , si que es posible de hacerlo de otras maneras pero esta es muy potente y flexible ya que controla perfectamente la operaciones asincronas.

## Uso de Typescript
Se ha utilizado Typescript para tipar las estructuras  de datos  tanto de las Apis como todo el Store, teniendo asi un precision completa de los datos.

## Uso de Code_Splitting
Se ha utilizado Code Splitting para separar los bundles de tal forma que solo se cargaran cuando sea necesario y lo llame el router directamente, se separa el codigo en los diderentes chunks,se realiza a atrve de lazy React que conviente un componente normal un componente de carga bajp demanda.

## Uso de paginacion
Aunque no era requerido lo he visto intresante ya carga por defecto solo la primera pagina, para hacer la paginacion se apoya en el estado de la pagina actual y va acumulando los resultados con Redux.

## Puntos de mejora posibles
Comento algunos puntos podrian mejorarse en este proyecto , pero no ha sido posible por tiempo.

- Internacionalización textos
- Testing de Integracion(Selenium,Cypress..)
- Historias de componentes(Story Book)
- Crear layouts para la aplicacion(header, NavBar,Footer,Main)
- Llevar los componentes a Libreria de componentes externa.