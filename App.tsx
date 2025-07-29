
import { useState } from 'react';
import Header from './components/Header';
import KeyInfo from './components/KeyInfo';
import CountdownTimer from './components/CountdownTimer';
import AccordionItem from './components/AccordionItem';
import Materials from './components/Materials';
import Methodology from './components/Methodology';
import { modules, materials } from './constants';

function App() {
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  const handleToggle = (moduleId: string) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">
        <Header />
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Temario
          </h2>
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
        </div>
        
        <CountdownTimer />
        
        <div className="mb-12">
          <KeyInfo />
        </div>
        
        <div className="mb-12">
          <Materials materials={materials} />
        </div>
        
        <div className="mb-12">
          <Methodology />
        </div>
    </div>
  );
}

export default App;