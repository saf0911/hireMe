import React from 'react';
import Link from 'next/link';

function Header() {
  return (
  <div>
    <Link href="/index">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/signin">
      <a>Sign In</a>
    </Link>
    <Link href="/logout">
      <a>Sign Out</a>
    </Link>
    <Link href="/logout">
      <a>Log Out</a>
    </Link>
  </div>
  );
}

export default Header;
