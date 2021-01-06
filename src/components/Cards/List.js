import userEvent from '@testing-library/user-event'
import Cards from './Cards'
import './list.css'


const List = (props) => {
    return(
        <div className="cardList row mx-md-n5">
            {props.users.map((user) => (
            <Cards key={user.id.value} 
            users={user}
            first={user.name.first}
            last={user.name.last}
            phone={user.phone}
            email={user.email}
            state={user.location.state}
            picture={user.picture.large}
            />
            ))}
        </div>
    );
};




export default List;