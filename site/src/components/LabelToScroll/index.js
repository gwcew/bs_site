import React from 'react';

function Component({text, className}) {
    return <footer className={className}>
        <div>
            {text}
        </div>
        <div>
            <img src="../../resources/darrow.png" alt=""></img>
        </div>
    </footer>
}

export default Component;