import Vue from "vue";
import VueRouter from "vue-router";

//import Home, Login, Error, Layout and Activity log
const HomeView = () =>
    import ('../components/admin/HomeView')
const LogInView = () =>
    import ("../components/admin/LoginView")
const AdminLayout = () =>
    import ("../components/admin/AdminLayout")
const ErrorView = () =>
    import ("../components/admin/ErrorView")
const ActivityLog = () =>
    import ("../components/admin/ActivityLog")

//import Home, Support, Education, Contactm JoinUs, PostDetails and NotFound
const HomePage = () =>
    import ("../components/home/HomePage")
const SupportPage = () =>
    import ("../components/home/SupportPage")
const EducationPage = () =>
    import ("../components/home/EducationPage")
const ContactPage = () =>
    import ("../components/home/ContactPage")
const JoinUs = () =>
    import ("../components/home/JoinUs")
const PostDetails = () =>
    import ("../components/home/PostDetails")
const NotFound = () =>
    import ("../components/home/NotFound")

// import components for blogs
const ListPosts = () =>
    import ("../components/admin/posts/ListPosts")
const ShowPost = () =>
    import ("../components/admin/posts/ShowPost")
const CreatePost = () =>
    import ("../components/admin/posts/CreatePost")
const EditPost = () =>
    import ("../components/admin/posts/EditPost")

//import components for comments
const ListComments = () =>
    import ("../components/admin/comments/ListComments")
const CreateComment = () =>
    import ("../components/admin/comments/CreateComment")
const EditComment = () =>
    import ("../components/admin/comments/EditComment")

//import components for comment answers
const ListAnswers = () =>
    import ("../components/admin/answers/ListAnswers")
const CreateAnswer = () =>
    import ("../components/admin/answers/CreateAnswer")
const EditAnswer = () =>
    import ("../components/admin/answers/EditAnswer")


//import components for users
const ListUsers = () =>
    import ("../components/admin/users/ListUsers")
const CreateUser = () =>
    import ("../components/admin/users/CreateUser")
const EditUser = () =>
    import ("../components/admin/users/EditUser")
const AdminEdit = () =>
    import ("../components/admin/users/AdminEdit")

//import components for categories
const ListCategory = () =>
    import ("../components/admin/category/ListCategories")
const CreateCategory = () =>
    import ("../components/admin/category/CreateCategory")
const EditCategory = () =>
    import ("../components/admin/category/EditCategory")



//import components for institution
const ListInstitution = () =>
    import ("../components/admin/institution/ListInstitutions")
const CreateInstitution = () =>
    import ("../components/admin/institution/CreateInstitution")
const EditInstitution = () =>
    import ("../components/admin/institution/EditInstitution")


Vue.use(VueRouter);

// adding routes
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
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/support",
        name: "SupportPage",
        component: SupportPage
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
        name: "NotFound",
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
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 }; // Go to the top of the page if no hash
    },
});


export default router

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    var expired = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    var time = (Date.now() < expired.exp * 1000)
  }
    // If logged in, or going to the Login page.
    if (time || to.name === 'login' || to.name === 'HomePage' || to.name === 'SupportPage' || to.name === 'EducationPage' || to.name === 'JoinUs' || to.name === 'ContactPage' || to.name === 'PostDetails' || to.name === 'NotFound') {
      // Continue to page.
      next()
    } else {
      // Not logged in, redirect to login.
      next({name: 'login'})
    }
});