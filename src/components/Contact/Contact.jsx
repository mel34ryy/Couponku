import { useState } from 'react';
import styles from './Contact.module.css';
import member1 from '../../assets/Images/member1.jpeg';
import member2 from '../../assets/Images/member2.jpeg';
import member3 from '../../assets/Images/member3.jpeg';
import review from '../../assets/Images/review.jpeg';




function Contact() {

  // let addedP = Array.from(document.getElementsByClassName('styles.AddedP'));

  let [Addedstate1,setAddedstate1] = useState(false);
  let [Addedstate2,setAddedstate2] = useState(false);
  let [Addedstate3,setAddedstate3] = useState(false);

  const handleClick1 = () =>{
    setAddedstate2(false);
    setAddedstate3(false);
    setAddedstate1(Addedstate1? false : true );
  }
  const handleClick2 = () =>{
    setAddedstate1(false);
    setAddedstate3(false);
    setAddedstate2(Addedstate2? false : true );
  }
  const handleClick3 = () =>{
    setAddedstate1(false);
    setAddedstate2(false);
    setAddedstate3(Addedstate3? false : true );
  }

 


  return (
  <>
  <section>

    <div className={`${styles.contactDet} py-5 d-flex justify-content-around flex-wrap`}>

      <div className={`${styles.leftPt} my-3 my-md-auto col-11 col-md-8 d-flex flex-column align-items-center`}>
        <p>Reach Out to CouponKu</p>
        <h2>Ready to Discover Amazing Deals?</h2>
        <p>Monday-Friday, 8:00 am to 8:00 pm</p>
        <p>Our team is eager to assist you with any inquiries.</p>
      </div>
      <div className={`${styles.rightPt} col-10 col-md-4 d-flex flex-column justify-content-center text-center `}>
        <p>CONTACT OUR SUPPORT TEAM</p>
        <div className={`${styles.email} mb-4`}>support@couponku.com</div>
        <div className={`${styles.media}`}>
          <p>FOLLOW US</p>
          <div className={`${styles.links}`}>
            <ul className={`${styles.list} d-flex flex-wrap text-start ps-0`}>
              <li className={`${styles.litem} col-5 m-1`}>Instagram</li>
              <li className={`${styles.litem} col-5 m-1`}>Facebook</li>
              <li className={`${styles.litem} col-5 m-1`}>Twitter</li>
              <li className={`${styles.litem} col-5 m-1`}>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>

    <div className={`${styles.loaction}`}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27130981.064053986!2d82.70112441590737!3d33.89255529548107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1729172205331!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className={`${styles.frameCard} px-5 rounded-4`}>
      <h4>Visit Our Headquarters</h4>
      <p>Discover the heart of CouponKu where we bring the best deals to life.</p>
      <p><i className="fa-solid fa-shop"></i>CouponKu HQ</p>
    </div>
    </div>

    <div className={`${styles.overallFaq} d-flex flex-column align-items-center py-5`}>
      <h3>CouponKu FAQs</h3>
      <div>
        <p className={`${styles.MainP}`} onClick={handleClick1}>How do i use a coupon? <i className="fa-solid fa-tag"></i></p>
        <p className={`${styles.AddedP}`} style={{display : Addedstate1? 'block' : 'none' }}>Simply apply the coupon code at checkout to enjoy your discount</p>
      </div>
      <div>
        <p className={`${styles.MainP}`} onClick={handleClick2}> what products are on sale? <i className="fa-solid fa-tags"></i> </p>
        <p className={`${styles.AddedP}`} style={{display : Addedstate2? 'block' : 'none'}}>We offer discounts across a wide range of categories. Check our Products page for the latest deals.</p>
      </div>
      <div>
        <p className={`${styles.MainP}`} onClick={handleClick3}> Can i track my order? <i className="fa-solid fa-truck"></i></p>
        <p className={`${styles.AddedP}`} style={{display : Addedstate3? 'block' : 'none' }}>Yes, you can track your order status in your account under &quot; Order History &quot;.</p>
      </div>
    </div>
    
    <div className={`${styles.team} py-5`}>
      <h2>Meet the CouponKu Team</h2>
      <p>Our dedicated team works tirelessly to bring you the best shopping experience.</p>
      <div className={`${styles.members} py-5 d-flex flex-wrap justify-content-evenly`}>
        <div className={`${styles.member} col-10 col-md-3 `}>
          <img src={member1} alt="member's photo" />
          <p className={`${styles.memberName}`}>  Ethan Brown </p>
          <p className={`${styles.memberPos}`}>Marketing Specialist</p>
          <p className={`${styles.memberRole}`}>Ethan crafts compelling campaigns that highlight our amazing deals.</p>
          <div className={`${styles.memberMedia} d-flex justify-content-between col-3 px-2`}>
            <div className={`${styles.twitter}`}><i className="fa-brands fa-x-twitter"></i></div>
            <div className={`${styles.linkedin}`}><i className="fa-brands fa-linkedin"></i></div>
          </div>
        </div>
        <div className={`${styles.member} col-10 col-md-3`}>
          <img src={member2} alt="member's photo" />
          <p className={`${styles.memberName}`}>Olivia Chen</p>
          <p className={`${styles.memberPos}`}>Head of Customer Experience</p>
          <p className={`${styles.memberRole}`}>Olivia ensures every customer interaction is smooth and satisfying.</p>
          <div className={`${styles.memberMedia} d-flex justify-content-between col-3 px-2`}>
            <div className={`${styles.twitter}`}><i className="fa-brands fa-x-twitter"></i></div>
            <div className={`${styles.linkedin}`}><i className="fa-brands fa-linkedin"></i></div>
          </div>
        </div>
        <div className={`${styles.member} col-10 col-md-3`}>
          <img src={member3} alt="member's photo" />
          <p className={`${styles.memberName}`}>Joe Lee </p>
          <p className={`${styles.memberPos}`}>Product Manager</p>
          <p className={`${styles.memberRole}`}>Sophia oversees our product range, ensuring we offer the best prices.</p>
          <div className={`${styles.memberMedia} d-flex justify-content-between col-3 px-2`}>
            <div className={`${styles.twitter}`}><i className="fa-brands fa-x-twitter"></i></div>
            <div className={`${styles.linkedin}`}><i className="fa-brands fa-linkedin"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.community} py-5`}>
      <h2>Our community</h2>
      <p>Join our community and never miss out on a great deal again.</p>
      <div className={`${styles.features} d-flex flex-wrap py-5 justify-content-center`}>
        <div className={`${styles.feature} col-md-3 col-11 d-flex justify-content-center shadow px-3 py-2`}>
          <i className="fa-solid fa-gift"></i>
          <div className={`${styles.featureDet}`}>
            <p>Exclusive Deals</p>
            <p>Access members-only discounts</p>
          </div>
        </div>
        <div className={`${styles.feature} col-md-3 col-11 d-flex justify-content-center shadow px-3 py-2`}>
          <i className="fa-solid fa-bell"></i>
          <div className={`${styles.featureDet}`}>
            <p>Instant Notifications</p>
            <p>Be the first to know about new offers</p>
          </div>
        </div>
        <div className={`${styles.feature} col-md-3 col-11 d-flex justify-content-center shadow px-3 py-2`}>
          <i className="fa-solid fa-users"></i>
          <div className={`${styles.featureDet}`}>
            <p>Community Perks</p>
            <p>Enjoy special benefits</p>
          </div>
        </div>
      </div>
      <button className={`${styles.btn} d-flex align-items-center flex-row border-0 shadow mx-auto rounded-3 px-4 `}> <i className="fa-solid fa-user-plus"></i> join us </button>
    </div>

    <div className={`${styles.review} px-3 py-5 d-flex flex-wrap justify-content-around `}>
      <img src={review} alt="photo"/>
      <div className={`${styles.reviewDet} col-10 col-md-6 d-flex flex-column `}>
        <p>CouponKu transformed my shopping experience. The deals are unbeatable!</p>
        <p>Jessica Parker</p>
        <p>Satisfied Customer</p>
      </div>
    </div>
  </section>
  </>
  );
}

export default Contact;
