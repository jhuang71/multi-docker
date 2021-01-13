import React from 'react';
import { Link } from 'react-router-dom';

const op =  () => {
    return (
        <div>
            In some other page!
            <Link to="/"> Go back home</Link>
        </div>
    )
}

export default op;