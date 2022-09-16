import create from 'zustand'

interface Todo {
    id: number;
    done: boolean;
    text: string
}
const useTodos = create<{
    todos: Todo[];
    addTodo: (text: string) => void
    removeTodo: (removeID: number) => void;

}>((set) => ({
    todos: [{ id: 0, text: "hello chó phú", done: false }],
    addTodo: (text: string) =>
        set((state) => ({
            ...state,
            todos: [
                ...state.todos,
                {
                    id: state.todos.length,
                    text,
                    done: false,
                }
            ]
        })),
    removeTodo: (removeID: number) => {
        set((state) => ({
            ...state,
            todos: state.todos.filter(({ id }) => id !== removeID),
        }))
    }
}))
export default useTodos