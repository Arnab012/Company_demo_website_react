import React from 'react'
import vg from "../assets/asset1.png"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle,AiFillFacebook} from 'react-icons/ai'
const Home = () => {
  return ( 
    <>
    <div className='home' id ="home">
        <main>
            <h1>Texh_INSta</h1>
            <p>Solutions to all of your Problems</p>
        </main>
      
    </div>


    <div className="home2">

        <img src={vg} alt="graphics" />

        <div>
            <p>We are your one and Only Solution  to tech Problems you face
                Every Day.
                WE are leading tech Company whose aim  is to increase the 
                     problem Solving Ability to the children
            </p>
        </div>
        </div>

        <div className="home3" id ="about">
            <div>

            <h1>Who we are </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea tenetur aspernatur quam debitis culpa vero, labore assumenda animi molestiae voluptatum iure, officiis dolores reprehenderit possimus! Sed, numquam dolorem! Repellat.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequuntur excepturi culpa temporibus repudiandae quis minima officiis nisi dolorem neque eligendi quas perspiciatis, similique ea ad delectus amet iste perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deleniti amet. Exercitationem hic aspernatur dicta dolorum nemo quos illum quia, eligendi deleniti fugiat totam quo animi at quas nulla beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos reiciendis dolorum porro, ab earum, officiis animi quibusdam nesciunt, sint accusamus corrupti ipsam nihil asperiores ducimus doloremque excepturi assumenda debitis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi inventore possimus dicta dolore neque eum dolores veritatis minus deleniti harum, tenetur hic fuga dolor debitis? Eligendi quasi tempore nemo blanditiis? 
            </p>
        </div>
        </div>


        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay:"0.3s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>

                    </div>
                    <div style={{
                        animationDelay:"0.5s"
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>

                    </div>
                    <div style={{
                        animationDelay:"0.7s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>

                    </div>
                    <div style={{
                        animationDelay:"1s"
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>

                    </div>
                    <div style={{
                        animationDelay:"1.3s"
                    }}>
                        <AiFillFacebook/>
                        <p>Facebook</p>

                    </div>

                </article>
            </div>
        </div>
 
    </>
  )
}

export default Home
