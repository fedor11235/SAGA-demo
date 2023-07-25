import { Engine, Scene, ArcRotateCamera, SceneLoader, Vector3, Color4, Color3, HemisphericLight } from "@babylonjs/core";
import { FBXLoader } from 'babylon-fbx-loader';
import { useRootStore } from "@/store/root";

const createScene = (canvas: any) => {
  const rootStore = useRootStore();

  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(255,255,255,1);

  const camera = new ArcRotateCamera("Camera", 0, 0.8, 500, Vector3.Zero(), scene);
  camera.attachControl(canvas, false);

  new HemisphericLight("light", Vector3.Up(), scene);

  SceneLoader.RegisterPlugin(new FBXLoader() as any);
  SceneLoader.ImportMesh("", "models/", "saga--020-013.fbx", scene, function (newMeshes) {
  // SceneLoader.ImportMesh("", "models/", "skull.babylon", scene, function (newMeshes) {
    rootStore.loader = false;
    camera.target = newMeshes[0] as any; 
  });

  // const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  // const material = new StandardMaterial("box-material", scene);
  // material.diffuseColor = Color3.Blue();
  // box.material = material;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };