import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const items = [
    {
        id: 1,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        url: "/img/sneakers/1.jpg"
    },
    {
        id: 2,
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12800,
        url: "/img/sneakers/2.jpg"
    },
    {
        id: 3,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        url: "/img/sneakers/3.jpg"
    }
]

function App() {
  return (
      <div className="wrapper clear">

          <Header/>
          <Drawer/>

          <div className="content">
              <div className="d-flex align-center mb-40 justify-between">
                  <h1 className="">Все кроссовки</h1>
                  <div className="search-block d-flex">
                      <img src="/img/search.svg" alt="search"/>
                      <input type="text" placeholder="Поиск..."/>
                  </div>
              </div>

              <div className="d-flex">

                  {items.map((item) => {
                      return <Card id={item.id} title={item.title} price={item.price} url={item.url}/>
                  })}

              </div>
          </div>
      </div>
  );
}

export default App;
