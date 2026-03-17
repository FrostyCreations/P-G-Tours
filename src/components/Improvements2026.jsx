import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Improvements.css';

const Improvements2026 = ({ data }) => {
  return (
    <section className="section improvements-section">
      <div className="container">
         <motion.div 
           className="improv-header"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="section-title text-white">{data.title}</h2>
           <p className="improv-subtitle">Identifying key friction points and specific optimization opportunities to unlock maximum velocity.</p>
         </motion.div>
         
         <div className="improv-grid">
           {data.points.map((point, i) => (
             <motion.div 
               key={i}
               className="improv-card"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
             >
               <div className="improv-content">
                 <div className="improv-number">{`0${i + 1}`}</div>
                 <p className="improv-text">{point}</p>
               </div>
               <div className="improv-icon"><ArrowUpRight size={24} /></div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Improvements2026;
