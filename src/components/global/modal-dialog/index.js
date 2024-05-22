import React, { useRef, useEffect } from 'react';
import * as style from './modal.module.scss';
import classNames from 'classnames';
function ModalDialog({ title, body, isOpen, closeOnOutsideClick = true, setIsOpen, footer }) {
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
            <div className={style.modalContainer} ref={modalRef}>
                {title &&
                  <div className={style.modalHeader}>{title}</div>
                }
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
