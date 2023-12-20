gsap.to('#sled, #present1, #present2, #present3', {
	motionPath: {
		path: '#track > path',
		align: '#track > path',
		alignOrigin: [0.5, 1.05],
		autoRotate: true,
	},
	duration: 4,
	delay: x => {
		return x / 2.5
	},
	ease: CustomEase.create(
		'custom',
		'M0,0,C0.204,0.206,0.213,0.374,0.5,0.5,0.774,0.62,0.796,0.802,1,1'
	),
	repeat: -1,
})

for (tree of document.querySelectorAll('.tree')) {
	gsap.set(tree, {
		transformOrigin: 'center bottom',
		skewX: -3,
	})
	gsap.to(tree, {
		duration: 3,
		skewX: 3,
		yoyoEase: true,
		delay: -Math.random() * 5,
		yoyo: true,
		ease: 'power1.inOut',
		repeat: -1,
	})
}

function createSnowflakes() {
	container = document.getElementById('container')
	gsap.killTweensOf('#container > div')
	container.innerHTML = ''

	for (var i = 0; i < 40; i++) {
		var snowflake = document.createElement('div')
		var size = randomBetween(5, 30)
		// Simplified version of Jason Baciulis' awesome snowflakes (https://codepen.io/jasonbaciulis/pen/gLXgVZ)
		TweenMax.set(snowflake, {
			width: size,
			height: size,
			x: randomBetween(0, window.innerWidth),
			y: randomBetween(-200, -150),
		})
		container.appendChild(snowflake)

		TweenMax.to(snowflake, randomBetween(7, 14), {
			y: window.innerHeight + 100,
			ease: Linear.easeNone,
			repeat: -1,
			delay: -15,
		})
		TweenMax.to(snowflake, randomBetween(4, 8), {
			x: '+=100',
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
		})
		TweenMax.to(snowflake, randomBetween(2, 8), {
			rotation: randomBetween(0, 360),
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
			delay: -5,
		})
	}
}

function randomBetween(min, max) {
	return min + Math.random() * (max - min)
}

createSnowflakes()

window.addEventListener('resize', createSnowflakes)


$( document ).ready(function() {
    
    var envelope = $('#envelope');
    envelope.click( function() {
        open();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
	$('.letter').click( function() {
		window.location.href = "./sleeping-santa/index.html";
    });
});