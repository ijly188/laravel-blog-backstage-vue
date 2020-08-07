<template>
  <div class="modal_wrap" v-if="true">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h5 class="modal-title">錯誤訊息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="true">
            <div class="text-left">錯誤狀態：sss</div>
            <div class="text-left">錯誤資訊：sss</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              >關閉視窗</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
    // 要做一個機制去驗證token有效的話要自動轉到index
  },
  watch: {},
  methods: {
    
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>
<style lang="scss">
</style>
