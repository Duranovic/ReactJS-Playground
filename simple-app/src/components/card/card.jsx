import React from 'react';
import './card.scss';

export const Card = (props) => {
    let tags;
    let description;
    let title;
    if(props.tags != null){
        tags = <div className="tags">{props.tags.map(x=><span className="tag">{x}</span>)}</div>
    }
    if(props.description){
        description = <p>{props.description}</p>
    }
    if(props.title){
        title = <h3>{props.title}</h3>
    }
    return (
        <div className="vd-card">
            <span className="img-holder"></span>
            <picture>
                <source srcSet={props.imageUrl} />
                <source srcSet={props.imageUrl} />
                <img src={props.imageUrl} alt="Alt text for the image" />
            </picture>
            <div className="content">
                {title}
                {description}
                {tags}
            </div>
        </div>
    )
}