import Task from "../entities/Task";

export default class AddTask {
    constructor(TaskRepository) {
        this.TaskRepository = TaskRepository;
    }

    execute(name) {
        const task = new Task(name);
        this.TaskRepository.save(task);
    }
}