import { useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, RotateCcw, ChevronDown, ChevronRight } from 'lucide-react';
import App from '../App';
import './Editor.css';

const EDITABLE_FIELDS = {
  title: { label: 'Title', type: 'input' },
  subtitle: { label: 'Subtitle', type: 'input' },
  badge: { label: 'Badge Text', type: 'input' },
  eyebrow: { label: 'Eyebrow Label', type: 'input' },
  description: { label: 'Description', type: 'textarea' },
  content: { label: 'Content', type: 'textarea' },
  price: { label: 'Price', type: 'input' },
  quoteUrl: { label: 'Quote URL', type: 'input' },
  thankYou: { label: 'Body Text', type: 'textarea' },
  buttonText: { label: 'Button Text', type: 'input' },
  visualTitle: { label: 'Visual Title', type: 'input' },
  visualText: { label: 'Visual Text', type: 'input' },
  paddingTop: { label: 'Padding Top (px)', type: 'input' },
  paddingBottom: { label: 'Padding Bottom (px)', type: 'input' },
  paddingLeft: { label: 'Padding Left (px)', type: 'input' },
  paddingRight: { label: 'Padding Right (px)', type: 'input' },
  lineHeight: { label: 'Line Height', type: 'input' },
  splitRatio: { label: 'Text Width % (e.g. 50)', type: 'input' },
};

function SectionEditor({ section, index }) {
  const { updateField } = useEditor();
  const [open, setOpen] = useState(false);

  const sectionKeys = Object.keys(section.data);
  const standardKeys = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'lineHeight', 'splitRatio'];
  const editableKeys = [...new Set([...sectionKeys.filter(k => EDITABLE_FIELDS[k]), ...standardKeys])];

  if (editableKeys.length === 0) return null;

  return (
    <div className="editor-section">
      <button className="editor-section-header" onClick={() => setOpen(o => !o)}>
        <span className="editor-section-label">
          {section.data.eyebrow || section.data.title || section.type}
        </span>
        <span className="editor-section-type">{section.type}</span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {open && (
        <div className="editor-section-body">
          {editableKeys.map(key => {
            const field = EDITABLE_FIELDS[key];
            return (
              <div className="editor-field" key={key}>
                <label className="editor-label">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="editor-textarea"
                    value={section.data[key] || ''}
                    rows={4}
                    onChange={e => updateField(['sections', index, 'data', key], e.target.value)}
                  />
                ) : (
                  <input
                    className="editor-input"
                    type="text"
                    value={section.data[key] || ''}
                    onChange={e => updateField(['sections', index, 'data', key], e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function generateExport(data) {
  const sectionsStr = data.sections.map(s => {
    const dataStr = Object.entries(s.data)
      .map(([k, v]) => {
        if (typeof v === 'string') return `        ${k}: ${JSON.stringify(v)}`;
        if (Array.isArray(v)) return `        ${k}: ${JSON.stringify(v, null, 8)}`;
        return `        ${k}: ${JSON.stringify(v)}`;
      })
      .join(',\n');
    return `    {\n      type: '${s.type}',\n      id: '${s.id}',\n      data: {\n${dataStr}\n      }\n    }`;
  }).join(',\n');

  return `// proposalData.js — exported from editor
import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';
import logoImg from '../assets/PG Tour.png';

export const proposalData = {
  client: ${JSON.stringify(data.client, null, 4)},
  agency: ${JSON.stringify(data.agency, null, 4)},
  hero: ${JSON.stringify(data.hero, null, 4)},
  sections: [\n${sectionsStr}\n  ]\n};\n`;
}

export default function EditorPage() {
  const { data, updateField, resetAll } = useEditor();
  const [copied, setCopied] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const exportCode = generateExport(data);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="editor-page">
      {/* Sidebar */}
      <aside className="editor-sidebar">
        <div className="editor-sidebar-header">
          <Link to="/" className="editor-back-btn">
            <ArrowLeft size={16} /> View Proposal
          </Link>
          <h1 className="editor-title">Content Editor</h1>
          <p className="editor-subtitle">Click a section to expand and edit its text.</p>
        </div>

        <div className="editor-global">
          <h2 className="editor-group-title">General</h2>
          <div className="editor-field">
            <label className="editor-label">Client Name</label>
            <input className="editor-input" type="text" value={data.client.name || ''}
              onChange={e => updateField(['client', 'name'], e.target.value)} />
          </div>
          <div className="editor-field">
            <label className="editor-label">Hero Badge</label>
            <input className="editor-input" type="text" value={data.hero.badge || ''}
              onChange={e => updateField(['hero', 'badge'], e.target.value)} />
          </div>
          <div className="editor-field">
            <label className="editor-label">Hero Title</label>
            <input className="editor-input" type="text" value={data.hero.title || ''}
              onChange={e => updateField(['hero', 'title'], e.target.value)} />
          </div>
          <div className="editor-field">
            <label className="editor-label">Hero Subtitle</label>
            <textarea className="editor-textarea" rows={2} value={data.hero.subtitle || ''}
              onChange={e => updateField(['hero', 'subtitle'], e.target.value)} />
          </div>
        </div>

        <div className="editor-sections-list">
          <h2 className="editor-group-title">Sections</h2>
          {data.sections.map((section, i) => (
            <SectionEditor key={section.id || i} section={section} index={i} />
          ))}
        </div>

        <div className="editor-actions">
          <button className="editor-btn-reset" onClick={() => { if (confirm('Reset ALL edits to original?')) resetAll(); }}>
            <RotateCcw size={14} /> Reset All
          </button>
          <button className="editor-btn-export" onClick={() => setShowExport(true)}>
            <Download size={14} /> Export Data
          </button>
        </div>
      </aside>

      {/* Live Preview */}
      <main className="editor-preview">
        <div className="editor-preview-bar">
          <span className="editor-preview-label">Live Preview</span>
          <span className="editor-preview-hint">Changes apply instantly</span>
        </div>
        <div className="editor-preview-content">
          <App hideEditButton={true} />
        </div>
      </main>

      {/* Export Modal */}
      {showExport && (
        <div className="editor-modal-overlay" onClick={() => setShowExport(false)}>
          <div className="editor-modal" onClick={e => e.stopPropagation()}>
            <h2 className="editor-modal-title">Export proposalData.js</h2>
            <p className="editor-modal-hint">Copy this code and paste it into <code>src/data/proposalData.js</code> to save your changes permanently.</p>
            <pre className="editor-modal-code">{exportCode}</pre>
            <div className="editor-modal-actions">
              <button className="editor-btn-export" onClick={handleCopy}>
                {copied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
              <button className="editor-btn-reset" onClick={() => setShowExport(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
