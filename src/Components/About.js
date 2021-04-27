import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var shortName = this.props.data.shortName;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var country = this.props.data.address.country;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{shortName}</span><br />
                           <span>{street}<br />
                              {city} {state} {country}
                           </span><br />
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a className="button"
                              href={`mailto:${'deyanira.davilia.o@hotmail.com'}?subject=${encodeURIComponent('I am hiring - Please share your resume') || ''}&body=${encodeURIComponent('I would love to chat with you about new opportunities...') || ''}`}
                           ><i className="fa fa-certificate"></i>Ask for my Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
