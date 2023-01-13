type Item = {
    id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string): number => {
    return items.findIndex(item => item.id === id);
}

export function removeItemAtIndex<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export function insertItemAtIndex<T>(arr: T[], item: T, index: number): T[] {
    return [...arr.slice(0, index), item, ...arr.slice(index)]
}

export const moveItem = <T>(arr: T[], from: number, to: number): T[] => {
    const item = arr[from];
    return insertItemAtIndex(removeItemAtIndex(arr, from), item, to);
}