import { Nav } from "./Nav";

export default function Header() {
  return (
    <header className="dark:bg-secondary-500">
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4">
        <Nav />
      </div>
    </header>
  );
}
