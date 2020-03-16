

window.onload = () => {
    // change header menus
    changeHeaderMenuHandler();

    // change slider
    changeSliderHandler();

    // switch status phone screen
    switchedPhoneScreen();

    // switch portfolio tags
    switchTabsHandler();

    // highlight portfolio images by click
    highlightPortfolioImagesHandler();

    // show message on modal
    sendMessageHandler();

};

const changeHeaderMenuHandler = () => {
    document.querySelector('.header__navigation .navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__item')) {
            let clickedMenuTab = e.target;
            scrollToClickedSection();
            removeSelectedTab();
            selectClickedMenuTab(clickedMenuTab);
        }

    });

};

const removeSelectedTab = () => {
    document.querySelectorAll('.header__navigation .navigation__item').forEach(menuTab => {
        menuTab.classList.remove('navigation__item--active');
    })
};

const selectClickedMenuTab = (clickedMenuTab) => {
    clickedMenuTab.classList.add('navigation__item--active');
};

const scrollToClickedSection = () => {
    const anchors = document.querySelectorAll('.navigation__item');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
};


// change slider
const slider1 = `<div class="slider-1">
<div class="vertical-phone phone">
    <img src="assets/img/shadow-vertical-phone.png" alt="vertical-phone-shadow" class="vertical-phone__shadow">
    <img src="assets/img/base-vertical-phone.png" alt="vertical-phone-base" class="vertical-phone__base">
    <img src="assets/img/screen-vertical-phone.png" alt="vertical-phone-screen" class="vertical-phone__screen screen">
</div>
<div class="horizontal-phone phone">
    <img src="assets/img/shadow-horizontal-phone.png" alt="horizontal-phone-shadow" class="horizontal-phone__shadow">
    <img src="assets/img/base-horizontal-phone.png" alt="horizontal-phone-base" class="horizontal-phone__base">
    <img src="assets/img/screen-horizontal-phone.png" alt="horizontal-phone-screen" class="horizontal-phone__screen screen">
</div>
</div>`;

const slider2 = `<div class="slider-2">
<div class="phone-left">
    <img src="assets/img/phone-vertical-right-shadow.png" alt="vertical left phone" class="vertical-phone-left-shadow">
    <img src="assets/img/phone-vertical_right_base.png" alt="vertical left phone" class="vertical-phone-left-base">
    <img src="assets/img/phone-vertical-right-display.png" alt="vertical left phone" class="vertical-phone-left-display">
</div>
<div class="phone-center">
    <img src="assets/img/phone-vertical-center-shadow.png" alt="vertical center phone" class="vertical-phone-center-shadow">
    <img src="assets/img/phone-vertical-center-base.png" alt="vertical center phone" class="vertical-phone-center-base">
    <img src="assets/img/phone-vertical-center-display.png" alt="vertical center phone" class="vertical-phone-center-display">
</div>
<div class="phone-right">
    <img src="assets/img/phone-vertical-right-shadow.png" alt="vertical right phone" class="vertical-phone-right-shadow">
    <img src="assets/img/phone-vertical_right_base.png" alt="vertical right phone" class="vertical-phone-right-base">
    <img src="assets/img/phone-vertical-right-display.png" alt="vertical right phone" class="vertical-phone-right-display">
</div>
</div>`;

const changeSliderHandler = () => {

    document.querySelector('.slider__button-prev').addEventListener('click', () => {
        changeSliderLeftSide();
    });

    document.querySelector('.slider__button-next').addEventListener('click', () => {
        changeSliderRightSide();
    });
}

const changeSliderLeftSide = () => {
    if (document.querySelector('.slider-1')) {
        document.querySelector('.slider-1').classList.add('outAnimationLeftSide');
        setTimeout(() => {
            document.querySelector('.slider__content .sliders').innerHTML = slider2;
            document.querySelector('.slider-2').classList.add('inAnimationLeftSide');
        }, 500);

    } else {
        document.querySelector('.slider-2').classList.add('outAnimationLeftSide');
        setTimeout(() => {
            document.querySelector('.slider__content .sliders').innerHTML = slider1;
            switchedPhoneScreen();
            document.querySelector('.slider-1').classList.add('inAnimationLeftSide');
        }, 500);
    }
}

const changeSliderRightSide = () => {
    if (document.querySelector('.slider-1')) {
        document.querySelector('.slider-1').classList.add('outAnimationRightSide');
        setTimeout(() => {
            document.querySelector('.slider__content .sliders').innerHTML = slider2;
            document.querySelector('.slider-2').classList.add('inAnimationRightSide');
        }, 500);

    } else {
        document.querySelector('.slider-2').classList.add('outAnimationRightSide');
        setTimeout(() => {
            document.querySelector('.slider__content .sliders').innerHTML = slider1;
            switchedPhoneScreen();
            document.querySelector('.slider-1').classList.add('inAnimationRightSide');
        }, 500);
    }
}


// switch screen

const switchedPhoneScreen = () => {
    let phoneBaseNodes = document.querySelectorAll('.phone');
    phoneBaseNodes.forEach(element => {
        switchScreenHandler(element);
    })
}

const switchScreenHandler = (element) => {
    element.addEventListener('click', (e) => {
        if (element.querySelector('.screen').classList.contains('phone-screen--hidden')) {
            element.querySelector('.screen').classList.remove('phone-screen--hidden');
        } else {
            element.querySelector('.screen').classList.add('phone-screen--hidden');
        }
    })
}


// switch tabs

const switchTabsHandler = () => {
    let portfolioTags = document.querySelector('.portfolio__tags');

    portfolioTags.addEventListener('click', (e) => {
        removeSelectedTags(e);
        if(e.target.classList.contains('tag')) {
            selectClickedTag(e.target);
        }
    })
}

const removeSelectedTags = (e) => {
    let tags = document.querySelectorAll('.portfolio__tags .tag');
    if(e.target.classList.contains('tag')) {
        tags.forEach(tag => {
            tag.classList.remove('tag--active');
            tag.classList.add('tag--bordered');
        });
    }
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.remove('tag--bordered');
    clickedTag.classList.add('tag--active');


    if(clickedTag.innerText === 'All') {
        sortTagsByAll();
    }

    if(clickedTag.innerText === 'Artwork') {
        sortByArtwork();
    }

    if(clickedTag.innerText === 'Web Design') {
        sortByWebDesign();
    }

    if(clickedTag.innerText === 'Graphic Design') {
        sortByGraphicDesign();
    }
}

const sortTagsByAll = () => {
    let pictures = Array.from(document.querySelectorAll('.picture'));
    let picturesContainer = document.querySelector('.pictures');
    pictures = pictures.reverse();
    picturesContainer.innerHTML = '';
    pictures.forEach(picture => {
        picturesContainer.append(picture);
    })
}

const sortByArtwork = () => {
    let pictures = Array.from(document.querySelectorAll('.picture'));
    let picturesContainer = document.querySelector('.pictures');
    pictures = pictures.reverse();
    picturesContainer.innerHTML = '';
    pictures.forEach((picture, index) => {
        if (index % 2 === 0) {
            picturesContainer.append(picture);
        }
    });
    pictures.forEach((picture, index) => {
        if (index % 2 === 1) {
            picturesContainer.append(picture);
        }
    });
}

const sortByWebDesign = () => {
    let pictures = Array.from(document.querySelectorAll('.picture'));
    let picturesContainer = document.querySelector('.pictures');
    picturesContainer.innerHTML = '';
    pictures.forEach((picture, index) => {
        if (index % 2 === 0) {
            picturesContainer.append(picture);
        }
    });
    pictures.forEach((picture, index) => {
        if (index % 2 === 1) {
            picturesContainer.append(picture);
        }
    });
}

const sortByGraphicDesign = () => {
    let pictures = Array.from(document.querySelectorAll('.picture'));
    let picturesContainer = document.querySelector('.pictures');
    picturesContainer.innerHTML = '';
    pictures.forEach((picture, index) => {
        if (index % 3 === 0) {
            picturesContainer.append(picture);
        }
    });
    pictures.forEach((picture, index) => {
        if (index % 3 === 1) {
            picturesContainer.append(picture);
        }
    });

    pictures.forEach((picture, index) => {
        if (index % 3 === 2) {
            picturesContainer.append(picture);
        }
    });
}

// highlight images

const highlightPortfolioImagesHandler = () => {
    let images = document.querySelectorAll('.picture img');

    document.querySelector('.pictures').addEventListener('click', (e) => {
        let clickedImage = e.target;
        if(clickedImage.tagName === 'IMG') {
            images.forEach(image => {
                image.classList.remove('picture-outline');
            });
            clickedImage.classList.add('picture-outline');
        }
    });
}

// get a quote

const sendMessageHandler = () => {
    let btn = document.querySelector('#submit-btn');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let formData = {};
        formData.name = document.querySelector('#name').value;
        formData.email = document.querySelector('#email').value;
        formData.subject = document.querySelector('#subject').value;
        formData.details = document.querySelector('#details').value;

        document.body.append(generateModalWindow(formData));
    })

    
}

const generateModalWindow = (data) => {
    let modal = document.createElement('div');
    let closeButton = document.createElement('button');
    let content = '';

    modal.classList.add('modal');
    modal.innerHTML = '';
    content += '<h4>Письмо отправлено</h4>';
    if (data.subject.trim()) {
        content += `<p>Тема: ${data.subject}</p>`;
    } else {
        content += `<p>Тема: Без темы</p>`;
    }

    if (data.details.trim()) {
        content += `<p>Описание: ${data.details}</p>`;
    } else {
        content += `<p>Описание: Без описания</p>`;
    }

    closeButton.innerText = 'OK';
    

    modal.innerHTML = content;
    modal.append(closeButton);
    

    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.append(modal);
    overlay.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            overlay.remove();
        }
    });
    return overlay;

}