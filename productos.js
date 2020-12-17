'use strict';
const productos= [{
    nombre: 'Taladro inalámbrica',
    precio:'93.500',
    marca:'Toolcraft',
    tipo: 'HerramientasElectricas',
    oferta: 'no',
    foto: 'imagenes/1.jpg'

},
{
    nombre: 'Taladro con percutor',
    precio:'27.000',
    marca:'Toolcraft',
    tipo: 'HerramientasElectricas',
    oferta: 'no',
    foto: 'imagenes/2.jpg'

},
{
    nombre: 'Lijadora de vibración',
    precio:'21.950',
    marca:'Toolcraft',
    tipo: 'HerramientasElectricas',
    oferta: 'si',
    foto: 'imagenes/lijadora.jpg'

},
{
    nombre: 'Esmeriladora',
    precio:'26.000',
    marca:'Total',
    tipo: 'HerramientasElectricas',
    oferta: 'no',
    foto: 'imagenes/esmeriladora.jpg'

},
{
    nombre: 'Mototool',
    precio:'19.950',
    marca:'Total',
    tipo: 'HerramientasElectricas',
    oferta: 'si',
    foto: 'imagenes/mototool.jpg'

},
{
    nombre: 'Mascara de soldar electrónica',
    precio:'27.200',
    marca:'Total',
    tipo: 'HerramientasElectricas',
    oferta: 'no',
    foto: 'imagenes/mascara.jpg'

},
{
    nombre: 'Pintura anticorrosiva',
    precio:'5000',
    marca:'Lanco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/Anticorrosivo-Poliuretano-GLN-rojo-478x500.png'

},
{
    nombre: 'Pintura supra',
    precio:'3500',
    marca:'Lanco',
    tipo: 'Quimicos',
    oferta: 'si',
    foto: 'imagenes/lanco supra.png'

},
{
    nombre: 'Pintura anticorrosiva',
    precio:'5000',
    marca:'Sherwin Williams',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/anticorrosivo sherwin.png'

},

{
    nombre: 'Pintura peninsular latex',
    precio:'4950',
    marca:'Sherwin Williams',
    tipo: 'Quimicos',
    oferta: 'si',
    foto: 'imagenes/peninsularLatex.png'

},
{
    nombre: 'Aguarras',
    precio:'6200',
    marca:'Quimicas Arji S.A',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/aguarras.jpeg'

},
{
    nombre: 'Canfin',
    precio:'4700',
    marca:'Quimicas Arji S.A',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/canfin.jpeg'

},
{
    nombre: 'Ácido muriático',
    precio:'2900',
    marca:'Quimicas Arji S.A',
    tipo: 'Quimicos',
    oferta: 'si',
    foto: 'imagenes/acido muriatico.jpeg'

},
{
    nombre: 'Desatorador',
    precio:'9900',
    marca:'Quimicas Arji S.A',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/desatorador.jpeg'

},

{
    nombre: 'Pegamento de contacto',
    precio:'2500',
    marca:'Quimicas Arji S.A',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/pegamento de contacto.jpeg'

},
{
    nombre: 'Concremix',
    precio:'4000',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/concremix.png'

},
{
    nombre: 'Pegamix',
    precio:'4000',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/pegamix.jpg'

},
{
    nombre: 'Pegamix',
    precio:'4000',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/pegamix.jpg'

},

{
    nombre: 'Repello fino',
    precio:'5200',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/repello fino.png'

},
{
    nombre: 'Repello grueso',
    precio:'5200',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'no',
    foto: 'imagenes/repello grueso.png'

},
{
    nombre: 'Bondex',
    precio:'3300',
    marca:'Intaco',
    tipo: 'Quimicos',
    oferta: 'si',
    foto: 'imagenes/bondex.png'

},

{
    nombre: 'Pala',
    precio:'5000',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/palas.png'

},
{
    nombre: 'Macana',
    precio:'6900',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'si',
    foto: 'imagenes/macana.jpg'

},
{
    nombre: 'Mazo',
    precio:'5000',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/mazo.png'

},
{
    nombre: 'Pico',
    precio:'10.950',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'si',
    foto: 'imagenes/pico.png'

},
{
    nombre: 'Cincel',
    precio:'1700',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/cincel.png'

},
{
    nombre: 'Cuchara albañil',
    precio:'2950',
    marca:'Bellota',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/cuchara.jpg'

},
{
    nombre: 'Martillo',
    precio:'6000',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/martillos.jpg'

},
{
    nombre: 'Espatula',
    precio:'2600',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/espatula.jpg'

},
{
    nombre: 'Alicate',
    precio:'3700',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/alicate.jpg'

},
{
    nombre: 'Alicate presión',
    precio:'4950',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/alicates de presion.jpg'

},
{
    nombre: 'Alicate punta',
    precio:'4950',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/alicate de punta.jpg'

},
{
    nombre: 'Serrucho',
    precio:'3500',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'si',
    foto: 'imagenes/serrucho.jpg'

},
{
    nombre: 'Tijeras',
    precio:'7000',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'no',
    foto: 'imagenes/tijeras.jpg'

},
{
    nombre: 'Escuadra',
    precio:'4000',
    marca:'Toolcraft',
    tipo: 'HerramientasManuales',
    oferta: 'si',
    foto: 'imagenes/escuadra.jpg'

},
{
    nombre: 'Tubo de desague',
    precio:'6400',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/tubos de desague.jpg'

},
{
    nombre: 'Tubo de presión',
    precio:'3600',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/tubos de presion.jpg'

},
{
    nombre: 'Codo',
    precio:'150-3500',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/codos.jpg'

},
{
    nombre: 'Unión',
    precio:'150-2700',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/uniones.jpg'

},
{
    nombre: 'Tee',
    precio:'200-3444',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/tee.jpg'

},
{
    nombre: 'Yee',
    precio:'1200-4500',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/yee.jpg'

},
{
    nombre: 'Reducción',
    precio:'1700-3500',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/reducciones.jpg'

},
{
    nombre: 'Gaza',
    precio:'400',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/gasa.jpg'

},
{
    nombre: 'Adaptador de registro',
    precio:'2500-5000',
    tipo: 'pvc',
    oferta: 'no',
    foto: 'imagenes/adaptador.jpg'

},



]