import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/apiConfig.js';
import Navbar from '../../../shared/components/Navbar.jsx';
import PostPreviewCard from '../components/ui/PostPreviewCard.jsx';
import ReactPaginate from 'react-paginate';
const PostsListPage = () => {
  const [posts, setPosts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  const postsPerPage = 10;
  const getPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/posts`);
      setPosts(response.data.reverse());
    } catch (error) {
      console.log("Error getting the posts", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  const endOffset = itemOffset + postsPerPage;

  const currentPosts = posts.slice(itemOffset, endOffset);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;
    console.log(`Usuario solicitó el cambio a la página con índice ${event.selected}, que es el offset ${newOffset}`);

    setItemOffset(newOffset);
  };
  return (
    <div data-theme="light" className='min-h-screen'>
      <Navbar></Navbar>
      <div className='posts-list'>
        <div className='p-5 lg:p-12'>
          <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
            Todas las publicaciones
          </h2>
          {currentPosts.length > 0 && (
            <div className='flex flex-wrap gap-6 mt-7'>
              {currentPosts.map((post) => (
                <PostPreviewCard key={post._id} post={post} />
              ))}
            </div>
          )}

          <div className='mt-8 flex justify-center'>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Siguiente >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPages} 
              previousLabel="< Anterior"
              renderOnZeroPageCount={null}

              containerClassName="pagination flex space-x-2"
              pageLinkClassName="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
              previousLinkClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
              nextLinkClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
              activeLinkClassName="!bg-orange-600 !text-white"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakClassName="px-4 py-2 text-sm"
            />
          </div>
        </div>


      </div>
    </div>
  )
}

export default PostsListPage
