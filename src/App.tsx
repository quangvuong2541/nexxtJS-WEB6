import React, { useCallback, useRef } from 'react';
import './App.css';
import { Provider, useDispatch, useSelector } from "react-redux"
import store, { selectTodos, addTodo, removeTodo } from './store';
const Heading = ({ title }: { title: string }) => <h2>{title}</h2>


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
    HTMLButtonElement> & {
      title?: string
    }
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
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const newToRef = useRef<HTMLInputElement>(null)
  const onAddToDo = useCallback(() => {
    if (newToRef.current) {
      dispatch(addTodo(newToRef.current.value))
      newToRef.current.value = ""
    }
  }, [dispatch])
  return (
    <div >
      <Heading title='Introduction' />
      <Box >Hello chó phú</Box>
      <Heading title="Todos" />
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(toDo) => (
          <>
            {toDo.text}
            <button onClick={() => dispatch(removeTodo(toDo.id))}>
              remove
            </button>
          </>
        )}
      />
      <div >
        <input type="text" ref={newToRef} />
        <Button onClick={onAddToDo} >Add to do </Button>
      </div>
    </div>
  );
}

export default App;
