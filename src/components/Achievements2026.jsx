import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Achievements.css';

const Achievements2026 = ({ data }) => {
  return (
    <section className="section achievements-section">
      <div className="container">
        <div className="achievements-grid">
          
          <motion.div 
            className="achievements-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="section-title text-primary">{data.title}</h2>
             {data.subtitle && <p className="section-subtitle">{data.subtitle}</p>}
             
             <ul className="achievements-list">
               {data.points.map((point, index) => (
                 <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                 >
                   <CheckCircle2 className="text-success achievement-icon" size={24} />
                   <span>{point}</span>
                 </motion.li>
               ))}
             </ul>
          </motion.div>

          <motion.div 
            className="achievements-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
             <div className="glass-panel text-center visual-panel">
                <span className="year-badge">{data.badge || 'Milestone'}</span>
                <h3>{data.visualTitle || 'Foundation'}</h3>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill"></div>
                </div>
                <p>{data.visualText || '100% Core Integration'}</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements2026;
