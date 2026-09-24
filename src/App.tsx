import { Instagram, MapPin, Menu, MessageCircle } from "lucide-react";

import blondeDetail from "@/assets/symone-blonde-detail.jpg";
import heroEditorial from "@/assets/symone-hero-editorial.jpg";
import nailsHands from "@/assets/symone-nails-hands.jpg";
import stylistPortrait from "@/assets/symone-stylist-portrait.jpg";
import wavesBack from "@/assets/symone-waves-back.jpg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WHATSAPP_URL = "https://wa.me/5543998306909";
const INSTAGRAM_URL = "https://www.instagram.com/";
const MAPS_URL = "https://maps.app.goo.gl/N6hoFiGDaeF4nQPj9";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458.0361819945853!2d-51.2008347!3d-23.3052544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5bb2103a2e57%3A0x4a43f6d1ef73797d!2sGiovana%20hair!5e0!3m2!1spt-BR!2sbr!4v1790122685772!5m2!1spt-BR!2sbr";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Instagram", href: "#instagram" },
];

const services = [
  {
    title: "Corte de cabelo",
    text: "Cortes personalizados que respeitam seu estilo, formato e personalidade.",
    image: heroEditorial,
  },
  {
    title: "Reflexo",
    text: "Iluminação e transformação para realçar a beleza dos seus cabelos.",
    image: blondeDetail,
  },
  {
    title: "Escova",
    text: "Cabelos alinhados, leves e impecáveis para qualquer ocasião.",
    image: wavesBack,
  },
  {
    title: "Hidratação",
    text: "Cuidados especiais para devolver brilho, maciez e vitalidade aos fios.",
    image: stylistPortrait,
  },
  {
    title: "Pé e mão",
    text: "Cuidados completos para deixar suas mãos e pés sempre bem cuidados.",
    image: nailsHands,
  },
];

const gallery = [
  {
    src: heroEditorial,
    alt: "Mulher com cabelo castanho em ondas no salão",
    className: "lg:row-span-2",
  },
  { src: blondeDetail, alt: "Resultado de reflexo loiro em cabelo feminino", className: "" },
  {
    src: wavesBack,
    alt: "Cabelo longo castanho visto de costas com ondas",
    className: "lg:row-span-2",
  },
  { src: nailsHands, alt: "Mãos femininas com manicure neutra", className: "" },
  {
    src: stylistPortrait,
    alt: "Profissional de salão em retrato editorial",
    className: "lg:col-span-2",
  },
];

export default function App() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Results />
      <About />
      <InstagramSection />
      <Location />
      <Booking />
      <Footer />
      <Button
        asChild
        variant="floating"
        size="iconLg"
        className="fixed bottom-5 right-5 z-40 md:hidden"
        aria-label="Agendar pelo WhatsApp"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
        </a>
      </Button>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#inicio"
          className="font-serif text-xl leading-none tracking-normal text-foreground"
        >
          Symone Hair Stylist
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="salon" size="sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
            </a>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-sm border-hairline bg-background px-7 py-8">
            <SheetHeader className="mb-10 text-left">
              <SheetTitle className="font-serif text-2xl font-normal">
                Symone Hair Stylist
              </SheetTitle>
              <SheetDescription>Beleza, cuidado e estilo.</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="text-lg text-foreground">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="salon" size="lg" className="mt-4 w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
      <div className="grid items-stretch overflow-hidden rounded-2xl bg-soft shadow-editorial lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
          <p className="mb-7 text-sm font-semibold uppercase text-muted-foreground">
            Symone Hair Stylist
          </p>
          <h1 className="max-w-2xl font-serif text-5xl leading-[0.96] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Beleza que valoriza quem você é.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted-foreground">
            Cuidados, beleza e estilo em um atendimento pensado para você.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="salon" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="salonOutline" size="xl">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" />
                Conheça nosso Instagram
              </a>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[430px] md:min-h-[560px]">
          <img
            src={heroEditorial}
            alt="Mulher com cabelo castanho longo em um salão elegante"
            width={1408}
            height={912}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
          Nossos serviços
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Cuidados que realçam sua beleza e valorizam o seu estilo.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <article key={service.title} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <img
                src={service.image}
                alt={service.title}
                width={912}
                height={1104}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-5 font-serif text-2xl leading-none text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Seu momento de se cuidar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Mais do que transformar o visual, queremos que cada visita seja um momento para você.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.alt}
              className={`overflow-hidden rounded-xl bg-muted ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={912}
                height={1104}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
    >
      <div className="overflow-hidden rounded-xl bg-muted">
        <img
          src={stylistPortrait}
          alt="Profissional do salão Symone Hair Stylist"
          width={912}
          height={1104}
          loading="lazy"
          className="h-full max-h-[640px] w-full object-cover grayscale"
        />
      </div>
      <div className="lg:pl-8">
        <p className="mb-5 text-sm font-semibold uppercase text-muted-foreground">Sobre o salão</p>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">Sobre a Symone</h2>
        <p className="mt-7 max-w-xl text-xl leading-9 text-foreground">
          Na Symone Hair Stylist, cada atendimento é pensado para valorizar a beleza de cada mulher.
          Unimos cuidado, atenção aos detalhes e experiência para proporcionar um resultado que
          combine com você.
        </p>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section id="instagram" className="border-y border-hairline bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase text-muted-foreground">Instagram</p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Veja nosso trabalho no Instagram
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            Conheça nossos trabalhos, transformações e novidades.
          </p>
          <Button asChild variant="salon" size="xl" className="mt-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              Seguir no Instagram
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[heroEditorial, wavesBack, blondeDetail, nailsHands].map((image, index) => (
            <figure key={index} className="aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src={image}
                alt="Galeria visual do salão Symone Hair Stylist"
                width={912}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase text-muted-foreground">Localização</p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">Venha nos visitar</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            Estamos esperando por você. Encontre a Symone Hair Stylist e venha viver seu momento de
            cuidado e beleza.
          </p>
          <div className="mt-8 border-l border-hairline pl-5">
            <p className="text-sm font-semibold uppercase text-muted-foreground">Endereço</p>
            <p className="mt-2 text-xl text-foreground">
              Rua Serra Negra 58 - Jd Bandeirantes - Londrina
            </p>
          </div>
          <Button asChild variant="salon" size="xl" className="mt-8">
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Como chegar
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-xl border border-hairline bg-muted shadow-editorial">
          <iframe
            title="Mapa da localização do salão"
            src={MAP_EMBED_URL}
            width="750"
            height="520"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="agendar" className="bg-foreground px-5 py-16 text-background md:px-8 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          Pronta para cuidar de você?
        </h2>
        <p className="mt-5 text-lg text-background/80">Entre em contato e agende seu horário.</p>
        <Button asChild variant="salonInverse" size="xl" className="mt-8">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-foreground">Symone Hair Stylist</p>
          <p className="mt-3 text-sm text-muted-foreground">© 2026 Symone Hair Stylist.</p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold uppercase text-muted-foreground">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
            WhatsApp
          </a>
          <a href="#localizacao" className="hover:text-foreground">
            Localização
          </a>
        </nav>
        <p className="font-serif text-2xl text-foreground">Beleza, cuidado e estilo.</p>
      </div>
    </footer>
  );
}
