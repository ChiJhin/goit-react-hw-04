import css from './ImageGallery.module.css'
import ModalCard from '../ModalCard/ModalCard'

const ImageGallery = ({pictures}) => {

    return (
        
        <div className={css.container}>
            <ul className={css.list}>
                {pictures.map(picture => (
                    <li key={picture.id} className={css.item}>
                        <ModalCard picture={picture} />
                        </li>
                ))}
            </ul>
        </div>
        
    )
}

export default ImageGallery