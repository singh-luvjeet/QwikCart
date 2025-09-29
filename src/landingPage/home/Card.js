import React from 'react'
import image8 from '../../assets/headphone.png'
import {data} from './data.js';

const Card = () => {
  const cardItems = data.map(card => 
      <li key={card.id} >
      <div class='card cardWidth border border-0 m-2'>
        <div style={{position: "relative"}}>
        <img src={image8} class='card-img-top cardImg' alt='...' />
        <div className='heartDiv'></div>
        <i class="fa fa-heart-o cardHeart" aria-hidden="true"></i>
        </div>
        <div class='card-body'>
          <div className='d-flex justify-content-between cardDiv'>
            <h6 class='card-title mt-1 fw-semibold'>{card.name}</h6>
            <p className='dollar fw-semibold'>
              {card.price}<span className='zeros'></span>
            </p>
          </div>

          <p class='card-text text-muted cardP'>
            {card.description}
          </p>

          <div className='cardStar'>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>&nbsp;
            <span className='text-muted'>(121)</span>
          </div>

          <button class='btn cardBtn'>Add to Cart</button>
        </div>
      </div>
      </li>
  )
  return(
    <>
      <h3 className='h3Card fw-semibold'>Headphones For You!</h3>
       <ul className='ulCard d-flex flex-wrap mb-5'>{cardItems}</ul>
    </>
  ) 
  
 
}

export default Card;
