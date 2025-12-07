import React from 'react'
import Navbar from '../shared/components/Navbar.jsx'
import PostPreviewCard from '../features/posts/components/ui/PostPreviewCard.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DecorationSquaresItem from '../shared/components/ui/DecorationSquaresItem.jsx'
import ChannelCard from '../shared/components/ChannelCard.jsx'
import API_BASE_URL from '../config/apiConfig.js';
import ResearchCard from '../features/research/components/ResearchCard.jsx'

const HomePage = () => {
    const [posts, setPosts] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/api/posts`);
                setPosts(res.data.reverse());
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);


    return (
        <div data-theme="light" className='min-h-screen bg-base-100'>
            <Navbar showCta={true} />
            <div class='bg-[#f6f6f6f6] p-5 grid grid-cols-4 gap-x-3 gap-y-3 min-h-[500px]'>
                <div className='rounded-lg row-span-3 col-span-1'>
                    <div className='h-full flex items-center justify-center'>
                        <DecorationSquaresItem />
                    </div>
                </div>
                <div className='website-welcome-message ml-10 md:ml-5 h-[500px] flex justify-center items-center col-span-3'>
                    <div>
                        <h6 className='text-2xl font-clash font-semibold lg:text-5xl text-black'>Dr. Rafael Alfonso Figueroa Díaz</h6>
                        <h6 className='font-clash text-lg lg:text-3xl'>Divulgación científica para todos.</h6>
                    </div>
                </div>
            </div>
            {/** Publicaciones recientes */}
            <div className='recent-posts py-1 m-3 lg:m-10'>
                <div className='mx-auto max-w-6xl px-5 mt-6'>
                    <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
                        Publicaciones recientes
                    </h2>
                    <p className='font-clash text-lg sm:text-xl font-regular'>
                        Consulta las últimas publicaciones del sitio.
                    </p>
                </div>
                <div className="mx-auto max-w-6xl p-4 mt-2">
                    {posts.length > 0 && (
                        <div className='flex flex-wrap gap-6 mt-7'>
                            {posts.slice(0,4).map((post) => (
                                <PostPreviewCard key={post._id} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/** Canales del docente */}
            <div className='channels py-1 m-3 lg:m-10'>
                <div className='flex flex-col mx-auto max-w-6xl px-5 mt-6'>
                    <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
                        Canales
                    </h2>
                    <p className='font-clash text-lg sm:text-xl font-regular'>
                        Explora el contenido que creo en Youtube.
                    </p>
                </div>
                <div className="mx-auto max-w-6xl p-4 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <ChannelCard channelName={"Senderos de ciencia"} channelUrl={"https://www.youtube.com/@SenderosdeCiencia"} />
                        <ChannelCard channelName={"Senderos del terror"} channelUrl={"https://www.youtube.com/@Senderosdeterror-u6k"} />
                        <ChannelCard channelName={"Senderos de la mente de un ingeniero"} channelUrl={"https://www.youtube.com/@SenderosdelaMentedeunIngen-x8n"} />
                        <ChannelCard channelName={"Senderos del ayer"} channelUrl={"https://www.youtube.com/@SenderosdelAyer"} />

                    </div>
                </div>
            </div>
            {/** Investigación */}
            <div className='research-elements'>
                <div className='flex flex-col mx-auto max-w-6xl px-5 mt-6'>
                    <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
                        Investigación
                    </h2>
                    <p className='font-clash text-lg sm:text-xl font-regular'>
                        Publicaciones científicas y libros en los que he participado.
                    </p>
                </div>
                <div className="mx-auto max-w-6xl p-4 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <ResearchCard
                            researchName={"Dynamic response in non‑perpendicular stiff main directional rotors using coordinate transformation"}
                            researchUrl={"https://scholar.google.es/citations?view_op=view_citation&hl=es&user=OUPhepkAAAAJ&citation_for_view=OUPhepkAAAAJ:Y0pCki6q_DkC"} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
