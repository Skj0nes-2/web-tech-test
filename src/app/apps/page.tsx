'use client'
import React, { useState } from 'react';
import { FadeIn, SlideInBottom } from "~/lib/animations";
import { useContent } from '~/hooks/useContent';
import ContentGrid from '~/components/content-grid';
import Search from '~/components/Search';

const AppsPage: React.FC = () => {
    const { items, searchItems, isLoading } = useContent({ category: 'apps' });
    const [searchApplied, setSearchApplied] = useState(false);
  
    const handleSearch = (term: string) => {
      searchItems(term);
      setSearchApplied(!!term);
    };
  
    return (
      <div>
        <FadeIn>
            <h1 className="font-header text-center text-4xl font-bold text-black dark:text-white mb-2">Apps</h1>
            <p className="text-center text-black dark:text-white mb-6">Explore our collection of the best apps.</p>
            <Search onSearch={handleSearch} placeholder="Search games..." />
        </FadeIn>
        {isLoading ? (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        ) : (
            <SlideInBottom>
                {searchApplied && items.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-medium text-black dark:text-white">No apps found matching your search.</h3>
                        <p className="text-black dark:text-white mt-2">Try a different search term or browse all apps.</p>
                    </div>
                ) : (
                <ContentGrid items={items} />
                )}
            </SlideInBottom>
        )}
      </div>
    );
  };
  
  export default AppsPage;