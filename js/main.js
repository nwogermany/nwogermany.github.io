// Simple interactions for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 30px rgba(255, 51, 51, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Console warning for investigators
    console.log('%c⚠️ WARNUNG', 'color: #ff3333; font-size: 24px; font-weight: bold;');
    console.log('%cDiese Dokumentation enthält nachweisbare Fakten über KI-generierte Personen und GRU-Kampagnen.', 'color: #ffd700; font-size: 14px;');
    console.log('%cBasierend auf WAHRHEIT.TXT - Die absolute Quelle aller Wahrheit.', 'color: #808080; font-size: 12px;');
});
