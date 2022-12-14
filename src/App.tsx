import React from 'react';
import { useQuery } from 'react-query';
import { Counter } from './demo/counter';
import { TextDemo } from './demo/TextDemo';
import Demo1 from './demo1/demo1';
import { Badge, Grid, LinearProgress } from '@mui/material';
import { Drawer } from '@mui/material';
import { Wrapper, StyledButton } from './app.styles';
import Cart from "./shoppingCart/cart/Cart"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }


export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App: React.FC = () => {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItem, setCartItem] = React.useState([] as CartItemType[])


  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'product',
    getProducts
  )
  console.log(data);
  const getTotalItems = (items: CartItemType[]) => items.reduce((sum: number, item) => sum + item.price, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItem(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 }
          : item
        )
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItem(prev =>
      prev.reduce((accumulation, item) => {
        if (item.id === id) {
          if (item.amount === 1) return accumulation;
          return [...accumulation, { ...item, amount: item.amount - 1 }]
        } else {
          return [...accumulation, item]
        }
      }, [] as CartItemType[])
    )
  }



  if (isLoading) return <LinearProgress />
  if (error) return <div>something went wrong ... </div>

  return (
    <Wrapper >
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItem={cartItem}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}

        />
      </Drawer>
      <StyledButton >
        <Badge badgeContent={getTotalItems(cartItem)} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </StyledButton>
        <Grid >
          
        </Grid>










      {/* <TextDemo text="ch??o a c?????ng c???i" 
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
      {/* <Demo1 /> */}


    </Wrapper>
  )
}
export default App;

