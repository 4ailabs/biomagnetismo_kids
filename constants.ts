
import { ModuleData, MaterialData } from './types';

export const modules: ModuleData[] = [
  {
    id: 'module-1',
    icon: 'Infinity',
    title: 'MÓDULO 1 - DÍA 1',
    subtitle: '"El Inicio Invisible: Cuando la Historia Empieza Antes de Nacer"',
    content: [
      { title: 'Apertura Vivencial', points: ['Presentación del enfoque bioenergético infantil', 'Dinámica: "Mi historia antes de nacer"'] },
      { title: 'Marco Teórico', points: ['Conflictos Biológicos Fundamentales: intrauterinos, estrés de nacimiento, falta de contacto.', 'Principios del biomagnetismo en la etapa perinatal.'] },
      { title: 'Patologías de la Etapa', points: ['Enfermedades Comunes: Cólico, reflujo, ictericia, dermatitis, etc.', 'Enfermedades Exantemáticas: Citomegalovirus, herpes, rubeola congénita.', 'Pares Biomagnéticos Clave para 0-3 meses.'] },
      { title: 'Protocolos Específicos', points: ['Protocolos para cólicos, reflujo, dermatitis, ictericia.', 'Modificaciones técnicas para bebés (intensidad, posición, tiempos).'] },
      { title: 'Vivencia Terapéutica', points: ['Visualización guiada del proyecto sentido.', 'Exploración de la historia de nacimiento y emociones maternas.'] },
      { title: 'Práctica Supervisada', points: ['Aplicación de protocolos, trabajo con diagramas y casos prácticos.'] },
      { title: 'Reflexión Sistémica', description: '"No hay síntomas en el bebé que no hablen también de la madre"' }
    ]
  },
  {
    id: 'module-2',
    icon: 'Sprout',
    title: 'MÓDULO 2 - DÍA 2',
    subtitle: '"Mi Cuerpo Antes de Mis Palabras"',
    content: [
      { title: 'Marco Teórico', points: ['Conflictos Biológicos: separación, autonomía, no ser escuchado.', 'Desarrollo neurológico y formación del sistema inmunológico.'] },
      { title: 'Patologías de la Etapa', points: ['Enfermedades Comunes: Otitis, bronquitis, parasitosis, alergias.', 'Enfermedades Exantemáticas: Sarampión, varicela, escarlatina.', 'Pares Biomagnéticos Clave para 3 meses - 5 años.'] },
      { title: 'Protocolos Específicos', points: ['Protocolos para otitis, problemas respiratorios, alergias, dermatitis.', 'Técnicas de contención y manejo de niños no cooperativos.'] },
      { title: 'Vivencia Terapéutica', points: ['Círculo narrativo: "Mis primeras veces".', 'Conexión entre emociones no procesadas y síntomas.'] },
      { title: 'Práctica Supervisada', points: ['Aplicación de protocolos respiratorios y manejo de alergias.'] },
      { title: 'Reflexión Sistémica', description: '"La piel llora lo que el niño no puede expresar"' }
    ]
  },
  {
    id: 'module-3',
    icon: 'BookOpen',
    title: 'MÓDULO 3 - DÍA 3',
    subtitle: '"Aprender Sin Perderme a Mí Mismo"',
    content: [
        { title: 'Marco Teórico', points: ['Conflictos Biológicos Escolares: autoridad, pertenencia, rendimiento.', 'Impacto del sistema educativo y desarrollo de la autoestima.'] },
        { title: 'Patologías de la Etapa', points: ['Enfermedades Comunes: Asma, TDAH, bruxismo, trastornos digestivos.', 'Enfermedades Exantemáticas: Rubéola, mononucleosis.', 'Pares Biomagnéticos Clave para 6-11 años.'] },
        { title: 'Protocolos Específicos', points: ['Protocolos para TDAH, asma, trastornos digestivos, bruxismo.'] },
        { title: 'Vivencia Terapéutica', points: ['Mapeo corporal emocional: "¿Dónde me duele aprender?".', 'Exploración de la mochila emocional escolar.'] },
        { title: 'Práctica Supervisada', points: ['Aplicación de protocolos neurológicos y manejo del asma.'] },
        { title: 'Reflexión Sistémica', description: '"El niño que enferma cuando no puede ser él mismo"' }
    ]
  },
  {
    id: 'module-4',
    icon: 'Flame',
    title: 'MÓDULO 4 - DÍA 4',
    subtitle: '"El Cuerpo Que Cambia, la Identidad Que Despierta"',
    content: [
      { title: 'Marco Teórico', points: ['Conflictos Biológicos Adolescentes: identidad, lealtad familiar, sexualidad.', 'Impacto de redes sociales y cambios hormonales.'] },
      { title: 'Patologías de la Etapa', points: ['Enfermedades Comunes: Acné, dolores menstruales, ansiedad, gastritis.', 'Enfermedades Exantemáticas: Herpes, virales atípicos.', 'Pares Biomagnéticos Clave para 12-15 años.'] },
      { title: 'Protocolos Específicos', points: ['Protocolos para acné, trastornos menstruales, ansiedad, sueño.'] },
      { title: 'Vivencia Terapéutica', points: ['Diálogo interno: "Mi cuerpo, mi historia, mi derecho a cambiar".', 'Ejercicio de escritura y reconocimiento de conflictos.'] },
      { title: 'Integración Final y Cierre', points: ['Entrega de protocolos, tablas y diagramas completos.', 'Síntesis de conflictos, síntomas y microorganismos.', 'Reflexión sistémica final y entrega de certificados.'] }
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