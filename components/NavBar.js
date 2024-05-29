import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/tasks" className="text-white px-4">
          Tasks
        </Link>
        <Link href="/appointments" className="text-white px-4">
          Appointments
        </Link>
        <Link href="/recommendations" className="text-white px-4">
          Recommendations
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
