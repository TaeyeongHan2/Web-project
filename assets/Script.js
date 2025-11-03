// 네비게이션 활성화 상태 업데이트
function updateActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/Web-project/')) {
            link.classList.add('active');
        }
    });
}

// 스크롤 시 네비게이션 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 31, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 31, 0.8)';
    }
});

// 마우스 따라다니는 효과
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const floatItems = document.querySelectorAll('.float-item');
    floatItems.forEach((item, index) => {
        const speed = (index + 1) * 0.01;
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        
        item.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    updateActiveNav();
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // 카드 순차적 애니메이션
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Intersection Observer로 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// 관찰할 요소들 등록
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.tech-card, .section-title');
    elementsToObserve.forEach(el => observer.observe(el));
});