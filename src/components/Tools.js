import React from 'react';
import { Button } from 'evergreen-ui'
import '../styles/Tools.scss';


function Tools({ addTimer }) {

    return (
        <div className="ActionBtnsContainer">
            <Button 
                appearance="primary" 
                intent="success" 
                onClick={addTimer}
            >
                Add Timer
            </Button>
        </div>
    );
}

export default Tools;