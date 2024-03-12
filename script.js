// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.z = 5;

// Create an object (cube)
const geometry = new THREE.BoxGeometry(2, 2, 2); // Increase dimensions to make the cube bigger
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add renderer to the HTML document
document.getElementById('container').appendChild(renderer.domElement);

// Create and position lights
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(0, 1, 0); // Position for light projecting onto top side
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(1, 0, 0); // Position for light projecting onto right side
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(0, -1, 0); // Position for light projecting onto bottom side
scene.add(light3);

// Animation loop
let isAnimating = false;

const animateCube = () => {
  if (isAnimating) {
    requestAnimationFrame(animateCube);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.02;
    renderer.render(scene, camera);
  }
};

// Function to start cube animation
const startAnimation = () => {
  isAnimating = true;
  animateCube();
};

// Function to stop cube animation
const stopAnimation = () => {
  isAnimating = false;
};

// Event listeners for buttons
document.getElementById('rotateBtn').addEventListener('click', startAnimation);
document.getElementById('stopBtn').addEventListener('click', stopAnimation);
