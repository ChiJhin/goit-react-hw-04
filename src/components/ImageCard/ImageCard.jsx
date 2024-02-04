import css from './ImageCard.module.css'

const ImageCard = ({picture})=> {
    
    return (
        <div className={css.thumb}>
            <img className={css.image} src={picture.urls.small} alt={picture.description} />
        </div>
    )
}

export default ImageCard