import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name} = user;
    return (
        <div className="border border-red-400 rounded-md">
            <h1>Name: {name}</h1>
            <Link to={`/users/${user.id}`}><button className='bg-red-200 border rounded-md px-5 py-2 m-5 hover:shadow-lg hover:border-red-600'>See Details</button></Link>
        </div>
    );
};



export default User;
User.propTypes = {
    user: PropTypes.object.isRequired,
};