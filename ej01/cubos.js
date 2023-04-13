var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -2.2;
camera.position.y = 3;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

/*var geometry = new THREE.ConeGeometry(1, 3, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)
cone.position.y = 1.5*/

//  CREACIÓN DEL CUBO


var lado = 1

var geometriaz = [];

var materials = [];

var cuboz = [];

Color = [{color:0xFF0000},{color:0x00FF00},{color:0x0000FF}];   //COLORES


for (let i = 0; i < 3; i++) {
        geometriaz.push(new THREE.BoxGeometry(lado, lado, lado));  //FOR PARA LA CREACION DE CUBOS
				materials.push(new THREE.MeshToonMaterial(Color[i]));  
				cuboz.push(new THREE.Mesh(geometriaz[i], materials[i]));  

			
      
}

/*geometriaz[0].translate( lado/2,  lado/2, lado/2);
                                                          //TRASLACION Y ESCALADO DEL CUBO1, CUBO2 Y CUBO3
geometriaz[1].scale(1/2,  1/2, 1/2);
 
geometriaz[1].translate(lado/2,  lado+lado/4, lado/2);

geometriaz[2].scale(1/4,  1/4, 1/4);                                               

geometriaz[2].translate(lado/2,  lado+lado/2+lado/8, lado/2); */

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {

    case 96:  //SE USA LA TECLA NUMERO 0 PARA QUE APAREZCA EL CUBO
    for (i=0; i<3; i++) {
      scene.add(cuboz[i]);
    }
    break;

    case 97:    //TECLA NUMERO 1 PARA MOSTRAR PRIMER CUBO
     
      geometriaz[0].translate( lado/2,  lado/2, lado/2);

      break;

      case 98:    //TECLA NUMERO 2 PARA MOSTRAR SEGUNDO CUBO
        geometriaz[1].scale(1/2,  1/2, 1/2);
 
        geometriaz[1].translate(lado/2,  lado+lado/4, lado/2);

        break;

        case 99:   // TECLA NUMERO 3 PARA MOSTRAR TERCER CUBO
          geometriaz[2].scale(1/4,  1/4, 1/4);                                               

          geometriaz[2].translate(lado/2,  lado+lado/2+lado/8, lado/2);

          break;
       
           case 100:  // TECLA NUMERO 4 PARA VACIAR EL ESCENARIO

           this.location.reload();

            
           break;
   
      
  }
});

  //animation
        var animate = function(){
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

var arrowSize = 2; // Tamaño flecha eje
    var origin = new THREE.Vector3(0, 0, 0); // Definir origen
    var x = new THREE.Vector3(1, 0, 0); // vector unitario en X
    var y = new THREE.Vector3(0, 1, 0); // Vector unitario en Y
    var z = new THREE.Vector3(0, 0, 1); // Vector unitario en Z
    var colorR = new THREE.Color(0xAA0000); // Color Rojo - Red
    var colorG = new THREE.Color(0x00AA00); // Color Verde - Green
     var colorB = new THREE.Color(0x0000AA); // Color Azul -Blue

    // Ejes X, Y, Z
    var arrowX = new THREE.ArrowHelper(x, origin, arrowSize, colorR); // Creación flecha en eje X
    var arrowY = new THREE.ArrowHelper(y, origin, arrowSize, colorG); // Creación flecha en eje Y
    var arrowZ = new THREE.ArrowHelper(z, origin, arrowSize, colorB); // Creación flecha en eje Z

     scene.add(arrowX); // Agregar flecha eje X
      scene.add(arrowY); // Agregar flecha eje Y
     scene.add(arrowZ); // Agregar flecha eje Z

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();