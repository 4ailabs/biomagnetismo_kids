#!/bin/bash

# Script de despliegue para Biomagnetismo Kids Workshop
# Este script automatiza el proceso de subir cambios a GitHub

echo "🚀 Iniciando proceso de despliegue..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Verificar que git está inicializado
if [ ! -d ".git" ]; then
    echo "❌ Error: Git no está inicializado. Ejecuta 'git init' primero."
    exit 1
fi

# Verificar el estado de git
echo "📋 Verificando estado de Git..."
git status

# Preguntar si continuar
read -p "¿Deseas continuar con el commit y push? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Despliegue cancelado."
    exit 1
fi

# Agregar todos los cambios
echo "📦 Agregando cambios..."
git add .

# Solicitar mensaje de commit
echo "💬 Ingresa un mensaje de commit:"
read commit_message

# Si no se ingresó mensaje, usar uno por defecto
if [ -z "$commit_message" ]; then
    commit_message="Update: Biomagnetismo Kids Workshop"
fi

# Hacer commit
echo "💾 Haciendo commit..."
git commit -m "$commit_message"

# Verificar si hay un remote configurado
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Error: No hay un remote 'origin' configurado."
    echo "Ejecuta: git remote add origin https://github.com/TU-USUARIO/biomagnetismo-kids-workshop.git"
    exit 1
fi

# Hacer push
echo "🚀 Subiendo cambios a GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue exitoso!"
    echo "🌐 Vercel desplegará automáticamente los cambios."
    echo "📱 Revisa tu dashboard de Vercel para ver el progreso."
else
    echo "❌ Error al hacer push. Verifica tu conexión y permisos."
    exit 1
fi

echo "🎉 ¡Proceso completado!" 