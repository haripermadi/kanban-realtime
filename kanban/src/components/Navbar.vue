<template>
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">K-A-N-B-A-N</a>
  <form class="form-inline">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addtask">
      New Task
    </button>
  </form>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar{
  background-color:#a1d6e2 !important;
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
