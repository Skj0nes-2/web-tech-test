'use client'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return(
        <header className='p-2 flex flex-row border-b-1 border-black dark:border-white mb-2'>
            <Link href='/'>
                <Image className="inline-block align-top mr-2 hover:scale-[1.05]" alt='Sunori Icon' width={42} height={42} src='/favicon.svg'/>
            </Link>
            <h1 className="font-header text-4xl inline-block">Sunori</h1>
            <nav className="flex flex-row absolute top-[0] right-[0] mt-7">
                <Link href='/'><div className="w-fit hover:scale-[1.05] mr-2 text-xl">Home</div></Link>
                <Link href='/games'><div className="w-fit hover:scale-[1.05] mr-2 text-xl">Games</div></Link>
                <Link href='/movies'><div className="w-fit hover:scale-[1.05] mr-2 text-xl">Movies</div></Link>
                <Link href='/apps'><div className="w-fit hover:scale-[1.05] mr-2 text-xl">Apps</div></Link>
                <Link href='/books'><div className="w-fit hover:scale-[1.05] mr-2 text-xl">Books</div></Link>
                <Link href='https://github.com/Sunori-Official/Sunori'><div className="mr-2 w-fit hover:scale-[1.05] text-xl">Source</div></Link>
            </nav>
        </header>
    );
};
export default Header;