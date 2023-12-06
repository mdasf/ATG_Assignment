import "./App.css";
import Articles from "./component/Articles";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Recommendation from "./component/Recommendation";
import { AuthContextProvider } from "./context/authContext";
import { ModalContextProvider } from "./context/useModal";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ModalContextProvider>
          <Header />
          <Hero />
          <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-8">
            <Articles />
            <Recommendation />
          </div>
        </ModalContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
