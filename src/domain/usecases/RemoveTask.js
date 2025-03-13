export default class RemoveTask {
    constructor(TaskRepository) {
        this.TaskRepository = TaskRepository;
    }

    execute(index) {
        this.TaskRepository.delete(index);
    }
}