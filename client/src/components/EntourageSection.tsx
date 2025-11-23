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

        {/* Entourage Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
          data-testid="entourage-image-container"
        >
          <img
            src="https://res.cloudinary.com/dhzisg93l/image/upload/v1763908325/b99dfcb5-6442-435b-bdc7-eea9a6e8bcef.png"
            alt="Entourage"
            className="w-full max-w-4xl mx-auto"
            data-testid="entourage-image"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
