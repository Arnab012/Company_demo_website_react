import React from 'react'

const Contact = () => {
  return (
   <>

   <div className="contact">

    <main>

        <h1>Contact US</h1>

        <form >

            <div>

                <label >Name</label>
                <input type="text" required placeholder='Enter Your Name Please' />
            </div>
            <div>
            <label >Email</label>
                <input type="text" required placeholder='Enter Your Email' />
            </div>

            <div>
            <label >Message</label>
                <input type="text" required placeholder='Tell us About YOur query....' />
            </div>

            <button  type='Submit'>Send</button>
        </form>
    </main>
   </div>
   </>
  )
}

export default Contact