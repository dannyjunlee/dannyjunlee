import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <form>
                    <div className='form-group'>
                        <label for='userName'>Name</label>
                        <input type='text' className='form-control' placeholder='Your Name'></input>
                    </div>
                    <div className='form-group'>
                        <label for='userEmail'>Email Address</label>
                        <input type='email' className='form-control' aria-describedby='emailHelp' placeholder='example@email.com'></input>
                    </div>
                    <div className='form-group'>
                        <label for='userCell'>Phone Number</label>
                        <input type='text' className='form-control' placeholder='(123) 456-7890'></input>
                    </div>
                    <div className='form-group'>
                        <label for='userInput'>Message</label>
                        <textarea className='form-control' rows='3'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;