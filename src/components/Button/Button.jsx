import s from './Button.module.css'

export const Button = ({pageCounter, getPhotos}) => {
    return  (
        <button 
        type="button"
        className={s.Button}
onClick={pageCounter}
        >LOAD MORE</button>
    )
}