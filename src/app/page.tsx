
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nazneen Rizvi - Web Developer</title>
        <meta name="description" content="Portfolio website of Nazneen Rizvi - Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects/>
        <Contact />
        <About/>
        
      </main>
    </>
  );
}
