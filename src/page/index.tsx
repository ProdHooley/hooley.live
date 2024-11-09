import { Contact } from '../component/contaxt';
import { Footer } from '../component/footer';
import { Hero } from '../component/hero';
import { Nav } from '../component/nav';
import { Tracks } from '../component/tracks';

export const Index = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Tracks />
            <Contact />
            <Footer />
        </>
    );
};
