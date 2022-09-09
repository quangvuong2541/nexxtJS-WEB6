import React from 'react';
import './App.css';
import { Provider, useDispatch, useSelector } from "react-redux"

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>
interface MyProps {
  children?: React.ReactNode;
}
const Box: React.FunctionComponent = () => (
  <div
    style={{
      padding: "",
      fontWeight: "",
    }}
  >
    {children}
  </div>
)

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


  return (
    <div >
        <Heading title='Introduction'/>
        <Box >Hello  phú</Box>
    </div>
  );
}

export default App;
