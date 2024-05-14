import React, { useState } from 'react';
import classNames from 'classnames';
import * as style from './leadership-form.module.scss';
import { useForm } from 'react-hook-form';
import { postCMSRequest } from '../../../libs/api/services';
import TextMessageIcon from '../../../images/icons/text-message-icon.svg';

function LeadershipForm({ overlap=false, toEmail, title, formTitle, tagLine, messageRow=10 }) {
    const [formSuccess, setFormSuccess] = useState(false);
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

export default LeadershipForm;
