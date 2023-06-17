window.onload = function() {
    const openModalButton = document.getElementById('openModal'); //获取打开模态窗口的按钮
    const modal = document.getElementById('myModal'); //获取模态窗口
    const closeSpan = document.getElementsByClassName('close')[0]; //获取关闭模态窗口的按钮
    const imagesContainer = document.getElementById('imagesContainer'); //获取装载图片按钮的容器

    // 创建图片按钮
    const imageButtons = [];
    const imageLinks = ["link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9", "link10", "link11", "link12"];  // 更改为图片按钮对应的链接
    const imageSource = "js.jpg";  // 更改为图片按钮的背景图片URL
    for (let i = 0; i < 12; i++) {  // 创建12个图片按钮
        let img = document.createElement("div");
        img.classList.add('imageButton');
        img.style.backgroundImage = "url('" + imageSource + "')";  // 所有按钮使用同一张图片
        img.style.backgroundSize = "cover";
        if (i % 2 == 0) {
            img.classList.add('wide');
        }
        img.onclick = function() {
            window.location.href = imageLinks[i]; // 设置图片按钮点击时跳转的链接
        };
        imagesContainer.appendChild(img);
        imageButtons.push(img);
    }

    // 打开弹窗，同时为每个图片按钮添加弹跳动画
    openModalButton.onclick = function() {
        modal.classList.add('showModal');
        imageButtons.forEach((img, i) => {
            const animationDuration = 0.25; // 动画持续时间为0.25秒
            const animationDelay = i * 0.05; // 根据索引逐步增加动画延迟时间
            img.style.animation = `bounce ${animationDuration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${animationDelay}s both`;
        });
    };

    // 点击关闭按钮关闭弹窗，同时移除图片按钮的弹跳动画
    closeSpan.onclick = function() {
        modal.classList.remove('showModal');
        imageButtons.forEach((img) => {
            img.style.animation = "none";
        });
    };

    // 当用户点击弹窗外面，关闭弹窗，并移除图片按钮的弹跳动画
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('showModal');
            imageButtons.forEach((img) => {
                img.style.animation = "none";
            });
        }
    };

    // 当用户滚动，检查哪些图片按钮可见并触发动画
    imagesContainer.onscroll = function() {
        imageButtons.forEach((img, i) => {
            let rect = img.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                const animationDuration = 0.25; // 动画持续时间为0.25秒
                const animationDelay = i * 0.05; // 根据索引逐步增加动画延迟时间
                img.style.animation = `bounce ${animationDuration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${animationDelay}s both`;
            }
        });
    };
};
