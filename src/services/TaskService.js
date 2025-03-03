import Task from "../domain/Task";
import TaskRepository from "../repository/TaskRepository";

class TaskService {
  getTasks() {
    return TaskRepository.getAllTasks();
  }

  addTask(name) {
    const task = new Task(name);
    TaskRepository.save(task);
  }

  removeTask(index) {
    TaskRepository.delete(index);
  }

  toggleTaskCompletion(index) {
    TaskRepository.toggleCompletion(index);
  }
}

export default new TaskService();