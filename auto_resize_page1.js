
function resize_page1() {
    let photo = document.body.querySelector('.page1__photo');
    let title = document.body.querySelector('.title-box');

    const photo_height_hv = 100 * photo.clientHeight / window.innerHeight;
    const title_height_hv = 100 * title.clientHeight / window.innerHeight;

    

    photo.style.paddingTop = '';
    title.style.paddingTop = '';
}
