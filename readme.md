# Database

Cuantas referencias vas a crear

Red Social para escritores, poetas y gente culta!

- Escritores(usuario): Nombre, alias y sus 4 libros favoritos y porque
- Libros : Titulo, autor, comentario personal.
- Comentarios a los libros
- La referecia Libro va a tener 1 referencia hija que será el id autogenerado
- La referencia hija de libro tendrá 3 referencias (autor, id, titulo);

## Crud con las referencias de Firebase

Cuando guardar el código en tu editor de texto se guarda automaticamente en la bse de daos de firebase y luego con cada reload. En realidad cualquier cambio en cualquier archivo hará que los métodos de firebase se vayan disparando.

### Funcionalidades

- Al momento de agragar un libro quiero que se liste en la pantalla, ahora tengo que averiguar como traer los datos de la base de datos.
