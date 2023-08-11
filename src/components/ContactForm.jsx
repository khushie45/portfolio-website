import React from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import toast from "react-hot-toast";

function ContactForm() {
    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('khushie45', 'khushie45', form.current, 'a_Mvvb2tsQQR44OQo')
            .then(() => {
                toast.success("Thank you for reaching out to me!✨")
            }, (error) => {
                toast.error("Oops! There was a problem submitting the form.😢")
            })
    } 

    return (
        <div id='contact' className='contact'>
            <h1>Contact Me</h1>
            <h3>Let's connect!!</h3>
            <form ref={form} onSubmit={handleSubmit} className='contact--form'>
                <input type="text" name="name" placeholder = "Your name" required />
                <input type="email" name="email" placeholder = "Your email" required />
                <textarea name = "message" placeholder = "Your message here" required />
            <button>Send</button>
        </form>
        </div>
    )
}

export default ContactForm