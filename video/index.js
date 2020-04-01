const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
// 获取dom结构   代表一个html标签
function handleMove(e){
    const y = e.pageY - this.offsetTop;       //offsetTop获取某个dom结构到浏览器顶部的距离
    const percent = y / this.offsetHeight;    //offsetHeight获取某个dom结构自身的高度
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * ( max - min ) + min;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove',handleMove);