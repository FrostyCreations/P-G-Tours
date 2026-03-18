import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import './FeatureSection.css';

const FeatureSection = ({ data }) => {
  const isReversed = data.imagePosition === 'right';

  return (
    <section className={`section feature-section ${isReversed ? 'bg-secondary' : 'bg-primary'}`}>
      <div className="container">
        <div className={`feature-grid ${isReversed ? 'reversed' : ''}`}>
          
          <motion.div 
            className="feature-visual"
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`feature-image-wrapper ${data.imageStyle || 'standard'}`}>
              {data.imageUrl ? (
                <img src={data.imageUrl} alt={data.title} className="feature-image" />
              ) : (
                <div className="feature-placeholder-image">
                  <LayoutGrid size={48} className="placeholder-icon" />
                </div>
              )}
              {/* Optional decorative elements */}
              <div className="decor-dots"></div>
            </div>
          </motion.div>

          <motion.div 
            className="feature-content"
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.eyebrow && <span className="feature-eyebrow">{data.eyebrow}</span>}
            <h2 className="section-title text-primary feature-title">{data.title}</h2>
            <div className="feature-text">
              <p>{data.description}</p>
            </div>
            
            {data.price && (
              <div className="pricing-block">
                <div className="pricing-info">
                  <span className="pricing-label">Price:</span>
                  <span className="pricing-value">{data.price}</span>
                </div>
                {data.quoteUrl && (
                  <a href={data.quoteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View Quote
                  </a>
                )}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
