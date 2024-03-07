import { useTransition, useSpring, animated } from '@react-spring/web'
import { CgClose } from 'react-icons/cg';
import { CardForm } from './CardForm/CardForm';
import s from './NewTaskModal.module.css';


export const NewTaskModal = ({ isOpen, onClose, sendTask }) => {



 const transition = useTransition(isOpen, {
    from: {
      transform: "translate(-50%, -50%) rotateX(90deg)",
    },
    enter: {
      transform: "translate(-50%, -50%) rotateX(0)",
    },
    leave: {
      transform: "translate(-50%, -50%) rotateX(90deg)",
    },
  })

  const [props] = useSpring(
    () => ({
      from: { opacity: 0},
      to: { opacity: 1},
    }),
    []
  )

 return  (
    <div  >
      <div className={s.Trigger} >
        <div className={s.TriggerShadow} />
      </div>
     
        {transition((style, isOpen) => (
          <>
            {isOpen ? (
              
              <animated.div className={s.OverlayBackground} style={props} />
            ) : null}
            {isOpen ? (
              <animated.div className={s.modal} forcemount="true" style={style}>
                <animated.div  className={s.modal__title}>Create New Quest</animated.div>
                  <CgClose className={s.modal__btnClose} onClick={onClose} />
                 <CardForm sendTask={sendTask} onClose={onClose} />
              </animated.div>
            ) : null}
          </>
        ))}
      
    </div>
  )
}
