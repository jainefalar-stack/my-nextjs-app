import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg bg-pink-400 p-10">
      <h1 className="text-5xl font-bold">Hello, This is Jaine Falar</h1>

      <p className="mt-4">My motto is: if it's Gods will, It will!</p>

      <MyMotto />

      <p className="mt-4">This is my first Next.js project.</p>

      <div className="mt-6 flex gap-4">
        <Link href="/contact" className="underline hover:text-white">
          Go to Contact
        </Link>

        <Link href="/about" className="underline hover:text-white">
          Go to About
        </Link>
      </div>
    </div>
  );
}

function MyMotto() {
  return (
    <h2 className="mt-4 text-2xl font-semibold">Do what you want to do!</h2>
  );
}
