import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className=" max-w-[1920px] scroll-smooth">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
