class Slide
{
	slidePages: NodeListOf<Element>;
	prevButton: Element;
	nextButton: Element;
	paginationDots: NodeListOf<Element>;
	slideCurrent: number = 0;
	totalSlidePages: number;
	interval: any;
	animationIsRunning = false;
	constructor ( slidePages: any, prevButton: any, nextButton: any, paginationDots: any )
	{
		this.slidePages = document.querySelectorAll( slidePages );
		this.prevButton = document.querySelector( prevButton ).addEventListener( "click", () =>
		{
			this.calculateSlideCurrent( -1 );
		} );
		this.nextButton = document.querySelector( nextButton ).addEventListener( "click", () =>
		{
			this.calculateSlideCurrent( 1 );
		} );
		this.paginationDots = document.querySelectorAll( paginationDots );
		for ( let index = 0; index < this.paginationDots.length; index++ )
		{
			this.paginationDots[ index ].addEventListener( "click", () =>
			{
				this.removeAnimation();
				this.animationEffect( this.slideCurrent, index );
				this.changeSlideCurrent( index );
			} );
		}
		this.totalSlidePages = this.slidePages.length - 1;
		this.init();
	}
	init ()
	{
		this.interval = setInterval( () =>
		{
			this.calculateSlideCurrent( 1 );
		}, 5000 );
	}
	calculateSlideCurrent ( value: any )
	{
		this.removeAnimation();
		var index = this.slideCurrent;
		index += value;
		if ( index < 0 )
		{
			index = this.totalSlidePages;
		}
		if ( index > this.totalSlidePages )
		{
			index = 0;
		}
		this.animationEffect( this.slideCurrent, index, value );
		this.changeSlideCurrent( index );
	}
	animationEffect ( slideCurrent: any, index: any, value = 0 )
	{
		if ( value == 1 )
		{
			this.slidePages[ slideCurrent ].classList.add( "toRightOld" );
			this.slidePages[ index ].classList.add( "toRightNew" );
		} else if ( value == -1 )
		{
			this.slidePages[ this.slideCurrent ].classList.add( "toLeftOld" );
			this.slidePages[ index ].classList.add( "toLeftNew" );
		} else if ( slideCurrent < index )
		{
			this.slidePages[ slideCurrent ].classList.add( "toRightOld" );
			this.slidePages[ index ].classList.add( "toRightNew" );
		} else if ( slideCurrent > index )
		{
			this.slidePages[ slideCurrent ].classList.add( "toLeftOld" );
			this.slidePages[ index ].classList.add( "toLeftNew" );
		}
	}
	changeSlideCurrent ( index: any )
	{
		this.slidePages[ this.slideCurrent ].classList.remove( "active" );
		this.paginationDots[ this.slideCurrent ].classList.remove( "active" );
		this.slideCurrent = index;
		this.slidePages[ this.slideCurrent ].classList.add( "active" );
		this.paginationDots[ this.slideCurrent ].classList.add( "active" );
		this.init();
	}
	removeAnimation ()
	{
		clearInterval( this.interval );
		this.slidePages.forEach( element =>
		{
			element.classList.remove( "toRightOld" );
			element.classList.remove( "toRightNew" );
			element.classList.remove( "toLeftOld" );
			element.classList.remove( "toLeftNew" );
		} );
	}
}

new Slide(
	".main__home-article carousel_slide .slide__page",
	".main__home-article .carousel_prev-button",
	".main__home-article .carousel_next-button",
	".main__home-article .carousel__pagination .dot"
);

/* 	import Slide from "./Slide.js";
	let Experience = document.querySelector( "#experience-container" );
	let dotsContainer = document.querySelector( ".data-self .xp .slides .dots-container" );
	async function fetchData () {
	try {
	const response = await fetch( "data.json" );
	const data = await response.json();
	data.experience.forEach( ( card, index ) => {
	Experience.innerHTML +=
	` 
	<li class="slides-pag ${ index == 0 ? "active" : "" }">
	<div class="icon">
	<i class="${ card.icon }"></i>
	</div>
	<h4>${ card.area }</h4>
	<p>${ card.description }</p>
	</li>
	`;
	dotsContainer.innerHTML += `<li class="dot ${ index == 0 ? "active" : "" }"></li>`;
	} );
	new Slide(
	".data-self .xp .slides #experience-container li",
	".data-self .xp .slides .prev",
	".data-self .xp .slides .next",
	".data-self .xp .slides .dots-container .dot"
	);
	} catch ( error ) {
	console.error( "Error fetching data:", error );
	}
	}
	fetchData(); */