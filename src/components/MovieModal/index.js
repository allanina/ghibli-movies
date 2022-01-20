import React from 'react';


function MovieModal({ movieInfo }) {
    if (!movieInfo) {
        return <div>Select a film</div>;
    }
    return (
        <div>
            <span>{movieInfo.title}</span>
            <span>{movieInfo.original_title}</span>
        </div>
    )
}

export default MovieModal;