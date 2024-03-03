// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Halaman Utama</Link></li>
        <li><Link to="/page1">Halaman 1</Link></li>
        <li><Link to="/page2">Halaman 2</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
