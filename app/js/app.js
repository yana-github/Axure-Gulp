// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// tabs
	class ItcTabs {
		constructor(target, config) {
			const defaultConfig = {};
			this._config = Object.assign(defaultConfig, config);
			this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
			this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
			this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
			this._eventShow = new Event('tab.itc.change');
			this._init();
			this._events();
		}
		_init() {
			this._elTabs.setAttribute('role', 'tablist');
			this._elButtons.forEach((el, index) => {
				el.dataset.index = index;
				el.setAttribute('role', 'tab');
				this._elPanes[index].setAttribute('role', 'tabpanel');
			});
		}
		show(elLinkTarget) {
			const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
			const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
			const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
			if (elLinkTarget === elLinkActive) {
				return;
			}
			elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
			elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
			elLinkTarget.classList.add('tabs__btn_active');
			elPaneTarget.classList.add('tabs__pane_show');
			this._elTabs.dispatchEvent(this._eventShow);
			elLinkTarget.focus();
		}
		showByIndex(index) {
			const elLinkTarget = this._elButtons[index];
			elLinkTarget ? this.show(elLinkTarget) : null;
		};
		_events() {
			this._elTabs.addEventListener('click', (e) => {
				const target = e.target.closest('.tabs__btn');
				if (target) {
					e.preventDefault();
					this.show(target);
				}
			});
		}
	}
	new ItcTabs('.tabs');

	// burger

	document.getElementById("burger__menu").addEventListener("click", (event) => {
		if (event.currentTarget.classList.contains("open")) {
			event.currentTarget.classList.remove("open");
		} else {
			event.currentTarget.classList.add("open");
		}
	});

	//slider
	new Splide('.splide', {
		type: 'splide',
		perPage: 3,
		breakpoints: {
			768: {
				perPage: 2,
			},
			560: {
				perPage: 1,
			},
		},
		gap: '1rem',
		classes: {
			arrows: 'splide__arrows review-slider__arrows',
			arrow: 'splide__arrow review-slider__arrow',
			prev: 'splide__arrow--prev review-slider__arrow-prev',
			next: 'splide__arrow--next review-slider__arrow-next',
		},
	}).mount();


})
