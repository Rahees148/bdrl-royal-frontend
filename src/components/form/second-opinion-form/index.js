import React, { useState } from 'react';
import classNames from 'classnames';
import { FileUploader } from "react-drag-drop-files";
import * as style from './second-opinion-form.module.scss';
import { useForm } from 'react-hook-form';
import { postCMSRequest } from '../../../libs/api/services';
import TextMessageIcon from '../../../images/icons/text-message-icon.svg';
import { useEffect } from 'react';
import SpecialtySelect from '../../speciality-select';

function SecondOpinionForm({ overlap=false, toEmail, title, formTitle, tagLine, messageRow=10 }) {
    const [formSuccess, setFormSuccess] = useState(false);
    const fileTypes = ["PDF", "DOC", "JPG","JPEG", "PNG"];
    const [files, setFiles] = useState(null);
    const onSpecialtyChange = (val) => {
        console.log("onSpecialtyChange");
    }
    const handleChange = (file) => {
         const newList = files ? Array.from(files).concat(Array.from(file)) : file;
        setFiles(newList);
      };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        try {
            postCMSRequest('api/forms-leaderships', { data: data }).then((response) => {
                if (response.status === 200 && response.data?.data?.id) {
                    setFormSuccess(true);
                    reset();
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={classNames("p-6 bg-primary rounded-[24px]", overlap && 'mt-[-220px]')}>
            <div className={classNames(style.LeaderShipFormIcon, 'rounded-full bg-white')}>
                <img src={TextMessageIcon} alt="Form Icon" />
            </div>
            <div className={classNames(style.LeaderShipFormTitle)}>
                <h4
                    dangerouslySetInnerHTML={{
                        __html: formTitle,
                    }}
                />
                <aside  dangerouslySetInnerHTML={{ __html: tagLine }} />
            </div>
            <div className={classNames(style.LeaderShipForm)}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="hidden" {...register('toEmail', { value: title })} />
                        <div className="flex gap-8 w-[100%]">
                            <div className='flex-1'>
                                <label className="block">
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        className={classNames(
                                            style.FormInput,
                                            errors.name && style.formError,
                                        )}
                                        placeholder="Enter your name"
                                    />
                                </label>
                                <label className="block">
                                    <input
                                        type="text"
                                        {...register('number', {
                                            required: true,
                                            pattern: {
                                                value: /^([0-9]\d*)(\.\d+)?$/,
                                            },
                                        })}
                                        className={classNames(
                                            style.FormInput,
                                            errors.number && style.formError,
                                        )}
                                        placeholder="Enter your number"
                                    />
                                </label>
                                <label className="block">
                                    <input
                                        type="text"
                                        {...register('email', {
                                            required: true,
                                            pattern: {
                                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                            },
                                        })}
                                        className={classNames(
                                            style.FormInput,
                                            errors.email && style.formError,
                                        )}
                                        placeholder="Enter your email"
                                    />
                                    {/* {errors.email && <p role="alert">{errors.email.message}</p>} */}
                                </label>
                                <label className="block">
                                    <textarea
                                        {...register('message', { required: true })}
                                        rows={messageRow}
                                        placeholder="Enter your email"
                                        className={classNames(
                                            style.FormTextarea,
                                            errors.message && style.formError,
                                            'mt-1 block w-full',
                                        )}
                                    ></textarea>
                                </label>
                            </div>
                            <div className='flex-1'>
                              
                                <SpecialtySelect variant={'inForm'} onSpChange={(sp)=>{onSpecialtyChange(sp)}}  />
                                
                                <label className="block">
                                    <div className='text-white'>Upload Reports ({fileTypes.join(", ")})</div>
                                    <FileUploader
                                        multiple={true}
                                        handleChange={handleChange}
                                        name="file"
                                        types={fileTypes}
                                    >
                                        <div className='flex flex-col justify-center items-center gap-6 bg-white p-8 rounded-[16px]'>
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.26953 12.4997C2.26953 7.78562 2.26953 5.4286 3.734 3.96413C4.97482 2.72331 6.8564 2.53382 10.2695 2.50488M22.2695 12.4997C22.2695 7.78562 22.2695 5.4286 20.8051 3.96413C19.5642 2.72331 17.6827 2.53382 14.2695 2.50488" stroke="#023321" stroke-width="1.25" stroke-linecap="round"/>
                                                <path d="M10.2695 22.5C7.46927 22.5 6.06914 22.5 4.99958 21.955C4.05877 21.4757 3.29387 20.7108 2.8145 19.77C2.26953 18.7004 2.26953 17.3003 2.26953 14.5C2.26953 11.6997 2.26953 10.2996 2.8145 9.23005C3.29387 8.28924 4.05877 7.52433 4.99958 7.04497C6.06914 6.5 7.46927 6.5 10.2695 6.5H14.2695C17.0698 6.5 18.4699 6.5 19.5395 7.04497C20.4803 7.52433 21.2452 8.28924 21.7246 9.23005C22.2695 10.2996 22.2695 11.6997 22.2695 14.5C22.2695 17.3003 22.2695 18.7004 21.7246 19.77C21.2452 20.7108 20.4803 21.4757 19.5395 21.955C18.4699 22.5 17.0698 22.5 14.2695 22.5" stroke="#023321" stroke-width="1.25" stroke-linecap="round"/>
                                                <path d="M12.2695 17.5L12.2695 11.5M12.2695 11.5L14.7695 14M12.2695 11.5L9.76953 14" stroke="#023321" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p>Drag & Drop Your Reports</p>
                                            <span className='button light-green'>Upload</span>
                                        </div>
                                        

                                    </FileUploader>
                                </label>
                                {files && 
                                    <div className='flex flex-col my-4 text-white'>
                                        {[...files].map((item, index) => (
                                            <div key={index} className='flex justify-between'> 
                                                <span>{item.name}</span>
                                                <span onClick={()=>{
                                                    const fileListArr = Array.from(files)
                                                    fileListArr.splice(index, 1);
                                                    setFiles(fileListArr);
                                                }}>
                                                    <svg width="14" height="21" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.5068 4.74104H21.3471C21.0398 2.07658 18.7729 0 16.0273 0C13.2818 0 11.0152 2.07649 10.7079 4.74104H4.54789C2.05511 4.74104 0.0273438 6.76938 0.0273438 9.26208V9.49405C0.0273438 11.3989 1.21344 13.0294 2.88432 13.6937V35.0508C2.88432 37.5436 4.91234 39.5718 7.40495 39.5718H24.6498C27.1425 39.5718 29.1704 37.5434 29.1704 35.0508V13.6938C30.8412 13.0294 32.0273 11.3989 32.0273 9.49413V9.26216C32.0273 6.76938 29.9994 4.74104 27.5068 4.74104ZM16.0273 2.14408C17.5888 2.14408 18.8922 3.26333 19.1806 4.74104H12.8745C13.1629 3.26325 14.4663 2.14408 16.0273 2.14408ZM27.0263 35.0508C27.0263 36.3614 25.9599 37.4278 24.6497 37.4278H7.40487C6.09466 37.4278 5.02832 36.3613 5.02832 35.0508V14.0151H27.0263V35.0508ZM29.8833 9.49405C29.8833 10.8047 28.8169 11.8711 27.5067 11.8711H4.54789C3.23769 11.8711 2.17135 10.8047 2.17135 9.49405V9.26208C2.17135 7.95146 3.23769 6.88504 4.54789 6.88504H27.5068C28.817 6.88504 29.8833 7.95146 29.8833 9.26208L29.8833 9.49405Z" fill="white"/>
                                                        <path d="M10.2829 34.6858C10.875 34.6858 11.3549 34.2057 11.3549 33.6139V21.5434C11.3549 20.9515 10.8749 20.4713 10.2829 20.4713C9.69096 20.4713 9.21094 20.9515 9.21094 21.5434V33.6139C9.21086 34.2059 9.69087 34.6858 10.2829 34.6858Z" fill="white"/>
                                                        <path d="M16.0251 34.6858C16.6172 34.6858 17.0972 34.2057 17.0972 33.6139V21.5434C17.0972 20.9515 16.617 20.4713 16.0251 20.4713C15.4331 20.4713 14.9531 20.9515 14.9531 21.5434V33.6139C14.9531 34.2059 15.4331 34.6858 16.0251 34.6858Z" fill="white"/>
                                                        <path d="M21.7752 34.6858C22.3672 34.6858 22.8471 34.2057 22.8471 33.6139V21.5434C22.8471 20.9515 22.3671 20.4713 21.7752 20.4713C21.1831 20.4713 20.7031 20.9515 20.7031 21.5434V33.6139C20.703 34.2059 21.1832 34.6858 21.7752 34.6858Z" fill="white"/>
                                                        </svg>

                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    }
                            </div>
                        </div>
                        <button className={classNames(style.FormBtn, 'button light-green')}>
                            Submit
                        </button>
                    </div>
                    {formSuccess && (
                        <div className="text-white py-4">Form submitted successfully </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default SecondOpinionForm;
