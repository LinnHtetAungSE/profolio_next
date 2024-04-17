/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import StartupVideo from './StartupVideo';
import { Project } from '@/db/data';
import "../../../styles/detail.style.css";
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const { projects } = require('../../../../db/data');

export default function Detail() {
    const router = useRouter();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isScrollingStop, setIsScrollingStop] = useState(true);
    const [padding, setPadding] = useState('pt-[100vh]');
    const projectDetail: Project = projects[id?.toString() || ''];
    const scrollRef = useRef<HTMLDivElement>(null);
    let scrollInterval: NodeJS.Timeout | undefined;

    const backToRoadMaps = () => {
        router.push('/');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        const handleScroll = () => {
            setIsScrollingStop(true);

            setTimeout(() => {
                setIsScrollingStop(false);
            }, 3000);
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            clearTimeout(timer);
            clearInterval(scrollInterval);
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (!loading) {
            setIsScrollingStop(false);
        }
    }, [loading]);

    useEffect(() => {
        if (!isScrollingStop) {
            setIsScrollingStop(true);
            setTimeout(() => {
                if (scrollRef.current) {
                    let scrollInterval = setInterval(() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollTop += 1;
                            if (
                                scrollRef.current.scrollTop ===
                                scrollRef.current.scrollHeight -
                                scrollRef.current.clientHeight
                            ) {
                                clearInterval(scrollInterval);
                                setPadding('pt-[20px]');
                            }
                        }
                    }, 5);
                }
            }, 500);
        }

        if (isScrollingStop) {
            clearInterval(scrollInterval);
        }
    }, [isScrollingStop]);

    return (
        <>
            {loading ? (
                <StartupVideo />
            ) : (
                <div
                    className={`text-con px-4 md:px-10 lg:px-24 ${padding} flex h-full tracking-widest text-center overflow-y-auto`}
                    ref={scrollRef}
                >
                    <div className="w-screen pb-[20px]">
                        <p className="text-lg md:text-4xl font-bold mb-4 md:mb-10">{projectDetail.title}</p>
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Start Date</p>
                            <p className="md:text-3xl">{projectDetail.date.startDate}</p>
                        </div>
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">End Date</p>
                            <p className="md:text-3xl">{projectDetail.date.endDate}</p>
                        </div>
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Duration</p>
                            <p className="md:text-3xl">{projectDetail.date.duration}</p>
                        </div>
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Company</p>
                            <p className="md:text-3xl">{projectDetail.company}</p>
                        </div>
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Position</p>
                            <p className="md:text-3xl">{projectDetail.position}</p>
                        </div>
                        {projectDetail.description && (
                            <div className="mb-4 md:mb-10">
                                <p className="text-sm md:text-2xl font-bold tracking-widest">Description</p>
                                <p className="md:text-3xl">{projectDetail.description}</p>
                            </div>
                        )}
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Team</p>
                            <p className="md:text-3xl">{projectDetail.team.name}</p>
                        </div>
                        {projectDetail.team.members && (
                            <div className="mb-4 md:mb-10">
                                <p className="text-sm md:text-2xl font-bold tracking-widest">Team members</p>
                                <p className="md:text-3xl">{projectDetail.team.members}</p>
                            </div>
                        )}
                        <div className="mb-4 md:mb-10">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Techonologies</p>
                            {projectDetail.technologies.map((tech: string, index: number) => (
                                <p className="md:text-3xl" key={index}>
                                    {tech}
                                </p>
                            ))}
                        </div>
                        <div className="mb-4 md:mb-10 pb-[20px]">
                            <p className="text-sm md:text-2xl font-bold tracking-widest">Responsibilities</p>
                            <div className="md:w-[50%] mx-auto">
                                {projectDetail.responsibilities.map((responsibility: string, index: number) => (
                                    <p className="md:text-3xl" key={index}>
                                        {responsibility}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                        <button onClick={backToRoadMaps} className='group flex gap-x-2 items-center fixed bottom-5 left-2 md:left-10 font-bold'>
                            <svg
                            className='hidden md:inline-block ms-3 group-hover:ms-0 group-hover:me-3 transition-all duration-300'
                            fill="#fff"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 400.004 400.004"
                            stroke="#fff"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path>
                            </g>
                            </svg>
                            <Image className='md:hidden ms-3 group-hover:ms-0 group-hover:me-3 transition-all duration-300'
                                src="/arrow-circle-left.svg" width={50} height={50} alt='web icon' />
                            <span className='hidden md:inline-block'>Go Back</span>
                    </button>
                    {
                        projectDetail.webLink && (
                            <a href={projectDetail.webLink} target='blank' className='group flex gap-x-2 items-center fixed bottom-5 right-2 md:right-10 font-bold'>
                                <span className='hidden md:inline-block'>Visit </span>
                                    <Image className='me-3 group-hover:me-0 group-hover:ms-3 transition-all duration-300 opacity-60 md:opacity-100'
                                        src="/web_icon.png" width={50} height={50} alt='web icon' />
                            </a>)
                    }
                </div>
            )}
        </>
    );
}
