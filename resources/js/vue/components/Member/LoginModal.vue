<template>
  <div id="login-modal-template" v-if="this.$store.state.EffectModules.isLoginModalopen">
    <div class="modal-mask" @click.self="Modalstatusclose()">
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" class="close text-right p-3" aria-label="Close">
            <span aria-hidden="true" @click.prevent="Modalstatusclose()">&times;</span>
          </button>

          <div class="modal-body pt-5 px-5 pb-3">
            <slot name="body">
              <div class="body">
                <div class="content text-left">
                  <div class="loginformcomponents">
                    <form class="form-group" @submit.prevent="" v-show="!(this.$store.state.EffectModules.isForgetpasswordModalopen)">
                      <div class="form-group">
                        <label for="inputEmail">帳號</label>
                        <input 
                          type="text"
                          id="inputEmail"
                          class="form-control"
                          placeholder="帳號"
                          autofocus="true"
                          v-validate.persist="{required: true, min: 8}"
                          v-model="user.username"
                          name="username">
                        <span class="text-danger">{{ errors.first('username') }}</span>
                      </div>
                      <div class="form-group pb-5">
                        <label for="inputPassword">密碼</label>
                        <input
                          type="password"
                          id="inputPassword"
                          class="form-control"
                          placeholder="密碼"
                          autocomplete="off"
                          v-model="user.password"
                          v-validate.persist="{required: true, min: 6}"
                          name="password">
                        <span class="text-danger d-block">{{ errors.first('password') }}</span>
                        <div class="gotoregister d-inline float-left pt-2">
                          <router-link to="/register" class="color_gradient_5"><u @click.self="Modalstatusclose()">還不是會員？</u></router-link>
                        </div>
                        <div class="gotoforgetpassword d-inline float-right pt-2">
                          <span class="color_gradient_5"><u @click.self="ForgetpasswordModalOpen()">忘記密碼</u></span>
                        </div>
                      </div>
                      <button class="btn btn-lg btncolor_gradient_9 btn-block" type="submit"
                      :disabled="
                          !(Array.isArray(this.errors.items) && this.errors.items.length === 0) ||
                          (this.user.username == '' || this.user.password == '')" 
                          @click.prevent="signin">
                      登入</button>
                    </form>
                    <form class="form-group" @submit.prevent="" v-show="this.$store.state.EffectModules.isForgetpasswordModalopen">
                      <h2 class="h3 mb-3 text-center font-weight-normal">找回密碼</h2>
                      <div class="form-group pb-5">
                        <label for="inputRegisteredEmail">輸入您註冊時填寫的Email</label>
                        <input
                          type="email"
                          id="inputRegisteredEmail"
                          class="form-control"
                          placeholder="Email"
                          autocomplete="off"
                          v-model="user.email"
                          v-validate.persist="'required|email'"
                          data-vv-validate-on="input"
                          name="email">
                        <span class="text-danger d-block">{{ errors.first('email') }}</span>
                      </div>
                      <button class="btn btn-lg btncolor_gradient_9 btn-block" type="submit"
                      :disabled="
                          !(Array.isArray(this.errors.items) && this.errors.items.length === 0) ||
                          (this.user.email == '')" 
                          @click.prevent="sendtheforgetpasswordemail">
                      發送密碼重置信</button>
                    </form>
                  </div>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer d-none">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: '',
      },
    };
  },
  created() {},
  watch: {
    isLoginModalopen() {
      if( !this.$store.state.EffectModules.isLoginModalopen ) {
        this.user.username = '';
        this.user.password = '';
        this.user.email = '';

        this.$validator.reset();
      }
    },
  },
  computed: {
    ...mapGetters(["error", "isLoginModalopen", "isForgetpasswordModalopen"]),
  },
  methods: {
    signin() {
        const user = this.user;
        this.$store.dispatch('signIn', user);
    },
    Modalstatusclose() {
      this.$store.dispatch("closeLoginModalWindow", false);
      this.$store.dispatch("setForgetpasswordModalWindow", false);
    },
    ForgetpasswordModalOpen() {
      this.$store.dispatch("closeLoginModalWindow", true);
      this.$store.dispatch("setForgetpasswordModalWindow", true);
    }
  },
};
</script>
<style lang="scss">

</style>
