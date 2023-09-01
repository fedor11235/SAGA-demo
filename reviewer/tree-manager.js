AFRAME.registerComponent('tree-manager', {         
    init: function () {
        let el = this.el;
        let comp = this;
        let data = this.data;
        comp.scene = el.sceneEl.object3D;  
        comp.counter = 0;   
        comp.treeModels = [];
        comp.modelLoaded = false;
        let mesh = el.getObject3D('models/model/scene.gltf'); 
        if (!mesh){return;}
        let mat = new THREE.MeshStandardMaterial;
        let color = new THREE.Color(white);
        mat.color = color;
        mat.wireframe = true;
        node.material = mat;
        comp.modelLoaded = true;
    }
  });