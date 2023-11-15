import { Component } from 'react';
import s from './Modale.module.css'
import React from 'react';


export class Modal extends Component  {
    
componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
}
componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
}
handleKeydown = (e) => {
    if(e.code === 'Escape') {
this.props.onClose();
    }
}

handleClickBackdrop = (e) => {
e.target === e.currentTarget && this.props.onClose();
    
}

render() {
const {item} = this.props;
    return (
        <div className={s.Overlay}
        onClick={this.handleClickBackdrop}
        >
  <div className={s.Modal}>
    <img src={item.largeImageURL} alt={item.tags} />
  </div>
</div>
    )

}
}