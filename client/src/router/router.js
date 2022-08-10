import Vue from "vue";
import VueRouter from "vue-router";

//import Home, Login, Error and Layout 
import HomeView from "../components/admin/HomeView"
import LogInView from "../components/admin/LoginView"
import AdminLayout from "../components/admin/AdminLayout"
import ErrorView from "../components/admin/ErrorView"
import PasswordChange from "../components/admin/PasswordChange"


// import components for blogs
// import ListUstanove from "../components/ustanove/ListUstanove"
// import ShowUstanove from "../components/ustanove/ShowUstanove"
import CreatePost from "../components/admin/posts/CreatePost"
// import EditUstanove from "../components/ustanove/EditUstanove"

//import components for comments
// import ListDoktori from "../components/doktori/ListDoktori"
// import ShowDoktori from "../components/doktori/ShowDoktori"
// import CreateDoktori from "../components/doktori/CreateDoktori"
// import EditDoktori from "../components/doktori/EditDoktori"

//import components for comment answers
// import ListBaneri from "../components/baneri/ListBaneri"
// import ShowBaneri from "../components/baneri/ShowBaneri"
// import CreateBaneri from "../components/baneri/CreateBaneri"
// import EditBaneri from "../components/baneri/EditBaneri"


//import components for users
import ListUsers from "../components/admin/users/ListUsers"
import CreateUser from "../components/admin/users/CreateUser"
import EditUser from "../components/admin/users/EditUser"
import AdminEdit from "../components/admin/users/AdminEdit"

//import components for categories
// import ListSponzorisano from "../components/sponzorisano/ListSponzorisano"
import CreateCategory from "../components/admin/category/CreateCategory"
// import EditSponzorisano from "../components/sponzorisano/EditSponzorisano"


//import component for activity log
// import ActivityLog from "../components/activity/ActivityLog"


Vue.use(VueRouter);


// adding routes, every route as a child of admin layout

const routes = [
  {
    path: "/login",
    name: "login",
    component: LogInView,
    meta: {
      title: "Login"
    },
  },
  {
    path: "/password",
    name: "password",
    component: PasswordChange,
    meta: {
      title: "Password"
    },
  },
  {
    path: "/",
    component: AdminLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: HomeView,
      },
      {
        path: "/create/post",
        component: CreatePost,
      },
      {
        path: "/create/category",
        component: CreateCategory,
      },
      {
        path: "/create/user",
        component: CreateUser,
      },
      {
        path: "/users",
        component: ListUsers,
      },
      {
        path: "/user/:id/edit",
        component: EditUser,
      },
      {
        path: "/users/:id/edit",
        component: AdminEdit,
      },
      {
        path: "*",
        component: ErrorView,
        meta: {
          title: "Not_found"
        },
      }
    ],
  },  
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router

// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('token')) {
//     var expired = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
//     var time = (Date.now() < expired.exp * 1000)
//   }
//     // If logged in, or going to the Login page.
//     if (time || to.name === 'login') {
//       if(to.name==="password" || to.name==="login") {
//         next()
//       }
//       else {
//         next({name: 'login'})
//       }
//       // Continue to page.
      
//     } else {
//       // Not logged in, redirect to login.
//       next({name: 'login'})
//     }
// });