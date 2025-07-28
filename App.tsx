
import { useState } from 'react';
import { modules, materials } from './constants';
import Header from './components/Header';
import KeyInfo from './components/KeyInfo';
import AccordionItem from './components/AccordionItem';
import Materials from './components/Materials';
import Methodology from './components/Methodology';

function App() {
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  const handleToggle = (moduleId: string) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">
        <Header />
        <KeyInfo />
        
        <div id="modules-accordion" className="space-y-4">
            {modules.map((module, index) => (
            <AccordionItem
                key={module.id}
                module={module}
                isOpen={openModuleId === module.id}
                onClick={() => handleToggle(module.id)}
                index={index}
            />
            ))}
        </div>
        
        <Materials materials={materials} />
        <Methodology />
    </div>
  );
}

export default App;