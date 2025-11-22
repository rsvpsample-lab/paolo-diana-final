import { useEffect, useRef } from 'react';

interface SaveTheDateSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateSection = ({ audioRef }: SaveTheDateSectionProps) => {
  return (
    <section className="bg-white relative w-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl text-center text-primary mb-8"
          style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
          data-testid="text-save-the-date-title"
        >Save the Date Video</h2>

        <div className="relative w-full flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="text-center">
            <p className="text-3xl md:text-4xl text-primary font-light italic" style={{ fontFamily: 'Boska, serif' }}>
              Coming Soon
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              Our special video will be available soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDateSection;