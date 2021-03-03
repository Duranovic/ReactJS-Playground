import React from 'react';
import './button.scss';

export const Button = (props) => {
        if(!props.url){
            return <button className="primary-button">{props.title??"Button"}</button>
        }else{
            return <a className="primary-button" href={props.url}>{props.title}</a>
        }
}