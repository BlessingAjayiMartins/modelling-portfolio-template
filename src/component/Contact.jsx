import React, { useState } from "react"
// import styled from "styled-components"




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
    <form>
      <div>
        <input 
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <input 
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <div>
        <input 
          name="subject"
          onChange={handleChange}
          value={values.subject}
        />
      </div>
      <div>
        <input 
          name="message"
          onChange={handleChange}
          value={values.message}
        />
        
        
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Button</button>

      
    </form>
  )
}

export default Contact