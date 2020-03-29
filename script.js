

window.onload = () => {
    // change header menus
    //changeHeaderMenuHandler();

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

    showMobileMuneHandler();

};

document.addEventListener('scroll', onScroll);

const changeHeaderMenuHandler = () => {
    document.querySelector('.header__navigation .navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__item')) {
            let clickedMenuTab = e.target;
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

function onScroll(event) {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navigation__item');


    sections.forEach(element => {
        if ((element.offsetTop - 96) <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
            links.forEach(link => {
                link.classList.remove('navigation__item--active');
                if (element.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('navigation__item--active');
                }
            })
        }
    });
};


// change slider

function changeSliderHandler() {
    let slides = document.querySelectorAll('.sliders .slider');
    const prev = document.querySelector('.slider__button-prev');
    const next = document.querySelector('.slider__button-next');

    let isSlider1 = true;
    let timeoutId;

    next.addEventListener('click', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (!isSlider1) {
                isSlider1 = true;

                slides[1].style.transform = 'translateX(100%)';
                setTimeout(() => {
                    slides[1].style.zIndex = '0';
                    slides[0].style.zIndex = '1';
                    slides[1].style.transitionDuration = '0.5s';
                    slides[1].style.transform = 'translateX(0%)';
                }, 1000);
            } else {
                isSlider1 = false;

                slides[0].style.transform = 'translateX(100%)';
                setTimeout(() => {
                    slides[0].style.zIndex = '0';
                    slides[1].style.zIndex = '1';
                    slides[0].style.transitionDuration = '0.5s';
                    slides[0].style.transform = 'translateX(0%)';
                }, 1000);
            }
        }, 1000);


    });

    prev.addEventListener('click', () => {

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (!isSlider1) {
                isSlider1 = true;

                slides[1].style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    slides[1].style.zIndex = '0';
                    slides[0].style.zIndex = '1';
                    slides[1].style.transitionDuration = '0.5s';
                    slides[1].style.transform = 'translateX(0%)';
                }, 1000);
            } else {
                isSlider1 = false;

                slides[0].style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    slides[0].style.zIndex = '0';
                    slides[1].style.zIndex = '1';
                    slides[0].style.transitionDuration = '0.5s';
                    slides[0].style.transform = 'translateX(0%)';
                }, 1000);
            }
        }, 1000);
    });

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
        if (element.parentElement.querySelector('.screen').classList.contains('phone-screen--hidden')) {
            element.parentElement.querySelector('.screen').classList.remove('phone-screen--hidden');
        } else {
            element.parentElement.querySelector('.screen').classList.add('phone-screen--hidden');
        }
    })
}


// switch tabs

const switchTabsHandler = () => {
    let portfolioTags = document.querySelector('.portfolio__tags');

    portfolioTags.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('tag') && !e.target.classList.contains('tag--active')) {
            removeSelectedTags(e);
            selectClickedTag(e.target);
        }
    })
}

const removeSelectedTags = (e) => {
    let tags = document.querySelectorAll('.portfolio__tags .tag');
    if (e.target.classList.contains('tag')) {
        tags.forEach(tag => {
            tag.classList.remove('tag--active');
            tag.classList.add('tag--bordered');
        });
    }
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.remove('tag--bordered');
    clickedTag.classList.add('tag--active');


    if (clickedTag.innerText === 'All') {
        sortTagsByAll();
    }

    if (clickedTag.innerText === 'Artwork') {
        sortByArtwork();
    }

    if (clickedTag.innerText === 'Web Design') {
        sortByWebDesign();
    }

    if (clickedTag.innerText === 'Graphic Design') {
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
        if (index % 2 === 1) {
            picturesContainer.append(picture);
        }
    });
    pictures.forEach((picture, index) => {
        if (index % 2 === 0) {
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
        if (index % 3 === 2) {
            picturesContainer.append(picture);
        }
    });
    pictures.forEach((picture, index) => {
        if (index % 3 === 1) {
            picturesContainer.append(picture);
        }
    });

    pictures.forEach((picture, index) => {
        if (index % 3 === 0) {
            picturesContainer.append(picture);
        }
    });
}

// highlight images

const highlightPortfolioImagesHandler = () => {
    let images = document.querySelectorAll('.picture img');

    document.querySelector('.pictures').addEventListener('click', (e) => {
        let clickedImage = e.target;
        if (clickedImage.classList.contains('picture-outline')) {
            clickedImage.classList.remove('picture-outline')
        } else {
            if (clickedImage.tagName === 'IMG') {
                images.forEach(image => {
                    image.classList.remove('picture-outline');
                });
                clickedImage.classList.add('picture-outline');
            }
        }
    });
}

// get a quote

const sendMessageHandler = () => {
    let btn = document.querySelector('#submit-btn');

    btn.addEventListener('click', (e) => {

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        if (validateEmail(document.querySelector('#email').value)) {

            e.preventDefault();
            let formData = {};


            formData.subject = document.querySelector('#subject').value;
            formData.details = document.querySelector('#details').value;

            document.body.append(generateModalWindow(formData));

        }
    })


}

const generateModalWindow = (data) => {
    const form = document.querySelector('#form');
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
        if (e.target.tagName === 'BUTTON') {
            form.reset();
            overlay.remove();
        }
    });
    return overlay;

}


// mobile size 

const showMobileMuneHandler = () => {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-for-mobile__content');
    const overlay = document.querySelector('.header-for-mobile__overlay');
    
    let isOpen = false;

    burger.addEventListener('click', () => {
        if (!isOpen) {
            isOpen = true;

            overlay.style.display = 'block';
            menu.style.display = 'block';

            burger.style.transition = 'transform 0.5s linear';
            menu.style.transition = 'left 0.5s linear';
            burger.style.transform = 'rotate(-90deg)';
            menu.style.left = '0%';

        } else {
            isOpen = false;
            burger.style.transform = 'rotate(0)';
            menu.style.left = '-74%';
            overlay.style.display = 'none';
        }

    });

    menu.addEventListener('click', (e) => {
        
        if(e.target.classList.contains('navigation__item')) {
            
            isOpen = false;
            burger.style.transform = 'rotate(0)';
            menu.style.left = '-74%';
            overlay.style.display = 'none';
        }
    });

}

