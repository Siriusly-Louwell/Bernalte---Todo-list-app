export default class GetTasks {
    constructor(TaskRepository) {
        this.TaskRepository = TaskRepository;
    }

    execute() {
        return this.TaskRepository.getTasks();
    }
}