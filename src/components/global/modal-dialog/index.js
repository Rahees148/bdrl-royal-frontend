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
                        <svg onClick={()=>{setIsOpen(false)}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7682 1.61627L1.51172 17.1606M1.51165 1.61621L16.7681 17.1605" stroke="#023321" stroke-width="1.51495" stroke-linecap="round"/>
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
