import { motion } from 'framer-motion';
import './AboutCompany.css';

const AboutCompany = ({ data }) => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-grid">
          
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="members-grid">
              <div className="accent-square"></div>
              <div className="member member-1">
                <img src={data.member1Image} alt={data.member1Name} />
                <span>{data.member1Name.split(' ').map((line, i) => <div key={i}>{line}</div>)}</span>
              </div>
              <div className="member member-2">
                <img src={data.member2Image} alt={data.member2Name} />
                <span>{data.member2Name.split(' ').map((line, i) => <div key={i}>{line}</div>)}</span>
              </div>
            </div>
            <div className="vertical-divider"></div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title about-title">{data.title}</h2>
            <div className="about-text">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {data.footerText && <p className="about-footer">{data.footerText}</p>}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
