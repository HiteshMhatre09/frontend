import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>ROYAL's</h1>
          <p>Events & Weddings</p>
        </div>
        <div className="tag">
          <label>Suggestion</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Enroll Yourself</button>
          </div>
          <p>Send your Suggestion and bring your wedding dreams comes true</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;