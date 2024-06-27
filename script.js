
async function getData() {
    const response = await fetch("http://localhost:8080/invoices");
    const datas = await response.json();
    console.log(datas);
  
    let takeElement = document.querySelector(".cardContainer");
  
    datas.map((item) => {
      takeElement.innerHTML += `<div class="flex justify-center ">
                <div
                class="w-[400px] h-[600px] mx-auto  bg-white rounded-lg shadow-md flex flex-col relative overflow-hidden">
                <div class="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
                    <div class="flex gap-2">
                        <button class="px-4 py-2 text-xs font-bold text-white bg-green-700 rounded">${item?.button}</button>
                        <button
                            class="px-4 py-2  text-xs font-bold text-white rounded bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] hover:bg-red-700">${item?.button2}
                            </button>
                    </div>
                    <div class="flex gap-2">
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-solid fa-arrow-right-arrow-left text-white"></i>
                        </div>
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-heart text-white"></i>
                        </div>
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-eye text-white"></i>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[500px] overflow-hidden flex justify-center items-center relative ">
                    <img src="${item?.img}" alt=""
                        class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button
                        class="absolute bottom-2.5 left-2.5 px-4 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-black hover:bg-red-700 hover:border-red-700 hover:text-white mb-1.75">${item?.button3}</button>
                </div>
                <div class="pr-6 pl-6 pt-3  flex flex-col gap-4">
                    <h1 class="text-xl  font-bold hover:text-red-600">${item?.headertext}</h1>
    
                    <p class="text-base text-gray-500 "><i class="fa-solid fa-location-dot pr-2"></i>${item?.location}</p>
                    
                    <div class="flex justify-start gap-6 ">
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bed mr-1.25 pr-2"></i>
                            <span class="font-semibold">${item.bed}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bath mr-1.25 pr-2"></i>
                            <span class="font-semibold">${item.bath}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-ruler mr-1.25 pr-2"></i>
                            <span class="font-semibold">600 SqFT</span>
                        </div>
                    </div>
                    <div class="w-full border">
    
                    </div>
                    <div class="flex justify-between items-center ">
                        <div class="flex items-center">
                            <img src=${item?.prof} alt=""
                                class="w-[50px] h-[50px] rounded-full mr-2.5">
                            <span>${item?.name}</span>
                        </div>
                        <div class="text-xl items-end font-bold flex">${item?.pric}
                        <p class="text-base text-gray-500">${item?.time}</p></div>
                    </div>
                </div>
            </div>
    
              
            </div>
   
            

    `;
    });
  }
  getData();
  
async function card3() {
    const response = await fetch("http://localhost:8080/card3");
    const card3 = await response.json();
    console.log(card3);

    let cardrow = document.querySelector(".cardrow")

    card3.map((items) => {
        cardrow.innerHTML += `
            <div class="flex justify-center ">
                <div
                class="w-[600px] h-[800px] mx-auto  bg-white rounded-lg shadow-md flex flex-col relative overflow-hidden">
                <div class="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
                    <div class="flex gap-2">
                        <button class="px-4 py-2 text-xs font-bold text-white bg-green-700 rounded">${items?.button}</button>
                        <button
                            class="px-4 py-2  text-xs font-bold text-white rounded bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] hover:bg-red-700">${items?.button2}
                            </button>
                    </div>
                    <div class="flex gap-2">
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-solid fa-arrow-right-arrow-left text-white"></i>
                        </div>
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-heart text-white"></i>
                        </div>
                        <div
                            class="w-[40px] h-[40px] flex justify-center items-center bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                            <i class="fa-regular fa-eye text-white"></i>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[500px] overflow-hidden flex justify-center items-center relative ">
                    <img src="${items?.imgg}" alt=""
                        class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button
                        class="absolute bottom-2.5 left-2.5 px-4 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-black hover:bg-red-700 hover:border-red-700 hover:text-white mb-1.75">${items?.button3}</button>
                </div>
                <div class="pr-6 pl-6 pt-3  flex flex-col gap-4">
                    <h1 class="text-xl  font-bold hover:text-red-600">${items?.headertextcontent}</h1>
    
                    <p class="text-base text-gray-500 "><i class="fa-solid fa-location-dot pr-2"></i>${items?.locations}</p>
                    
                    <div class="flex justify-start gap-6 ">
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bed mr-1.25 pr-2"></i>
                            <span class="font-semibold">${items.bed2}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-bath mr-1.25 pr-2"></i>
                            <span class="font-semibold">${items.bath3}</span>
                        </div>
                        <div class="flex items-center text-l">
                            <i class="fa-solid fa-ruler mr-1.25 pr-2"></i>
                            <span class="font-semibold">${items.payidd}</span>
                        </div>
                    </div>
                    <div class="w-full border">
    
                    </div>
                    <div class="flex justify-between items-center ">
                        <div class="flex items-center">
                            <img src=${items?.prof} alt=""
                                class="w-[50px] h-[50px] rounded-full mr-2.5">
                            <span>${items?.namee}</span>
                        </div>
                        <div class="text-xl items-end font-bold flex">${items?.pric}
                        <p class="text-base text-gray-500">${items?.time}</p></div>
                    </div>
                </div>
             </div>
    
              
            </div>
   `;
 });
}  
card3();

async function card2() {
    const response = await fetch("http://localhost:8080/Card2");
    const card2 = await response.json();
    console.log(card2);


    
    let cardcol = document.querySelector(".cardcol");

    
  
    
    
    card2.map((card) => {
      cardcol.innerHTML += `<div class="w-[700px] h-[250px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex ">
            <div class="w-[280px] relative">
                <img class="w-full h-full  object-cover overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105" src="${card.img}" alt="Lakeview Haven">
                <div class="absolute top-0 left-5 bg-green-500  px-3 text-white mt-3  rounded"></div>
                <div class="absolute top-3 h-7 left-5 bg-gray-700 text-white px-3  rounded hover:bg-red-700">${card.forsale}</div>
                <div class=" absolute top-3 right-16 w-[25px] h-[25px] bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                    <i class="fa-solid fa-arrow-right-arrow-left text-white pl-1"></i>
                </div>
                <div class=" absolute top-3 right-8 w-[25px] h-[25px]  bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                    <i class="fa-regular fa-heart text-white pl-1"></i>
                </div>
                <div class=" absolute top-3 right-1 w-[25px] h-[25px] bg-[rgba(11,33,50,0.4)] border border-[rgba(11,33,50,0.4)] rounded cursor-pointer hover:bg-red-700">
                    <i class="fa-regular fa-eye text-white pl-1"></i>
                </div>
           
                <button
                class="absolute bottom-2.5 left-4 px-4 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-black hover:bg-red-700 hover:border-red-700 hover:text-white mb-1.75">${card.button}</button>

            </div>
           

            <div class="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-800 hover:text-red-600">${card.headertext}</h2>
                    <p class="text-gray-600 mt-4"><i class="fa-solid fa-location-dot pr-2"></i>${card.location}</p>
                    <div class="flex items-center mt-6">
                        <div class="flex items-center text-gray-700 mr-6">
                            <i class="fa-solid fa-bed"></i>
                            <span class="ml-2">${card.bed}</span>
                        </div>
                        <div class="flex items-center text-gray-700 mr-6">
                            <i class="fa-solid fa-bath"></i>
                            <span class="ml-2">${card.bath}</span>
                        </div>
                        <div class="flex items-center text-gray-700">
                            <i class="fa-solid fa-ruler"></i>
                            <span class="ml-2">${card.payid}</span>
                        </div>
                    </div>
                
                </div>
                <div class="w-full border">

                </div>
                <div class="flex items-center mt-2">
                    <img class="h-10 w-10 rounded-full object-cover" src="${card.pic}" alt="Ralph Edwards">
                    <div class="ml-2">
                        <p class="text-gray-800 ">${card.name}</p>
                    </div>
                    <div class="ml-auto text-lg font-bold text-gray-800">$5050.00/SqFT</div>
                </div>
            </div>
        </div>


    `;
    });
}
card2();
   
let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].clientWidth;
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);

  