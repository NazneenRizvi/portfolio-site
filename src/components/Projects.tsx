import React from 'react';
import Card from './Card';
const data = [
  {
    id: 0,
    title: 'Burger hut website',
    desc: 'A Html and CSS power base website',
    img: '/project_01.jpg',
    tags: ['Html','javascript','Css'],
  },
  {
    id: 1,
    title: 'Portfolio',
    desc: 'Next.js,React,TailwindCss powered Portfolio',
    img: '/project_02.png',
    tags: ['Next.js', 'React', 'TialwindCSS'],
  },
];

const projects =  () => { 
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="max-w-3xl mx-auto">
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 place-items-center">
        {data.map((el) => (
          <Card key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tags} />
        ))}
        </div>
      </div>
      </div>
    </section>
  );
}
export default projects;