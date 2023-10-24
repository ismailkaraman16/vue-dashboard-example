
<template>

  <div v-if="isOpen" class="defaultPopupOverlay" @click="closePopup">
    <div class="defaultPopupContent">
      <div style="padding: 20px; text-align: left;">
        <span style="font-size: x-large; font-weight: 600; color: rgb(102, 122, 152); margin-bottom: 15px; display: block;">ĞOSSS Ekle</span>
        <form onsubmit="/*createUser();*/ event.preventDefault()">
          <input required autocomplete="off" type="text" placeholder="Kullanıcı adı" id="newUserUsernameInput">
          <input required autocomplete="off" type="email" placeholder="E-Posta" id="newUserEmailInput">
          <input required autocomplete="off" type="password" placeholder="Şifre" id="newUserPasswordInput">
          <div style="display: flex; align-items: center; justify-content: space-between; background-color: #fafafa; border-radius: 20px; padding: 10px;">
            <span style="font-size: large; color: rgb(102, 122, 152); font-weight: 500;">Yönetici Hesabı</span>
            <label class="switch">
              <input type="checkbox" id="newUserTypeInput">
              <span class="slider"></span>
            </label>
          </div>
          <div style="text-align: right; margin-top: 15px;">
            <button>Ekle</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  methods: {
    closePopup(event) {
      if (event.target === this.$el) {
        this.$emit('close'); // Emit a custom event to close the popup
      }
    }
  }
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.popup {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>
