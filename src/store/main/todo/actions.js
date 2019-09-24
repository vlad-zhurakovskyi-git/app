export const TODO_COLLECTION = 'TODO_COLLECTION';
export const CREATE_NEW_TASK_NAME = 'CREATE_NEW_TASK_NAME';

export const setCollection = collection => ({
    type: TODO_COLLECTION,
    payload: collection
});

export const setTaskName = taskName => ({
    type: CREATE_NEW_TASK_NAME,
    payload: taskName
});