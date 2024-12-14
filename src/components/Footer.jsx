import React from 'react'
import { 
  Twitter, 
  Youtube, 
  Facebook, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Twitter className="hover:text-[#64FFDA] transition-colors" size={24} />, 
      href: "#twitter" 
    },
    { 
      icon: <Youtube className="hover:text-[#64FFDA] transition-colors" size={24} />, 
      href: "#youtube" 
    },
    { 
      icon: <Facebook className="hover:text-[#64FFDA] transition-colors" size={24} />, 
      href: "#facebook" 
    },
    { 
      icon: <Linkedin className="hover:text-[#64FFDA] transition-colors" size={24} />, 
      href: "#linkedin" 
    },
    { 
      icon: <Github className="hover:text-[#64FFDA] transition-colors" size={24} />, 
      href: "#github" 
    }
  ]

  const footerLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Jobs", href: "#jobs" },
    { label: "Press Kit", href: "#press" }
  ]

  return (
    <footer className="bg-[#0A192F] text-[#CCD6F6] py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Navigation */}
        <nav className="flex space-x-6 mb-6 md:mb-0">
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-[#8892B0]">
        <p>
          © {new Date().getFullYear()} DevTinder. 
          <span className="ml-2 text-[#64FFDA]">
            Connecting Developers, One Swipe at a Time
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer