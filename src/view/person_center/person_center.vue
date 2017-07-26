<template>
    <div class="person_center">
      <mt-header title="我的" class="title"></mt-header>
      <div class="head-avatar">
        <span class="avatar-box">
          <img src="../../assets/img/1.jpg" />
        </span>
        <h6 class="avatar-nick">李斌</h6>
        <p class="avatar-sign">个性签名个性签名</p>
      </div>
      <nav class="header-nav">
        <mt-cell
          title="我的课程"
          to="//github.com"
          isLink
          class="my-course">
        </mt-cell>
        <ul class="nav-list">
          <li v-for="(list,index) in lists">
            <div class="list-icon" v-html="list.icon"></div>
            <p>{{list.title}}</p>
          </li>
        </ul>
      </nav>
      <div class="inform-list">
        <ul>
          <li v-for="(list,index) in informLists" class="half-border">
            <a href="">
              <span class="icon-box" :class="[list.bcClass]" v-html="list.icon"></span>
              <span class="inform-title">{{list.title}}</span>
              <div class="perfect-inform">未完善</div>
              <i class="link-to"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="less" scoped>
  .person_center{
    background-color: #eee;
    .title{
      height: 0.65rem;
      box-sizing: border-box;
      padding-top: 0.33rem;
      font-size: 0.16rem;
      color: #333;
      text-align: center;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    .head-avatar{
      text-align: center;
      font-size: 0;
      background-color: #fff;
      height: 1.48rem;
      .avatar-box{
        display: inline-block;
        padding-top: 0.15rem;
        font-size: 0;
        img{
          width: 0.71rem;
          height: 0.71rem;
          border-radius: 0.71rem;
        }
      }
      .avatar-nick{
        margin-top: 0.1rem;
        font-size: 0.14rem;
        color: #222;
      }
      .avatar-sign{
        margin-top: 0.06rem;
        font-size: 0.12rem;
        color: #222;
      }
    }
    .header-nav{
      margin-top: 0.1rem;
      box-sizing: border-box;
      background-color: #fff;
      .my-course{
        height: 0.46rem;
        display: block;
        line-height: 0.46rem;
        padding-left: 0.16rem;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          width: 300%;
          height: 1px;
          bottom: 0;
          left: -.16rem;
          border-bottom: 1px solid #ccc;
          transform: scale(.5) translateX(-50%);
        }
      }
      .nav-list{
        height: 0.91rem;
        display: flex;
        li{
          flex: 1;
          box-sizing: border-box;
          text-align: center;
          font-size: 0;
          padding-top: .24rem;
          p{
            margin-top: .13rem;
            font-size: .13rem;
            color: #333;
          }
          div{
            width: .26rem;
            height: .26rem;
            display: inline-block;
            box-sizing: border-box;
            position: relative;
            &::after{
              content: '';
              position: absolute;
              display: block;
              right: -.06rem;
              top: -.06rem;
              width: .06rem;
              height: .06rem;
              border-radius: .06rem;
              background-color: red;
              font-size: 0;
            }
          }
        }
      }
    }
    .inform-list{
      background-color: #fff;
      font-size: 0;
      margin-top: .1rem;
      a{
        display: block;
        height: .5rem;
        box-sizing: border-box;
        padding: .1rem .07rem 0 .15rem;
        .icon-box{
          display: inline-block;
          width: .3rem;
          height: .3rem;
          border-radius: .1rem;
          line-height: .3rem;
          text-align: center;
        }
        .inform-title{
          margin-left: .16rem;
          font-size: .14rem;
          color: #333;
        }
        .perfect-inform{
          position: absolute;
          right: .31rem;
          top: .25rem;
          transform: translateY(-51%);
          color: #F43333;
          font-size: .14rem;
        }
        .link-to{
          position: absolute;
          right: .07rem;
          top: .25rem;
          transform: translateY(-51%);
          color: #666;
          width: .07rem;
          height: .07rem;
          border: solid 1px #666;
          border-bottom-width: 0;
          border-left-width: 0;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }
  }
</style>
<script type="text/javascript">
    export default {
        name: 'person_center',
        data(){
            return {
              lists: [
                  {
                    icon: '<i class="icon-font font-size">&#xe638;</i>',
                    title: '待审核'
                  },
                  {
                    icon: '<i class="icon-font font-size">&#xe6b7;</i>',
                    title: '报名中'
                  },
                  {
                    icon: '<i class="icon-font font-size">&#xe658;</i>',
                    title: '培训中'
                  },
                  {
                    icon: '<i class="icon-font font-size">&#xe606;</i>',
                    title: '已结束'
                  },
                  {
                    icon: '<i class="icon-font font-size">&#xe816;</i>',
                    title: '未通过'
                  },
                ],
              informLists:[
                {
                  bcClass: 'bc-1',
                  title: '基础信息',
                  value: '未完善',
                  icon: '<i class="icon-font inform-font-size">&#xe6e5;</i>'
                },
                {
                  bcClass: 'bc-2',
                  title: '我的信息',
                  icon: '<i class="icon-font inform-font-size">&#xe6f1;</i>'
                },
                {
                  bcClass: 'bc-3',
                  title: '救护员',
                  icon: '<i class="icon-font inform-font-size">&#xe67d;</i>'
                },
                {
                  bcClass: 'bc-4',
                  title: '会员',
                  icon: '<i class="icon-font inform-font-size">&#xe653;</i>'
                },
                {
                  bcClass: 'bc-5',
                  title: '志愿者',
                  icon: '<i class="icon-font inform-font-size">&#xe60b;</i>'
                },
                {
                  bcClass: 'bc-6',
                  title: '设置',
                  icon: '<i class="icon-font inform-font-size">&#xe6e3;</i>'
                }
              ]
            }
        }
    }
</script>
