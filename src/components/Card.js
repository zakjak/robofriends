import React from 'react'

const Card = ({name, email, id}) => {


  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
        <img src={`https://robohash.org/${id}?20x20`} alt='' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card