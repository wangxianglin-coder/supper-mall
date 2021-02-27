<template>
  <div id="commont_info">
    <div class="user_rating">
      <div>用户评价</div>
      <div>
        <a href="">更多</a>
      </div>
    </div>
    <div>
      <div class="user_logo">
        <img :src="userInfo.user.avatar" alt="">
        <span>{{userInfo.user.uname}}</span>
      </div>
      <div class="content">
        <p>{{userInfo.content}}</p>
        <div class="style">
          <span>{{userInfo.created}}</span>
          <span>{{userInfo.style}}</span>
        </div>
      </div>
      <div class="user_images">
        <div v-for="(item,index) in userInfo.images" :key="index" class="item_img">
          <img :src="item" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
#commont_info{
  padding: 2px 8px;

}
.user_rating{
  padding: 5px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}
.user_logo{
  width: 100%;
  padding-top: 10px;
}
.user_logo img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.content{
  border: 1px solid #000;
  padding-top: 10px;
  line-height: 1.5em;
}
.content p{
  font-size: 15px;
}
.style{
  font-size: 13px;
  color: rgb(168, 167, 167);
}
.style span:nth-child(2){
  margin-left: 10px;
}
.user_images{
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #000; */
  padding-top: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;

}
.item_img{
  width: 25%;
}
.user_images img{
 width: 100%;
  height: 100px;
}
</style>
