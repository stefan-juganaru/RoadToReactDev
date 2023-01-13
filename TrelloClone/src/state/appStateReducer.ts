import { moveItem } from './../utils/arrayUtils';
import {Action} from './actions'
import {nanoid} from 'nanoid'
import { findItemIndexById } from '../utils/arrayUtils';
import { DragItem } from '../DragItem';

export type Task = {
    id: string;
    text: string;
  };
  
  export type List = {
    id: string;
    text: string;
    tasks: Task[];
  };
  
  export type AppState = {
    lists: List[];
    draggedItem: DragItem | null;
  };

  export const appStateReducer = (state: AppState, action: Action): AppState | void => {
    switch(action.type) {
        case "ADD_LIST": {
            state.lists.push({id: nanoid(), text: action.payload, tasks: []});
            break;
        }
        case "ADD_TASK": {
            const {text, listId} = action.payload;
            const targetLaneIndex = findItemIndexById(state.lists, listId);

            state.lists[targetLaneIndex].tasks.push({id: nanoid(), text});
            break;
        }
        case "MOVE_LIST": {
            const {dragIndex, hoverIndex} = action.payload;
            const dragId = findItemIndexById(state.lists, dragIndex);
            const hoverId = findItemIndexById(state.lists, hoverIndex);

            state.lists = moveItem(state.lists, dragId, hoverId);
            break;
        }
        case "SET_DRAGGED_ITEM": {
            state.draggedItem = action.payload;
            break;
        }
    }

    
  }