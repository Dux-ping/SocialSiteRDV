import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer text-white bg-dark p-3 position-fiexed text-center">
        <p>&copy; {`Ross-Diana-Viorel ${year}`}</p>
      </div>
    </footer>
  );
}

export default Footer;
