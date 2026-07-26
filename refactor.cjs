const fs = require('fs');
const path = require('path');

const dirs = [
  'src/sections',
  'src/components/layout',
  'src/features/wizard'
];

const orbSections = [
  'ProjectsSection.tsx',
  'SolutionsSection.tsx',
  'ProcessSection.tsx',
  'AboutSection.tsx',
  'DifferentialsSection.tsx',
  'CTAWizardSection.tsx'
];

const colorMap = {
  'text-blue-950': 'text-slate-900',
  'text-blue-900': 'text-slate-800',
  'text-blue-800': 'text-slate-700',
  'text-blue-700': 'text-slate-600',
  'text-blue-600': 'text-slate-500',
  'text-blue-400': 'text-sky-500',
  'text-blue-300': 'text-slate-400',
  'border-blue-200': 'border-slate-200',
  'border-blue-100': 'border-slate-200',
  'border-blue-500/30': 'border-slate-500/30',
  'shadow-blue-500/5': 'shadow-slate-500/5',
  'shadow-blue-500/30': 'shadow-slate-500/30',
  'bg-blue-50': 'bg-[#f8fafc]'
};

function processFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf-8');

  // Text Colors & Basic maps
  for (const [key, value] of Object.entries(colorMap)) {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    content = content.replace(regex, value);
  }

  // Backgrounds for <section> specifically
  content = content.replace(/(<section[^>]*className="[^"]*?)\bbg-white\b([^"]*")/g, '$1bg-[#f8fafc]$2');

  // Replace card-surface with glass-panel
  content = content.replace(/\bcard-surface\b/g, 'glass-panel');

  // Find all classNames and process them for glass-panel rule
  content = content.replace(/className="([^"]+)"/g, (match, classList) => {
    let classes = classList.split(/\s+/);
    
    // Check if this should be a glass panel
    // "ANY card, container, or grid item that had bg-white or bg-blue-100 or card-surface MUST NOW use the class glass-panel."
    // A bit hard to know what is a "card, container, or grid item". 
    // We already replaced card-surface with glass-panel.
    // If it has glass-panel, remove bg-white and bg-blue-*
    if (classes.includes('glass-panel') || classes.includes('bg-white') || classes.includes('bg-blue-100') || classes.includes('bg-blue-50')) {
      // If it looks like a card/container, let's just make it glass-panel.
      // Easiest is to add glass-panel if it had bg-white or bg-blue-100 and it's a structural div.
      // To be safe, if we find 'glass-panel' we remove bg-white, bg-blue-100.
      if (classes.includes('glass-panel')) {
         classes = classes.filter(c => !c.startsWith('bg-white') && !c.startsWith('bg-blue-'));
      }
    }
    return `className="${classes.join(' ')}"`;
  });

  // Second pass: manual fix for bg-blue-100 and bg-white in glass-panel
  content = content.replace(/className="([^"]*glass-panel[^"]*)"/g, (match, p1) => {
    let c = p1.replace(/\bbg-white\b/g, '').replace(/\bbg-blue-\d+(?:\/\d+)?\b/g, '').replace(/\s+/g, ' ').trim();
    return `className="${c}"`;
  });

  // Ensure 'glass-panel' is added where bg-white or bg-blue-100 was used as a card background?
  // Let's just manually replace bg-blue-100 with glass-panel in the icon containers too, wait no, icon containers might just need to be glass-panel or simple bg. Let's replace bg-blue-100 with bg-slate-100 for non-glass elements.
  content = content.replace(/\bbg-blue-100\b/g, 'bg-slate-100');
  content = content.replace(/\bbg-blue-900\b/g, 'bg-slate-800');
  content = content.replace(/\bbg-blue-950\b/g, 'bg-slate-900');
  content = content.replace(/\bbg-blue-600\b/g, 'bg-slate-500');

  // Aurora Orbs
  const basename = path.basename(filepath);
  if (orbSections.includes(basename)) {
    const sectionMatch = content.match(/<section[^>]*>/);
    if (sectionMatch) {
      let sectionStr = sectionMatch[0];
      if (!sectionStr.includes('overflow-hidden')) {
        sectionStr = sectionStr.replace(/className="/, 'className="overflow-hidden ');
      }
      if (!sectionStr.includes('relative')) {
        sectionStr = sectionStr.replace(/className="/, 'className="relative ');
      }
      
      // Check if already has orbs
      if (!content.includes('aurora-orb-1')) {
        content = content.replace(sectionMatch[0], `${sectionStr}\n      <div className="aurora-orb-1 top-0 left-[-10%]"></div>\n      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>`);
      }
    }
  }

  fs.writeFileSync(filepath, content, 'utf-8');
}

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath);
    } else if (stats.isFile() && filepath.endsWith('.tsx')) {
      if (!filepath.includes('HeroSection.tsx')) {
        processFile(filepath);
      }
    }
  });
}

dirs.forEach(dir => {
  const absDir = path.resolve('c:/Users/Matheus/OneDrive/Área de Trabalho/portfolio', dir);
  if (fs.existsSync(absDir)) {
    walkSync(absDir);
  }
});

console.log('Refactor complete.');
