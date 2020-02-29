
# ARCA-Redux

Es el Redux para Arca. Aquí deben ir las definiciones de tipos, de tablas, la administración de datos, y todo lo relativo a la conexión entre ARCA-Go y cualquier interfaz web.

## Actividades

- [ ] CRUD sobre `Raw-Data`
- [ ] CRUD-reflejado en `Aggregated-Data`
- [ ] Filtros en `Select`.
- [ ] Validación de datos antes de realizar cualquier pedido
- [ ] Mocks de cada y una de las tablas
- [ ] Representación de los tipos de columnas en `Raw-Data`
- [ ] Organización de busquedas

En un principio ésta solución Redux se enfoca en manejar una sola instancia, es decir, al momento de utilizar un objeto Redux, éste puede contener, digamos, una y solamente una sola tabla `AAU`, junto con todas las demás tablas existentes y posibles en ARCA-Go.

## Organizacion de cada tabla

Vamos a tomar como ejemplo, la tabla `AAU`.
Hay que definir los casos cuando:

- `select * from AAU` y mostrar la tabla -> AAU*
- Insert, Update, Delete sobre AAU*
- Todos los casos de validación al momento de hacer Insert, Update sobre AAU*
- Busqueda de entradas `AAU`
- Filtrar `select * from AAU where condition = C` y mostrar la tabla -> AAU|C
- Insert, Update, Delete sobre AAU|C afectando solamente a sus entradas
- Insert, Update, Delete sobre AAU* afectando a AAU|C

Y como último caso, tomemos como ejemplo la tabla `AAU-APU-Tasks-Gantt`:

- `select * from AAU-APU-Tasks-Gantt` y mostrar la tabla agregada -> T*
- `select * from AAU-APU-Tasks-Gantt where condition = C` y mostrar la tabla agregada -> T|C

Obtenemos de ésta manera que ARCA-Redux comprende un conjunto de tablas en forma de componentes, donde cáda componente tiene su sus particularidades.

## Glosario

`Raw-Data` corresponde a el arreglo de datos sin procesar o sin transformar en una tabla agregada.

`Aggregated-Data` es la transformación de `Raw-Data` en una representación agregada de datos. Ejemplo: `AAU-APU-Tasks-Gantt` muestra los datos en plano y su representación compleja agrupa bajo una `AAU` cero o más entradas `APU`.

