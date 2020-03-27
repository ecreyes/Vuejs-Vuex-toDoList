<template>
  <div>
    <h3>Total: {{tasksCount}}</h3>
    <form @submit="submitForm" method="post">
      <p v-if="errors.length>0">
        <small>Por favor, corrija el(los) siguiente(s) error(es):</small>
        <ul>
          <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>
      <div class="form-group row">
        <label for="nombre" class="col-sm-2 col-form-label">Nombre tarea</label>
        <div class="col-sm-10">
          <input v-model="nombre" type="text" class="form-control" id="nombre" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Añadir</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { v4 as uuidv4 } from "uuid";
import {ADD_TASK} from '../store/mutations-types';
import {mapMutations,mapGetters} from "vuex";

export default {
  name: "CreateTask",
  data() {
    return {
      errors: [],
      nombre: ""
    };
  },
  computed:{
    ...mapGetters('todo',['tasksCount'])
  },
  methods: {
    ...mapMutations('todo',[ADD_TASK]),
    defaultState(){
      this.errors = [],
      this.nombre = ""
    },
    submitForm(e) {
      this.errors = [];
      if(this.nombre.length<2){
        this.errors.push("El nombre es muy corto!");
      }else{
        //paso validaciones hacer lo que se requiera
        this.ADD_TASK({id:uuidv4(),nombre:this.nombre,complete:false});
        //restaurar estado interno
        this.defaultState();
      }
      e.preventDefault();
    }
  }
};
</script>