
import { ModuleData, MaterialData } from './types';

export const modules: ModuleData[] = [
  {
    id: 'module-1',
    icon: 'Infinity',
    title: 'MÓDULO 1 - DÍA 1',
    subtitle: '"El Inicio Invisible: Cuando la Historia Empieza Antes de Nacer"',
    content: [
      { 
        title: 'Apertura Vivencial', 
        items: [
          { title: 'Presentación del enfoque bioenergético infantil' },
          { title: 'Dinámica: "Mi historia antes de nacer"' }
        ]
      },
      { 
        title: 'Marco Teórico', 
        items: [
          { title: 'Conflictos Biológicos Fundamentales: intrauterinos, estrés de nacimiento, falta de contacto.' },
          { title: 'Principios del biomagnetismo en la etapa perinatal.' }
        ]
      },
      { 
        title: 'Patologías de la Etapa', 
        items: [
          { title: 'Enfermedades Comunes: Cólico, reflujo, ictericia, dermatitis, etc.' },
          { title: 'Enfermedades Exantemáticas: Citomegalovirus, herpes, rubeola congénita.' },
          { title: 'Pares Biomagnéticos Clave para 0-3 meses.' }
        ]
      },
      { 
        title: 'Protocolos Específicos', 
        items: [
          { title: 'Protocolos para cólicos, reflujo, dermatitis, ictericia.' },
          { title: 'Modificaciones técnicas para bebés (intensidad, posición, tiempos).' }
        ]
      },
      { 
        title: 'Vivencia Terapéutica', 
        items: [
          { title: 'Visualización guiada del proyecto sentido.' },
          { title: 'Exploración de la historia de nacimiento y emociones maternas.' }
        ]
      },
      { 
        title: 'Práctica Supervisada', 
        items: [
          { title: 'Aplicación de protocolos, trabajo con diagramas y casos prácticos.' }
        ]
      },
      { 
        title: 'Reflexión Sistémica', 
        items: [
          { title: '"No hay síntomas en el bebé que no hablen también de la madre"', description: 'Reflexión sobre la conexión madre-bebé' }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    icon: 'Sprout',
    title: 'MÓDULO 2 - DÍA 2',
    subtitle: '"Mi Cuerpo Antes de Mis Palabras"',
    content: [
      { 
        title: 'Marco Teórico', 
        items: [
          { title: 'Conflictos Biológicos: separación, autonomía, no ser escuchado.' },
          { title: 'Desarrollo neurológico y formación del sistema inmunológico.' }
        ]
      },
      { 
        title: 'Patologías de la Etapa', 
        items: [
          { title: 'Enfermedades Comunes: Otitis, bronquitis, parasitosis, alergias.' },
          { title: 'Enfermedades Exantemáticas: Sarampión, varicela, escarlatina.' },
          { title: 'Pares Biomagnéticos Clave para 3 meses - 5 años.' }
        ]
      },
      { 
        title: 'Protocolos Específicos', 
        items: [
          { title: 'Protocolos para otitis, problemas respiratorios, alergias, dermatitis.' },
          { title: 'Técnicas de contención y manejo de niños no cooperativos.' }
        ]
      },
      { 
        title: 'Vivencia Terapéutica', 
        items: [
          { title: 'Círculo narrativo: "Mis primeras veces".' },
          { title: 'Conexión entre emociones no procesadas y síntomas.' }
        ]
      },
      { 
        title: 'Práctica Supervisada', 
        items: [
          { title: 'Aplicación de protocolos respiratorios y manejo de alergias.' }
        ]
      },
      { 
        title: 'Reflexión Sistémica', 
        items: [
          { title: '"La piel llora lo que el niño no puede expresar"', description: 'Reflexión sobre la expresión corporal' }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    icon: 'BookOpen',
    title: 'MÓDULO 3 - DÍA 3',
    subtitle: '"Aprender Sin Perderme a Mí Mismo"',
    content: [
      { 
        title: 'Marco Teórico', 
        items: [
          { title: 'Conflictos Biológicos Escolares: autoridad, pertenencia, rendimiento.' },
          { title: 'Impacto del sistema educativo y desarrollo de la autoestima.' }
        ]
      },
      { 
        title: 'Patologías de la Etapa', 
        items: [
          { title: 'Enfermedades Comunes: Asma, TDAH, bruxismo, trastornos digestivos.' },
          { title: 'Enfermedades Exantemáticas: Rubéola, mononucleosis.' },
          { title: 'Pares Biomagnéticos Clave para 6-11 años.' }
        ]
      },
      { 
        title: 'Protocolos Específicos', 
        items: [
          { title: 'Protocolos para TDAH, asma, trastornos digestivos, bruxismo.' }
        ]
      },
      { 
        title: 'Vivencia Terapéutica', 
        items: [
          { title: 'Mapeo corporal emocional: "¿Dónde me duele aprender?".' },
          { title: 'Exploración de la mochila emocional escolar.' }
        ]
      },
      { 
        title: 'Práctica Supervisada', 
        items: [
          { title: 'Aplicación de protocolos neurológicos y manejo del asma.' }
        ]
      },
      { 
        title: 'Reflexión Sistémica', 
        items: [
          { title: '"El niño que enferma cuando no puede ser él mismo"', description: 'Reflexión sobre la autenticidad' }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    icon: 'Flame',
    title: 'MÓDULO 4 - DÍA 4',
    subtitle: '"El Cuerpo Que Cambia, la Identidad Que Despierta"',
    content: [
      { 
        title: 'Marco Teórico', 
        items: [
          { title: 'Conflictos Biológicos Adolescentes: identidad, lealtad familiar, sexualidad.' },
          { title: 'Impacto de redes sociales y cambios hormonales.' }
        ]
      },
      { 
        title: 'Patologías de la Etapa', 
        items: [
          { title: 'Enfermedades Comunes: Acné, dolores menstruales, ansiedad, gastritis.' },
          { title: 'Enfermedades Exantemáticas: Herpes, virales atípicos.' },
          { title: 'Pares Biomagnéticos Clave para 12-15 años.' }
        ]
      },
      { 
        title: 'Protocolos Específicos', 
        items: [
          { title: 'Protocolos para acné, trastornos menstruales, ansiedad, sueño.' }
        ]
      },
      { 
        title: 'Vivencia Terapéutica', 
        items: [
          { title: 'Diálogo interno: "Mi cuerpo, mi historia, mi derecho a cambiar".' },
          { title: 'Ejercicio de escritura y reconocimiento de conflictos.' }
        ]
      },
      { 
        title: 'Integración Final y Cierre', 
        items: [
          { title: 'Entrega de protocolos, tablas y diagramas completos.' },
          { title: 'Síntesis de conflictos, síntomas y microorganismos.' },
          { title: 'Reflexión sistémica final y entrega de certificados.' }
        ]
      }
    ]
  }
];

export const materials: MaterialData[] = [
    { icon: 'ClipboardList', title: 'Cuaderno del Terapeuta', description: 'Mapas de conflictos, protocolos completos, pares clave y diagramas anatómicos.' },
    { icon: 'BarChart3', title: 'Tabla de Trabajo Integrada', description: 'Relaciona conflictos, síntomas, pares, microorganismos y protocolos.' },
    { icon: 'Map', title: 'Diagramas de Ubicación Anatómica', description: 'Mapas corporales y guías visuales para colocar imanes por edad.' },
    { icon: 'Virus', title: 'Panel Visual de Exantemáticas', description: 'Características, conflictos asociados y pares específicos para cada exantema.' },
    { icon: 'NotebookPen', title: 'Hojas de Trabajo Vivencial', description: 'Plantillas para mapeo corporal, guías de visualización y más.' },
    { icon: 'Wrench', title: '16 Protocolos Específicos', description: 'Completos, paso a paso, con tablas y diagramas de aplicación.' }
];