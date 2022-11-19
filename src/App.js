import { Route, Routes } from "react-router";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import BlogDetail from "./components/BlogDetail";


function App() {
  return (
    <>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs/:blogId" element={<BlogDetail />} />
          <Route path="add-blogs" element={<AddForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
