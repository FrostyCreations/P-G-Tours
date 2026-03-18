import { createContext, useContext, useState, useEffect } from 'react';
import { proposalData as baseData } from '../data/proposalData';

const EditorContext = createContext(null);

function deepMerge(base, overrides) {
  if (!overrides) return base;
  const result = { ...base };
  for (const key of Object.keys(overrides)) {
    if (
      typeof result[key] === 'object' &&
      result[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = deepMerge(result[key], overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

export function EditorProvider({ children }) {
  const [overrides, setOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('proposalEditorOverrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const data = {
    ...baseData,
    client: deepMerge(baseData.client, overrides.client),
    hero: deepMerge(baseData.hero, overrides.hero),
    sections: baseData.sections.map((section, i) => ({
      ...section,
      data: deepMerge(section.data, overrides.sections?.[i]?.data),
    })),
  };

  useEffect(() => {
    localStorage.setItem('proposalEditorOverrides', JSON.stringify(overrides));
  }, [overrides]);

  const updateField = (path, value) => {
    setOverrides(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let obj = next;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (obj[key] === undefined || obj[key] === null) {
          obj[key] = typeof path[i + 1] === 'number' ? [] : {};
        }
        obj = obj[key];
      }
      obj[path[path.length - 1]] = value;
      return next;
    });
  };

  const resetAll = () => {
    setOverrides({});
    localStorage.removeItem('proposalEditorOverrides');
  };

  return (
    <EditorContext.Provider value={{ data, overrides, updateField, resetAll, baseData }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  return useContext(EditorContext);
}
