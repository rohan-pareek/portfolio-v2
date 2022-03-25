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
                    title: 'Rohan Pareek | About',
                    description: 'Welcome to my digital portfolio. You can access my work, education related details'
                }
            case '/projects':
                return {
                    title: 'Rohan Pareek | Projects',
                    description: 'Project related information of Rohan Pareek'
                }
            case '/education':
                return {
                    title: 'Rohan Pareek | Education',
                    description: 'Education related information of Rohan Pareek'
                }
            case '/skills':
                return {
                    title: 'Rohan Pareek | Skills',
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
                <ul className='flex justify-between border-gray-200 border-b pb-2'>
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
            </nav>
        </>
    )
}


export default Navigation;