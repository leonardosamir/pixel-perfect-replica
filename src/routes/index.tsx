import { createFileRoute } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowUp, MapPin, Menu, X, Clock3, Navigation, ShieldCheck, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Comparison } from '@/components/comparison';
import { clinic, mapsUrl, wazeUrl, whatsappUrl } from '@/lib/clinic';
import doctor from '@/assets/doctor-cutout.asset.json';
import clinicImage from '@/assets/clinic.asset.json';
import facial from '@/assets/facial.asset.json';
import dentalRoom from '@/assets/dental-room.asset.json';
import smile from '@/assets/smile.asset.json';
import laser from '@/assets/laser.asset.json';
import reception from '@/assets/reception.asset.json';
import skin from '@/assets/skin.asset.json';
import faceBefore from '@/assets/face-before.asset.json';
import faceAfter from '@/assets/face-after.asset.json';
import teethBefore from '@/assets/teeth-before.asset.json';
import teethAfter from '@/assets/teeth-after.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Dra. Helena — Estética Facial & Sorrisos Naturais em Santarém' },
      { name: 'description', content: 'Harmonização facial, lentes de contato dental e cuidados com a pele. Conheça a Dra. Helena em Santarém, PA, e agende sua avaliação.' },
      { property: 'og:title', content: 'Dra. Helena — Estética Facial & Odontologia' },
      { property: 'og:description', content: 'Sua essência, valorizada. Atendimento personalizado em estética facial e odontologia em Santarém, PA.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

const nav = [ ['Sobre', '#sobre'], ['Procedimentos', '#procedimentos'], ['Resultados', '#resultados'], ['Contato', '#contato'] ];
const carousel = [
  { image: facial.url, alt: 'Estética facial natural' },
  { image: dentalRoom.url, alt: 'Ambiente odontológico ilustrativo' },
  { image: smile.url, alt: 'Sorriso natural' },
  { image: laser.url, alt: 'Tecnologia de cuidado da pele' },
  { image: reception.url, alt: 'Recepção ilustrativa' },
  { image: skin.url, alt: 'Tratamento facial ilustrativo' },
];
const procedures = [
  { image: facial.url, name: 'Harmonização Facial Natural', description: 'Rejuvenescimento e equilíbrio de traços, preservando o que faz você ser única.' },
  { image: smile.url, name: 'Lentes de Contato Dental', description: 'Design de sorriso ultrafino, resistente e com uma naturalidade que encanta.' },
  { image: skin.url, name: 'Bioestimuladores & Lasers', description: 'Tecnologias avançadas para firmeza, textura e qualidade da sua pele.' },
];

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
function MaskTitle({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <div className="overflow-hidden"><motion.div initial={reduced ? false : { y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: .9, ease: [.22, 1, .36, 1] }}>{children}</motion.div></div>;
}
function Appointment({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <Button variant="appointment" asChild className={className}><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{children}</a></Button>;
}
function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7.5c-.4 0-1 1-1 1.8 0 2.8 3.8 6.5 6.7 6.5.9 0 1.8-.6 2-1.2.1-.4.1-.7-.1-.8l-2-1c-.3-.2-.5 0-.7.3l-.6.7c-.2.2-.4.2-.7.1-1.2-.6-2.3-1.5-2.8-2.7-.2-.3-.1-.5.1-.7l.5-.6c.2-.2.3-.4.2-.7l-.8-1.7c-.1-.3-.3-.3-.8-.3Z" fill="currentColor"/></svg>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <main className="page-shell">
      <section className="hero" id="inicio">
        <header className="site-header container">
          <a className="wordmark" href="#inicio" aria-label="Dra. Helena, início">Dra. Helena<span>.</span><small>Estética Facial & Odontologia</small></a>
          <div className="header-meta"><span className="availability"><i className="status-dot" />Agenda aberta / Poucas vagas</span><span className="location"><MapPin size={12} />Atendimento em Santarém, PA</span></div>
          <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
          <Button variant="ghost" size="icon" className="menu-trigger" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
        </header>
        <div className="carousel-scene" aria-hidden="true"><div className="carousel-track">{[...carousel, ...carousel, ...carousel].map((item, i) => <div className="carousel-card" key={i}><img src={item.image} alt="" /></div>)}</div></div>
        <motion.div className="hero-portrait" initial={reduced ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}><img src={doctor.url} alt="Retrato ilustrativo de uma especialista em estética" fetchPriority="high" /></motion.div>
        <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .4 }}>
          <p className="eyebrow">Harmonização & Odontologia Estética</p>
          <h1>Estética Facial &<br />Sorrisos <em>Naturais</em></h1>
          <Appointment className="appointment"><ArrowUpRight size={17} />Agendar avaliação</Appointment>
        </motion.div>
        <motion.div className="hero-authority" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: .7 }}><div className="small-line" /><p>Ajudo pacientes exigentes a conquistarem resultados naturais, com segurança e tecnologia de ponta.</p><div className="signature">Dra. Helena</div></motion.div>
        <div className="hero-bottom"><a href="#procedimentos">Sua essência, valorizada <ArrowDown size={12} /></a><span className="photo-note">Fotografias ilustrativas · Não representam a profissional</span></div>
      </section>
      <div className="specialty-strip"><div className="container"><span>Naturalidade em cada detalhe</span><i /><span>Protocolos personalizados</span><i /><span>Cuidado e precisão</span><i /><span>Santarém, Pará</span></div></div>
      <section className="section procedures" id="procedimentos">
        <div className="procedures-background"><motion.img src={clinicImage.url} alt="Consultório odontológico luxuoso ilustrativo" loading="lazy" initial={{ scale: 1 }} whileInView={{ scale: reduced ? 1 : 1.06 }} transition={{ duration: 12 }} /></div>
        <div className="container">
          <Reveal className="section-heading"><p className="eyebrow">Beleza que respeita sua identidade</p><MaskTitle><h2>Protocolos <em>Personalizados</em></h2></MaskTitle><p>Não existe uma beleza igual à outra. Seu cuidado começa com uma escuta atenta, um olhar individualizado e a escolha do protocolo ideal para você.</p></Reveal>
          <div className="procedure-grid">{procedures.map((procedure, i) => <Reveal key={procedure.name} delay={i * .12}><article className="procedure-card"><img src={procedure.image} alt={`${procedure.name} — imagem ilustrativa`} loading="lazy" /><span className="procedure-number">0{i + 1}</span><div className="procedure-content"><h3>{procedure.name}</h3><p>{procedure.description}</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Agendar avaliação deste protocolo<ArrowUpRight size={16} /></a></div></article></Reveal>)}</div>
          <p className="section-footnote"><ShieldCheck size={14} />Cada indicação é definida após avaliação individual.</p>
        </div>
      </section>
      <section className="section results" id="resultados"><div className="container">
        <Reveal className="section-heading"><div><p className="eyebrow">O equilíbrio faz a diferença</p><MaskTitle><h2>Natural em cada <em>detalhe.</em></h2></MaskTitle></div><p>Suavizar, realçar, preservar. Uma estética que valoriza sua expressão e a singularidade do seu sorriso.</p></Reveal>
        <div className="comparison-grid"><Reveal><Comparison before={faceBefore.url} after={faceAfter.url} label="Equilíbrio & qualidade de pele" /></Reveal><Reveal delay={.12}><Comparison before={teethBefore.url} after={teethAfter.url} label="Harmonia do sorriso" /></Reveal></div>
        <p className="ethical-note">Imagens meramente ilustrativas de casos clínicos. Os resultados podem variar de acordo com as características individuais de cada paciente. As comparações acima são simulações, não resultados de pacientes da clínica.</p>
        <div className="experience"><div className="experience-top"><h3>Uma experiência de cuidado.</h3><p>Depoimentos de pacientes serão publicados após autorização.</p></div><div className="experience-grid">{[
          { icon: Sparkles, title: 'Naturalidade em primeiro lugar', text: 'Um olhar atento às suas proporções, sem apagar sua identidade ou transformar sua expressão.' },
          { icon: Heart, title: 'Conforto em cada etapa', text: 'Acolhimento, escuta e cuidado para que você se sinta à vontade do primeiro contato ao acompanhamento.' },
          { icon: ShieldCheck, title: 'Atenção exclusiva para você', text: 'Tempo dedicado à sua avaliação e um planejamento individual, com clareza sobre cada etapa.' },
        ].map((item, i) => <Reveal key={item.title} delay={i * .1}><article className="experience-card"><item.icon size={21} strokeWidth={1.3} /><h4>{item.title}</h4><p>{item.text}</p></article></Reveal>)}</div></div>
      </div></section>
      <section className="section about" id="sobre"><div className="container about-grid">
        <Reveal><div className="about-photo"><img className="clinic-image" src={clinicImage.url} alt="Ambiente ilustrativo de consultório" loading="lazy" /><img className="doctor-image" src={doctor.url} alt="Retrato editorial ilustrativo — não representa a Dra. Helena" loading="lazy" /><span>Retrato e ambiente ilustrativos</span></div></Reveal>
        <Reveal className="about-copy"><p className="eyebrow">Conheça sua especialista</p><MaskTitle><h2>Dra. Helena<br /><em>Um olhar além da estética.</em></h2></MaskTitle><p>Acreditamos que o melhor resultado é aquele que revela sua beleza sem deixar de ser você. Por isso, cada plano de cuidado começa com uma conversa, uma avaliação criteriosa e respeito às suas expectativas.</p><p>Em Santarém, a proposta da Dra. Helena une estética facial e odontologia estética em uma experiência personalizada, do primeiro encontro ao acompanhamento.</p><div className="credential"><strong>Cirurgiã-dentista · Bucomaxilofacial</strong><p>Atuação em cirurgia e traumatologia bucomaxilofacial.</p><p>CRO-PA 123456789</p></div><div className="signature">Dra. Helena</div></Reveal>
      </div></section>
      <section className="section contact" id="contato"><div className="container"><Reveal className="contact-band">
        <div className="contact-info"><p className="eyebrow">Seu próximo encontro com o cuidado</p><h2>Esperamos por você.</h2><div className="contact-details"><MapPin size={18} /><p><strong>Santarém, Pará</strong><br />{clinic.address}</p></div><div className="contact-details"><Clock3 size={18} /><p><strong>Horários de atendimento</strong><br />Segunda a sexta, das 08h às 19h<br />Atendimento com agendamento prévio</p></div><div className="contact-actions"><Button variant="champagne" asChild><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin />Google Maps<ArrowUpRight /></a></Button><Button variant="champagne" asChild><a href={wazeUrl} target="_blank" rel="noopener noreferrer"><Navigation />Waze<ArrowUpRight /></a></Button></div></div>
        <div className="contact-invite"><MessageCircle size={25} className="text-champagne mb-6" strokeWidth={1.2} /><h3>O primeiro passo é<br /><em>uma conversa.</em></h3><p>Conte o que você deseja valorizar. Vamos encontrar, juntas, o cuidado que faz sentido para você.</p><Appointment><ArrowUpRight />Agendar minha consulta pelo WhatsApp</Appointment><a className="phone text-muted-foreground" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">(93) 99247-8347</a></div>
      </Reveal></div></section>
      <footer className="footer"><div className="container"><a className="wordmark" href="#inicio">Dra. Helena<span>.</span></a><p>Estética Facial & Odontologia · Santarém, PA<br />© {new Date().getFullYear()} Dra. Helena. Todos os direitos reservados.</p><a className="back-top" href="#inicio">Voltar ao início<ArrowUp size={13} /></a></div></footer>
      <Button variant="whatsapp" size="icon" className="floating-whatsapp" asChild><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Agendar avaliação pelo WhatsApp" title="Agendar pelo WhatsApp"><WhatsAppIcon /></a></Button>
    </main>
  );
}
