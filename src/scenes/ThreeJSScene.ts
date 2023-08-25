import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const createScene = (canvas: any, mapPath: string, texturePath: string) => {
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
      const normalTexture = loaderTexture.load(`normal/${mapPath}`)
      const texture = loaderTexture.load(`textures/${texturePath}`)
      loaderModel = new GLTFLoader()
      
      loaderModel.load(`models/saga--020-013.gltf`,
        gltf => {
          model = gltf.scene
          model.traverse(() => {
            model.traverse((child: any) => {
              if ((child as THREE.Mesh).isMesh) {
                const material = new THREE.MeshPhongMaterial()
                material.map = texture
                material.normalMap = normalTexture
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

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    setCanvas();
    animate();
};

export { createScene }