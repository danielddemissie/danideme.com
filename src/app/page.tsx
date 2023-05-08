export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div>
        <h2 className="text-4xl sm:text-2xl font-bold pb-2">Hi there,</h2>
        <h4 className="text pb-3">
          I'm Daniel Currently my Portfolio is under construction <br /> Check
          out my blogs till then ):
        </h4>
        <a
          href="https://blog.danideme.com"
          target="_blank"
          className="rounded-md bg-teal-800 border-r-2 px-5 py-2 text-white"
        >
          My Blogs
        </a>
      </div>
    </main>
  );
}
