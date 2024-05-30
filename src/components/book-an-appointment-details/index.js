import React, {useEffect, useState, useRef} from 'react'
import * as style from './book-an-appointment-details.module.scss'
import BookAnAppointment from '../book-an-appointment'
import classNames from 'classnames';
import DateSelection from '../form/date-selection';
import { AllDoctors } from '../../graphql/doctors/doctors';
import DoctorCard from '../doctor-card';
import { Parallax } from 'react-scroll-parallax';
import ParallaxElement from '../parallax-element';
import ModalDialog from '../global/modal-dialog';

function BookAnAppointmentDetails() {
    const doctors = AllDoctors().allStrapiDoctor.nodes;
    const [filteredDoctor, setFilteredDoctor] = useState(doctors);
    const [isOpen, setIsOpen] = useState(false);
    const [doctorId, setDoctorId] = useState(null);
    const onSpecialtyChange = (selectedSpecialty) =>{
        const tempFilter = selectedSpecialty === 'Select Speciality' ? doctors : doctors.filter(c => (c.speciality?.title === selectedSpecialty || c.centers_of_excellence?.title === selectedSpecialty));
        setFilteredDoctor([...tempFilter]);
    }
  return (
    <>
        <section className={classNames(style.banner)}>
            <span className='button gold'>Book Appointment</span>
            <h2>Schedule Your Appointments Today.</h2>
        </section>
        <BookAnAppointment buttonLabel={'Search'} selectedSpecialty={(selectedSpecialty)=>{
            onSpecialtyChange(selectedSpecialty)
        }} />
        <div className='pageWrapper'>
            <DateSelection />
            <Parallax speed={10} translateY={-600}>
                <ParallaxElement />
            </Parallax>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] sm:gap-x-8 gap-y-[86px] py-[98px]'>
                {filteredDoctor && filteredDoctor.map((doctor, index) =>(
                    <DoctorCard doctor={doctor} key={index} onBookAnAppointment={(id)=>{
                        setDoctorId(id)
                        setIsOpen(true)
                    }} />
                ))}
            </div>
        </div>
        <ModalDialog 
            body={ 
                <div className={style.modelButton}>
                    <button>Cash Patient <span>(Real Time Booking)</span></button>
                    <button>Insurance Patient <span>(Request Call Back)</span></button>
                </div>
            } 
            title={'Select Patient Type'}
            isOpen={isOpen} 
            setIsOpen={(val) => {
                setIsOpen(val)
            }} 
            styles={{maxWidth:'360px'}}
        />
    </>
  )
}

export default BookAnAppointmentDetails