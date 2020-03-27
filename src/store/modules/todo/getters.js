/*
Los getters son para recuperar los datos del estado
que requieran algun comportamiento extra y ademas
este comportamiento se repita en varios componentes.

Por ejemplo si se quisiera obtener el total de tareas
en varias componentes se tendria que generar el mismo
metodo en varios archivos en cambio aquí esta centralizado
*/
export default {
    tasksCount: state => state.tasks.length
}