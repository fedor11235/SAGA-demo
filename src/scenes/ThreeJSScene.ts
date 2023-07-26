import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const createScene = (canvas: any) => {
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    // let mesh: THREE.Mesh;
    let controls: OrbitControls;
    let light: THREE.PointLight;
    let loaderModel: GLTFLoader;
    let loaderTexture: THREE.TextureLoader;
    let model: THREE.Group
    
    const setCanvas = () => {
      // Create Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color('white');

      // Camera
      camera = new THREE.PerspectiveCamera(10, 1, 1, 100);
      camera.position.z = 30;
      scene.add(camera);

      // Create Object
      loaderTexture = new THREE.TextureLoader()
      const texture = loaderTexture.load('textures/Glam_normal_map.jpg')
      loaderModel = new GLTFLoader()
      
      loaderModel.load(`saga--020-013.gltf`,
        gltf => {
          model = gltf.scene
          model.traverse(() => {
            model.traverse((child: any) => {
              if ((child as THREE.Mesh).isMesh) {
                const material = new THREE.MeshLambertMaterial({
                  map: (texture as any)
                })
                ;(child as THREE.Mesh).material = material
                ;(child as THREE.Mesh).castShadow = true
                ;(child as THREE.Mesh).receiveShadow = true
              }
            })
          })
          camera.lookAt(model.position)
          scene.add(model)
        },
      )
      // const geometry = new THREE.SphereGeometry(5, 50, 50);
      // const material = new THREE.MeshStandardMaterial({
      //   map: new THREE.TextureLoader().load("/images/earth2.jpg"),
      // });
      // mesh = new THREE.Mesh(geometry, material);
      // scene.add(mesh);

      // Lights
      light = new THREE.PointLight(0xffffff, 1);
      // light = new HemisphereLight(0xffff, 0x080820, 1);
      light.position.set(50, 50, 50);
      scene.add(light);
      camera.add(light);

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(613, 613);
      renderer.render(scene, camera);

      // Controls
      controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
    };

    // const updateCamera = () => {
    //   camera.aspect = 1;
    //   camera.updateProjectionMatrix();
    // };

    // const updateRenderer = () => {
    //   renderer.setSize(613, 613);
    //   renderer.render(scene, camera);
    // };

    // watch(aspectRatio, (val) => {
    //   if (val) {
    //     updateCamera();
    //     updateRenderer();
    //   }
    // });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    setCanvas();
    animate();
};

export { createScene }