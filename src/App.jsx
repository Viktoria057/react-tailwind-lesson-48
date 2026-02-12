import Header from "./components/Header";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 flex flex-col items-center gap-6">
        <Card
          title="Tailwind CSS"
          text="Utility-first CSS framework for rapid UI development."
        />

        <Form />
      </main>
    </div>
  );
}

export default App;
