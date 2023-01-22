import React, {useState} from "react";

import styles from './card.module.scss'

const Card = ({id, title, price, url, onClickFavorite, onClickPlus}) =>{
    const [isAdded, setIsAdded] = useState(false);

    const handleClickPlus = () => {
        onClickPlus({title, url, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={url} alt="sneakers1"/>
            <h5>{title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
                </div>
                <img onClick={handleClickPlus} className={styles.btn} src={isAdded? "/img/btn-checked.svg":"/img/btn-plus.svg"} alt="plus"/>
            </div>
        </div>
    )
}

export default Card;

