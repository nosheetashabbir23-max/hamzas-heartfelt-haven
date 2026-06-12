import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import img1 from "@/assets/hamza/Screenshot_20250612_134904.asset.json";
import img2 from "@/assets/hamza/Screenshot_20250612_134909.asset.json";
import img3 from "@/assets/hamza/Screenshot_20250612_134914.asset.json";
import img4 from "@/assets/hamza/Screenshot_20250612_201559.asset.json";
import img5 from "@/assets/hamza/IMG-20251007-WA0036_1.asset.json";
import img6 from "@/assets/hamza/IMG-20251219-WA0133_1.asset.json";
import img7 from "@/assets/hamza/IMG-20251220-WA0000.asset.json";
import img8 from "@/assets/hamza/image.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Hamza ❤️" },
      { name: "description", content: "A heartfelt birthday tribute to Hamza — Chotuu, Chipkaly, Akhroat, Zakota Jin." },
      { property: "og:title", content: "Happy Birthday Hamza ❤️" },
      { property: "og:description", content: "Stay happy. Stay blessed. Stay yourself." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@600;700&display=swap",
      },
    ],
  }),
  component: BirthdayPage,
});

const photos = [
  { src: img1.url, caption: "Khary to ese ho jese tumhari shadi hai 😂." },
  { src: img7.url, caption: "paak Sar zameen sahd baad 😂." },
  { src: img4.url, caption: "The Akhroat 😁" },
  { src: img2.url, caption: "Beautyphul 🐵" },
  { src: img8.url, caption: "Pory k Pory 32 Dant hain 😁 " },
  { src: img6.url, caption: "Special bandy ny li hai akhir 👀" },
  { src: img3.url, caption: "Seedhi kr lo gardan thak gaye hogy" },
  { src: img5.url, caption: "Ehm Ehm 👀 " },
];

const nicknames = [
  { name: "Chotuu", emoji: "❤️", line: "Sawa saal bary hony se kuch nh hota ladlee 😁" },
  { name: "Chipkaly", emoji: "🦎", line: "Sadgi chipkali or tum chipkaly 😋" },
  { name: "Akhroat", emoji: "🌰", line: "Akhroat bana dia sadgi ny mere dost ko 🤧" },
  { name: "Zakota Jin", emoji: "👻", line: "ye name is waja se k always avaliable for me 😁 " },
];

const qualities = [
  { t: "Chotuu ho ", e: "❤️", d: "Dusron ki care karty ho" },
  { t: "Take stand", e: "🤝", d: "Apne logon ke saath khara rehta hai." },
  { t: "Simple Personality", e: "🌿", d: "Show-off se door rehta hai , one of the good qualities " },
  { t: "Hardworking", e: "🚀", d: "Apne goals ke liye mehnat karta hai." },
  { t: "Respectful", e: "🌟", d: "Har kisi se achy se paitence se baat krty ho " },
  { t: "Funny Moments", e: "😂", d: "Atleat mujhy sochna nh parta bolny se pehly tumary samny 😂" },
];

const wishes = [
  "Allah tumhe sehat, khushi aur kamyabi se nawaze.",
  "Har naya saal tumhari life me naye opportunities lekar aaye.",
  "Jo cheezein tum deserve karte ho, Allah tumhe unse bhi behtar ata kare.",
  "Har mushkil asaan ho aur har dua qabool ho.",
  "May your future be brighter than every dream you've imagined.",
];

const timeline = [
  { date: "FEB 2024- 13 JUNE 2026", title: "Almost dahi saal se janty hain ek dosry ko or ek dafa larai nh hoi real wali 😭 laromgi ab se feilding set h tumari putar 😏", icon: "✨" },
  { date: " ", title: " ", icon: "📚" },
  { date: " ", title: "We have a lot of memories together. i wish agy bh esi banti rahy hassi khushi 😂", icon: "🌟" },
  { date: " ", title: "height ka flex krty ho , itu s ehok itu se koi baat nh jawo aish kro , birthday jee lo apni zindagi 😊", icon: "🎂" },
  { date: " ", title: "May Allah bless you with Success, happiness and maybe… Sadgi 👀❤", icon: "💫" },
];

function useCountdown() {
  const target = useMemo(() => {
    const now = new Date();
    const y = now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() > 13) ? now.getFullYear() + 1 : now.getFullYear();
    return new Date(y, 5, 13, 0, 0, 0);
  }, []);
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const isBirthday = now.getMonth() === 5 && now.getDate() === 13;
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, isBirthday };
}

function Particles() {
  const items = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        dur: 12 + Math.random() * 18,
        delay: Math.random() * 15,
        op: 0.3 + Math.random() * 0.5,
      })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="float-particle absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.op,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: "0 0 8px var(--gold)",
          }}
        />
      ))}
    </div>
  );
}

function FloatingHearts() {
  const items = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        dur: 14 + Math.random() * 12,
        delay: Math.random() * 18,
        size: 14 + Math.random() * 14,
      })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {items.map((h) => (
        <span
          key={h.id}
          className="heart-float absolute"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: h.size,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
            filter: "drop-shadow(0 0 6px rgba(212,160,80,0.4))",
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

function Typewriter({ text, className = "" }: { text: string; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), 45);
    return () => clearTimeout(t);
  }, [i, text]);
  return (
    <span className={className}>
      {text.slice(0, i)}
      <span className="inline-block w-[2px] h-[0.9em] bg-gold align-middle ml-0.5 shimmer" />
    </span>
  );
}

function fireConfetti() {
  const colors = ["#d4a050", "#f1d9a8", "#fef8ec", "#8a6a2f"];
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors });
  setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors }), 200);
  setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors }), 400);
}

function fireFireworks() {
  const colors = ["#d4a050", "#f1d9a8", "#ffffff", "#b8862a"];
  const end = Date.now() + 1500;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors, startVelocity: 60 });
    confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors, startVelocity: 60 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function MusicToggle({ on, setOn }: { on: boolean; setOn: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setOn(!on)}
      aria-label="Toggle music"
      className="fixed top-5 right-5 z-50 glass rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
    >
      <span className="text-lg">{on ? "🎵" : "🔇"}</span>
      {on && <span className="absolute inset-0 rounded-full border border-gold animate-ping" />}
    </button>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-12">
      {kicker && <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">{kicker}</p>}
      <h2 className="text-4xl md:text-5xl font-medium text-gold-gradient">{title}</h2>
      <div className="gold-divider w-32 mx-auto mt-6" />
    </div>
  );
}

function Cake() {
  return (
    <div className="cake-bob inline-block relative">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-10 md:h-14 rounded-md bg-gradient-to-b from-beige to-gold-soft border border-gold/40" />
        <div className="absolute bottom-9 md:bottom-13 left-1/2 -translate-x-1/2 w-16 md:w-22 h-8 md:h-10 rounded-md bg-gradient-to-b from-white to-beige border border-gold/40" />
        <div className="absolute bottom-[68px] md:bottom-[92px] left-1/2 -translate-x-1/2 w-1 h-4 bg-gold" />
        <div className="absolute bottom-[84px] md:bottom-[108px] left-1/2 -translate-x-1/2 w-2 h-3 rounded-full bg-orange-400 flame" />
      </div>
    </div>
  );
}

function BirthdayPage() {
  const { d, h, m, s, isBirthday } = useCountdown();
  const [musicOn, setMusicOn] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fireConfetti();
    if (isBirthday) setTimeout(fireFireworks, 800);
  }, [isBirthday]);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio("https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3");
      a.loop = true;
      a.volume = 0.35;
      audioRef.current = a;
    }
    if (musicOn) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [musicOn]);

  return (
    <div className="relative min-h-screen text-foreground">
      <Particles />
      <FloatingHearts />
      <MusicToggle on={musicOn} setOn={setMusicOn} />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm tracking-[0.5em] uppercase text-gold mb-6"
        >
          13 · 06 · 01
        </motion.p>

        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }}>
          <Cake />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]"
        >
          <span className="text-gold-gradient">Happy Birthday</span>
          <br />
          <span style={{ fontFamily: "var(--font-script)" }} className="text-foreground">Hamza</span>
          <span className="ml-2">🎂</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed italic"
        >
          "Happy Birthday! Thanks for always having my back. May this year bring you success, good health, and all the happiness you deserve."
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 glass rounded-2xl px-6 py-5"
        >
          {isBirthday ? (
            <p className="text-2xl md:text-3xl text-gold-gradient font-medium">
              <Typewriter text="Happy Birthday Hamza ❤️" />
            </p>
          ) : (
            <div className="flex gap-4 md:gap-6">
              {[
                { v: d, l: "Days" },
                { v: h, l: "Hours" },
                { v: m, l: "Min" },
                { v: s, l: "Sec" },
              ].map((c) => (
                <div key={c.l} className="text-center min-w-14">
                  <div className="text-3xl md:text-4xl font-display font-semibold text-gold-gradient tabular-nums">
                    {String(c.v).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{c.l}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          onClick={() => {
            fireFireworks();
            document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 group relative inline-flex items-center gap-2 rounded-full px-8 py-4 bg-ink text-background font-medium tracking-wide hover:scale-105 transition-transform shadow-xl"
          style={{ boxShadow: "0 10px 40px -10px var(--gold)" }}
        >
          <span>Start the Journey</span>
          <span className="text-gold">❤️</span>
          <span className="absolute inset-0 rounded-full border border-gold/40 group-hover:scale-110 transition-transform" />
        </motion.button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-widest">scroll ↓</div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <SectionTitle kicker="Memories" title="Hamza Through The Years 📸" />
        <p className="text-center text-muted-foreground italic max-w-xl mx-auto -mt-6 mb-12">
          "Har photo ek memory hai, aur har memory ki apni ek story."
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightbox(p.src)}
              className={`group relative overflow-hidden rounded-2xl glass ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"}`}
            >
              <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-background text-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="text-gold">— </span>
                {p.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* LETTER */}
      <section className="relative z-10 px-6 py-24 max-w-3xl mx-auto">
        <SectionTitle kicker="From the heart" title="A Letter For Hamza 💌" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 relative"
        >
          <div className="absolute -top-3 -left-3 text-6xl text-gold/40 font-display select-none">"</div>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/90">
            <p className="font-display text-2xl">Hamza,</p>
            <p>Tum un logon me se ho jo bina zyada effort ke logon ke chehron par smile le aate hain. Tumhari simplicity, tumhari honesty aur tumhara caring nature tumhari sab se khoobsurat qualities hain.</p>
            <p>Main dua karti hoon ke tumhari zindagi me hamesha sukoon, khushi, kamyabi aur ache log rahen.</p>
            <p>Har saal tum aur zyada mature, successful aur khush bano.</p>
            <p>Tumhari har mehnat rang laye aur tumhara har sapna poora ho.</p>
            <p className="text-gold-gradient text-2xl pt-2" style={{ fontFamily: "var(--font-script)" }}>
              Happy Birthday Chotuu ❤️
            </p>
          </div>
        </motion.div>
      </section>

      {/* NICKNAMES */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <SectionTitle kicker="The legendary" title="Official Nickname Collection 😂" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nicknames.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-8 group cursor-default"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-3xl font-display text-gold-gradient">{n.name}</h3>
                <span className="text-3xl group-hover:scale-125 transition-transform">{n.emoji}</span>
              </div>
              <div className="gold-divider mb-4" />
              <p className="italic text-muted-foreground">"{n.line}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SADGI */}
      <section className="relative z-10 px-6 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌙 ✨ ⭐</div>
          <h2 className="text-4xl md:text-5xl font-medium text-gold-gradient">Mission Sadgi 💫</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-2xl shimmer">✨</div>
          <div className="absolute bottom-4 left-4 text-2xl shimmer" style={{ animationDelay: "1s" }}>🌙</div>
          <div className="absolute top-1/2 right-10 text-xl shimmer" style={{ animationDelay: "2s" }}>⭐</div>
          <div className="space-y-5 leading-relaxed text-base md:text-lg relative z-10">
            <p>Hamza ne apni imagination me ek character create kiya hai jiska naam hai <span className="text-gold font-medium">'Sadgi'</span>.</p>
            <p>Ek aisi larki jo simple ho, sincere ho, family-oriented ho aur dil ki achi ho.</p>
            <p>Is birthday par dil se dua hai ke Hamza ko zindagi me wahi sukoon aur companionship mile jiski wo umeed rakhta hai.</p>
            <p className="italic text-gold-soft">Aur agar kahin Sadgi already exist karti hai, to usay GPS signal mil jaye. 😂❤️</p>
          </div>
        </motion.div>
      </section>

      {/* QUALITIES */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <SectionTitle kicker="What we love" title="Things We Appreciate About Hamza" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualities.map((q, i) => (
            <motion.div
              key={q.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{q.e}</div>
              <h3 className="text-xl font-display mb-1">{q.t}</h3>
              <p className="text-sm text-muted-foreground">{q.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WISHES */}
      <section className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <SectionTitle kicker="Duayein" title="Birthday Wishes Wall" />
        <div className="columns-1 md:columns-2 gap-5 space-y-5">
          {wishes.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid glass rounded-2xl p-6"
            >
              <div className="text-gold font-display text-3xl leading-none mb-2">#{i + 1}</div>
              <p className="italic text-foreground/90">"{w}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative z-10 px-6 py-24 max-w-3xl mx-auto">
        <SectionTitle kicker="The journey" title="Memory Timeline" />
        <div className="relative pl-8 md:pl-12 border-l border-gold/40">
          {timeline.map((t, i) => (
            <motion.div
              key={t.date}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[42px] md:-left-[58px] top-0 w-10 h-10 rounded-full glass flex items-center justify-center text-lg">
                {t.icon}
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-1">{t.date}</div>
                <div className="text-xl font-display">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="relative z-10 px-6 py-32 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16"
        >
          <Cake />
          <h2 className="mt-6 text-4xl md:text-6xl font-display text-gold-gradient">
            Happy Birthday, Hamza. ❤️
          </h2>
          <div className="gold-divider w-40 mx-auto my-8" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 italic">
            Chotuu, Chipkaly, Akhroat, Zakota Jin… <br />
            Chahe nickname koi bhi ho, dua yehi hai ke tumhari zindagi khushiyon, sukoon aur kamyabi se bhari rahe.
          </p>
          <p className="mt-6 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-script)" }}>
            Stay happy. Stay blessed. Stay yourself.
          </p>
          <button
            onClick={() => {
              fireFireworks();
              fireConfetti();
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-gold to-gold-soft text-ink font-medium hover:scale-105 transition-transform shadow-xl"
          >
            🎆 Celebrate Again
          </button>
        </motion.div>
        <p className="mt-10 text-xs tracking-[0.4em] uppercase text-muted-foreground">
          Made with ❤️ — for Hamza
        </p>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-full rounded-2xl shadow-2xl border border-gold/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
