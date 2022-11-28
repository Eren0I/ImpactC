import { Navbar, Welcome, Footer, Services, Transactions, Feat } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Feat />
    <Footer />
  </div>
);

export default App;
