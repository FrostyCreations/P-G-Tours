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
          {/* Decorative thin circular ring */}
          <div className="visual-ring"></div>
          
          {/* Primary square image container */}
          <div className="visual-square">
             <div className="floating-badge">
               <Rocket size={18} color="#fff" />
             </div>
             {data.image1 ? (
               <img src={data.image1} alt="Introduction Visual" className="intro-image-main" />
             ) : (
               <div className="image-placeholder bg-light-gray"></div>
             )}
          </div>
          
          {/* Secondary circular image overlapping */}
          <motion.div 
            className="visual-circle-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
             {data.image2 ? (
               <img src={data.image2} alt="Introduction Detail" className="intro-image-accent" />
             ) : (
               <div className="placeholder-inner-square bg-gray-solid"></div>
             )}
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="summary-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // Stagger effect for children elements
              }
            }
          }}
        >
          <motion.h2 
            className="section-title summary-title"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            {data.title}
          </motion.h2>
          
          <motion.div 
            className="summary-text"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <p>{data.content}</p>
          </motion.div>

          <motion.div 
            className="summary-footer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <span className="presented-by">Presented by {agencyName}</span>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Decorative corner lines mimicking the proposal slide */}
      <div className="decorative-lines bottom-right"></div>
    </section>
  );
};

export default ExecutiveSummary;
