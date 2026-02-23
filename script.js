document.addEventListener('DOMContentLoaded', () => {
    // 1. 요소 가져오기
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeBtn = document.getElementById('close-btn');
    const topBtn = document.getElementById("back-to-top");
    const nav = document.querySelector('nav');

    // 2. 햄버거 메뉴 열기
    if (hamburger && menuOverlay) {
        hamburger.addEventListener('click', () => {
            menuOverlay.classList.add('active');
            // 열렸을 때 스크롤 방지 (선택 사항)
            document.body.style.overflow = 'hidden';
        });
    }

    // 3. 메뉴 닫기 (X 버튼)
    if (closeBtn && menuOverlay) {
        closeBtn.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // 4. 메뉴 링크 클릭 시 닫기
    const menuLinks = document.querySelectorAll('.nav-menu a, .overlay-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // 5. 스크롤 이벤트 (헤더 & Top 버튼)
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            } else {
                nav.style.boxShadow = 'none';
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            }
        }

        if (topBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        }
    });

    // 6. Top 버튼 클릭
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});