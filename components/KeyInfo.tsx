
import React from 'react';
import { Calendar, Clock, Monitor, DollarSign, MessageCircle } from 'lucide-react';

const KeyInfo: React.FC = () => {
  return (
    <div className="card">
      <div className="badge">¡Espacios limitados!</div>
      
      <div className="info-grid">
        <div className="info-item">
          <Calendar className="icon" />
          <div>
            <h3>Fechas</h3>
            <p>Sábados 2, 16, 30 de Agosto y 6 de Septiembre</p>
          </div>
        </div>
        
        <div className="info-item">
          <Clock className="icon" />
          <div>
            <h3>Horario</h3>
            <p>10:00 a.m. a 6:00 p.m.</p>
          </div>
        </div>
        
        <div className="info-item">
          <Monitor className="icon" />
          <div>
            <h3>Modalidad</h3>
            <p>Online</p>
          </div>
        </div>
        
        <div className="info-item">
          <DollarSign className="icon" />
          <div>
            <h3>Inversión</h3>
            <p>$1,200.00 MXN por clase</p>
            <div className="discount-badge">
              ¡15% de descuento al pagar las 4 clases!
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact">
        <h3>Para más información:</h3>
        <a href="https://wa.me/+525579076626" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
          WhatsApp: +52 55 7907 6626
        </a>
      </div>
    </div>
  );
};

export default KeyInfo;