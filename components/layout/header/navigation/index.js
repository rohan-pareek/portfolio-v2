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
            <nav className='py-5'>
                <ul className='justify-between border-gray-200 border-b pb-2 hidden md:flex'>
                    <li>
                        <Link href="/">
                            <a className={`pb-2 ${'/' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className={`pb-2 ${'/projects' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/education">
                            <a className={`pb-2 ${'/education' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Education
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills">
                            <a className={`pb-2 ${'/skills' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Skills
                            </a>
                        </Link>
                    </li>
                </ul>
                <section className='flex md:hidden'>
                    <div className='flex-1 text-lg flex justify-center items-center'>
                        {activeMeta.page}
                    </div>
                    <section className='absolute top-5 right-5'>
                        <div className='relative'>
                            <button className={css['menu-button']}>
                                <i className="fa fa-ellipsis-v"></i>
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