import mutations from './mutations';
import getters from './getters';

const state = {
    tasks:[{id:1,nombre:"tarea1",complete:false},{id:2,nombre:"tarea2",complete:true}]
}

export default{
    namespaced:true,
    state,
    mutations,
    getters
}