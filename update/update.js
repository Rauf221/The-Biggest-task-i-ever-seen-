const nameInput = document.getElementById('header');
const profInput = document.getElementById('proff');
const imageUrlInput = document.getElementById('image');
const button = document.querySelector(".btnnn");

const urlParams = new URLSearchParams(window.location.search);
const updateId = urlParams.get('id');

async function card4() {
    try {
        const response = await fetch("http://localhost:8080/ameriganya");
        const card4 = await response.json();
        console.log(card4);

        let carusel = document.querySelector(".cardcarusss");
        console.log(carusel);

        card4.map((card) => {
            carusel.innerHTML += `<div class="carousel-item w-full flex justify-evenly">
                                    <div class="relative">
                                        <div class="w-[350px] h-[375px]">
                                            <img class="rounded-xl"
                                                src="${card.img}" alt="">
                                        </div>
                                        <div
                                            class="rounded-lg absolute bottom-0 z-30 h-[75px] w-[95%] text-white font-bold bg-black bg-opacity-50 hover:text-black hover:bg-white hover:transition duration-150 ease-out hover:ease-in pr-3 pl-3">
                                            <p>${card.proff}</p>
                                            <p class="text-3xl">${card.header}</p>
                                        </div>
                                    </div>
                                </div>`;
        });
    } catch (error) {
        console.error('Error fetching card data:', error);
    }
}

function fillUpdateForm(data) {
    headerInput.value = data.header || '';
    profInput.value = data.prof || '';
    imageUrlInput.value = data.image || '';
}

button.addEventListener('click', async (e) => {
    e.preventDefault();
    await update(supplierId);
});

async function update(id) {
    const data = {
        name: nameInput.value,
        propertyCount: profInput.value,
        imageUrl: imageUrlInput.value
    };

    try {
        const response = await fetch(`http://localhost:8080/ameriganya/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Supplier updated successfully!');
            window.location.href = "index.html";
        } else {
            throw new Error('Failed to update supplier.');
        }
    } catch (error) {
        console.error('There was a problem with the update operation:', error);
        alert('Failed to update supplier.');
    }
}

card4();
