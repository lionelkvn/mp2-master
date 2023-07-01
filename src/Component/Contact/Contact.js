import './Contact.css';
import React from 'react';

const Contact = () => {
    return(
        <div id="Contact" class="Contact">
            <h1>Love to hear from you,</h1>
            <h1>Get in touch.</h1>
            <div class="Contact-wrapper">
                <div class="Contactcontent1">
                    <form action="/action_page.php">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.."></input>
                    <label for="interested">What are you interested</label>
                    <select id="whatoption" name="whatoption">
                        <option value="Logo & Brand Identity" selected>Logo & Brand Identity</option>
                        <option value="Print Design">Print Design</option>
                        <option value="Marketing Design">Marketing Design</option>
                    </select>
                    <label for="Email">Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Your email.." ></input>
                    <label for="Message">Message</label>
                    <textarea type="text" id="Message" rows="4" name="message" placeholder="Tell us about your project.."></textarea>
                    <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <div class="Contactcontent2">
                <h3>2 Block 15 Notre Dame Village,</h3>
                <h3>Cotabato City, 9600</h3>          
                <h3>Maguindanao</h3>
                <h3>Philippines</h3>
                <div class="iframe-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4404696780266!2d124.24243817509056!3d7.190477015053195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563bd4359cb3a7%3A0xcf09d5ef99777d46!2sBlock%2015%20Notre%20Dame%20village!5e0!3m2!1sen!2sph!4v1687772777378!5m2!1sen!2sph" 
                width="600" 
                height="300" 
                style={{border:0 }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                </div>
            </div>
        </div>

    );
}
export default Contact;