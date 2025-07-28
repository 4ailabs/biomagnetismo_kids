# 🚀 Guía de Despliegue - Biomagnetismo Kids Workshop

Esta guía te ayudará a desplegar la aplicación en GitHub y Vercel paso a paso.

## 📋 Prerrequisitos

- ✅ Cuenta de GitHub
- ✅ Cuenta de Vercel (gratuita)
- ✅ Node.js instalado localmente (versión 18+)

## 🔄 Paso 1: Preparar el Repositorio en GitHub

### 1.1 Crear un nuevo repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `biomagnetismo-kids-workshop`
   - **Description**: `Taller especializado de Biomagnetismo para el desarrollo infantil`
   - **Visibility**: Public (recomendado) o Private
   - **No inicializar** con README (ya tenemos uno)

### 1.2 Subir el código a GitHub

```bash
# En tu terminal, desde la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: Biomagnetismo Kids Workshop"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU-USUARIO/biomagnetismo-kids-workshop.git
git branch -M main
git push -u origin main
```

## 🌐 Paso 2: Desplegar en Vercel

### 2.1 Conectar con Vercel

1. Ve a [Vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"New Project"**
4. Selecciona tu repositorio `biomagnetismo-kids-workshop`

### 2.2 Configurar el proyecto

Vercel detectará automáticamente que es una aplicación de Vite. La configuración será:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.3 Variables de entorno (si las necesitas)

Si en el futuro agregas variables de entorno:
1. En la configuración del proyecto en Vercel
2. Ve a **Settings** → **Environment Variables**
3. Agrega las variables necesarias

### 2.4 Desplegar

1. Haz clic en **"Deploy"**
2. Vercel construirá y desplegará tu aplicación
3. Obtendrás una URL como: `https://biomagnetismo-kids-workshop-xxxx.vercel.app`

## 🔧 Paso 3: Configuración Adicional

### 3.1 Dominio personalizado (opcional)

Si quieres un dominio personalizado:
1. En Vercel, ve a **Settings** → **Domains**
2. Agrega tu dominio
3. Configura los DNS según las instrucciones de Vercel

### 3.2 Configuración de SEO

La aplicación ya incluye:
- ✅ Meta tags para SEO
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Card tags
- ✅ Título y descripción optimizados

### 3.3 Actualizaciones automáticas

Cada vez que hagas push a la rama `main` en GitHub, Vercel desplegará automáticamente los cambios.

## 📱 Paso 4: Verificar el Despliegue

### 4.1 Checklist de verificación

- ✅ [ ] La aplicación carga correctamente
- ✅ [ ] Todos los componentes se muestran
- ✅ [ ] Los iconos se cargan
- ✅ [ ] El diseño es responsive
- ✅ [ ] Los enlaces funcionan
- ✅ [ ] El SEO está configurado

### 4.2 Pruebas recomendadas

1. **Desktop**: Verifica en diferentes navegadores
2. **Mobile**: Prueba en dispositivos móviles
3. **Performance**: Usa Lighthouse para medir rendimiento
4. **SEO**: Verifica con herramientas de SEO

## 🔄 Paso 5: Mantenimiento

### 5.1 Actualizaciones

Para actualizar la aplicación:
```bash
# Hacer cambios localmente
git add .
git commit -m "Descripción de los cambios"
git push origin main
# Vercel desplegará automáticamente
```

### 5.2 Monitoreo

- Revisa los logs en Vercel Dashboard
- Monitorea el rendimiento con Vercel Analytics
- Verifica que las builds sean exitosas

## 🆘 Solución de Problemas

### Problema: Build falla en Vercel
**Solución**: 
- Verifica que `npm run build` funcione localmente
- Revisa los logs de build en Vercel
- Asegúrate de que todas las dependencias estén en `package.json`

### Problema: Estilos no se cargan
**Solución**:
- Verifica que Tailwind CSS esté configurado correctamente
- Asegúrate de que `index.css` esté incluido en `index.html`

### Problema: Iconos no se muestran
**Solución**:
- Verifica que `lucide-react` esté instalado
- Asegúrate de que los iconos estén importados correctamente

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Verifica la documentación de Vercel
3. Consulta la documentación de Vite
4. Revisa los issues en GitHub

---

**¡Tu aplicación de Biomagnetismo Kids Workshop estará lista para el mundo! 🌍** 