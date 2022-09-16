import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useTodos from './useTodo';
const Heading = ({ title }: { title: string }) => <h2 >title</h2>

type BoxProps = {
    children: React.ReactNode;
};

const Box = (props: BoxProps) => {
    return <div
        style={{
            padding: "1rem",
            fontWeight: "bold",
        }}
    >{props.children}</div>;
};
const Button: React.FunctionComponent<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement>
> = ({ title, children, style, ...rest }) => (
    <button
        {...rest}
        style={{
            ...style,
            backgroundColor: "red",
            color: "white",
            fontSize: "xx-large"

        }}
    >
        {title ?? children}
    </button>
)

function UL<T>({
    items,
    render,
    itemClick,
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
> & {
    items: T[];
    render: (item: T) => React.ReactNode;
    itemClick: (item: T) => void
}) {
    return (
        <ul >
            {items.map((item, index) => (
                <li onClick={() => itemClick(item)} key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

function App() {
    const { todos, addTodo, removeTodo } = useTodos((state) => state)
    const newTodoRef = useRef<HTMLInputElement>(null)
    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            addTodo(newTodoRef.current.value);
            newTodoRef.current.value = ""
        }
    }, [addTodo])
    return (
        <div>
            <Heading title="introduction" />
            <Box >hello chó phú</Box>
            <Heading title="todo" />

            <UL
                items={todos}
                itemClick={(item) => alert(item.id)}
                render={(todo) => (
                    <>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)} >
                            Remove
                        </button>
                    </>
                )}
            />
            <div >
                <input type="text" ref={newTodoRef} />
                <Button onClick={onAddTodo} >Add to do</Button>
            </div>
        </div >
    );
}
const JustTheTodos = () => {
    const todos = useTodos((state) => state.todos)
    return (
        <UL
            items={todos}
            itemClick={() => { }}
            render={(todo) => (<>{todo.text}</>)}
        />
    )
}
const AppWarapper = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <App />
            <JustTheTodos />
        </div>
    )
}
export default AppWarapper