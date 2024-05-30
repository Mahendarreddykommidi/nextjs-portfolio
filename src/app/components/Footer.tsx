'use client'
import React from 'react'

export default function Footer() {
  return (
    <div className='mt-10 bg-gray-900 ' >
        <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <nav className="flex flex-col font-extralight">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav  className="flex flex-col font-extralight "    >
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav   className="flex flex-col font-extralight" >
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form className="mt-2 md:mt-5 sm:mt-4 font-extralight">
    <h6 className="footer-title ">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item " /> 
        <button className="bg-indigo-500 rounded md">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

      
    </div>
  )
}
