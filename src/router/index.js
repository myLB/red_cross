import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home=resolve => require(['../view/home/home.vue'],resolve);
/*首页 1000*/

const select_city=resolve => require(['../view/home/select_city.vue'],resolve);
/*选择城市 1001*/

const train_details=resolve => require(['../view/home/train_details.vue'],resolve);
/*培训课程详情  1010*/

const apply=resolve => require(['../view/home/apply.vue'],resolve);
/*我要报名 1011*/

const sign_in_code=resolve => require(['../view/home/sign_in_code.vue'],resolve);
/*签到二维码 1012*/

const open_class=resolve => require(['../view/home/open_class.vue'],resolve);
/*我要开班 1013*/

/*-----------------------------------以上首页模块-------------------------------------------------------------------------*/

const person_center=resolve => require(['../view/person_center/person_center.vue'],resolve);
/*个人中心 1100*/

const my_course=resolve => require(['../view/person_center/my_course.vue'],resolve);
/*我的课程 1110*/

const course_Player_inform=resolve => require(['../view/person_center/course_Player_inform.vue'],resolve);
/*我参与的课程信息 1111*/

const data_monitor=resolve => require(['../view/person_center/data_monitor.vue'],resolve);
/*课程数据监控 1112*/

const my_inform=resolve => require(['../view/person_center/my_inform.vue'],resolve);
/*我的消息 1120*/

const lifeguard=resolve => require(['../view/person_center/lifeguard.vue'],resolve);
/*救护员 1130*/

const ambulance_division=resolve => require(['../view/person_center/ambulance_division.vue'],resolve);
/*救护师 1131*/

const member=resolve => require(['../view/person_center/member.vue'],resolve);
/*会员 1132*/

const volunteer=resolve => require(['../view/person_center/volunteer.vue'],resolve);
/*志愿者 1133*/

const basic_inform=resolve => require(['../view/person_center/basic_inform.vue'],resolve);
/*基础信息 1134*/

const edit_person_inform=resolve => require(['../view/person_center/edit_person_inform.vue'],resolve);
/*编辑个人资料 1135*/

const set=resolve => require(['../view/person_center/set.vue'],resolve);
/*设置 1140*/

const about_us=resolve => require(['../view/person_center/about_us.vue'],resolve);
/*关于我们 1141*/

const change_login_ID=resolve => require(['../view/person_center/change_login_ID.vue'],resolve);
/*变更登录账号 1142*/

const change_pass=resolve => require(['../view/person_center/change_pass.vue'],resolve);
/*修改密码 1143*/

/*-----------------------------------以上个人中心模块-------------------------------------------------------------------------*/

const login=resolve => require(['../view/login/login.vue'],resolve);
/*登录 1150*/

const register=resolve => require(['../view/login/register.vue'],resolve);
/*注册 1151*/

const user_agreement=resolve => require(['../view/login/user_agreement.vue'],resolve);
/*用户使用协议 1152*/

const find_pass=resolve => require(['../view/login/find_pass.vue'],resolve);
/*找回密码 1153*/

/*-----------------------------------以上登录模块-------------------------------------------------------------------------*/

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    /*首页 1000*/
    {
      path: '/select_city',
      name: 'select_city',
      component: select_city
    },
    /*选择城市 1001*/
    {
      path: '/train_details',
      name: 'train_details',
      component: train_details
    },
    /*培训课程详情   1010*/
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    /*我要报名 1011*/
    {
      path: '/sign_in_code',
      name: 'sign_in_code',
      component: sign_in_code
    },
    /*签到二维码 1012*/
    {
      path: '/open_class',
      name: 'open_class',
      component: open_class
    },
    /*我要开班 1013*/

    /*-------以上首页模块-----------*/

    {
      path: '/person_center',
      name: 'person_center',
      component: person_center
    },
    /*个人中心 1100*/
    {
      path: '/my_course',
      name: 'my_course',
      component: my_course
    },
    /*我的课程 1110*/
    {
      path: '/course_Player_inform',
      name: 'course_Player_inform',
      component: course_Player_inform
    },
    /*我参与的课程信息 1111*/
    {
      path: '/data_monitor',
      name: 'data_monitor',
      component: data_monitor
    },
    /*课程数据监控 1112*/
    {
      path: '/my_inform',
      name: 'my_inform',
      component: my_inform
    },
    /*我的消息 1120*/
    {
      path: '/lifeguard',
      name: 'lifeguard',
      component: lifeguard
    },
    /*救护员 1130*/
    {
      path: '/ambulance_division',
      name: 'ambulance_division',
      component: ambulance_division
    },
    /*救护师 1131*/
    {
      path: '/member',
      name: 'member',
      component: member
    },
    /*会员 1132*/
    {
      path: '/volunteer',
      name: 'volunteer',
      component: volunteer
    },
    /*志愿者 1133*/
    {
      path: '/basic_inform',
      name: 'basic_inform',
      component: basic_inform
    },
    /*基础信息 1134*/
    {
      path: '/edit_person_inform',
      name: 'edit_person_inform',
      component: edit_person_inform
    },
    /*编辑个人资料 1135*/
    {
      path: '/set',
      name: 'set',
      component: set
    },
    /*设置 1140*/
    {
      path: '/about_us',
      name: 'about_us',
      component: about_us
    },
    /*关于我们 1141*/
    {
      path: '/change_login_ID',
      name: 'change_login_ID',
      component: change_login_ID
    },
    /*变更登录账号 1142*/
    {
      path: '/change_pass',
      name: 'change_pass',
      component: change_pass
    },
    /*修改密码 1143*/

    /*-----以上个人中心模块------*/


    {
      path: '/login',
      name: 'login',
      component: login
    },
    /*登录 1150*/
    {
      path: '/register',
      name: 'register',
      component: register
    },
    /*注册 1151*/
    {
      path: '/user_agreement',
      name: 'user_agreement',
      component: user_agreement
    },
    /*用户使用协议 1152*/
    {
      path: '/find_pass',
      name: 'find_pass',
      component: find_pass
    },
    /*找回密码 1153*/

    /*----以上登录模块----*/

  ]
})
