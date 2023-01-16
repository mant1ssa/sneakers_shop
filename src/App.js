
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
                      <img width={18} height={18} src='/img/user.svg'/>
                      <p></p>
                  </li>
              </ul>
          </header>

          <div className="content">
              <h1 className="mb-40">Все кроссовки</h1>

              <div className="d-flex">
                  <div className="card">
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
