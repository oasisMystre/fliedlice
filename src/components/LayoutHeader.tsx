import Navigation from "./Navigation";

export default function LayoutHeader() {
  return (
    <header className="flex items-center px-4 py-2 md:px-8">
      <div className="flex-1 md:flex-none">
        <h1 className="text-2xl text-secondary">FliedLice</h1>
      </div>
      <Navigation />
    </header>
  );
}
