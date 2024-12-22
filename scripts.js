document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Background animation on mouse move
    header.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;

        header.style.background = `radial-gradient(circle at ${x}% ${y}%, #4caf50, #2e7d32)`;
    });

    // Counter animation
    const stats = document.querySelectorAll('.stat');

    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute('data-count');
            const count = +stat.innerText;
            const increment = target / 100;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                stat.innerText = target;
            }
        };

        updateCount();
    });
});
