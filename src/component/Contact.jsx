import React, { useState } from "react"
import styled from "styled-components"



const Styledform = styled.div`

`;

const Contact = () => {
  const [values, setValues] = useState({name: "", email: "", subject: "", message: ""})

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  const handleSubmit = () => {
    const {name, email, subject, message} = values
    console.log({name: [name], email: [email], subject: [subject], message: [message]})
  }
  return (
    <>
    <div className="container-fluid row">

      <div className="col">
        <form>
          <h1>
            Contact
          </h1>
          <h5>
            Message me for inqueries. I'll get back to you ASAP
          </h5>
          <div className="mb-3">
            <label className="form-label" for="name">Name </label>
            <input 
              name="name"
              onChange={handleChange}
              value={values.name}
              className="form-control"
            />
            <label className="form-label" for="email">Email Address </label>
            <input 
              name="email"
              onChange={handleChange}
              value={values.email}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="Subject">Subject </label>
            <input 
              name="subject"
              onChange={handleChange}
              value={values.subject}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="message">Message </label>
            <input 
              name="message"
              onChange={handleChange}
              value={values.message}
              className="form-control"
            />


          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Button</button>
 
        </form>
      </div>
      <div className="col">
        <h1>
          IMG goes here
        </h1>
      </div>
    
    </div>
    </>
    

  )
}

export default Contact