import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useState, useEffect} from "react";



function App() {
    const [cartOpened, setCartOpened] = useState(false);

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch("https://63caabac4f53a004202857de.mockapi.io/items").then((res) => {
            return res.json();
        }).then((json) => {
            setItems(json)
        })
    }, [])

    const onAddToCard = (obj) => {
        console.log(cartItems.find(items => items.id === obj.id))
        if(cartItems.find(items => items.id === obj.id)){

            //setCartItems(prev =>[...prev, obj])

        }else{
            const newArr = cartItems.filter((item) => item !== obj)
            setCartItems(newArr)
        }
    }

    const handleChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

  return (
      <div className="wrapper clear">

          {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null}
          <Header onClickCart={() => setCartOpened(true)}/>

          <div className="content">
              <div className="d-flex align-center mb-40 justify-between">
                  <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                  <div className="search-block d-flex">
                      <img src="/img/search.svg" alt="search"/>
                      <input onChange={handleChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                  </div>
              </div>

              <div className="d-flex flex-wrap">

                  {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => {
                      return <Card
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          url={item.url}
                          onClickFavorite={() => {console.log('Добавили в любимые')}}
                          onClickPlus={(obj) => onAddToCard(obj)}
                      />

                  })}

              </div>
          </div>
      </div>
  );
}

export default App;
