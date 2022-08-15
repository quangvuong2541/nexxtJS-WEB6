import React from 'react';
import { Counter } from './demo/counter';
import { TextDemo } from './demo/TextDemo';
import Demo1 from './demo1/demo1';


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
const App: React.FC = () => {
  return <div >
    {/* <TextDemo text="chào a cường củi" 
    person={{ firstName: '', lastName: '' }} 
    handleChange = {e => {
      
    }}
    />
    <Counter>
      {({ count, setCount }) => (
        <div >
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </Counter> */}

    {/* demo 1  */}
    <Demo1/>


  </div>
}
export default App;
