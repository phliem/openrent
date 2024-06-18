import { Header } from "./navigation/Header";
import { Property } from "./property/Property";
import { Footer } from "./navigation/Footer";

function App() {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800">
      <Header />
      <div className="container mx-auto">
        <Property />
        <Footer />
      </div>
    </div>
  );
}

export default App;
