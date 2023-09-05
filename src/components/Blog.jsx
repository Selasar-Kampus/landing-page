'use client';

import Image from 'next/image';
import Link from 'next/link';
import blog from '@/data/blog';

const Blog = () => {
  return (
    <>
      {blog.slice(0, 3).map((post, index) => (
        <div
          key={index}
          className='col-lg-4 col-sm-6'
          data-aos='fade-up'
          data-aos-delay={post.delay}
        >
          <article className='blog-meta-three mt-40 wow fadeInUp'>
            <figure className='post-img m0'>
              <Link href={`#}`} className='w-100 d-block'>
                <Image
                  width={388}
                  height={200}
                  src={post.imageSrc}
                  alt='blog'
                  className='lazy-img w-100 tran4s object-fit-cover'
                />
              </Link>
            </figure>
            <div className='post-data mt-40'>
              <Link href={`#`} className='mt-5 mb-35 lg-mb-20'>
                <h4 className='tran3s blog-title fw-normal tx-dark fw-medium'>
                  {post.title}
                </h4>
              </Link>
              <div>
                <div>
                </div>
                <Link
                  href={`#`}
                  className='mt-0 btn-outline-mainCol fw-500 tran3s'
                >
                  Join Course
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
