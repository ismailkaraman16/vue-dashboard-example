<script setup>
</script>

<template>
  <div class="pageContent">
    
    <div v-for="user in users" :key="user._id" class="user">

      <div style="cursor: pointer; width: 40px; display: flex; align-items: center; justify-content: center;">
        <svg height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
              stroke="rgb(102, 122, 152)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
              stroke="rgb(102, 122, 152)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </div>

      <div style="display: flex; flex-direction: column; width: calc(100% - 80px); overflow: auto;">
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div>
      </div>

      <div @click="removeUser(user._id, user.name)" style="cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
        <svg style="height: 45px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
              stroke="rgb(102, 122, 152)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </div>

    </div>

  </div>
  <div class="bottomBar">
    <button style="display: flex; align-items: center;" @click="openAddUserPopup">
      Kullanıcı Ekle
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    openAddUserPopup() {
      this.emitter.emit('openAddUserPopup');
    },
    async removeUser(uid, username){
      if(!await customConfirm("Emin Misiniz?", username + " adlı kullanıcı sistemden kaldırılacak")){return}

      fetch("/removeUser", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              uid: uid,
          })
      })
      .then(response => response.json())
      .then(response => {
          if(response.status != "success"){return customAlert("Hata", response.description)}
          this.fetchUsers();
          //this.$router.go(this.$router.currentRoute);
      });
    },
    fetchUsers(){
      fetch('/getUsers', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.status != "success") { return customAlert("Hata", data.description) }
        this.users = data.users;
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
  created(){
    this.emitter.on('fetchUsers', ()=>{this.fetchUsers()})
  },  
  mounted(){
    this.fetchUsers();
  }
};
</script>

<style scoped>
.user {
  position: relative;
  border: solid rgb(102, 122, 152) 2px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 5px 5px;
  margin-bottom: 15px;
}

</style>
