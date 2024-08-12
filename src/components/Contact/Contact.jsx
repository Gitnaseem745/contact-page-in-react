import React from 'react'
import { helpImg, messageIcon, phoneIcon } from '../../assets'

const Contact = () => {
  return (
    <section>
        <div >
         
        </div>
        <div >
            <div >
                <button><img src={messageIcon} /> Via Support Chat</button>
                <button><img src={phoneIcon} /> Via Call</button>
            </div>
            <div >
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='E-Mail'/>
                <input type="text" placeholder='Message'/>
                <button>Submit</button>
            </div>
        </div>
        <div >
            <img src={helpImg} />
        </div>
    </section>
  )
}

export default Contact
