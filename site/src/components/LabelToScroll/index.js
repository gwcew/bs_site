import React from 'react';
import image from './darrow.png'
function Component({text, className}) {
    return <footer className={className}>
        <div style={{letterSpacing: '2px'}}>
            {text}
        </div>
        <p>
            <img src={image} alt=""></img>
        </p>
    </footer>
}

export default Component;