import {ADD_TASK,DELETE_TASK,EDIT_TASK,COMPLETE_TASK} from '../../mutations-types';

export default{
    [ADD_TASK](state,task){
        state.tasks.push(task);
    },
    [DELETE_TASK](state,index){
        state.tasks = state.tasks.filter(task=>task.id!=index);
    },
    [EDIT_TASK](state,newTask){
        let mytasks = state.tasks.filter(task=>task.id!=newTask.id);
        mytasks.push(newTask);
    },
    [COMPLETE_TASK](state,index){
        let newTasks = [...state.tasks];
        newTasks.forEach(task=>{
            if(task.id==index){
                task.complete = true;
            }
        });
        state.tasks = newTasks;
    }
}