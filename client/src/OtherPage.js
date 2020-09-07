import React from 'react';
import { Link } from 'react-routerdom';

export default () => {
    return (
        <div>
            This is another page!
            <Link to="/">Go Back Home</Link>
        </div>
    );
};
