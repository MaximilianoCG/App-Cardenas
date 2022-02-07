import React, {useState, useEffect} from 'react'

import CardComponent from '../ListContainer/ListContainer';

function CardListComponent() {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            /* .then(json => console.log(json)); */
            .then(json => setUsers(json));
    }, []);

    return (
        <div>
            {users.map((users) => {
                return(
                <div key={users.id}>
                    <CardComponent data={users}/>
                </div>
                );
            })}
            
        </div>
    )
}

export default CardListComponent;
