import Vue from "vue";
import VueRouter from "vue-router";

//import Home, Login, Error, Layout and Activity log
import HomeView from "../components/admin/HomeView"
import LogInView from "../components/admin/LoginView"
import AdminLayout from "../components/admin/AdminLayout"
import ErrorView from "../components/admin/ErrorView"
import ActivityLog from "../components/admin/ActivityLog"

//import Home, Support, Education, Contactm JoinUs, PostDetails and NotFound
import HomePage from "../components/home/HomePage"
import SupportPage from "../components/home/SupportPage"
import EducationPage from "../components/home/EducationPage"
import ContactPage from "../components/home/ContactPage"
import JoinUs from "../components/home/JoinUs"
import PostDetails from "../components/home/PostDetails"
import NotFound from "../components/home/NotFound"

// import components for blogs
import ListPosts from "../components/admin/posts/ListPosts"
import ShowPost from "../components/admin/posts/ShowPost"
import CreatePost from "../components/admin/posts/CreatePost"
import EditPost from "../components/admin/posts/EditPost"

//import components for comments
import ListComments from "../components/admin/comments/ListComments"
import ShowComment from "../components/admin/comments/ShowComment"
import CreateComment from "../components/admin/comments/CreateComment"
import EditComment from "../components/admin/comments/EditComment"

//import components for comment answers
import ListAnswers from "../components/admin/answers/ListAnswers"
import ShowAnswer from "../components/admin/answers/ShowAnswer"
import CreateAnswer from "../components/admin/answers/CreateAnswer"
import EditAnswer from "../components/admin/answers/EditAnswer"


//import components for users
import ListUsers from "../components/admin/users/ListUsers"
import CreateUser from "../components/admin/users/CreateUser"
import EditUser from "../components/admin/users/EditUser"
import AdminEdit from "../components/admin/users/AdminEdit"

//import components for categories
import ListCategory from "../components/admin/category/ListCategories"
import CreateCategory from "../components/admin/category/CreateCategory"
import EditCategory from "../components/admin/category/EditCategory"



//import components for institution
import ListInstitution from "../components/admin/institution/ListInstitutions"
import CreateInstitution from "../components/admin/institution/CreateInstitution"
import EditInstitution from "../components/admin/institution/EditInstitution"


Vue.use(VueRouter);


// adding routes, every route as a child of admin layout

const routes = [{
        path: "/login",
        name: "login",
        component: LogInView,
        meta: {
            title: "Login"
        },
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/support",
        name: "SupportPage",
        component: SupportPage,
    },
    {
        path: "/education",
        name: "EducationPage",
        component: EducationPage,
    },
    {
        path: "/join-us",
        name: "JoinUs",
        component: JoinUs,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage,
    },
    {
        path: "/post/:id",
        name: "PostDetails",
        component: PostDetails,
    },
    {
        path: "*",
        component: NotFound,
        meta: {
            title: "NotFound"
        },
    },
    {
        path: "/admin",
        component: AdminLayout,
        children: [{
                path: "/dashboard",
                name: "dashboard",
                component: HomeView,
            },
            {
                path: "/activity",
                component: ActivityLog,
            },
            {
                path: "/create/post",
                component: CreatePost,
            },
            {
                path: "/post/show/:id",
                component: ShowPost,
            },
            {
                path: "/post/:id/edit",
                component: EditPost,
            },
            {
                path: "/posts",
                component: ListPosts,
            },
            {
                path: "/create/comment",
                component: CreateComment,
            },
            {
                path: "/comment/:id",
                component: ShowComment,
            },
            {
                path: "/comment/:id/edit",
                component: EditComment,
            },
            {
                path: "/comments",
                component: ListComments,
            },
            {
                path: "/create/answer",
                component: CreateAnswer,
            },
            {
                path: "/answer/:id",
                component: ShowAnswer,
            },
            {
                path: "/answer/:id/edit",
                component: EditAnswer,
            },
            {
                path: "/answers",
                component: ListAnswers,
            },
            {
                path: "/create/category",
                component: CreateCategory,
            },
            {
                path: "/category",
                component: ListCategory,
            },
            {
                path: "/category/:id/edit",
                component: EditCategory,
            },
            {
                path: "/create/institution",
                component: CreateInstitution,
            },
            {
                path: "/institutions",
                component: ListInstitution,
            },
            {
                path: "/institution/:id/edit",
                component: EditInstitution,
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
    linkExactActiveClass: "exact-active",
    scrollBehavior (to) {
        if (to.hash) {
          return {
            selector: to.hash,
            behavior: 'smooth'
          };
        }
        return { x: 0, y: 0 };  // Go to the top of the page if no hash
      },
});


export default router

// router.beforeEach(() => { 
//     window.scrollTo(0,0);
// })

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