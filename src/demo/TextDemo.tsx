import React, { useRef, useState } from 'react'

interface Person {
  firstName: string;
  lastName: string
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;

  person: Person;
  handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void;

}
interface TextNode {
  text: string
}
export const TextDemo: React.FC<Props> = ({ handleChange}) => {
  // const [count, setCount] = useState <{text : string}> ({ text: 'hello' })
  const [count, setCount] = useState<TextNode>({ text: 'hello' })
  const inputRef = useRef<HTMLInputElement>(null)
  // (null) : nhớ có tham số null không có thì báo lỗi 
  const divRef = useRef<HTMLDivElement>(null)
  console.log(inputRef);
  
  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}