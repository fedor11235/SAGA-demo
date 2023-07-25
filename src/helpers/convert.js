const convert = require('fbx2gltf');
convert('src/assets/models/saga--020-013.fbx', 'src/assets/models/saga--020-013.glb', ['--khr-materials-unlit']).then(
  destPath => {
    console.log(destPath)
  },
  error => {
    console.log(error)
  }
);