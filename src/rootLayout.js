import * as React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import AppointmentContext from './context/bookAnAppointment'

export default function RootLayout({ children }) {
    const [specialty, setSpecialty] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [doctor, setDoctor] = React.useState({});
    const [appointmentFormData, setAppointmentFormData] = React.useState({});
    const [patientType, setPatientType] = React.useState('');
    const [isPatientTypeOpen, setIsPatientTypeOpen] = React.useState(false);

    const updateSpecialty = (specialty) =>{
        setSpecialty(specialty)
    }
    const updateDate = (date) =>{
        setSelectedDate(date)
    }
    const updateDoctor = (doctor) =>{
        setDoctor(doctor)
    }
    const updateFormData = (data) =>{
        setAppointmentFormData(data)
    }
    const updatePatientType = (data) =>{
        setPatientType(data)
    }
    return (
        <AppointmentContext.Provider
            value={{
                specialty: specialty,
                selectedDate: selectedDate,
                doctor: doctor,
                formData:appointmentFormData,
                patientType: patientType,
                isPatientTypeOpen: isPatientTypeOpen,
                updateDoctor: updateDoctor,
                updateSpecialty: updateSpecialty,
                updateDate: updateDate,
                updateFormData: updateFormData,
                updatePatientType:updatePatientType,
                setIsPatientTypeOpen: setIsPatientTypeOpen
            }}
        >
            <ParallaxProvider>
                {children}
            </ParallaxProvider>
        </AppointmentContext.Provider>
    );
  }