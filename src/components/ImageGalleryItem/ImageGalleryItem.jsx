import { Component } from 'react'
import s from './ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal'
export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({isModalOpen: true,})
    }
    closeModal = () => {
        this.setState({isModalOpen: false,})
    }
    render() {
        const {item} = this.props;
        return (
            <li
            className={s.ImageGalleryItem}
            onClick={this.openModal}
            >
{this.state.isModalOpen? 
<Modal 
item={item} 
onClose={this.closeModal}/> :
            <img
            className={s.ImageGalleryItem__image}
                width="240"
                alt={item.tags}
                src={item.webformatURL}
            />}
            </li>

        )
    }

}