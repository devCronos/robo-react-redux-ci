import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    if(true) throw new Error('NOOO');
    return (
        <div>
            {robots===0 && <div>loading...</div>}
            {robots.map((user, i) => {
                return <Card 
                id={robots[i].id} 
                name={robots[i].name}
                email={robots[i].email}
                key={i}
                />
            })}
        </div>
    )
}


export default CardList;