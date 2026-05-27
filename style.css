/**
 * ==========================================================================
 * ALARES INTERNET - CORE JAVASCRIPT ENGINE
 * Versão: 4.0.0 (Majestic Enterprise Edition)
 * Descrição: Script global modularizado, otimizado para alta performance (60fps)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    /** MÓDULO 1: EFEITOS DE SCROLL */
    const initScrollEffects = () => {
        const navbar = document.querySelector('nav');
        let progressBar = document.getElementById('scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            document.body.prepend(progressBar);
        }

        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = (winScroll / height) * 100;
                    progressBar.style.width = `${scrolled}%`;

                    if (navbar) {
                        if (winScroll > 50) {
                            navbar.classList.add('shadow-xl', 'bg-white/95', 'border-b-transparent');
                            navbar.classList.remove('bg-white/90', 'shadow-sm');
                        } else {
                            navbar.classList.remove('shadow-xl', 'bg-white/95', 'border-b-transparent');
                            navbar.classList.add('bg-white/90', 'shadow-sm');
                        }
                    }
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }, { passive: true });
    };

    /** MÓDULO 2: CONTADORES DINÂMICOS */
    const initDynamicCounters = () => {
        const counters = document.querySelectorAll('.dynamic-counter');
        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const speed = 100; 
            const inc = target / speed;
            let currentCount = 0;

            const updateCount = () => {
                currentCount += inc;
                if (currentCount < target) {
                    counter.innerText = Math.ceil(currentCount) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            updateCount();
        };

        const observerOptions = { threshold: 0.5 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    };

    /** MÓDULO 3: BOTÃO VOLTAR AO TOPO */
    const initBackToTop = () => {
        const btnBackToTop = document.getElementById("btn-back-to-top");
        if (!btnBackToTop) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                btnBackToTop.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
            } else {
                btnBackToTop.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
            }
        }, { passive: true });

        btnBackToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    };

    /** MÓDULO 4: FAQ ACORDEÃO */
    const initFAQAccordion = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length === 0) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.fa-chevron-down');

            if (!question || !answer || !icon) return;

            question.addEventListener('click', () => {
                const isOpen = !answer.classList.contains('hidden');
                faqItems.forEach(otherItem => {
                    otherItem.querySelector('.faq-answer')?.classList.add('hidden');
                    otherItem.querySelector('.fa-chevron-down')?.classList.remove('rotate-180', 'text-[#0050FF]');
                });

                if (!isOpen) {
                    answer.classList.remove('hidden');
                    icon.classList.add('rotate-180', 'text-[#0050FF]');
                }
            });
        });
    };

    /** MÓDULO 5: BUSCA DE CEP */
    const initCEPSearch = () => {
        const btnBuscar = document.getElementById('btn-buscar-cep');
        const inputCep = document.getElementById('cep-input');
        const resultDiv = document.getElementById('cep-result');

        if (!btnBuscar || !inputCep || !resultDiv) return;

        btnBuscar.addEventListener('click', () => {
            const valor = inputCep.value.trim();
            if (valor === '') {
                resultDiv.className = "mt-6 p-5 rounded-2xl border border-red-500 bg-red-500/20 text-red-100 font-bold text-lg block animate-slide-heavy backdrop-blur-md shadow-lg";
                resultDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-2"></i> Digite um CEP ou Cidade válida para buscar.';
                return;
            }

            const originalText = btnBuscar.innerHTML;
            btnBuscar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Consultando Engenharia...';
            btnBuscar.classList.add('opacity-80', 'cursor-not-allowed');
            resultDiv.classList.add('hidden');

            setTimeout(() => {
                btnBuscar.innerHTML = originalText;
                btnBuscar.classList.remove('opacity-80', 'cursor-not-allowed');
                resultDiv.className = "mt-6 p-5 rounded-2xl border border-green-400 bg-green-500/20 text-green-100 font-bold text-lg block animate-slide-heavy backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.3)]";
                resultDiv.innerHTML = `<div class="flex items-center gap-3"><i class="fa-solid fa-check-circle text-2xl text-green-400"></i> <span>Excelente! Identificamos cobertura de ultravelocidade para a região buscada. <a href="planos.html" class="underline text-white ml-2 hover:text-[#FF6B00] transition-colors">Ver planos residenciais.</a></span></div>`;
            }, 1500);
        });

        inputCep.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') btnBuscar.click();
        });
    };

    /** MÓDULO 6: CALCULADORA B2B */
    const initB2BCalculator = () => {
        const b2bCheckboxes = document.querySelectorAll('.calc-b2b');
        const resTitulo = document.getElementById('resultado-b2b-titulo');
        const resTexto = document.getElementById('resultado-b2b-texto');

        if (b2bCheckboxes.length === 0 || !resTitulo || !resTexto) return;

        const diagnosticos = {
            vazio: { titulo: "Selecione uma opção acima", texto: "Aguardando a seleção do escopo do projeto para exibir a recomendação técnica estruturada." },
            full: { titulo: "Solução Full Corporate 360º", texto: "A topologia perfeita! Interligamos suas filiais via SD-WAN sobre nosso Link Dedicado Ultra, e migramos toda a sua comunicação para o PABX Cloud. Redução de custos e gestão centralizada absoluta." },
            sdwan: { titulo: "Alares SD-WAN + Link Dedicado", texto: "Substitua links MPLS caros por SD-WAN. Criamos túneis criptografados entre suas unidades, garantindo segurança e roteamento inteligente do tráfego corporativo." },
            link: { titulo: "Link Dedicado Alta Capacidade", texto: "100% de garantia de banda simétrica com SLA de 99.9%. Seus ERPs em nuvem (SAP, TOTVS) rodarão sem nenhum gargalo ou oscilação de latência." },
            pabx: { titulo: "PABX IP Cloud Avançado", texto: "Acabe com a infraestrutura física de telefonia. Entregamos ramais via app, gravação de chamadas em nuvem e URAs inteligentes para profissionalizar seu atendimento." }
        };

        const updateDiagnostico = () => {
            const escolhas = Array.from(b2bCheckboxes).filter(b => b.checked).map(b => b.value);
            resTitulo.classList.remove('animate-triumphant');
            void resTitulo.offsetWidth; 

            if(escolhas.length === 0) {
                resTitulo.innerText = diagnosticos.vazio.titulo;
                resTexto.innerText = diagnosticos.vazio.texto;
            } else if (escolhas.includes('sdwan') && escolhas.includes('link') && escolhas.includes('pabx')) {
                resTitulo.innerText = diagnosticos.full.titulo;
                resTexto.innerText = diagnosticos.full.texto;
            } else if (escolhas.includes('sdwan')) {
                resTitulo.innerText = diagnosticos.sdwan.titulo;
                resTexto.innerText = diagnosticos.sdwan.texto;
            } else if (escolhas.includes('link')) {
                resTitulo.innerText = diagnosticos.link.titulo;
                resTexto.innerText = diagnosticos.link.texto;
            } else if (escolhas.includes('pabx')) {
                resTitulo.innerText = diagnosticos.pabx.titulo;
                resTexto.innerText = diagnosticos.pabx.texto;
            }
            resTitulo.classList.add('animate-triumphant');
        };

        b2bCheckboxes.forEach(box => box.addEventListener('change', updateDiagnostico));
        
        const formB2B = document.getElementById('form-b2b');
        if (formB2B) {
            formB2B.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = formB2B.querySelector('button');
                btn.innerHTML = '<i class="fa-solid fa-check text-slate-900"></i> Solicitação Recebida!';
                btn.classList.add('bg-green-500');
                btn.classList.remove('bg-amber-500');
            });
        }
    };

    /** MÓDULO 7: MEGA CARROSSEL */
    const initCarousel = () => {
        const track = document.getElementById('carousel-track');
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next-slide');
        const prevButton = document.getElementById('prev-slide');
        const dotsNav = document.getElementById('carousel-indicators');
        const dots = dotsNav ? Array.from(dotsNav.children) : [];
        
        if (slides.length === 0) return;

        let currentIndex = 0;
        let autoPlayInterval;

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 33.333}%)`;
            dots.forEach(dot => {
                dot.classList.remove('bg-white', 'scale-125');
                dot.classList.add('bg-white/50');
            });
            if(dots[index]) {
                dots[index].classList.remove('bg-white/50');
                dots[index].classList.add('bg-white', 'scale-125');
            }
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        };

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        if (nextButton) nextButton.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
        if (prevButton) prevButton.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoPlay();
                currentIndex = index;
                updateCarousel(currentIndex);
                startAutoPlay();
            });
        });

        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) { stopAutoPlay(); nextSlide(); startAutoPlay(); }
            if (touchEndX > touchStartX + 50) { stopAutoPlay(); prevSlide(); startAutoPlay(); }
        };

        updateCarousel(0);
        startAutoPlay();
    };

    /** MÓDULO 8: MICROINTERAÇÃO DE CURSOR CUSTOMIZADO */
    const initCustomCursor = () => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = document.getElementById('custom-cursor');
        const follower = document.getElementById('custom-cursor-follower');
        
        if (!cursor || !follower) return;

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });

        const render = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        const attachHoverEffects = () => {
            const clickables = document.querySelectorAll('a, button, input, select, textarea, label, .cursor-pointer');
            clickables.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('hover');
                    follower.classList.add('hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hover');
                    follower.classList.remove('hover');
                });
            });
        };
        
        attachHoverEffects();
    };

    /** MÓDULO 9: BANNER DE CONSENTIMENTO LGPD */
    const initLGPDBanner = () => {
        const banner = document.getElementById('lgpd-banner');
        const btnAccept = document.getElementById('btn-lgpd-accept');
        
        if (!banner || !btnAccept) return;

        const hasAccepted = localStorage.getItem('alares_lgpd_accepted');

        if (!hasAccepted) {
            setTimeout(() => {
                banner.classList.remove('translate-y-full');
                banner.classList.add('translate-y-0');
            }, 1500);
        }

        btnAccept.addEventListener('click', () => {
            localStorage.setItem('alares_lgpd_accepted', 'true');
            banner.classList.remove('translate-y-0');
            banner.classList.add('translate-y-full');
        });
    };

    // ==========================================
    // INICIALIZADOR GLOBAL MESTRE
    // ==========================================
    const initApp = () => {
        initScrollEffects();
        initDynamicCounters();
        initBackToTop();
        initFAQAccordion();
        initCEPSearch();
        initB2BCalculator();
        initCarousel();
        initCustomCursor();
        initLGPDBanner();
        console.log("%c✓ Alares Core Engine (Majestic Enterprise) carregado com sucesso.", "color: #F59E0B; font-weight: bold; font-size: 12px;");
    };

    initApp();
});
