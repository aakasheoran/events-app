import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="header w-full flex justify-between align-baseline py-4 px-10pc h-20 bg-[#202020]">
      <div className="text-2xl font-fira h-full flex justify-center items-center text-[#94fdfd] md:text-4xl">
        <Link href="/">
          <a className="text-[#94fdfd]">Home</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a className="text-[#74dacc] text-xl md:text-2xl">Browse All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header >
  );
};

export default MainHeader;
