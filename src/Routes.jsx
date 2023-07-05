//? For Routes & Route
// import { Route, Routes } from "react-router-dom";
// import { Header } from "./exports";
// import { Footer } from "./exports";
import { Home } from "./exports";
import { Menu } from "./exports";
import { About } from "./exports";
import { Contact } from "./exports";
import { MainFood } from "./exports";
import { NotFound } from "./exports";
import {
  homeData,
  menuData,
  aboutData,
  contactData,
  inputs,
  buttons,
  icons,
} from "./data";


//? For Routes & Route
// const Router = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home data={homeData} btnData={buttons.home} />}
//         />
//         <Route path="/menu" element={<Menu data={menuData} />} />

//         <Route path="/about" element={<About data={aboutData} />} />
//         <Route
//           path="/contact"
//           element={
//             <Contact
//               data={contactData}
//               inputData={inputs}
//               buttonData={buttons.contact}
//             />
//           }
//         />
//         <Route path="/menu/:id" element={<MainFood data={menuData} />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer data={icons} />
//     </>
//   );
// };

// export { Router };


//? For useRoutes
let routes = [
    { path: "/", element: <Home data={homeData} btnData={buttons.home} /> },
    { path: "/menu", element: <Menu data={menuData} />},
    { path: "/about", element: <About data={aboutData} /> },
    { path: "/contact", element: <Contact data={contactData} inputData={inputs} buttonData={buttons.contact} /> },
    { path: "/menu/:id" , element: <MainFood data={menuData} />},
    { path: "*", element: <NotFound /> }
]

export { routes }
