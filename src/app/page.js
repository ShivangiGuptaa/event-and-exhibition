'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './globals.css'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      });
    });
  }, [])

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const splitText = (text) => text.split(" ").map((word, i) => (
    <motion.span key={i} variants={fadeInUp} style={{ display: 'inline-block', marginRight: '0.25em' }}>
      {word}
    </motion.span>
  ));

  return (
    <>
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container">
          <div className="nav-links">
            <motion.a whileHover={{ scale: 1.05 }} href="#about">About</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#services">Services</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#portfolio">Portfolio</motion.a>
          </div>
          <div className="logo">
            Magic Touch Production
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="nav-right">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn btn-light">Book Consultation</motion.a>
          </div>
        </div>
      </motion.nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <div className="menu-logo">
            MAGIC TOUCH<br/><span className="menu-logo-sub">PRODUCTION</span>
          </div>
          <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="menu-content">
          <div className="menu-overline">Navigation</div>
          <a href="#about" className="menu-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="menu-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="menu-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          
          <a href="#contact" className="menu-book-btn" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
            Book Slot
          </a>
          
          <div className="menu-footer-info">
            <p>Available for bookings across India & Worldwide</p>
            <div className="menu-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 91535 21801
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="hero">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="overline">Premium Event Management</motion.div>
          <h1>
            {splitText("Every Grand Event")} <br/>
            <motion.span variants={fadeInUp} className="heading-italic" style={{ display: 'inline-block' }}>Deserves a Flawless Execution</motion.span>
          </h1>
          <motion.p variants={fadeInUp}>From large-scale corporate conferences to bespoke luxury exhibitions, we design and build unforgettable experiences with absolute precision.</motion.p>
          <motion.div variants={fadeInUp} className="hero-btns">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn btn-light">Book a Consultation &rarr;</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#portfolio" className="btn btn-outline">Explore Our Portfolio</motion.a>
          </motion.div>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          src="/images/lounge.jpg" alt="VIP Lounge" className="hero-img-left" 
        />
        <motion.img 
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          src="/images/arch.jpg" alt="Luxury Setup" className="hero-img-right" 
        />
      </section>

      <section id="about" className="section container">
        <motion.div 
          className="about-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInLeft} className="about-images">
            <img src="/images/gala.jpg" alt="Grand Gala" className="img-tall" />
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <img src="/images/tablescape.jpg" alt="Elegant Decor" className="img-short" />
              <img src="/images/hero.jpg" alt="Event Setup" className="img-short" />
            </div>
          </motion.div>
          <div className="about-content">
            <motion.div variants={fadeInRight} className="overline">About Our Studio</motion.div>
            <motion.h2 variants={fadeInRight}>Bringing your grandest <br/>visions <span className="heading-italic">to reality.</span></motion.h2>
            <motion.p variants={fadeInRight}>At Magic Touch Production, we specialize in scaling your ideas into massive, breathtaking realities. Our expert planners and architects work seamlessly to deliver structural brilliance, technical perfection, and stunning aesthetics.</motion.p>
            <motion.p variants={fadeInRight}>Whether you are hosting an international trade show, a high-profile corporate summit, or an elite VIP gathering, we handle every single detail so you can focus on the experience.</motion.p>
            
            <motion.div variants={staggerContainer} className="stats-grid">
              <motion.div variants={scaleIn} className="stat-item">
                <h4>500+</h4>
                <p>Events Executed</p>
              </motion.div>
              <motion.div variants={scaleIn} className="stat-item">
                <h4>50+</h4>
                <p>Awards Won</p>
              </motion.div>
              <motion.div variants={scaleIn} className="stat-item">
                <h4>12+</h4>
                <p>Years Experience</p>
              </motion.div>
              <motion.div variants={scaleIn} className="stat-item">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </motion.div>
            </motion.div>
            
            <motion.a variants={fadeInRight} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#services" className="btn">Explore Our Services &rarr;</motion.a>
          </div>
        </motion.div>
      </section>

      <section id="services" className="section container">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="overline">Our Expertise</motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">Event solutions for <span className="heading-italic">every industry</span></motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">A comprehensive event agency providing end-to-end management, from structural fabrication to creative direction.</motion.p>
          
          <motion.div variants={staggerContainer} className="services-grid">
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="service-card">
              <img src="/images/corporate.jpg" alt="Corporate Conferences" />
              <div className="service-info">
                <h3>Corporate Conferences</h3>
                <p>State-of-the-art corporate summits, seminars, and product launches designed to elevate your brand presence globally.</p>
                <a href="#contact" className="service-link">Discover &rarr;</a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="service-card">
              <img src="/images/exhibition.jpg" alt="Trade Show Exhibitions" />
              <div className="service-info">
                <h3>Trade Show Exhibitions</h3>
                <p>Custom architectural exhibition stalls and interactive booths that guarantee maximum footfall and engagement.</p>
                <a href="#contact" className="service-link">Discover &rarr;</a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="service-card">
              <img src="/images/stage.jpg" alt="Stage & AV Setup" />
              <div className="service-info">
                <h3>Stage & AV Setup</h3>
                <p>Massive stage construction, cinematic lighting, LED walls, and flawless audio-visual synchronization.</p>
                <a href="#contact" className="service-link">Discover &rarr;</a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="features-wrapper">
        <motion.div 
          className="container features-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="features-left">
            <motion.div variants={fadeInLeft} className="overline">Why Choose Us</motion.div>
            <motion.h2 variants={fadeInLeft}>Every detail <br/><span className="heading-italic">perfectly planned.</span></motion.h2>
            <motion.p variants={fadeInLeft}>We combine creative direction, meticulous logistics and quiet luxury to design events that feel unmistakably yours.</motion.p>
            <motion.div variants={fadeInLeft} className="feature-images">
              <img src="/images/hero.jpg" alt="Detail 1" />
              <img src="/images/arch.jpg" alt="Detail 2" />
              <img src="/images/lounge.jpg" alt="Detail 3" />
              <img src="/images/tablescape.jpg" alt="Detail 4" />
            </motion.div>
          </div>
          <motion.div variants={staggerContainer} className="features-right">
            {[
              { title: "Precision Engineering", desc: "Flawless structural and technical setups for grand-scale events.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="14"/><line x1="10.88" x2="15.46" y1="21.94" y2="14"/></svg> },
              { title: "Trusted Network", desc: "Handpicked global partners in fabrication, catering, and venues.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { title: "Luxury Styling & Décor", desc: "Refined design direction and editorial styling for premium aesthetics.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
              { title: "Budget Management", desc: "Transparent planning and financial management with no surprises.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg> },
              { title: "On-the-Day Coordination", desc: "Seamless execution and stage management so you can be present.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg> },
              { title: "Seamless Guest Experience", desc: "Choreographed moments from arrival to the final farewell.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="portfolio" className="section container portfolio-section">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="overline">Featured Projects</motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">Masterpieces we've <span className="heading-italic">built</span></motion.h2>
          
          <motion.div variants={staggerContainer} className="gallery-grid">
            {[
              "/images/gala.jpg",
              "/images/cake.jpg",
              "/images/arch.jpg",
              "/images/stage.jpg",
              "/images/exhibition.jpg",
              "/images/lounge.jpg"
            ].map((src, idx) => (
              <motion.div key={idx} variants={scaleIn} className="gallery-item">
                <img src={src} alt={`Gallery ${idx + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="section container">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="overline">Testimonials</motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">Words from our <span className="heading-italic">partners</span></motion.h2>
          
          <motion.div variants={staggerContainer} className="testimonials-grid">
            {[
              { img: "/images/corporate.jpg", name: "David M.", title: "Global Tech Summit", quote: "\"Their attention to detail and ability to handle a 5000-person conference without a single glitch is truly commendable.\"" },
              { img: "/images/tablescape.jpg", name: "Elena R.", title: "Charity Gala Foundation", quote: "\"From the intricate table setups to the luxurious ambiance, they transformed our gala dinner into a magical evening.\"" },
              { img: "/images/exhibition.jpg", name: "James K.", title: "Auto Expo International", quote: "\"Our custom exhibition stall was the highlight of the expo. Innovative design and flawless execution.\"" }
            ].map((test, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10 }} className="testimonial-card">
                <img src={test.img} alt="Testimonial" />
                <div className="testimonial-content">
                  <div className="stars">★★★★★</div>
                  <p className="quote">{test.quote}</p>
                  <div className="author">
                    <h4>{test.name}</h4>
                    <p>{test.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="cta-section">
        <motion.div 
          className="cta-content container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="overline" style={{color: '#fff'}}>Start Your Project</motion.div>
          <motion.h2 variants={fadeInUp}>Let's build an <br/><span className="heading-italic">unforgettable experience</span></motion.h2>
          <motion.p variants={fadeInUp}>Ready to plan your next major corporate summit, luxury gala, or exhibition? Partner with us to ensure a visually stunning and seamlessly executed event.</motion.p>
          
          <motion.div variants={fadeInUp} className="hero-btns">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="btn btn-light">Schedule a Consultation &rarr;</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="btn btn-outline">Request a Proposal</motion.a>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="cta-contact-cards">
            {[
              { title: "Email", info: "contact@magictouchproduction.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)', marginBottom: '1.2rem', display: 'inline-block'}}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
              { title: "Phone", info: "+91 91535 21801", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)', marginBottom: '1.2rem', display: 'inline-block'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
              { title: "Headquarters", info: "Mumbai, India", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)', marginBottom: '1.2rem', display: 'inline-block'}}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
            ].map((card, idx) => (
              <motion.div key={idx} variants={scaleIn} whileHover={{ y: -5 }} className="contact-card">
                {card.icon}
                <h5>{card.title}</h5>
                <p>{card.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <h3 className="logo" style={{color: '#333'}}>Magic Touch <span className="heading-italic">Production</span></h3>
              <p>A premier event management agency specializing in large-scale corporate conferences, custom exhibitions, and luxury setups worldwide.</p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Contact Us</h5>
              <div className="footer-links">
                <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)'}}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Mumbai, India
                </a>
                <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)'}}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  contact@magictouchproduction.com
                </a>
                <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-gold)'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 91535 21801
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} MAGIC TOUCH PRODUCTION. ALL RIGHTS RESERVED.</span>
            <span>DESIGNED FOR EXCELLENCE</span>
          </div>
        </div>
      </footer>
    </>
  )
}
