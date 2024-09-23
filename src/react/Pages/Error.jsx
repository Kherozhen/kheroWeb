import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function Error () {
    return (
        <div className='errorPage'>
            <div className='textError'>
                <p className='error'>Nope !</p>
                <p className='smileyError'>&gt;_&lt;'</p>
            </div>
            <p className='pageNotFound'>Oh sorry ! This page is not found...</p>
            <div className='comeBack'>
                <p>Please, <Link to="/" >come back</Link> </p>
                <FontAwesomeIcon
                    className="iconSmile"
                    icon= {faFaceLaughBeam}
                />
            </div>
        </div>
    )
}

export default Error;