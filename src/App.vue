<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navMenu from './components/NavigationMenu.vue'
import root from './components/Root.vue'
import AddUserPopup from './components/AddUserPopup.vue'
import AddPosDevicePopup from './components/AddPosDevicePopup.vue'
</script>

<template>

  <AddPosDevicePopup :isOpen="isPopup1Open" @close="controlPopup(1, false)" />
  <AddUserPopup :isOpen="isPopup2Open" @close="controlPopup(2, false)" />

  <root />
  <navMenu />

</template>

<script>
export default {
  components: {
    AddUserPopup
  },
  data() {
    return {
      isPopup1Open: false,
      isPopup2Open: false,
    };
  },
  created() {
    this.emitter.on('openAddPosDevicePopup', ()=>{this.controlPopup(1, true)})
    this.emitter.on('openAddUserPopup', ()=>{this.controlPopup(2, true)})
  },
  methods: {
    controlPopup(popupNo, mode) {
      switch(popupNo){
        case 1:
          this.isPopup1Open = mode; 
          break;
        case 2:
          this.isPopup2Open = mode; 
          break;
      }
    }
  }
};

</script>

<style scoped>

</style>
