class SlideControl {
    /**
     * slides control
     * @param { Object } props 
     * @param { Object } props.options
     * @param { String } props.options.slidesClass
     * @param { Object } props.events
     */
    constructor(props = {
        options: {
            slidesClass: ''
        },
        events: {}
    }) { 
        this.props = props;
        this.options = this.props.options;
        this.events = this.props.events;

        this.slidesClass = this.options.slidesClass;

        if (!this.slidesClass) return console.error(`slides class is not defined: ${this.slidesClass}`);
    }

    init() {
        this.getControlElements();
    }

    getControlElements() {
        this.slides = document.querySelectorAll(this.slidesClass);

        this.triggers();
    }

    triggers() {
        this.slides.forEach(slide => {
            slide.addEventListener('click', (e) => {
                e.preventDefault();

                this.removeActiveClass();

                slide.classList.add('active');
            });
        });
    }

    removeActiveClass() {
        const activeSlide = document.querySelector(`${this.slidesClass}.active`);
        if (activeSlide) activeSlide.classList.remove('active');
    }
}