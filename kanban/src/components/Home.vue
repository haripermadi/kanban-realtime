<template>
  <div class="container">
    <!-- kanban table-->
    <div class="row">
      <div class="col-md-3">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h5 class="card-header bg-log text-light">Back-Log</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'log'">
              <div class="card-header bg-log text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}} </p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h5 class="card-header bg-todo text-light">To Do</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'todo'">
              <div class="card-header bg-todo text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}} </p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h5 class="card-header bg-doing text-light">Doing</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'doing'">
              <div class="card-header bg-doing text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}} </p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h5 class="card-header bg-done text-light">Done</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'done'">
              <div class="card-header bg-done text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}} </p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addtask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
            <div class="form-group">
              <label for="title" class="col-form-label">Title:</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label for="description" class="col-form-label">Description:</label>
              <textarea class="form-control" v-model="description"></textarea>
            </div>
            <div class="form-group">
              <label for="title" class="col-form-label">Point:</label>
              <input type="text" class="form-control" value="0" v-model="point">
            </div>
            <div class="form-group">
              <label for="title" class="col-form-label">Assigned To:</label>
              <input type="text" class="form-control" v-model="assigned">
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import swal from 'sweetalert2'
const config = {
  apiKey: 'AIzaSyAL-Vr6SGaLzinNRNmAVX5UmDdeT5FWrQI',
  authDomain: 'todo-fancy-198007.firebaseapp.com',
  databaseURL: 'https://todo-fancy-198007.firebaseio.com',
  projectId: 'todo-fancy-198007',
  storageBucket: '',
  messagingSenderId: '723392645847'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export default {
  name: 'Home',
  data () {
    return {
      title: '',
      description: '',
      point: '',
      assigned: '',
      tasks: []
    }
  },
  created: function () {
    this.showTask()
  },
  methods: {
    addTask: function () {
      swal(
        'Good job!',
        'You add new task!',
        'success'
      )
      db.ref('task/').push({
        title: this.title,
        description: this.description,
        point: this.point,
        assigned: this.assigned,
        status: 'log'
      })
    },
    showTask: function () {
      let self = this
      db.ref('task/').on('value', function (snapshot) {
        self.tasks = snapshot.val()
        console.log('show task', self.tasks)
      })
    },
    deleteTask: function (id) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your task has been removed.',
            'success'
          )
          db.ref('task/').child(id).remove()
        }
      })
    },
    statusAfter: function (id, data) {
      swal({
        position: 'top',
        type: 'success',
        title: 'Good Job!',
        showConfirmButton: false,
        timer: 1500
      })
      if (data.status === 'log') {
        db.ref('task/').child(id).update({
          status: 'todo'
        })
      } else if (data.status === 'todo') {
        db.ref('task/').child(id).update({
          status: 'doing'
        })
      } else if (data.status === 'doing') {
        db.ref('task/').child(id).update({
          status: 'done'
        })
      }
    },
    statusBefore: function (id, data) {
      swal({
        position: 'center',
        type: 'success',
        title: 'unfinished?',
        showConfirmButton: false,
        timer: 1500
      })
      if (data.status === 'done') {
        db.ref('task/').child(id).update({
          status: 'doing'
        })
      } else if (data.status === 'doing') {
        db.ref('task/').child(id).update({
          status: 'todo'
        })
      } else if (data.status === 'todo') {
        db.ref('task/').child(id).update({
          status: 'log'
        })
      }
    }
  }
}
</script>

<style>
.cardmain {
  padding-right: 10px;
  padding-left: 10px;
}
.card-title {
  font-weight: bold;
}
.card-header {
  font-weight: bolder;
}
.bg-log {
  background-color: #375e97;
}
.bg-todo {
  background-color: #fb6542;
}
.bg-doing {
  background-color: #ffbb00;
}
.bg-done {
  background-color: #3f681c;
}
.card-body{
  text-align: left;
}

</style>
