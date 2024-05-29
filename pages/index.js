import Link from 'next/link';
import Image from 'next/image';

const Home = () => (
  <div>
    <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

    <nav>
      <ul className="space-y-2">
        <li>
          <Link href="/tasks" className="text-blue-500 hover:underline">
            Task Manager
          </Link>
        </li>
        <li>
          <Link href="/calendar" className="text-blue-500 hover:underline">
            Calendar
          </Link>
        </li>
        <li>
          <Link
            href="/recommendations"
            className="text-blue-500 hover:underline"
          >
            Recommendations
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
