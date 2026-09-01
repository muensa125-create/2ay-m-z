'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, ChevronDown, Share2, Play, Pause, Calendar, Clock, MessageCircle, Music, X, Check, ChevronRight, Lock } from 'lucide-react';

// Timeline data
const timelineEvents = [
  {
    date: '01.07.2026',
    title: 'İlk Kıvılcım & Brawl Stars Devri',
    description: '"Şşş güzellik" ile başlayan ilk gece sohbeti, Said\'in hediye ettiği 20k kupalı hesap, gece 03:30 uykusuzluk pazarlıkları ve 8.7\'lik açılış puanı.',
    icon: '💫'
  },
  {
    date: '03.07.2026',
    title: 'Sayapark & "Olduk Artık"',
    description: 'Sayapark\'ta Obsession kaçamağı, Mersin sıcağında vedalaşma ve resmiyet kazanan ilişki.',
    icon: '🎢'
  },
  {
    date: '04.07.2026',
    title: 'Mersin - İzmir Hattı & %97 Blend',
    description: 'Konya yollarında dürüm telaşı, 77 saatlik geri sayımlar, Badem\'in aşı nöbeti ve %97 çıkan Spotify ortak müzik zevki.',
    icon: '🎵'
  },
  {
    date: '05.07.2026',
    title: 'Sürpriz Çiçek & Kurye Macerası',
    description: 'Çiftlikköy Mahallesi\'nde DAP Oto Yıkama tarifli kurye krizi, kapıda dökülen mutluluk gözyaşları ve kilit ekranına geçen o tebessüm.',
    icon: '💐'
  },
  {
    date: '06.07.2026',
    title: 'Gece Yarısı Seyyar Karpuz Nöbeti',
    description: 'Dakika başı taş-kağıt-makas kapışmaları, İlyas kuryenin 70 dakikalık rotası ve sokak ortasında ses kaydıyla "tok sesli karpuz" seçme operasyonu.',
    icon: '🍉'
  },
  {
    date: '23.08.2026',
    title: 'Büyük Sahil Kampı, Gece Denizi & Peynir Aşkı',
    description: 'Çadırda sıcaktan terleyerek beraber uyunan o gece, ilk defa gece karanlığında denize dalış, su tabancası savaşları ve Gülcan\'ın o meşhur kamp peynirine aşık oluşu.',
    icon: '⛺'
  }
];

// Polaroid data
const polaroids = [
  {
    image: '/WhatsApp Image 2026-09-01 at 17.59.40.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 17.59.402.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 17.59.403.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 17.59.404.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 17.59.415.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 18.01.416.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 18.01.427.jpeg'
  },
  {
    image: '/WhatsApp Image 2026-09-01 at 18.01.428.jpeg'
  }
];

// Love reasons
const loveReasons = [
  'Gece gözlerin kapanırken kelimeleri tek tek atarak uykuyu ertelemen',
  'Çadır sıcağında ter dökerken bile yanımda olmaktan bir an olsun şikayet etmemen',
  'Gece denize ilk defa girip ardından su tabancasıyla üstüme saldırman',
  'Sıradan bir kamp kahvaltısında bile bir peynir çeşidine tutkuyla aşık olabilmen',
  '"Bana sakın bağırma" derkenki o saf, narin ve korunmak isteyen içtenliğin',
  'Taş-kağıt-makasta hile yapıp "Dudağına yapışırım yine kazanırım" diyebilmen'
];

// WhatsApp crises
const whatsappCrises = [
  '23 Ağustos gece yarısı çadır sıcağından denize kaçış',
  'Su tabancası pususu ve kamp peyniri bağımlılığı',
  'İlyas kuryenin evi 70 dakika bulamaması',
  'Starbucks laktozsuz süt krizi ve karın ağrısı nöbeti',
  'Gece 02:50 klimayı 30 dereceye ayarlama operasyonu'
];

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedPolaroid, setSelectedPolaroid] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [checkedReasons, setCheckedReasons] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate time since relationship started
  useEffect(() => {
    const startDate = new Date('2026-07-03T00:00:00');
    
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenGift = () => {
    setShowPasswordInput(true);
  };

  const handlePasswordSubmit = () => {
    if (password === '263326') {
      setShowConfetti(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B9D', '#FF8E5E', '#1A0A10', '#FFD700']
      });
      
      setTimeout(() => {
        setShowOverlay(false);
        setIsPlaying(true);
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 1500);
    } else {
      setShowError(true);
      setPassword('');
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const toggleReason = (index: number) => {
    setCheckedReasons(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0A10] text-[#F5E6E6]">
      <audio ref={audioRef} src="/Teoman-Tesadufen.mp3" loop />
      {/* Gift Welcome Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0A10]"
          >
            <div className="absolute inset-0 overflow-hidden">
              {mounted && [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/20"
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080) + (typeof window !== 'undefined' ? window.innerHeight : 1080) 
                  }}
                  animate={{ 
                    y: -50,
                    rotate: Math.random() * 360 
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2 
                  }}
                >
                  <Heart size={20 + Math.random() * 20} />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <Gift size={80} className="mx-auto text-[#FF6B9D]" />
              </motion.div>
              
              <h1 className="text-2xl md:text-5xl font-caveat text-white mb-3">
                Karıma Özel
              </h1>
              <p className="text-lg md:text-2xl text-white/80 mb-6 font-caveat">
                Gülcan ❤️ Said
              </p>
              
              {!showPasswordInput ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenGift}
                  className="bg-[#FF6B9D] hover:bg-[#FF8E5E] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg"
                >
                  Hediyeni Aç 💝
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6B9D]/70" size={16} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                      placeholder="Şifre giriniz..."
                      className="pl-9 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 text-center border-2 border-[#FF6B9D]/50 focus:border-[#FF6B9D] focus:outline-none w-48 md:w-64 text-sm"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePasswordSubmit}
                    className="bg-[#FF6B9D] hover:bg-[#FF8E5E] text-white px-6 py-2 rounded-full text-base md:text-lg font-medium transition-colors shadow-lg"
                  >
                    Aç
                  </motion.button>
                  {showError && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm"
                    >
                      Yanlış şifre! Tekrar dene.
                    </motion.p>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-3 py-6 md:px-4 md:py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-xs md:text-base text-[#FF6B9D] mb-3 tracking-widest">
            // BİZİM HİKAYE
          </h2>
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-caveat text-[#F5E6E6] mb-3">
            Gülcan ❤️ Said
          </h1>
          <p className="text-xl md:text-3xl font-caveat text-[#FF8E5E] mb-6">
            03.07.2026
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-4"
          >
            <ChevronDown size={24} className="text-[#FF6B9D]" />
          </motion.div>
          
          <button className="fixed bottom-20 right-3 md:right-8 bg-[#FF6B9D] hover:bg-[#FF8E5E] text-white p-2 rounded-full shadow-lg transition-colors z-40">
            <Share2 size={16} />
          </button>
        </motion.section>

        {/* Live Counter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { label: 'Gün', value: timeLeft.days },
              { label: 'Saat', value: timeLeft.hours },
              { label: 'Dakika', value: timeLeft.minutes },
              { label: 'Saniye', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-[#2D1F2F] rounded-xl p-4 shadow-lg shadow-pink-900/20 text-center"
              >
                <div className="text-2xl md:text-5xl font-caveat text-[#FF8E5E] mb-1">
                  {item.value}
                </div>
                <div className="text-xs md:text-base text-[#F5E6E6]/70">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-xl md:text-3xl font-caveat text-center mb-6 md:mb-12 text-[#F5E6E6]">
            Hikayemizin Anları
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#2D1F2F] rounded-xl p-4 md:p-6 shadow-lg shadow-pink-900/20 relative"
              >
                <div className="absolute -top-2 -left-2 bg-[#FF6B9D] text-white px-3 py-0.5 rounded-full text-xs md:text-sm font-medium">
                  {event.date}
                </div>
                <div className="text-2xl md:text-3xl mb-2">{event.icon}</div>
                <h3 className="text-lg md:text-2xl font-caveat text-[#FF8E5E] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base text-[#F5E6E6]/80 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Polaroid Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-xl md:text-3xl font-caveat text-center mb-6 md:mb-12 text-[#F5E6E6]">
            Polaroidlerimiz
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {polaroids.map((polaroid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: (index % 2 === 0 ? 3 : -3) }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                onClick={() => setSelectedPolaroid(index)}
                className="cursor-pointer relative"
              >
                {/* Washi tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#FF6B9D]/50 transform -rotate-1" />
                
                <div className="bg-[#2D1F2F] p-3 pb-6 shadow-lg shadow-pink-900/20">
                  <div className="aspect-square bg-[#2D1F2F] flex items-center justify-center mb-2 overflow-hidden relative">
                    <img 
                      src={polaroid.image} 
                      alt={`Polaroid ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Polaroid Lightbox */}
        <AnimatePresence>
          {selectedPolaroid !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPolaroid(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.8, rotate: -5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#2D1F2F] p-6 pb-12 max-w-md relative"
              >
                <button
                  onClick={() => setSelectedPolaroid(null)}
                  className="absolute -top-4 -right-4 bg-[#FF6B9D] text-white p-2 rounded-full"
                >
                  <X size={20} />
                </button>
                
                <div className="aspect-square bg-[#2D1F2F] flex items-center justify-center mb-4 overflow-hidden relative">
                  <img 
                    src={polaroids[selectedPolaroid].image} 
                    alt={`Polaroid ${selectedPolaroid + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Special Note & Love Reasons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          {/* Special Note Card */}
          <div className="bg-[#3D2F3F] p-4 md:p-8 rounded-lg shadow-lg shadow-pink-900/20 mb-6 relative">
            <div className="absolute -top-2 left-4 w-16 h-5 bg-[#FF6B9D]/40 transform -rotate-2" />
            <div className="absolute -top-2 right-4 w-16 h-5 bg-[#FFB7C1]/40 transform rotate-2" />
            
            <p className="text-[#F5E6E6] leading-relaxed font-caveat text-base md:text-xl">
              Fazla abartmayı sevmezdim bu duygusal konularda ama senin güzellikte, tatlılıkta, sevgililikte abartılı bir mükemmelliğin var. Seninle konuşmak için arkadan bu müzik ve bu kelimeler dökülmeli, yoksa sana ziyan olur. Bana eşlik edip çok tatlı anılar biriktirdiğimiz için teşekkür ederim. Eminim sonrası için bunlar çok ufak kalır ama içinde sen olduğun için hissettiklerim sonrası için ufak kalmadı, kalmayacak. Tepkilerin yeter bana. Dur ve sadece tepki ver, mimiklerini göreyim. Kendini gerçekleştirme kaygısı taşımadan ya da makyaj yapmadan sadece var ol; ve oldun sevgilim, çok da güzel oldun. Ellerimi uzatıyorum şu an sana. Boşluktalar, sana erişmeye çalışıyorlar. Kim bilir belki zaman mekanı delebilir ve bir anda boynunda olurlar. Çünkü en çok arzuladıkları yer orası. Seni çok seviyorum. Karım, biriciğim, balım, hayatımın anlamı. İyi ki varsın, lütfen hep var ol. Benim seni bazen üzen gıcık bir tarafım var biliyorum. Onu dinleme. Çünkü o sana olan hislerinden delirdi ve sana aşık oldu. Onu sula, onu sensiz bırakma.
            </p>
          </div>

          {/* Love Reasons Checklist */}
          <div className="bg-[#2D1F2F] p-4 md:p-8 rounded-2xl shadow-lg shadow-pink-900/20">
            <h3 className="text-lg md:text-2xl font-caveat text-[#FF8E5E] mb-4 md:mb-6 text-center">
              Seni Sevmemin Nedenleri
            </h3>
            
            <div className="space-y-3">
              {loveReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 cursor-pointer"
                  onClick={() => toggleReason(index)}
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    checkedReasons.includes(index) 
                      ? 'bg-[#FF6B9D] border-[#FF6B9D]' 
                      : 'border-[#FF6B9D]/30'
                  }`}>
                    {checkedReasons.includes(index) && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>
                  <p className="text-sm md:text-base text-[#F5E6E6]/80 leading-relaxed">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WhatsApp Analysis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-xl md:text-3xl font-caveat text-center mb-6 md:mb-12 text-[#F5E6E6]">
            WhatsApp Wrapped
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Total Messages */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-[#FF6B9D]" size={20} />
                <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6]">Toplam Mesaj</h3>
              </div>
              <div className="text-3xl md:text-4xl font-caveat text-[#FF8E5E] mb-2">1.840+</div>
              <div className="text-xs md:text-sm text-[#F5E6E6]/60">Günlük Ortalama: ~260 Mesaj</div>
            </div>

            {/* Who Wrote More */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20">
              <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6] mb-3 md:mb-4">Kim Daha Çok Yazdı?</h3>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs md:text-sm">Gülcan</span>
                    <span className="text-xs md:text-sm font-bold text-[#FF6B9D]">56%</span>
                  </div>
                  <div className="h-3 bg-[#2D1F2F] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF6B9D] rounded-full" style={{ width: '56%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Said</span>
                    <span className="text-sm font-bold text-[#FF8E5E]">44%</span>
                  </div>
                  <div className="h-3 bg-[#2D1F2F] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF8E5E] rounded-full" style={{ width: '44%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#F5E6E6]/50 mt-3 italic">
                Gülcan'ın kelimeleri tek tek satır satır atma etkisi
              </p>
            </div>

            {/* Music Compatibility */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20">
              <div className="flex items-center gap-3 mb-3">
                <Music className="text-[#FF6B9D]" size={20} />
                <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6]">Müzik Zevki Uyumu</h3>
              </div>
              <div className="text-4xl md:text-5xl font-caveat text-[#FF8E5E] mb-2">%97</div>
              <div className="text-xs md:text-sm text-[#F5E6E6]/60">Spotify Blend</div>
            </div>

            {/* Most Used Words */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20 md:col-span-2">
              <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6] mb-3 md:mb-4">En Çok Kullanılan Kelimeler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#FF8E5E] mb-2">Said:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {['tatlım', 'şapşal', 'su iç', 'öpüyorum', 'kdlcldlc', 'aklım kalıyor', 'ye artık'].map((word, i) => (
                      <span key={i} className="bg-[#2D1F2F] px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">{word}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#FF6B9D] mb-2">Gülcan:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {['askim', 'sapsal', 'acim', 'spora gidiyom', 'hayat bitti', 'tsklerrr', 'yerim seni'].map((word, i) => (
                      <span key={i} className="bg-[#2D1F2F] px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">{word}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emoji Counters */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20 md:col-span-2 lg:col-span-3">
              <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6] mb-3 md:mb-4">Gerçek Emoji Sayaçları</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                {[
                  { emoji: '😔', count: '100+', label: 'Dertlenme imzası' },
                  { emoji: '👏🏽', count: '80+', label: 'Motivasyon alkışları' },
                  { emoji: '🥹', count: '45+', label: 'Duygulanma anları' },
                  { emoji: '🥺', count: '35+', label: 'Nazlanma & sitem' },
                  { emoji: '🥰', count: '35+', label: 'İltifat & sevgi' },
                  { emoji: '😭', count: '30+', label: 'Kurye & spor nefessizliği' },
                  { emoji: '😕', count: '30+', label: 'Merak & çaresizlik' },
                  { emoji: '😡', count: '14+', label: '"Dışarıda mısın" tripleri' },
                  { emoji: '💓', count: '12+', label: 'Özel sevgi pıtırcığı' },
                  { emoji: '👸', count: '∞', label: 'Prenses & Prens' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl mb-1">{item.emoji}</div>
                    <div className="font-bold text-[#FF8E5E] text-sm md:text-base">{item.count}</div>
                    <div className="text-xs text-[#F5E6E6]/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unforgettable Crises */}
            <div className="bg-[#2D1F2F] p-4 md:p-6 rounded-2xl shadow-lg shadow-pink-900/20 md:col-span-2 lg:col-span-3">
              <h3 className="font-caveat text-lg md:text-xl text-[#F5E6E6] mb-3 md:mb-4">Unutulmaz Kaotik Krizler</h3>
              <div className="space-y-2 md:space-y-3">
                {whatsappCrises.map((crisis, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-[#2D1F2F] rounded-lg"
                  >
                    <ChevronRight className="text-[#FF6B9D] flex-shrink-0" size={16} />
                    <span className="text-xs md:text-sm">{crisis}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center py-6 md:py-8"
        >
          <p className="font-caveat text-xl md:text-2xl text-[#FF6B9D] mb-2">
            Sonsuz Hikayemiz
          </p>
          <p className="text-xs md:text-sm text-[#F5E6E6]/60">
            Gülcan ❤️ Said
          </p>
        </motion.footer>
      </div>

      {/* Floating Music Player */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-80 bg-[#2D1F2F] rounded-2xl shadow-lg p-3 md:p-4 z-40"
      >
        <div className="flex items-center gap-3">
          {/* Vinyl Animation */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D1F2F] to-[#1A0A10] flex items-center justify-center flex-shrink-0"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF6B9D]" />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <div className="text-xs md:text-sm font-medium text-[#F5E6E6] truncate">
              📌 Teoman — Tesadüf
            </div>
            <div className="text-xs text-[#F5E6E6]/60">
              {isPlaying ? 'Çalıyor...' : 'Duraklatıldı'}
            </div>
          </div>
          
          <button
            onClick={toggleAudio}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF6B9D] hover:bg-[#FF8E5E] text-white flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}