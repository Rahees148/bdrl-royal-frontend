import React from "react"

const defaultState = {
  specialty: '',
  selectedDate: new Date(),
  doctor: {},
  formData:{},
  patientType:'',
  isPatientTypeOpen:false,
  updateDoctor: (doctor) => {},
  updateSpecialty: (specialty) => {},
  updateDate: (date) => {},
  updateFormData: (data) => {},
  updatePatientType: (type) => {},
  setIsPatientTypeOpen:  (type) => {},
}


const AppointmentContext = React.createContext(defaultState)

export default AppointmentContext
