import { memo } from 'react';
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
          <a 
            href={data.linkUrl || "https://www.bigondigital.co.za"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="partnered-link"
          >
            <span className="partnered-text">Partnered with</span>
            {data.logoImage && <img src={data.logoImage} alt="Partner Logo" className="partnered-logo" loading="lazy" />}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(AboutCompany);
