import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Hello, Nest.js</h1>
      <button type="button" onClick={handleClick}>클릭</button>
    </div>
  );
}