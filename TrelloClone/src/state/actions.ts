import { DragItem } from "../DragItem";

export type Action = {type: "ADD_LIST"; payload: string} | {type: "ADD_TASK"; payload: {text: string; listId: string}} | {type: "MOVE_LIST"; payload: {dragIndex: string; hoverIndex: string}} | {type: "MOVE_TASK"; payload: {dragIndex: string; hoverIndex: string; listId: string}}
| {type: "SET_DRAGGED_ITEM"; payload: DragItem | null}

export const addTask = (text: string, listId:string): Action => ({
    type: "ADD_TASK",
    payload: {text, listId}
})

export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const moveList = (dragIndex: string, hoverIndex: string): Action => ({
    type: "MOVE_LIST",
    payload: {dragIndex, hoverIndex}
})

export const setDraggetItem = (draggedItem: DragItem | null): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})