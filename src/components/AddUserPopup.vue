
<template>
  <div v-if="isOpen" class="defaultPopupOverlay" @click="closePopup">
    <div class="defaultPopupContent">
      <div style="padding: 20px; text-align: left;">
        <span style="font-size: x-large; font-weight: 600; color: rgb(102, 122, 152); margin-bottom: 15px; display: block;">Kullanıcı Ekle</span>

        <form @submit="sendForm">

          <input required autocomplete="off" type="text" placeholder="Kullanıcı adı" v-model="username">
          <input required autocomplete="off" type="email" placeholder="E-Posta" v-model="email">
          <input required autocomplete="off" type="password" placeholder="Şifre" v-model="password">
          <div style="display: flex; align-items: center; justify-content: space-between; background-color: #fafafa; border-radius: 20px; padding: 10px;">
            <span style="font-size: large; color: rgb(102, 122, 152); font-weight: 500;">Yönetici Hesabı</span>
            <label class="switch">
              <input type="checkbox" id="newUserTypeInput" v-model="type">
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
  data() {
    return {
      username: null,
      email: null,
      password: null,
      type: false,
    };
  },
  props: {
    isOpen: Boolean
  },
  methods: {
    closePopup(event) {
      if (event.target === this.$el) {
        this.$emit('close'); // Emit a custom event to close the popup
      }
    },
    sendForm(event) {
      event.preventDefault();
      fetch("/createUser", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          name: this.username,
          isAdmin: this.type
        })
      })
      .then(response => response.json())
      .then(response => {
        //add loading 
        if (response.status != "success") { return customAlert("Hata", response.description) }
        //this.$router.go(this.$router.currentRoute)
        this.username = null;
        this.email = null;
        this.password = null;
        this.type = false;
        
        this.emitter.emit('fetchUsers');
        this.$emit('close');
      });
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