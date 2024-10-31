import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
<div className="layout">
<header>
<nav>
<NavLink to="/" activeClassName="active">หน้าหลัก</NavLink>
<NavLink to="/about" activeClassName="active">เกี่ยวกับฉัน</NavLink>
<NavLink to="/contact" activeClassName="active">ติดต่อ</NavLink>
<NavLink to="/product" activeClassName="active">สินค้า</NavLink>
</nav>
</header>
<main>{children}</main>
<footer>
<p>&copy; Thanwa Permpool 2023</p>
</footer>
</div>
);
export default Layout;