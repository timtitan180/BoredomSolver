import React from "react";

const headerStyles = {
  backgroundColor: "hsla(125, 92%, 52%, 0.898)",
  margin: "auto -16px",
  padding: "16px 32px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
};
function Header() {
  return (
    <header style={headerStyles}>
      <h1>
        <span></span>Beat Boredom
      </h1>
    </header>
  );
}

export default Header;