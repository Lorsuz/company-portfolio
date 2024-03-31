const services: string[] = [
	"Angular.png",
	"Bootstrap.png",
	"Cs.png",
	"CSS.png",
	"ESLint.png",
	"Figma.png",
	"Firebase.png",
	"FireBird.png",
	"Git.png",
	"GitHub.png",
	"HTML.webp",
	"Java-Script.webp",
	"jQuery.png",
	"Laravel.png",
	"MongoDB.png",
	"MySQL.png",
	"Next-JS.png",
	"Node-Js.png",
	"PHP.png",
	"PostgreSQL.png",
	"Prisma.png",
	"Python.png",
	"React.png",
	"SASS.png",
	"SQLite.png",
	"Tailwind.png",
	"TypeScript.png",
	"UI-&-UX.png",
	"Vercel.png",
	"Vue-JS.png",
	"WordPress.png",
	"XAMP.png" ];

let serviceElement: Element | null = document.querySelector( '.main__services-article .swiper-wrapper' );
console.log( serviceElement );
services.map( ( service: string ): void =>
{
	serviceElement ?
		serviceElement.innerHTML += `
		<li class="swiper-slide">
				<img src="./assets/images/services/${ service }" alt="${ service }">
		</li>
		`
		: '';
} );