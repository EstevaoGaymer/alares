// Aguarda o documento HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Lógica para abrir e fechar o menu mobile
    mobileMenuBtn.addEventListener("click", () => {
        // Alterna entre flex e hidden usando as classes do Tailwind
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex");
        } else {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO PREMIUM NO HEADER (SCROLL)
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md', 'bg-white/95');
                navbar.classList.remove('bg-white/90', 'shadow-sm');
            } else {
                navbar.classList.remove('shadow-md', 'bg-white/95');
                navbar.classList.add('bg-white/90', 'shadow-sm');
            }
        });
    }

    // 2. BOTÃO VOLTAR AO TOPO
    const btnBackToTop = document.getElementById("btn-back-to-top");
    if (btnBackToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                btnBackToTop.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
            } else {
                btnBackToTop.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
            }
        });
        btnBackToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. FAQ INTERATIVO
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                // Fecha os outros
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('i');
                        if (otherAnswer && !otherAnswer.classList.contains('hidden')) {
                            otherAnswer.classList.add('hidden');
                            otherIcon.style.transform = "rotate(0deg)";
                        }
                    }
                });

                // Alterna o atual
                if (answer) {
                    answer.classList.toggle('hidden');
                    const icon = question.querySelector('i');
                    if (!answer.classList.contains('hidden')) {
                        icon.style.transform = "rotate(180deg)";
                        icon.style.transition = "transform 0.3s ease";
                    } else {
                        icon.style.transform = "rotate(0deg)";
                    }
                }
            });
        });
    }

    // 4. VALIDAÇÃO DE FORMULÁRIO B2B
    const b2bForm = document.getElementById("form-b2b");
    if (b2bForm) {
        b2bForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("b2b-nome").value;
            const empresa = document.getElementById("b2b-empresa").value;
            const telefone = document.getElementById("b2b-telefone").value;
            
            if (nome.trim() === "" || empresa.trim() === "" || telefone.trim() === "") {
                alert("⚠️ Por favor, preencha todos os campos obrigatórios para que nossos engenheiros possam analisar seu caso.");
                return;
            }

            const btnSubmit = b2bForm.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerHTML;
            
            btnSubmit.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processando Solicitação...`;
            btnSubmit.classList.add('opacity-80', 'cursor-not-allowed');

            setTimeout(() => {
                btnSubmit.innerHTML = `<i class="fa-solid fa-check"></i> Recebemos seus dados!`;
                btnSubmit.classList.remove('from-amber-500', 'to-amber-600');
                btnSubmit.classList.add('bg-green-600', 'text-white');
                b2bForm.reset();
                
                setTimeout(() => {
                    btnSubmit.innerHTML = originalText;
                    btnSubmit.classList.add('from-amber-500', 'to-amber-600');
                    btnSubmit.classList.remove('bg-green-600', 'text-white', 'opacity-80', 'cursor-not-allowed');
                }, 4000);
            }, 2000);
        });
    }
});