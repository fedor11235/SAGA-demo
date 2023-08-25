<template>
  <div class="main">
    <canvas ref="canvas"></canvas>

    <div class="control">
      <div class="btns">
        <h3>Нормали</h3>
        <img src="map/Glam_mask_2.jpg" @click="handlerChangeMap('0_N.jpg')" alt="mask" width="80" height="80">
        <img src="map/Glam_mask.jpg" @click="handlerChangeMap('1_N.jpg')" alt="mask" width="80" height="80">
        <img src="map/Glam_normal_map.jpg" @click="handlerChangeMap('2_N.jpg')" alt="mask" width="80" height="80">
      </div>
      <div class="btns">
        <h3>Текстуры</h3>
        <img src="textures/idea oak 1.jpg" @click="handlerChangeTexture('0_T.jpg')" alt="mask" width="80" height="80">
        <img src="textures/idea oak 2.jpg" @click="handlerChangeTexture('1_T.jpg')" alt="mask" width="80" height="80">
        <img src="textures/idea oak normal.jpg" @click="handlerChangeTexture('2_T.jpg')" alt="mask" width="80" height="80">
        <img src="textures/idea oak refl.jpg" @click="handlerChangeTexture('3_T.jpg')" alt="mask" width="80" height="80">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createScene } from '@/scenes/ThreeJSScene'

const canvas = ref()
const selectedMap = ref('0_N.jpg')
const selectedTexture = ref('0_T.jpg')

function handlerChangeMap(newMap: string) {
  selectedMap.value = newMap
  if (canvas.value) {
    createScene(canvas.value, selectedMap.value, selectedTexture.value)
  }
}

function handlerChangeTexture(newTexture: string) {
  selectedTexture.value = newTexture
  if (canvas.value) {
    createScene(canvas.value, selectedMap.value, selectedTexture.value)
  }
}

onMounted(() => {
  if (canvas.value) {
    createScene(canvas.value, selectedMap.value, selectedTexture.value)
  }
})
</script>

<style scoped>
.main {
  display: flex;
  column-gap: 24px;
}
.control {
  display: flex;
  column-gap: 24px;
}
.btns {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
img {
  cursor: pointer;
}
</style>