<template>
  <ion-content>
    <!-- 查询配置信息 -->
    <ion-list>
      <ion-list-header>
        内容的字体大小:{{fontSize}}px
      </ion-list-header>
      <ion-item>
        <ion-range step="1" snaps="true" min="10" max="30" :value="fontSize" @ionChange="changeFontSize">
          <ion-label slot="start"><p style="font-size: 10px">A</p></ion-label>
          <ion-label slot="end"><p style="font-size: 30px">A</p></ion-label>
        </ion-range>
      </ion-item>
    </ion-list>

    <!-- 查询条件 -->
    <ion-card>
        <ion-card-content class="query-card">
            <ion-select interface="action-sheet" placeholder="选择平台" @ionChange="changePlatform">
              <ion-select-option v-for="(platform, index) in platformList" :key="index">{{platform}}</ion-select-option>
            </ion-select>
            <ion-searchbar placeholder="查询关键词" @ionChange="changeContent"></ion-searchbar>
            <ion-label class="error" v-if="error.display">{{error.message}}</ion-label>
        </ion-card-content>
    </ion-card>

    <!-- 循环显示结果 -->
    <ion-card v-for="gameInfo in gameList" :key="gameList.id">
        <ion-card-content>
          <p>游戏名称: {{gameInfo.info}}</p>
          <p>游戏平台: {{gameInfo.platform}}</p>
          <p>上市时间: {{gameInfo.onlineTime}}</p>
          <p>游戏价格: {{gameInfo.price}}</p>
          <p>游戏介绍: <p :style="fontStyle">{{gameInfo.info}}</p></p>
        </ion-card-content>
    </ion-card>

    <!-- 样式模板 -->
    <ion-card>
        <ion-card-content>
          <p>游戏名称: 暗黑破坏神Ⅲ</p>
          <p>游戏平台: Swtich</p>
          <p>上市时间: 2018-12-30 00:00:00</p>
          <p>游戏价格: 8848</p>
          <p>游戏介绍: <span :style="fontStyle">暴雪爸爸, 这个有点贵啊~~~</span></p>
        </ion-card-content>
    </ion-card>

    <!-- 加载更多 -->
    <ion-infinite-scroll threshold="1px" @ionInfinite="loadData">
      <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="加载中..."></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script>
import '../style/query.scss';

export default {
  data() {
    return {
      fontSize: 14,
      platformList: [],
      gameList: [],
      queryParam: {
        platform: '',
        keyword: '',
        pageNo: 1,
        pageSize: 10
      },
      error: {
        message: '',
        display: false
      }
    }
  },
  computed: {
    fontStyle: function() {
      return 'font-size: ' + this.fontSize + 'px';
    }
  },
  methods: {
    loadPlatformList() {
      // 可以动态加载
      this.platformList = ['Switch', 'PS4', 'XBox'];
    },
    changeFontSize(event) {
      this.fontSize = event.detail.value;
    },
    changePlatform(event) {
      this.error.display = false;
      this.queryParam.platform = event.detail.value;
      if (this.queryParam.keyword.length > 0) {
        this.queryGameInfo(false);
      }
    },
    changeContent(event) {
      this.error.display = false;
      this.queryParam.keyword = event.detail.value;
      if (this.queryParam.keyword.length > 0) {
        // 要保证已经选择项目
        if (this.queryParam.platform.length <= 0) {
          this.error.message = '请选择要查询的平台';
          this.error.display = true;
        } else {
          this.queryGameInfo();
        }
      }
    },
    queryGameInfo(append, callBack) {
      // 可以动态加载
      this.$parent.showToast('top', '没有查询到内容');
    },
    loadData(event) {
      // console.log(event);
      const loadCtrl = event.target;
      this.queryParam.pageNo += this.queryParam.pageNo;
      this.queryGameInfo(true, function() {
        loadCtrl.complete();
      });
    }
  },
  mounted: function() {
    this.loadPlatformList();
    this.$parent.setTitle('查询模板');
    // this.$parent.showLoading();
  }
}
</script>
