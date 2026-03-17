import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import './ExecutiveSummary.css';

const ExecutiveSummary = ({ data, agencyName }) => {
  return (
    <section id="summary" className="section summary-section">
      <div className="container summary-container">
        
        {/* Left Side: Images & Visuals reflecting the WorkPods proposal style */}
        <motion.div 
          className="summary-visuals"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="visual-circle-large glass-panel">
             <div className="floating-badge">
               <Rocket size={24} color="#fff" />
             </div>
             {/* Using placeholders for the specific photos they had, but framing them like the slide */}
             <div className="image-placeholder bg-blue"></div>
          </div>
          <motion.div 
            className="visual-circle-small glass-panel"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
             <div className="image-placeholder bg-gray"></div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="summary-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title summary-title">{data.title}</h2>
          
          <div className="summary-text">
            <p>{data.content}</p>
          </div>

          <div className="summary-footer">
            <span className="presented-by">Presented by {agencyName}</span>
          </div>
        </motion.div>

      </div>
      
      {/* Decorative corner lines mimicking the proposal slide */}
      <div className="decorative-lines bottom-right"></div>
    </section>
  );
};

export default ExecutiveSummary;
