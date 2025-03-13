class Task {
    constructor(name) {
      this.name = name;
      this.isCompleted = false;
      this.date = new Date().toLocaleDateString();
    }
}
  
export default Task;  