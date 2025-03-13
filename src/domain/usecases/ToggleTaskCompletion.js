export default class ToggleTaskCompletion {
    constructor(TaskRepository) {
        this.TaskRepository = TaskRepository;
    }

    execute(index) {
        this.TaskRepository.toggleCompletion(index);
    }
}