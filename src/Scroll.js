import React from 'react'; 

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '2px solid gray',borderRadius: '15px', height: '700px'}}>  
            {props.children}
        </div>
    );
};

export default Scroll 