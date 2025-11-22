import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Mr. Blas Jun Sardido",
        "Mr. Ben Tiu",
        "Mr. Ruben Basalo",
        "Mr. Ruben Virtucio",
        "Capt. Bernie Aguilar",
        "Mr. Merwin Sobiaco",
        "Mr. Pedro Barrios",
        "Atty. Jaime Lopez Jr.",
        "Mr. Francis Erick Balo",
        "Mr. Albert Reales Jr.",
        "Mr. Edward Chin",
        "Mr. Nestor Amable",
        "Mr. Jokas Macariola",
        "Dr. Francisco Vilela Jr."
      ],
      women: [
        "Mrs. Evelyn Sardido",
        "Dr. Jennifer Legere",
        "Mrs. Lourdes Manguiob Basalo",
        "Mrs. Rosielyn Virtucio",
        "Mrs. Bernadeth Manguiob Aguilar",
        "Mrs. Cecilia Sabella",
        "Mrs. Maria Guadalupe Cal",
        "Mrs. Janet Lopez",
        "Mrs. Allain Balo",
        "Mrs. Romana Reales",
        "Mrs. Agnes Ann Chin",
        "Mrs. Tina Amable",
        "Mrs. Rowena Althea Macariola",
        "Dr. Estela Maribel Vilela"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Mr. James Villanueva", "Dr. Mila Gracia Villanueva"] },
        { role: "Veil", names: ["Mr. Fernando Cubero, Jr.", "Mrs. Ruby Jean Cubero"] },
        { role: "Cord", names: ["Mr. Rodolf John Sobiaco", "Mrs. Celeste Sobiaco"] }
      ]
    },
    bestMan: { name: "Mr. Giorgio Ejercito", role: "Best Man" },
    matronOfHonor: { name: "Mrs. Mary Joy Halago", role: "Matron of Honor" },
    groomsmen: [
      "Mr. Aristotle Sunada",
      "Mr. Adrian Peña",
      "Mr. Jerome Anunciado",
      "Mr. Prince John Sobiaco",
      "Mr. Jadd Denton Ybañez",
      "Mr. Alpie Mier"
    ],
    bridesmaids: [
      "Ms. Roxanne Elysse Bunayog",
      "Ms. Donita Rose Santos",
      "Ms. Marriel Morallas",
      "Ms. Sophia Denise Cubero",
      "Ms. Julie Mae Villanueva",
      "Ms. Maria Therese Vsa-al"
    ],
    bearers: [
      { role: "Ring & Arrhae Bearer", names: ["Aeden Asher Santiago"] },
      { role: "Bible Bearer", names: ["Kire Zion Lumagsao"] }
    ],
    flowerGirls: [
      "Jireh Leia Halago",
      "Jazmin Nathalie Cubero",
      "Noa Ramone Alcantara"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-1">
            {entourageData.principalSponsors.men.map((manName, index) => {
              const womanName = entourageData.principalSponsors.women[index];
              if (!manName && !womanName) return null;
              
              return (
                <div key={index} className="grid grid-cols-2 gap-4 md:gap-8">
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-man-${index}`}>
                    {manName}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-woman-${index}`}>
                    {womanName}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man and Matron of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="matron-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.matronOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="matron-of-honor-name">
                {entourageData.matronOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="text-center" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girls
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-3xl mx-auto">
              {entourageData.flowerGirls.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
