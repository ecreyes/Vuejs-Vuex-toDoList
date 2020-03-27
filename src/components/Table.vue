<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task of tasks" :key="task.id"> 
          <th scope="row">{{task.id}}</th>
          <td>{{task.nombre}}</td>
          <td>{{task.complete}}</td>
          <td>
              <button class="btn btn-success" @click="COMPLETE_TASK(task.id)">Terminar</button>
              <button class="btn btn-danger" @click="DELETE_TASK(task.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import {DELETE_TASK,COMPLETE_TASK} from '../store/mutations-types';

export default {
  name: "Table",
  computed:{
      ...mapState('todo',['tasks'])
  },
  methods:{
      ...mapMutations('todo',[DELETE_TASK,COMPLETE_TASK])
  }
};
</script>