import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import PageIntro from "./components/pageIntro/PageIntro";
import useMotionSystem from "./hooks/useMotionSystem";
import usePortfolioLanguage from "./hooks/usePortfolioLanguage";

function App() {
  useMotionSystem();
  const { content, language, setLanguage } = usePortfolioLanguage();

  return (
    <div className="app">
      <PageIntro />
      <a className="skip-link" href="#main-content">
        {content.app.skipLink}
      </a>
      <Navbar
        content={content.navbar}
        language={language}
        navigationItems={content.navigationItems}
        onLanguageChange={setLanguage}
      />
      <HomePage content={content} />
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
