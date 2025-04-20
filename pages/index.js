import dynamic from 'next/dynamic';
const ChangeBoard = dynamic(() => import('./changeboard'), { ssr: false });

export default function Home() {
  return <ChangeBoard />;
}
