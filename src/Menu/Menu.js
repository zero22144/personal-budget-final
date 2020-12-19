import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/db">Dashboard</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
