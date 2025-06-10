import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
        <Navbar />
        <PageContent />
      </div>
    </>
  );
}

export default App;
