import Link from 'next/link'
import React from 'react'

const links = [
  { href: '/chat', label: 'Chat' },
  { href: '/tours', label: 'Tours' },
  { href: '/tours/new-tour', label: 'New tour' },
  { href: '/profile', label: 'Profile' },
]

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
