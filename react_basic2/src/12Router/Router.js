import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Home from "./Home";
import User from "./User";
import Redirect from "./Redirect";
import UserDetail from "./UserDetail";
import NotFound from "./NotFound";
import App from "../App";
import Error from "./Error";
import Commnet from "./Comment";


///////첫번째 방법
// export default function Router() {

//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About/>}/>
//           <Route path="/user" element={<User/>}/>
//           <Route path="/user/:userid" element={<UserDetail/>}/>
//           <Route path="/redirect" element={<Redirect/>}/>
//           <Route path="*" element={<NotFound/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }


///////두번째 방법
// const Router = createBrowserRouter([{
//     path: "/",
//     // element: <App/>,
//     children: [
//         {
//             path:"",
//             element : <Home/>,
//             errorElement : <Error/>
//         },
//         {
//             path:"about",
//             element : <About/>
//         },
//         {
//             path:"redirect",
//             element : <Redirect/>
//         },
//     ],
//     errorElement : <NotFound/>,
//     },
//     {
//         path:"user",
//         element : <App/>,
//         children : [
//             {
//                 path : '',
//                 element : <User/>
//             },
//             {
//                 path : ':userId',
//                 element : <UserDetail/>,
//                 children : [
//                     {
//                         path: 'comment',
//                         element : <Commnet/>
//                     }
//                 ]
//             }
//         ]
//     }])

// export default Router;