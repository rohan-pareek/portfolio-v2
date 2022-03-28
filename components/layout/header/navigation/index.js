import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomMeta from '../../../meta';
import css from './Navigation.module.css';

const Navigation = props => {

    const { asPath } = useRouter();

    const activeMeta = useMemo(() => {
        switch (asPath) {
            case '/':
                return {
                    title: 'Rohan Pareek | About',
                    description: 'Welcome to my digital portfolio. You can access my work, education related details',
                    page: 'About'
                }
            case '/projects':
                return {
                    title: 'Rohan Pareek | Projects',
                    description: 'Project related information of Rohan Pareek',
                    page: 'Projects'
                }
            case '/education':
                return {
                    title: 'Rohan Pareek | Education',
                    description: 'Education related information of Rohan Pareek',
                    page: 'Education'
                }
            case '/skills':
                return {
                    title: 'Rohan Pareek | Skills',
                    description: 'Skills related information of Rohan Pareek',
                    page: 'Skills'
                }
            case '/certificates-awards':
                return {
                    title: 'Rohan Pareek | Certificates & Awards',
                    description: 'Certificates & Awards related information of Rohan Pareek',
                    page: 'Certificates & Awards'
                }

            default:
                return {
                    title: 'Rohan Pareek',
                    description: 'Digital Portfolio of Rohan Pareek',
                    page: 'About'
                }
        }
    }, [asPath]);

    return (
        <>
            <CustomMeta title={activeMeta.title} description={activeMeta.description} />
            <nav className='lg:bg-gray-100 lg:w-48 lg:h-screen mt-5 lg:mt-0 lg:sticky lg:top-0'>
                <section className='hidden lg:flex lg:mt-10 lg:sticky lg:top-0'>
                    <ul className='justify-between border-gray-200 hidden lg:flex lg:flex-col w-48'>
                        <li className='w-full'>
                            <Link href="/">
                                <a className={`p-4 w-full block ${'/' === asPath ? 'bg-brand-light bg-b-4' : 'hover:bg-gray-200'}`}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/projects">
                                <a className={`p-4 w-full block ${'/projects' === asPath ? 'bg-brand-light bg-b-4' : 'hover:bg-gray-200'}`}>
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/education">
                                <a className={`p-4 w-full block ${'/education' === asPath ? 'bg-brand-light bg-b-4' : 'hover:bg-gray-200'}`}>
                                    Education
                                </a>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/skills">
                                <a className={`p-4 w-full block ${'/skills' === asPath ? 'bg-brand-light bg-b-4' : 'hover:bg-gray-200'}`}>
                                    Skills
                                </a>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/certificates-awards">
                                <a className={`p-4 w-full block ${'/certificates-awards' === asPath ? 'bg-brand-light bg-b-4' : 'hover:bg-gray-200'}`}>
                                    Certificate & Awards
                                </a>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className='flex lg:hidden'>
                    <div className='flex-1 text-xl font-bold flex justify-center items-center'>
                        {activeMeta.page}
                    </div>
                    <section className='absolute top-5 right-5'>
                        <div className='relative'>
                            <button className={css['menu-button']}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <div className={`absolute right-0 top-0 shadow p-2 bg-white px-4 ${css.menu}`}>
                                <ul>
                                    <li className='my-1'>
                                        <Link href="/">
                                            <a>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-1'>
                                        <Link href="/projects">
                                            <a>
                                                Projects
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-1'>
                                        <Link href="/education">
                                            <a>
                                                Education
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-1'>
                                        <Link href="/skills">
                                            <a>
                                                Skills
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-1'>
                                        <Link href="/certificates-awards">
                                            <a>
                                                Certificates & Awards
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </nav>
        </>
    )
}


export default Navigation;