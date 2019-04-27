import React from 'react';

const Button = props => (
    <button
        class="card-button"
        data-hover="Coming Soon"
    >
       <span>{props.buttonText}</span>
    </button>
);

export default Button;