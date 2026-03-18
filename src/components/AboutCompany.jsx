import { motion } from 'framer-motion';
import './AboutCompany.css';

const AboutCompany = ({ data }) => {
  return (
    <section className="section about-section partnered-section">
      <div className="container">
        <motion.div 
          className="partnered-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="partnered-text">Partnered with</span>
          {data.logoImage && <img src={data.logoImage} alt="Partner Logo" className="partnered-logo" />}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
