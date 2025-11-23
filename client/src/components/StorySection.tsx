import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const storyCoupleImage = 'https://res.cloudinary.com/djsdvte4u/image/upload/v1763799617/prenup4_o4rurf.jpg';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A couple, a spark, and a shared love for adventure</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p>
                Diana had always poured her heart into serving — singing at church, guiding souls through her music, and inspiring others as a Sun Life advisor. Paolo, meanwhile, was busy managing his family's ventures in General Santos and Polomolok, grounded yet quietly searching for something more — or rather, someone more.
              </p>
              
              <p>
                Their paths finally crossed during a BLD Singles Encounter, a weekend filled with prayer, laughter, and faith. In a room full of voices, one stood out — Diana's gentle singing. Paolo couldn't help but notice not just her voice, but the grace and warmth behind it. Diana, on the other hand, saw in Paolo a calm and sincere heart, someone who listened deeply and smiled quietly.
              </p>
              
              <p>
                From that retreat, friendship bloomed. Monthly BLD reunions became their favorite days — filled with shared meals, small jokes, and growing affection that neither could ignore. Over time, the bond deepened into something that felt both peaceful and extraordinary.
              </p>
              
              <p>
                Paolo did things the old-fashioned way — visiting Diana's home, meeting her parents, and formally asking for their blessing to court her. Their love grew slowly, beautifully, and intentionally — guided by prayer, trust, and shared dreams.
              </p>
              
              <p>
                Years later, in the storybook town of Hallstatt, Austria, surrounded by the quiet beauty of snow and lake reflections, Paolo knelt down and asked the question that would begin their forever.
              </p>
              
              <p>
                She said yes.
              </p>
              
              <p>
                Today, they continue to dream together — two hearts, one vision, and a million dreams that are now becoming real.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src="https://res.cloudinary.com/dhzisg93l/image/upload/v1763907685/20230809_170035_1_oacw0k.jpg"
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
