import css from './ImageGallery.module.css'

const ImageGallery = ({pictures}) => {

    return (
        
        <div className={css.container}>
            <ul className={css.list}>
                {pictures.map(picture => (
                    <li key={picture.id} className={css.item}>
                        <img className={css.image} src={picture.urls.small} alt={picture.description} />
                        </li>
                ))}
            </ul>
        </div>
        
    )
}

export default ImageGallery