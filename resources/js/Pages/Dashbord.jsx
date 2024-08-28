import React, { useState } from 'react';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('informations');

  const renderContent = () => {
    switch (activeSection) {
      case 'informations':
        return (
          <div className="bg-slate-400 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Mes Informations</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quibusdam quaerat perspiciatis nesciunt dolorem ducimus accusantium voluptas mollitia voluptatibus voluptates!</p>
          </div>
        );
      case 'ajouterOeuvre':
        return (
          <div className="bg-slate-400 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Ajouter une Oeuvre</h2>
            <p>Formulaire d'ajout d'une oeuvre artistique.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex p-10">
      <div className="flex flex-col w-1/4 space-y-2 bg-slate-400 h-screen">
        <ul className="decoration-none">
          <li className="hover:bg-orange-900">
            <button
              onClick={() => setActiveSection('informations')}
              className="w-full text-left px-4 py-2"
            >
              Mes informations
            </button>
          </li>
          <li className="hover:bg-orange-900">
            <button
              onClick={() => setActiveSection('ajouterOeuvre')}
              className="w-full text-left px-4 py-2"
            >
              Ajouter une oeuvre
            </button>
          </li>
        </ul>
      </div>
      <div className="h-screen bg-red-300">
        {renderContent()}
      </div>
    </div>
  );
}
