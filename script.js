        const track = document.querySelector('.carousel-track');
        const items = document.querySelectorAll('.carousel-item');
        const leftButton = document.querySelector('.left');
        const rightButton = document.querySelector('.right');

        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        
       
        // JavaScript для роботи корзини
        const cart = [];
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total');

        // Функція для оновлення відображення корзини
        function updateCart() {
            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    ${item.name} - ${item.price} грн 
                    <button class="remove-item" data-index="${index}">X</button>
                `;
                cartItemsContainer.appendChild(cartItem);
                total += item.price;
            });

            cartTotal.textContent = total;
        }

        // Додавання товару до корзини
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = parseInt(button.getAttribute('data-price'), 10);

                cart.push({ name, price });
                updateCart();
            });
        });

        // Видалення товару з корзини
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-item')) {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                updateCart();
            }
        });
    
