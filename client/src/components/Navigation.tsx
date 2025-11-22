import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const logoUrl = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799635/image-removebg-preview_lkoad3.png';
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { name: 'Our Moments', href: '#slideshow', isExternal: false },
    { name: 'Countdown', href: '#countdown', isExternal: false },
    { name: 'Our Story', href: '#story', isExternal: false },
    { name: 'Timeline', href: '#timeline', isExternal: false },
    { name: 'Venue', href: '#venue', isExternal: false },
    { name: 'Dress Code', href: '#dresscode', isExternal: false },
    { name: 'Entourage', href: '#entourage', isExternal: false },
    { name: 'Prenup Photos', href: '#prenup-photos', isExternal: false },
    { name: 'RSVP', href: '#rsvp', isExternal: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling down
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);

      // Update active section
      const sections = navItems.filter(item => !item.isExternal).map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      // Open external link in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
    } else {
      // Scroll to section
      const sectionId = href.slice(1); // Remove the # from the href
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Calculate the offset for the fixed navigation
        const navHeight = 64; // Approximate navigation height
        const elementTop = element.offsetTop - navHeight;
        
        // Smooth scroll to the element
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: 'smooth'
        });
      } else {
        // Fallback: try querySelector if getElementById fails
        const fallbackElement = document.querySelector(href);
        if (fallbackElement) {
          const navHeight = 64;
          const rect = fallbackElement.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: Math.max(0, elementTop),
            behavior: 'smooth'
          });
        } else {
          // If element is not found, scroll to top
          console.warn(`Section ${sectionId} not found`);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/30 shadow-soft transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dvrvykbf6/image/upload/v1763823722/948a5374-031b-4469-9b03-d0c489198610.png" 
              alt="P&D Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.isExternal)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/20 hover:text-accent ${
                    !item.isExternal && activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/15'
                      : 'text-muted-foreground'
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:bg-primary/20 hover:text-accent"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-primary/30">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.isExternal)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-primary/20 hover:text-accent ${
                  !item.isExternal && activeSection === item.href.slice(1)
                    ? 'text-primary bg-primary/15'
                    : 'text-muted-foreground'
                }`}
                data-testid={`nav-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;