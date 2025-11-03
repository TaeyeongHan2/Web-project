// 스킬 프로그레스 바 애니메이션
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'progress-load 2s ease forwards';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// 카드 호버 시 3D 효과
function init3DCardEffect() {
    const cards = document.querySelectorAll('.vision-card, .interest-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// 큐브 인터랙션
function initCubeInteraction() {
    const cube = document.querySelector('.visual-cube');
    let isPaused = false;
    
    if (cube) {
        cube.addEventListener('mouseenter', () => {
            isPaused = true;
            cube.style.animationPlayState = 'paused';
        });
        
        cube.addEventListener('mouseleave', () => {
            isPaused = false;
            cube.style.animationPlayState = 'running';
        });
        
        cube.addEventListener('click', () => {
            if (!isPaused) {
                cube.style.animation = 'rotate-cube 2s ease-in-out';
                setTimeout(() => {
                    cube.style.animation = 'rotate-cube 15s infinite linear';
                }, 2000);
            }
        });
    }
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    const elements = document.querySelectorAll(
        '.vision-card, .interest-card, .skill-category, .intro-text, .intro-visual'
    );
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    init3DCardEffect();
    initCubeInteraction();
    initScrollAnimations();
    
    // 페이드인 효과
    const heroContent = document.querySelector('.hero-content-about');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// 패럴랙스 스크롤 효과
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cube = document.querySelector('.visual-cube');
    
    if (cube) {
        const speed = scrolled * 0.1;
        cube.style.transform = `rotateX(${speed}deg) rotateY(${speed}deg)`;
    }
});