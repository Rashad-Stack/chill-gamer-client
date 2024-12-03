import { Nav } from "./Nav";

export default function Header() {
  return (
    <header className="dark:bg-black">
      <div className="container lg:max-w-7xl mx-auto">
        <Nav />
      </div>
    </header>
  );
}
