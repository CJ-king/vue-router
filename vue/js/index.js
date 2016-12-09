/**
 * @file app
 * @author jinchangjiang
 */
var  index = Vue.extend({
    template: '<div><div class="head">头部<router-link class="login"  to="/login">登录</router-link></div>'
            +'<div class="container">'
            +    '<div class="menu">'
            +        '<ul>'
            +            '<router-link tag="li" to="/func1" active-class="active"><a>功能模块1</a></router-link>'
            +            '<router-link tag="li" to="/func2" active-class="active"><a>功能模块2</a></router-link>'
            +            '<router-link tag="li" to="/func3" active-class="active"><a>功能模块3</a></router-link>'
            +        '</ul>'
            +    '</div>'
            +    '<div  class="content">'
            +        '<router-view></router-view>'
            +    '</div>'
            +'</div></div>'
});
var  func1 = Vue.extend({
  template:  '<div><button v-on:click="greet">功能模块</button>功能模块111</div>',
  methods: {
       greet: function (event) {
           alert('1');
       }
  }
});
var  func2 = Vue.extend({
  template:  '<div><button v-on:click="greet">功能模块</button>功能模块2</div>',
  methods: {
       greet: function (event) {
           alert('2');
       }
  }
});
var  func3 = Vue.extend({
  template:  '<div><button v-on:click="greet">功能模块</button>功能模块3</div>',
  methods: {
       greet: function (event) {
           alert('3');
       }
  }
});
var  login = Vue.extend({
  template:  '<div class="login-cont">登录</div>'
});
var router = new VueRouter({
  routes: [
    { 
        path: '/', 
        component: index,
        children: [
            {
              path: '',
              redirect: 'func1',
              component: func1
            },
            {
              path: 'func1',
              component: func1
            },
            {
              path: 'func2',
              component: func2
            },
            {
              path: 'func3',
              component: func3
            }
          ]
    },
    { 
        path: '/login', 
        component: login
    }
  ]
});
var app = new Vue({router}).$mount('#app');



