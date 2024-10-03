import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerDefault } from '../layout/containerDefault';


interface InstagramPost {
    imageUrl: string;
    postUrl: string;
    description: string;
}

interface LatestInstagramPostsProps {
    posts: InstagramPost[];
}

const LatestInstagramPosts: React.FC<LatestInstagramPostsProps> = ({ posts }) => {
    return (
        <ContainerDefault>
            <div className="container mx-auto text-center py-20">
                <h2 className="text-3xl">Últimas Postagens</h2>
                <p className="text-gray-700 mb-10">Acompanhe algumas dicas em nosso Instagram!</p>
                <InstagramPostGrid posts={posts} />
            </div>
        </ContainerDefault>
    );
};

const InstagramPostGrid: React.FC<LatestInstagramPostsProps> = ({ posts }) => (
    <div className="relative md:h-[130px] md:w-[800px] mx-auto">
        <div className='md:absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post, index) => (
                <InstagramPostCard
                    key={index}
                    {...post}
                />
            ))}
        </div>
    </div>
);

const InstagramPostCard: React.FC<InstagramPost> = ({ imageUrl, postUrl, description }) => (
    <Link href={postUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative">
            <Image
                src={imageUrl}
                alt={description}
                width={250}
                height={250}
                className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm">{description}</p>
            </div>
        </div>
    </Link>
);

export default LatestInstagramPosts;
