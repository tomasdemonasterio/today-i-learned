import "./style.css";

function App() {
  const appTitle = "Today I Learned";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Fact list</section>;
}

export default App;
