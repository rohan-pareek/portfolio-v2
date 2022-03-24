import React, { useMemo } from 'react';
import Link from 'next/link';
import Container from '../../container';
import { useRouter } from 'next/router';
import CustomMeta from '../../../meta';

const Navigation = props => {

    const { asPath } = useRouter();

    const activeMeta = useMemo(() => {
        switch (asPath) {
            case '/':
                return {
                    title: 'Home',
                    description: 'Welcome to my digital portfolio. You can access my work, education related details'
                }
            case '/projects':
                return {
                    title: 'Projects',
                    description: 'Project related information of Rohan Pareek'
                }
            case '/education':
                return {
                    title: 'Education',
                    description: 'Education related information of Rohan Pareek'
                }
            case '/skills':
                return {
                    title: 'Skills',
                    description: 'Skills related information of Rohan Pareek'
                }

            default:
                return {
                    title: 'Rohan Pareek',
                    description: 'Digital Portfolio of Rohan Pareek'
                }
        }
    }, [asPath]);

    return (
        <>
            <CustomMeta title={activeMeta.title} description={activeMeta.description} />
            <nav className='py-5'>
                <ul className='flex justify-between'>
                    <li>
                        <Link href="/">
                            <a className={`${'/' === asPath ? 'border-brand-dark border-b-4' : 'hover:'}`}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className={`${'/projects' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/education">
                            <a className={`${'/education' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Education
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills">
                            <a className={`${'/skills' === asPath ? 'border-brand-dark border-b-4' : ''}`}>
                                Skills
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Navigation;