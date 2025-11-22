import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';

const backgroundImage = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799619/prenup5_e79yl3.jpg';
const metrobankQR = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763803954/Metrobank_QR_ravb9v.jpg';
const gcashQR = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763803954/GCash_QR_ohstba.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section
      id="hashtag-gifts"
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-gifts-header">Gift Guide</h2>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
              data-testid="img-gifts-background"
            />
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div
              className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-teal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p
                  className="text-sm md:text-base text-foreground/80 leading-relaxed"
                  data-testid="text-gifts-message"
                >
                  Your presence is the greatest gift we could ever receive.
                  <br /><br />
                  Should you wish to extend your generosity, a token of love and support toward our new beginnings would be deeply appreciated.
                  <br /><br />
                  With love and gratitude,
                  <br />
                  Paolo and Diana
                </p>

                {/* QR Codes */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground mb-2">Metrobank</p>
                    <img
                      src={metrobankQR}
                      alt="Metrobank QR Code"
                      className="mx-auto border-2 border-primary/20 rounded-lg object-contain max-w-full"
                      style={{ width: 'auto', height: 'auto' }}
                      data-testid="img-qr-metrobank"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground mb-2">GCash</p>
                    <img
                      src={gcashQR}
                      alt="GCash QR Code"
                      className="mx-auto border-2 border-primary/20 rounded-lg object-contain max-w-full"
                      style={{ width: 'auto', height: 'auto' }}
                      data-testid="img-qr-gcash"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;