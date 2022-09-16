import React, { useCallback, useRef, useMemo } from 'react'
import { useTodo } from './useTodo';



const Heading = ({ title }: { title: string }) => <h2 >{title}</h2>

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
        HTMLButtonElement
    > & {
        title?: string
    }
> = ({ title, children, style, ...rest }) => (
    <button
        {...rest}
        style={{
            ...style,
            backgroundColor: "red",
            color: 'white',
            fontStyle: 'xx-large'
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
        <ul>
            {items.map((item, index) => (
                <li onClick={() => itemClick(item)} key={index}>
                    {render(item)}
                </li>
            ))}

        </ul>
    )
}

function App() {
    const inititalTodos = useMemo(
        () => [{ id: 0, text: 'Hey there', done: false }],
        []
    )
    const { 
        isEditing,
        todos,
        addTodo,
        removeTodo,
        startWorking,
        endWorking, } = useTodo(inititalTodos)

    // const newTodoRef = useRef<HTMLInputElement>(null)

    // const onAddTodo = useCallback(() => {
    //     if (newTodoRef.current) {
    //         addTodo(newTodoRef.current.value);
    //         newTodoRef.current.value = ""
    //     }
    // }, [addTodo])
    return (
        <div>
            <Heading title="introduction" />
            {/* <Box >hello chó phú</Box>
            <Heading title="todos" />

            {isEditing && (
                <>
                    <UL
                        items={todos}
                        itemClick={(item) => alert(item.id)}
                        render={(todo) => (
                            <>
                                ({todo.done ? "Done" : "Not Done"}){todo.text}
                                <button onClick={() => removeTodo(todo.id)}>Remove</button>

                            </>
                        )}
                    />
                    <div >
                        <input type="text" ref={newTodoRef} />
                        <Button onClick={onAddTodo} >Add Todo</Button>
                    </div>
                    <Button onClick={startWorking}>start working</Button>
                </>
            )}
            {!isEditing && <Button onClick={endWorking}>Stop working</Button>} */}
        </div >
    )

}

export default App