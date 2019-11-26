import React from 'react';
import '../Css/Title.css'

const Title = ({name}) => {
    return (
        <div className="card-panel teal lighten-5">
            <h3 className="brand-logo center red-text text-lighten-1">SabSinz ToDo App</h3>
            <h4 className="brand-logo center red-text text-lighten-2">Thanks for checking in {name}</h4>
        </div>
    );
};

export default Title;