import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactPage">
        <div>
          <h3 style={{ textAlign: "center", color: "violet" ,paddingTop:'15px'}}>
          Send a message!
          </h3>
          <p
            style={{ textAlign: "center", fontSize: "15px",marginTop:'10px' }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>
        <div
          class="formContent"
          style={{
            border: "3px solid orange",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <form>
 
              Angelo.aste@live.com
 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
