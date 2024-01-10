import s from './ModalWindowFormTask.module.css'
import { CgClose } from 'react-icons/cg';
import { CardForm } from './CardForm/CardForm';


export const ModalContent = ({ onClose, sendTask }) => {

  return (
    <>
    <div className={s.modal__background}/>
    <div className={s.modal__wrapper}>
      <div className={s.modal}>
      <CgClose  className={s.modal__btnClose} onClick={onClose}/>
        
       <h2 className={s.modal__title}>Create New Quest</h2>
      <CardForm sendTask={sendTask} onClose={onClose} />
      </div>
      </div>
</>
  );
}