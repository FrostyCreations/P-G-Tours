import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import './Projects.css';

const Projects2026 = ({ data }) => {
  return (
    <section className="section projects-section">
      <div className="container">
         <motion.div 
           className="projects-header text-center"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <div className="icon-wrapper-center">
             <Lightbulb size={32} />
           </div>
           <h2 className="section-title text-primary">{data.title}</h2>
           {data.subtitle && <p className="proj-subtitle">{data.subtitle}</p>}
         </motion.div>
         
         <div className="projects-grid">
           {data.projects.map((proj, i) => (
             <motion.div 
               key={i}
               className="proj-card"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
             >
               <div className="proj-card-inner">
                 <h3 className="proj-title">{proj.name}</h3>
                 <p className="proj-desc">{proj.description}</p>
                 <div className="proj-line"></div>
               </div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Projects2026;
