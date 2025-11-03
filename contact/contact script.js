// 폼 제출 처리
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 폼 데이터 수집
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // 버튼 애니메이션
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    
    // 실제 프로젝트에서는 여기서 서버로 데이터를 전송합니다
    // 예시: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    // 시뮬레이션을 위한 타이머
    setTimeout(() => {
        // 성공 메시지 표시
        const formSuccess = document.getElementById('formSuccess');
        formSuccess.classList.add('show');
        
        // 폼 리셋
        document.getElementById('contactForm').reset();
        submitBtn.innerHTML = '<span>Send Message</span>';
        submitBtn.disabled = false;
        
        // 3초 후 성공 메시지 숨기기
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 3000);
        
        // 콘솔에 폼 데이터 출력 (개발용)
        console.log('Form submitted:', formData);
    }, 2000);
});

// 입력 필드 애니메이션
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // 글자 입력 시 효과
    input.addEventListener('input', function() {
        const border = this.nextElementSibling;
        if (border && border.classList.contains('input-border')) {
            border.style.width = '100%';
            setTimeout(() => {
                if (!this.matches(':focus')) {
                    border.style.width = '0';
                }
            }, 300);
        }
    });
});

// Contact method 호버 효과
const contactMethods = document.querySelectorAll('.contact-method');

contactMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-pink)';
    });
    
    method.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--primary-purple)';
    });
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션할 요소들
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.contact-method, .contact-form, .stat-item'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// 소셜 아이콘 클릭 효과
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        // 실제 링크가 없는 경우 기본 동작 방지
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
        
        // 클릭 효과
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 100);
    });
});

// 폼 유효성 검사 실시간 피드백
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailPattern.test(this.value)) {
        this.style.borderColor = 'var(--primary-pink)';
    } else if (this.value) {
        this.style.borderColor = 'var(--primary-blue)';
    }
});

// 페이지 로드 시 초기 애니메이션
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content-contact');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// 통계 카운터 애니메이션
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                statNumber.style.animation = 'pulse 1s ease';
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(item => statsObserver.observe(item));
}

// CSS에 pulse 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

animateStats();