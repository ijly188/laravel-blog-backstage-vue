<template>
    <div class="Login_wrap">
      <div class="Login_content">
        <h3 class="h3 page_title d-none">login</h3>
        <div class="logo_wrap">
          <div class="logo">
            <router-link to="/" class="">
              <img src="/img/logo_white.png" alt="" srcset="">
            </router-link>
          </div>
          <div class="container login_form h-100">
            <div class="row">
              <div class="h3 pb-4">管理員登入</div>
            </div>
            <div class="row">
              <form control="" class="container">
                <div class="form-group row">
                  <input
                    v-validate="{required: true, min: 5}"
                    v-model="formuser.username"
                    @input="updateUserdata"
                    type="text" name="username" id="username" class="form-control" placeholder="test@tess.com">
                  <span class="text-danger" v-if="errors.has('username')">{{errors.first('username')}}</span>
                </div>
                <div class="form-group row">
                  <input
                    v-validate="{required: true, min: 6}"
                    v-model="formuser.password"
                    @input="updateUserdata"
                    type="password" name="password" id="password" class="form-control" placeholder="Password">
                  <span class="text-danger" v-if="errors.has('password')">{{errors.first('password')}}</span>
                </div>
                <div class="form-group row">
                  <button class="btn login-btn active"
                    :disabled="
                      !(Array.isArray(this.errors.items) && this.errors.items.length === 0) ||
                      (this.formuser.username == '' || this.formuser.password == '')
                    "
                    @click.prevent="postLogin">登入</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  components: {
  },
  data() {
    return {
      formuser:{
        username: "",
        password: '',
      }
    };
  },
  methods: {
    updateUserdata($event){
      const userValue = $event.target.value;
      const userId = $event.target.id;
      this.$store.dispatch("changeUserinput", { userValue, userId });
      // this.$validator.pause();
    },
    postLogin(){
      // this.$store.dispatch("checkuserdata");
      this.$store.dispatch("postLoginuser");
    }
  },
  computed: {
    ...mapGetters([
    ])
  },
  watch: {},
  created() {
  }
};
</script>