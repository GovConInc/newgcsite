'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Bar - Dark Navy */}
      <div className="bg-gov-navy text-white text-sm py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center space-x-6">
            <a href="tel:8136650308" className="flex items-center hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (813) 665-0308
            </a>
            <a href="mailto:Info@GovCon.Info" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Info@GovCon.Info
            </a>
          </div>
          <div className="hidden sm:block">
            <Link href="/strategy" aria-label="Book a strategy session" className="inline-flex items-center px-3 py-1.5 bg-gov-crimson text-white rounded-md text-sm font-semibold hover:opacity-95">Book Strategy</Link>
          </div>
        </div>
      </div>

      {/* Main Nav - Sticky White */}
      <nav className="sticky top-0 bg-white border-b border-gov-silver shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-gov-navy">GOV</span>
              <span className="text-gov-crimson">CON</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/sam-dsbs" className="nav-link">SAM & DSBS</Link>
              <Link href="/gsa" className="nav-link">GSA Vehicles</Link>
              
              {/* Dropdown Group */}
              <div className="relative group h-20 flex items-center">
                <button className="nav-link flex items-center gap-1 focus:outline-none">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown Content */}
                <div className="absolute top-20 left-0 w-56 bg-white border border-gov-silver shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    <Link href="/services/consulting" className="px-4 py-2 text-gov-navy hover:bg-gray-50 hover:text-gov-crimson">Consulting</Link>
                    <Link href="/services/compliance" className="px-4 py-2 text-gov-navy hover:bg-gray-50 hover:text-gov-crimson">Compliance</Link>
                    <Link href="/services/proposal" className="px-4 py-2 text-gov-navy hover:bg-gray-50 hover:text-gov-crimson">Proposal Writing</Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="nav-link">About Us</Link>
              <Link href="/contact" className="nav-link">Contact</Link>

              {/* Desktop CTA */}
              <Link href="/strategy" className="ml-4 inline-flex items-center px-4 py-2 bg-gov-crimson text-white rounded-md font-semibold">Book</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gov-navy"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileOpen && (
          <div className="md:hidden bg-white border-t border-gov-silver px-4 py-4 space-y-4">
            <Link href="/" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>Home</Link>
            <Link href="/resources" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>Resources</Link>
            <Link href="/sam-dsbs" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>SAM & DSBS</Link>
            <Link href="/gsa" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>GSA Vehicles</Link>
            <div className="py-2 border-t border-b border-gray-100">
              <span className="block text-gov-crimson font-bold mb-2">Services</span>
              <Link href="/services/consulting" className="block pl-4 text-gray-600 py-1" onClick={() => setIsMobileOpen(false)}>Consulting</Link>
              <Link href="/services/compliance" className="block pl-4 text-gray-600 py-1" onClick={() => setIsMobileOpen(false)}>Compliance</Link>
            </div>
            <Link href="/about" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>About Us</Link>
            <Link href="/contact" className="block text-gov-navy font-medium py-2" onClick={() => setIsMobileOpen(false)}>Contact</Link>
            <div className="pt-4">
              <Link href="/strategy" className="block text-white bg-gov-crimson text-center rounded-md px-4 py-2 font-semibold" onClick={() => setIsMobileOpen(false)}>Book Strategy</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}