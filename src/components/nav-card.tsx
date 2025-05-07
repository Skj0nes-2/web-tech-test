'use client'
import Link from "next/link";

interface NavCardProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    bgCol?: string;
};

const NavCard: React.FC<NavCardProps> = ({ children = 'Placeholder', className, href = '/', bgCol = 'red' }) => {
    switch (bgCol){
        case 'red':
            bgCol = 'bg-red-700'
            break;
        case 'yellow':
            bgCol = 'bg-yellow-500'
            break;
        case 'green':
            bgCol = 'bg-green-600'
            break;
        case 'blue':
            bgCol = 'bg-blue-500'
            break;
    }
    return(
        <Link href={`${href}`}>
            <div className={bgCol+' text-2xl flex justify-center mx-5 mt-4 items-center border border-black dark:border-white hover:scale-[1.05] w-60 h-30 rounded-xl '+className}><p>{children}</p></div>
        </Link>
    );
}
export default NavCard;