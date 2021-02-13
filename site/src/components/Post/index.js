import React from 'react';
import imagePhoto from '../../resources/photo_male.png';

function Component({
    headerTextName, 
    authorTextName, 
    className, 
    classImageName, 
    classContentName,
    classContentHeaderName,
    classContentBodyName,
    classContentFooterName,
}) {
    return <div className={className}>
        <img src={imagePhoto} alt="" className={classImageName}></img>
        <div className={classContentName}>
            <div className={classContentHeaderName}>{headerTextName}</div>
            <div className={classContentBodyName}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </p>
            </div>
            <div className={classContentFooterName}>{authorTextName}</div>
        </div>
    </div>
}

export default Component;