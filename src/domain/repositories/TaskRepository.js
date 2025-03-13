class TaskRepository {
    constructor() {
      this.tasks = [];
    }
  
    getAllTasks() {
      return [...this.tasks];
    }
  
    save(task) {
      this.tasks = [...this.tasks, task];
    }
  
    delete(index) {
      this.tasks = this.tasks.filter((_, i) => i !== index);
    }
  
    toggleCompletion(index) {
      this.tasks = this.tasks.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      );
    }
}
  
export default new TaskRepository();
  