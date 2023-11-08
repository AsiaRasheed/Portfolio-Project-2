import React, { useState, useEffect } from 'react';
import './Button1.css'
function Button1() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
    
      {showButton && (
        <button onClick={scrollToTop} className = "bsct">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>

        </button>
      )}
    </div>
  );
}

export default Button1;
