
function App() {
  return (
      <div className="wrapper clear">
          <header className="header d-flex justify-between align-center p-45">
              <div className="headerLeft d-flex align-center ga">
                  <img width={40} height={40} src='/img/logo.png'/>
                  <div className="headerInfo">
                      <h3 className="text-uppercase">React Service</h3>
                      <p>Магазин кроссовок от Урала</p>
                  </div>
              </div>

              <ul className="d-flex">
                  <li className="mr-30">
                      <img className="mr-10" width={18} height={18} src='/img/cart.svg'/>
                      <span>1205 руб.</span>
                  </li>
                  <li>
                      <img width={18} height={18} src='/img/pref.svg'/>
                      <p></p>
                  </li>
              </ul>
          </header>

          <div className="content">

              <div className="overlay">
                  <div className="drawer">
                      <h2>Корзина</h2>

                      <div className="items">
                          <div className="cartItem d-flex align-center mb-20">
                              <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers"/>
                              <div className="info mr-20">
                                  <p>Мужские Кроссовки Nike Air Max 270</p>
                                  <b>12 999 руб.</b>
                              </div>
                              <button className="button cu-p">
                                  <img width={11} height={11} src="/img/btn-remove.svg" alt="plus"/>
                              </button>
                          </div>

                          <div className="cartItem d-flex align-center mb-20">
                              <img className="mr-20" width={70} height={70} src="/img/sneakers/2.jpg" alt="sneakers"/>
                              <div className="info mr-20">
                                  <p>Мужские Кроссовки Nike Air Max 270</p>
                                  <b>8 499 руб.</b>
                              </div>
                              <button className="button cu-p">
                                  <img width={11} height={11} src="/img/btn-remove.svg" alt="plus"/>
                              </button>
                          </div>
                      </div>

                      <ul className="cartTotalBlock">
                          <li className="d-flex mb-20">
                              <span>Итого: </span>
                              <div></div>
                              <b>21 498 руб. </b>
                          </li>
                          <li className="d-flex">
                              <span>Налог 5%: </span>
                              <div></div>
                              <b>1074 руб. </b>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="d-flex align-center mb-40 justify-between">
                  <h1 className="">Все кроссовки</h1>
                  <div className="search-block d-flex">
                      <img src="/img/search.svg" alt="search"/>
                      <input type="text" placeholder="Поиск..."/>
                  </div>
              </div>

              <div className="d-flex">
                  <div className="card">
                      <div className="favorite cu-p">
                          <img src="/img/heart-unliked.svg" alt="unliked"/>
                      </div>
                      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers1"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button cu-p">
                              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                          </button>
                      </div>
                  </div>


                  <div className="card">
                      <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers2"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button cu-p">
                              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                          </button>
                      </div>
                  </div>


                  <div className="card">
                      <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers3"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button cu-p">
                              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                          </button>
                      </div>
                  </div>


                  <div className="card">
                      <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers4"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button cu-p">
                              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
