let scene, camera, renderer, cube;
function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70, window.innerWidth / window.innerHeight, 0.1, 100);
  
  renderer = new THREE.WebGLRenderer({antialias: true});
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  //정육면체 도형 만들기
  const geometry = new THREE.BoxGeometry(1,1,1);
  //color로 색입히기
  // const material = new THREE.MeshBasicMaterial({color:0x0000ff});
  
  //텍스쳐를 추가
  const texture = new THREE.TextureLoader().load('textures/crate.gif');
  const material = new THREE.MeshBasicMaterial({map:texture});
  
  cube = new THREE.Mesh(geometry, material);
  
  scene.add(cube);
  
  camera.position.z = 5;
  
}


function animate(){
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onwindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onwindowResize,false);

init();
animate();


