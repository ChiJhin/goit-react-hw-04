import css from './LoadMore.module.css'

const LoadMore = ({onClick}) => {

    return (
        <>
            <button onClick={onClick} className={css.button}>Load more</button>
        </>
    )
}

export default LoadMore