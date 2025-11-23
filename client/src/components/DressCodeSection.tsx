import { motion } from 'framer-motion';

const principalSponsorsImage = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799971/c8ac0f33-8179-407a-87e8-0e71a77eeb32_scxifc.webp';
const entourageImage = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799488/entourage_bz1tfy.jpg';
const guestsImage = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799488/guests_hh27vs.jpg';

const DressCodeSection = () => {
  const dustyBlueColors = [
    { name: 'Deep Blue', color: '#194569', hex: '#194569' },
    { name: 'Medium Blue', color: '#5F84A2', hex: '#5F84A2' },
    { name: 'Soft Blue', color: '#91AEC4', hex: '#91AEC4' },
    { name: 'Light Blue', color: '#B7D0E1', hex: '#B7D0E1' }
  ];

  const beigeColors = [
    { name: 'Beige', color: '#D4C5B0', hex: '#D4C5B0' },
    { name: 'Cream Beige', color: '#E5D7C3', hex: '#E5D7C3' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      data-testid="section-dresscode"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-light text-primary mb-4" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
            Please dress according to your role in our special celebration
          </p>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          data-testid="card-principal-sponsors"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dvrvykbf6/image/upload/v1763823655/8e89e4b5-5011-4501-8fce-9cfcba05dfa1_d1ipki.png" 
                  alt="Principal Sponsors Attire"
                  className="w-full h-full object-cover"
                  data-testid="img-principal-sponsors"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-display text-primary mb-6" data-testid="text-principal-sponsors-title">
                  Principal Sponsors
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Ninang:</h4>
                    <p className="text-sm text-foreground/80">Long gown in beige</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Ninong:</h4>
                    <p className="text-sm text-foreground/80">Long sleeve barong with long sleeve undershirt</p>
                    <p className="text-sm text-foreground/80">Black slacks</p>
                  </div>
                </div>

                {/* Beige Color Palette */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-3">Ninang Color Motif</p>
                  <div className="flex gap-3">
                    {beigeColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-border shadow-md hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                          data-testid={`color-beige-${index}`}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Entourage */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          data-testid="card-entourage"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-display text-primary mb-6" data-testid="text-entourage-title">
                  Entourage
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Female:</h4>
                    <p className="text-sm text-foreground/80">Long gown in shades of dusty blue</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Male:</h4>
                    <p className="text-sm text-foreground/80">Long sleeve barong with long sleeve undershirt</p>
                    <p className="text-sm text-foreground/80">Black slacks</p>
                  </div>
                </div>

                {/* Dusty Blue Color Palette */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-3">Female Color Motif</p>
                  <div className="flex gap-3">
                    {dustyBlueColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-border shadow-md hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                          data-testid={`color-entourage-${index}`}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="h-64 md:h-auto overflow-hidden order-1 md:order-2">
                <img 
                  src="https://res.cloudinary.com/dhzisg93l/image/upload/v1763904502/5ef2748e-22b5-4d79-94aa-7ff97be94dd6.png" 
                  alt="Entourage Attire"
                  className="w-full h-full object-cover"
                  data-testid="img-entourage"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guests */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          data-testid="card-guests"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dvrvykbf6/image/upload/v1763825299/6ef09ad9-fcd0-467f-b18c-b11e082ac61b.png" 
                  alt="Guests Attire"
                  className="w-full h-full object-cover"
                  data-testid="img-guests"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-display text-primary mb-6" data-testid="text-guests-title">
                  Guests
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Female:</h4>
                    <p className="text-sm text-foreground/80">Long gown in shades of dusty blue</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">For Male:</h4>
                    <p className="text-sm text-foreground/80">Long sleeve polo in shades of dusty blue</p>
                    <p className="text-sm text-foreground/80 font-semibold">OR</p>
                    <p className="text-sm text-foreground/80">Long sleeve barong with long sleeve undershirt</p>
                    <p className="text-sm text-foreground/80">Black slacks</p>
                  </div>
                </div>

                {/* Dusty Blue Color Palette */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-3">Female Color Motif</p>
                  <div className="flex gap-3">
                    {dustyBlueColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-border shadow-md hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                          data-testid={`color-guests-${index}`}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
