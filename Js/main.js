const burgerMenu = () => {
    const menu = document.querySelector('.menu-items')
    menu.classList.toggle('open')
}

let center = [55.740635872020526,37.61035029591467]; //Здесь будут ваши координаты
const init = () => {
    let map = new ymaps.Map('map-yandex' ,{
        center: center,
        zoom: 16 //Этот параметр отвечает за zoom картинки
    })
    let placemark = new ymaps.Placemark(center, {}, {

    })
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark)
}
ymaps.ready(init)