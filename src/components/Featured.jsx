import React from 'react';
const Featured = ({match}) => {
    let filter = match.params.filter;
    return (
    <div>
        <h1>About page {filter}</h1>
    </div>
    );
}

module.exports = Featured;