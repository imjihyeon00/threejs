let scene, camera, renderer, line;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight, 1, 500);

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    points.push(new THREE.Vector3(15, 10, 0));
    points.push(new THREE.Vector3(20, 0, 0));
    points.push(new THREE.Vector3(30, 0, 0));
    points.push(new THREE.Vector3(20, -10, 0));
    points.push(new THREE.Vector3(25, -20, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: 0x0000ff,
        linewidth: 3,
        linecap: 'round', //ignored by WebGLRenderer
        linejoin: 'round' //ignored by WebGLRenderer
    });
    line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);

    camera.position.z = 5;

}


function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onwindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onwindowResize, false);

init();