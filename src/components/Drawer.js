import React from "react";

const Drawer = ({onClose, items=[]}) => {
    return(
        <div className="overlay">
            <div className="drawer d-flex">
                <div className="drawerTop">
                    <h2 className="mb-30">Корзина <button className="button cu-p">
                        <img onClick={onClose} width={11} height={11} src="/img/btn-remove.svg" alt="close"/>
                    </button></h2>

                    <div className="items">
                        {items.map((item) => {
                            return(
                                <div className="cartItem d-flex align-center mb-20">
                                    <img className="mr-20" width={70} height={70} src={item.url} alt="sneakers"/>
                                    <div className="info mr-20">
                                        <p>{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <button className="button cu-p">
                                        <img width={11} height={11} src="/img/btn-remove.svg" alt="plus"/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
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
                    <button className="greenBtn mt-25">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;