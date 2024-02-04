import ReactModal from "react-modal";
import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from './ModalCard.module.css'


 const ModalCard = ({picture}) => {
  
 const [open, setOpen] = useState(false);
        
       const handleOpenModal = () => {
            setOpen(true)
        }
       
       const handleCloseModal = () => {
            setOpen(false)
        }
      



      return (
        <div>
          <button onClick={handleOpenModal}><ImageCard picture={picture}/></button>
         
          <ReactModal 
             isOpen={open}
             contentLabel="Modal #1 Global Style Override Example"
             onRequestClose={handleCloseModal}
             className={css.modal}
             overlayClassName={css.overlay}
          >
            
                <img onClick={handleCloseModal} src={picture.urls.regular} alt={picture.description} className={css.image}/>
            
          </ReactModal>
          
        </div>
      );

 
};

export default ModalCard