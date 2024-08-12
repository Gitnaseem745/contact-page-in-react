import React from 'react'
import { helpImg, messageIcon, phoneIcon } from '../assets'

const Contact = () => {
  return (
    <section className='w-full max-h-fit bg-red-500 grid grid-cols-2 grid-rows-2'>
        <div className="contact-title h-fit row-span-1 col-span-2 bg-red-300">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt incidunt commodi ex, expedita minus quos dolorem placeat molestiae dolorum sit iste velit dignissimos exercitationem, ullam impedit alias officiis praesentium!</p>
        </div>
        <div className="contact-form flex flex-col justify-center items-center">
            <div className="form-support-btns flex gap-4">
                <button><img src={messageIcon} /> Via Support Chat</button>
                <button><img src={phoneIcon} /> Via Call</button>
            </div>
            <div className="form flex flex-col">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='E-Mail'/>
                <input type="text" placeholder='Message'/>
                <button>Submit</button>
            </div>
        </div>
        <div className="help-img w-fit">
            <img src={helpImg} />
        </div>
    </section>
  )
}

export default Contact
