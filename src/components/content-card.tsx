'use client'
import Link from "next/link";
import Image from 'next/image';

interface ContentCardProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    img?: string;
};

const ContentCard: React.FC<ContentCardProps> = ({ children = 'Placeholder', className, href = '/', img = '/favicon.svg' }) => {
    return(
        <Link href={`${href}`}>
            <div className={'text-xl flex flex-col items-center p-2 mx-5 mt-4 border border-black dark:border-white hover:scale-[1.05] w-40 h-fit rounded-xl '+className}>
                <p className="">{children}</p>
                <Image alt={children + "'s Icon"} src={img} className="h-fit rounded-xl mt-3" width={120} height={120}/></div>
        </Link>
    );
}
export default ContentCard;