import React, { useRef, useEffect } from 'react';
import * as style from './modal.module.scss';
import classNames from 'classnames';
function ModalDialog({ styles, title, body, isOpen, closeOnOutsideClick = true, setIsOpen, footer }) {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                closeOnOutsideClick &&
                modalRef.current  && 
                !modalRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, closeOnOutsideClick]);

    return (
        <div className={classNames(style.modalWrapper, isOpen ? style.fadeIn : style.fadeOut)}>
            <div className={style.modalContainer} style={styles} ref={modalRef}>
               
                    <div className={style.modalHeader}>
                        <h5>{title}</h5>
                        <svg onClick={()=>{setIsOpen(false)}} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7573 1.00008L1.00008 20.1112M1 1L19.7572 20.1112" stroke="black" stroke-width="1.75427" stroke-linecap="round"/>
                        </svg>
                    </div>
              
                {body &&
                  <div className={style.modalBody}>{body}</div>
                }
                {footer &&
                  <div className={style.modalFooter}></div>
                }
            </div>
        </div>
    );
}

export default ModalDialog;
