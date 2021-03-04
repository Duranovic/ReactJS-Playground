import React from 'react';
import './card.scss';

export const Card = (props)=>{
    return (
        <div className="vd-card">
            <span className="img-holder"></span>
            <picture>
                <source srcSet="https://picsum.photos/500/300"/>
                <source srcSet="https://picsum.photos/500/300"/>
                <img src="https://picsum.photos/500/300" alt="Alt text for the image"/>
            </picture>
            <div className="content">
            <h3>Some card title</h3>
            <p>Lorem ipsum dolor sit amet, Lorem20 consectetur adipisicing elit. Aspernatur, delectus?</p>
            <div className="tags">
                <span className="tag">#photography</span>
                <span className="tag">#travel</span>
                <span className="tag">#winter</span>
            </div>
            </div>
        </div>
    )
}