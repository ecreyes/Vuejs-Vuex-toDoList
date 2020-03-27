<template>
  <div id="app" class="container">
    <Header/>
    <CreateTask/>
    <Table/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Table from './components/Table';
import CreateTask from './components/CreateTask';

export default {
  name: 'App',
  components: {
    Header,
    Table,
    CreateTask
  }
}
</script>

