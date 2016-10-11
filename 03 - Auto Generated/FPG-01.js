(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/FPG_01_atlas_.png", id:"FPG_01_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"FPG_01_atlas_", frames: [[0,602,400,526],[802,0,155,98],[0,0,800,600],[402,602,280,667],[684,602,280,667]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._03 = function() {
	this.spriteSheet = ss["FPG_01_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._04 = function() {
	this.spriteSheet = ss["FPG_01_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.spriteSheet = ss["FPG_01_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cup1_1 = function() {
	this.spriteSheet = ss["FPG_01_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cup2_1 = function() {
	this.spriteSheet = ss["FPG_01_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._04();
	this.instance.setTransform(-11.9,-11.7,0.183,0.183,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-11.7,31.5,23.5);


(lib.Gstand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgWVAnrQAWg/AxifQAriNAchLQAqhuBYi0ICLkdQBkjXBCkLQA4jkAkkYQAHg8APhPIAaiNQAJg3gThaQgWhmABgnQABg2gKjLQgHihAKhhQARibAShYQAeiLAzhdQAbgwAzg9QA8hFAdghQBnh8AIhmQADghgIgyQgKg8gTglQgghqhIh2QhHh1g+g0QhNg0gdgbQgvgtAAhQQAAg7AWhRQAYhVAggvQiNgjh9B1Qh3BwgECVQgDBhAwBvQAcBBBEB9QBACEASCWQATCZgiCKQgnCfiNBnQiPBpirgJQh8gHhfhGQhqhPgDh0QB8ATAqgOQBBgXAThwQAPhagEg6QgGhIgpiZQgkhRgagtIgshLIg/hvQgjhAgSg0QgsiFAcieQAcidBUhvQBniICmhMQAwgVBog7QBfgvBCAAQBsABBkA1QA6AgB6BNQAXgXgBgvQAAguAegYQAkgcA1ASQA1ARAPAuIAggDQAUgCAMgFIghAFQBJhACUAFQAyACC1AeQBdAQBbAuQBbAtBDBAQBQBOAXBAQAMAiAQCGQAJBGBLBXQBQBeANA6QgvASAAA2QABAigCAHQgDAXgRAPQAbBXAEBYQAHB4gsAwQgmApiIgDQg6gCiMgSQAAAJggBSQggBQgRAeIAVADQgGAVACAXQAKBkAhBjQAsBHAWBbQAhBFAuBRIBBBxQAoBFAXArQAeA4AaA4IAOAjQAKAbAMApIAEAMIgagYQAyBhAiB3QAlB/gGBNQgGBbgyBpQgcA8hAB4QAEAPABAJQAPAeA8BjIARAdQAMAYALAaIAJAaIABAFQAFAzAAgPQAAAtATAnIgJgDQAdCzBYDkQBBCoBsDaQCSEoBLB5QCEDXCmCWIBWBNQAjAkAdA4QATAmAbAsIAyBRIgQAlQg5gNgwg9QgngygYhCQAKAeAGA/QAIBIgEA4QgLCdhShNQgRgRAAhOQAAhlgBgFQgLhBgOggQgWg0grgXQgDAPgRApQgRApgEAOQgVAfgVBEQgVBEgOBaQgnAgABhkQABhHAQhVIAMhnQAHg+ARgZQgdgUgqgvQgvgzgWgSQgZBHgJAeQgNArgKA4QgSABgYgIQgXgHgRgKQALg1gJhBQgPhKgEgrQgCgTADhaQAChGgPgpQgghbhUhtIiVi3Qg3hEhRh7QhgiUgjgwQAODNALBjIAXDcQAHCmgzAQQAiBjASCeQAYDDgpA6QgqA5iYASQinAMgzAOQhaAZiGAwQiVA5hLAaQkKBelmA6QjQAjmjAzQB6iJBakEg");
	this.shape.setTransform(174,293.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348,587.3);


(lib.Gmove2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgTTAs6Qijgog0gCQhggEiOAGQigAJhPADQkZAKlng0Qh8gSi8giIk4g3QCdheCkjdQAog1BeiKQBUh5Axg/QBJhdCKiRIDajlQCgivCPjsQB6jIB3kAQAYg2AmhIIBDh/QAagyAJhbQAKhpAMgmQASg0A0jBQApidAnhZQA/iQAshNQBFh7BNhJQApgmBDgrQAmgZBNguQCIhXAmheQADgJAMg3QAMgzADgGIgBAAQABgGABAAIABgBQAKgeAKgqIAEABQAShHgFgxQAHhugZiIQgYiHgohHQg2hLgRgkQgcg7AchLQAWg4AxhDQA1hHAvggQh4hTieBBQiYA+g5CJQgkBaAFB6QADBGASCNQAOCSglCTQglCVhRB1QhdCHipAuQiqAvidhFQhygzhAhjQhHhvAnhvQBuA/AsACQBFACA6hjQAuhOAQg4QAUhFARieQgFhYgJg0IgOhVQgOhVgFgqQgLhJADg2QAGiMBTiKQBRiIB2hKQCThbC1gLQA0gDB2gSQBpgLA+AYQBlAoBKBVQArAyBXB0QAdgNAQgtQAQgqAlgMQAsgOArAkQArAjgCAwQAuAOARgBIghgGQBcgiCHA6QAvAUCeBcQBSAwBFBLQBEBLAoBUQAvBlgBBEQgBAkghCDQgRBFAnBsQAqB0gIA7QgzAAgTAyQgMAggDAHQgMAUgVAIQgGBagbBVQglByg6AdQgyAZh+g0QgxgViBhEQAAABgpACQgqABAAABIgFAcQgIAmgcBdQgGAVgHAsQgIAyAGADQABATAFATQAKAgAPA3QAPA4AAAHQADAsANBYQABAWgBArQAPAhAuBoQAiBSAXAsQBgC5AZAsQBKCGBDBYQAYAhBiBdQBWBSAjA6QATAcAUAZQAPATAFAIQASAiASAdIAkA+QANgFAZAFQAaAGALgDIAEgBIALgCQAKgBBaAJQBbAKgEAEQC1AVDzgXQC0gRDvgsQFFg8CIgnQDzhFC9h2IBig+QArgYA/gNQAqgIAxgOIBcgaQAJAGAWAUQgcAzhIAeQg6AYhGAFQAggCA+AMQBGAMA2ATQCUA1hhA6QgUAMhMgWQhhgbgFgBQhBgGgjAEQg4AHghAjQANAIAWAYQAXAZANAHQgRAvgXBTQgYBHg0A4QgNgJgIgRQgEARgOAVQgNAUgOANQgwgZhBgIQhLgHgqgHQgSgDhXgcQhCgVgsADQhgAHiBAyIjYBeQhRAjiYAvQinA0hEAbQhSAghgAVQgxALiEAYQg+AGhogFQhugFgfgOQgSgBgfgTQgggTgDgKQhTg5hOhQQg9g/hMhgIibi5QhXhpg0hZQgJgPgKgNQgEB9gcBIQgkBdhgBhQgaAcg3A1QgxAxgeAmQh5CZgeAuQhPB3gUBqQgTBkgvDBQgwDJgTBfIgsDZQgrChg1AAQABBpgdCbQgkDCg5AqQgiAahFAAQgtAAg7gLgEAqMAMqQgJgZANhRQAMhJgXgbQgcAWg4AcQg+AfgXAQQA9AsAbARQAlAXAzAZIAAAAg");
	this.shape.setTransform(319.2,288.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,638.5,577);


(lib.Gmove1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgkUAuMIk8gDQCLh3B+j1QAeg7BHiYQA+iFAmhGQA4hnBximICxkHQCAjHBnkAQBYjaBKkPQAPg6AahNIAtiIQARg2gGhbQgIhpAGgoQAJg1ATjIQAPiiAXheQAniYAehUQAwiFBAhVQAigsA7g1IBmhZQB3htAWhjQAnkIgEgaQAChvgfiGQggiGgrhFQg5hJgSgiQggg6AZhMQATg4AuhGQAxhJAtgjQh7hNibBJQiVBFgyCMQggBbALB5QAGBHAaCMQAUCRgdCUQgeCXhLB4QhXCMimA2QinA3igg9Qh1gthEhgQhNhsAihwQBwA5AsAAQBFgCA1hlQArhQANg5QARhFAJifQgKhYgKg0QgMgygHgiIgah9QgOhJAAg2QAAiMBLiOQBLiMBzhQQCNhhC1gUQA0gGB1gXQBogQA/AVQBnAjBOBRQAuAvBcBwQAcgOAPguQAOgrAkgOQAqgQAtAiQAtAhABAwIAfAHQAUAEAMgBIghgEQBagnCLAzQAvARCiBVQBUAsBJBIQBIBHArBSQA1BiABBEQABAkgaCFQgOBFAsBrQAvBxgFA8QgyADgQAyQgLAhgDAHQgLAVgUAIQgCBbgXBWQgfB0g5AgQgwAbiBguQgzgTiBg9IgHAMQgHgDgIgBIg8gNIgKBTQgDAUABAuQABAyAGACQAFAVAHAPIAnBSQAYA1ACAHQAGAaALAmIAUA/QAOBHAHBmIAKCsQAJCHATBeQAXB5AsBgQAKAVAOAZQASBQAHBQIAVApICQEJQBtDJAIAVIAUADIAlAKQAZAGAuAgQCfB5gIACQCEB9DQB/QCYBdDcBtQEoCTCEAyQDtBbDeASIB0AJQAxAHA5AcQAmASAwATIBaAiIAJAnQg1AYhLgTQg+gQg8gnQAaASAtAvQAxA1AfAvQBXCDhwgLQgYgDgwg/Qg9hQgEgDQgwgtgegRQgxgcgwAIQAGAOAEAhQADAhAGAOQhJA3gkAZQg/ArhLAOQgFgRAEgRQgOALgXAJQgXAIgTACQgXgxgvguQg4gygegfQgOgPg0hJQgog4gkgYQhRg0iFglIjmg3QhWgUiWg1Qimg7hFgTQhUgYhagoQgvgVh3g8Ig8gmQg9gngXgVQgygwgtg4QgMgKgRgXQgQgWABgDQg2hLg6htQgXgqgwhPQgVAggNAZQheCrgWAyQg7CDgCBrQgDBmgODGQgODPgDBhIgIDdQgPCmg1AIQATBogDCdQgEDFgxAzQgxA0iZgDQingMg0AGQhgAMiLAeQibAjhOAQQkUA4lrAIQhLABhjAAIiOAAgAePekQAQApAaAzQAHgaA8g5QA1gygCgkQgkABg9gLQhFgMgbgBQAWBGALAeg");
	this.shape.setTransform(264.2,295.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,528.4,591.4);


(lib.Gend3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EAeKAygQgSgPgEhPIgHhpQgQhAgPgfQgZgzgsgUQgDAOgOAqQgOAqgDAPQgUAggRBFQgQBGgJBaQgmAigEhkQgDhGALhXIAFhnQAEg+APgaQgegTgtgsQgygwgWgRQgWBJgHAeQgKAsgGA4QgSACgZgGQgYgGgRgJQAIg1gNhBQgThJgHgqQgDgTgDhbQgChFgRgoQgmhZhZhpIigitQg7hBhfiAQhoiNgvg3Qgzg8guhHQgfgxgxhXQgPiKgIhGIgSglQgqhegZhwQgUhXgOh8IgHg1QgTAwgJAmQgWBlg1C/Qg3DIgWBeQgtDHgFAQQgwCgg1gCQgCBpgiCaQgrDAg3ApQg7AoiVggQihgtg1gEQhfgGiPABQifAEhPAAQkbABllg/Qh8gWi6gnIk2hBQCghZCrjYQC5j+BehxQBMhaCOiMIDhjfQCmirCXjmQCBjFB9j8QAagyAphIIBHh8QAbgxALhbQANhoAOgmQATgzA7jDQAuibAqhXQBDiOAuhMQBIh5BPhHQAqglBEgpIB1hDQCLhTAphdQAjhQg5jIQg3jBhLhaQhChBgXggQgmg1APhOQALg7AlhLQAnhPAogoQiEg9iQBcQiJBYgfCRQgVBfAbB3QAPBEArCIQAlCNgICXQgKCag7CBQhECVieBLQifBMingoQh5gehQhWQhahhATh0QB3ArArgHQBEgKAohqQAghWAGg6QAIhIgMidQgVhWgRgyQgSgwgLgiIgqh5QgXhGgHg2QgSiKA5iXQA4iUBoheQB/hzCxgrQAzgMBwgmQBkgeBBANQBqAWBYBGQA0AqBqBiQAagSAIgvQAIgsAjgTQAogVAxAbQAxAcAGAvIAgAFQAVADALgHIghAAQBUgzCRAhQAvALCvBBQBZAhBRA+QBRA9A2BMQBABbALBDQAFAkgJCHQgFBGA6BlQA9BqACA7QgxAKgKA0QgGAigDAHQgHAWgUALQALBagMBZQgQB2g1AnQgtAiiKgfQgrgJiVgvQADA4g1A8IhjBbIALAGQgaAxARA3QgcBbAGB5QADBQAWCEQAbCdAqBqQgXCgAGBuIgCgDIADAVQABAYADAYQAIBlgJBiQgKBrgbA7QgbBAgyA6QghAohBA8IADAhQADAkAOA3IAdBnQgDBOAEB+QADCcAAAtIALAGQADAMAFAJIAqBIQAHA+AWBLIAcBbQARA3AHAhQAMA1AlAhQBVEEDUF0QCjEeBSB1QCRDQCuCMIBbBIQAlAhAgA3QAWAkAdAqIA3BOIgOAmQg6gJg0g6QgqgwgchCQAMAeAKBAQAMBHgBA5QAABrgpAAQgTAAgcgXg");
	this.shape.setTransform(217.9,325.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,435.9,651.1);


(lib.Gend2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgOZAqyQihgsg1gEQhfgHiPABQifAEhPAAQkaAAllg/Qh8gWi7goIk1hBQCghZCsjYQApg0BjiGQBXh2A0g+QBLhZCPiNIDhjfQCmiqCXjmQCCjFB9j7QAag1AphHIBHh9QAcgxALhbQANhnAPgkQASgyA7jEQAvibAphXQBEiOAuhMQBKh5BQhHQApglBFgoIB1hEQCLhSAphdQAjhQg5jJQg2jAhLhaQhChBgXggQgmg1APhPQALg6AlhLQAnhPApgoQiFg9iQBbQhAApgtA9QguA/gPBEQgVBfAbB3QAPBFArCHQAnCOgLCWQgKCag7CBQhFCVieBLQifBMimgpQh6gehQhWQhZhhATh0QB3ArArgGQBEgKAohrQAghVAHg6QAHhIgLieQgVhWgRgyQgSgwgLghIgqh5QgXhGgHg3QgSiKA6iXQA4iUBohdQB+hyCygsQAzgMBxgmQBmgdBAANQBrAVBXBHQA0ApBqBjQAagRAJgvQAIgsAigTQAogVAxAcQAxAbAGAwIAeACQBUgyCQAgQAxAMCtBAQBZAhBRA9QBRA9A1BMQBBBaAKBEQAFAjgJCIQgEBGA5BkQA9BqACA8QgyAJgJA0QgHAjgCAHQgIAWgTALQAKBagMBYQgQB3g1AnQgtAiiKgfQgugLiSgvQADA5g1A8IhjBbIALAFQgaAyARA3QgcBbAFB4QADBRAWCEQAaCbArBsQgXCfAFBtIgCgEIADAVQABAZADAYQAHBXgHBYQgHBdgTBAIAEATQAIAjAVA1IApBiQAIBOATB9QAXCWAGAxQAkAPBfAvQBSAnAyAUIgTAOQCjBQDtA7QCwAsDvAmQFGAzCOAJQD8AQDagxIBxgaQAxgIA/AJQAqAGAzAEIBgAGQAHAKANAYQgrAnhOAFQhAADhEgUQAfAKA4AfQA+AkAtAkQB6BjhvAWQgXAFhBguIhXg8Qg7gcgigHQg3gNgrAWQAJAMAYAlQAYAmAJALQAOAkArA3QAsA5BBA/QADAzhRg8Qg4gpg+g/IhMhEQgvgqgLgcQghAMg+AIQhFAIgbAIQArA+ATAYQAcAjAoAoQgKAPgUAQQgTAPgTAIQgkgog7geQhFgfglgVQgRgJhIg2Qg3gqgqgMQhdgaiKAFIjsAQQhYAGiegGQixgGhHACQhOAChVgIQg5gGhjgQQh4hBhVgwQijhcgYgoQg2hYgmhrQgfhVgdh5QgLgrgZhfQhwCFgmA2QhOBwgXBlQgWBkg1C/Qg3DJgWBdIgzDYQgwCfg2gCQgBBpgjCaQgrDBg5AoQghAWg8AAQgwAAhDgPg");
	this.shape.setTransform(287.2,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,574.4,550.8);


(lib.Gend1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgUvAqzQiigtg0gEQhggGiOABQigAEhPAAQkaABllg/Qh7gWi7gnIk2hBQCghZCrjYQC5j+BehxQBMhaCOiMIDhjfQClirCXjmQCBjEB+j8QAbg2AohHIBHh8QAbgxALhbQANhoAOgkQATgzA6jCQAvicAphXQBDiNAvhNQBJh5BQhHQApglBFgpIB1hDQCKhTAphdQAkhQg5jIQg3jBhLhaQhChBgXggQgng1APhOQAMg7AlhLQAnhPAogoQiEg9iRBcQg/ApguA9QguA/gPBEQgUBfAbB3QAPBFArCHQAnCOgKCWQgKCag7CBQhFCVidBLQigBMimgoQh5gehQhWQhahhATh0QB2ArAsgGQBEgKAohrQAghWAGg6QAIhHgMieQgVhWgRgyQgSgwgLgiIgqh4QgXhGgHg3QgSiKA5iXQA4iUBnheQB/hyCxgsQAzgMBxgmQBmgdBBANQBqAVBYBGQA0AqBpBjQAagSAJgvQAIgsAjgTQAogVAxAcQAwAbAHAwIAgACQBUgzCQAhQAvALCtBAQBZAhBRA9QBRA9A1BLQBBBbAKBDQAGAjgJCIQgFBGA6BlQA9BqACA8QgyAJgJA0QgGAigDAHQgHAWgUALQAKBbgLBYQgQB2g1AoQgtAiiKggQgpgJiXgvQADA4gzA8IhjBbQCmBOBkDmQAfBJApB/QAtCRASAtQBIC7AXA3QA8CLA4BfQAXAnBRBbQBRBcAeAzQAGAWAMARIAIAMQAOAhAAAdIATgNIA9BeIBAgHIAmgCIAYAAQA9ABA5AHQgHAIgKAJQCuA2DzAXQCzARDzACQFKACCOgNQD8gWDQhQIBsgrQAvgPA/gBQArAAAzgEIBfgJQAJAJARAWQglAthMAQQg+ANhFgIQAfAEA7AXQBDAZAxAdQCHBQhqAnQgWAIhHgkQhZgtgGgBQg+gTgjgCQg5gEgnAcQALAJAdAiQAdAhAMAKQASAiAzAxQA0AxBKA0QALAyhZguQg+gghGg2IhXg4Qg0gigPgaQgfAQg8ARQhDATgaALQA1A4AWAUQAhAfAtAiQgHAQgSATQgRARgRALQgqgig+gVQhJgUgogPQgSgHhPgrQg9ghgrgFQhggMiIAZIjmA0QhWATieASQiuAThIAOQheARhvACIjRgBQgMAThmgBQhrgCgnghQhPhDhHhZQg3hGhDhqIiFjJQhMhxgrhfQgSgnhJhiQhIhkgYgzQAQBsgIB7QgICEgfBJQgnBbhiBfIhUBOQgyAwggAlQh8CUghAuQhSB1gYBoQgWBlg1C/Qg3DIgWBeIgzDXQgvCgg2gCQgBBpgiCaQgrDAg6ApQggAWg8AAQgxAAhCgOg");
	this.shape.setTransform(327.8,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,655.7,550.8);


(lib.G04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgNvAqzQihgsg1gEQhfgHiPABQifAFhPAAQkaABllg/Qh8gWi7goIk1hBQCfhZCsjYQC4j9BfhxQBLhaCPiNIDhjfQCliqCXjnQCAjEB+j8QAbg2AohGIBHh9QAcgxALhbQANhoAOgjQATgzA6jDQAuicAqhXQBDiNAuhNQBKh5BPhGQAqglBEgpIB1hEQCLhSAphdQAjhRg5jIQg3jBhKhZQhChBgYggQgmg1APhPQALg7AlhLQAnhPApgoQiFg8iQBcQhAAogtA9QguA/gPBFQgVBeAbB3QAQBFArCIQAnCNgKCWQgLCbg7CAQhECVieBMQifBLimgoQh6gdhQhXQhZhgASh0QB3AqAsgGQBEgKAohrQAfhVAHg6QAHhIgLieQgVhVgRgzQgSgwgLghIgqh5QgXhGgHg3QgTiKA5iWQA4iVBoheQB/hyCxgrQAzgNBxgmQBmgdBAAMQBrAWBYBHQAzApBqBjQAagSAJgvQAIgsAigTQAogVAxAbQAvAbAGAwIAgADQAUACANgDIghAAQBUgyCQAhQAxALCuA/QBYAhBRA+QBRA9A2BMQBABbALBDQAFAjgJCIQgEBGA5BkQA9BqADA8QgyAJgKA0QgGAjgCAHQgIAWgTALQAKBbgMBXQgQB2g0AoQguAiiKgfQgogJiYgwQAEA4g2A9IhiBbQCoBNBjDnQAgBIAoCAQAuCQARAtQBJC7AXA3QA7CLA5BfQAUAjAvA2IBTBgQBmB5ADBRQCXhkCsiuQB+iACbi6QDSj/BQh2QCOjQBFjVQAYhQALgeQASguAogyQAbghAdgqIA1hQQAOgBAbABQAMA6gmBHQgdA2gwAvQAUgTAxgcQA+glA3gVQCag7glBtQgIAWhIAhQhbAogFAEQg2AkgYAaQgnApgDAwQAOgCAtgCQAsgBAPgDQAlAHBHgJQBHgJBXgXQAtAWhcAoQhAAchWAVIhiAfQg7ATgegFQgHAjgYA5QgcBAgIAbQBMgGAfgEQAsgGA3gOQAIAQADAaQADAXgCAUQg1AMg4AjQg9ArglAWQgRAKhTAiQhAAaggAeQhFBDhDB3IhpDUQgoBOhWCGQhfCUgjA/QgxBahOBjQhgBzg2BDQgHAJguBPQghA3ggAQQg0AYg9gZQgogRg5gwQhPhDhHhaQg3hGhChqIiGjIQhLhygsheQgPghgog4IhJhkQgng4gVgsQAKBFAABgQgBCxgpBeQgnBchiBfIhUBOQgyAvgfAlQh7CUggAuQhTB1gXBpQgXBkg0C/Qg3DJgWBdIgzDYQgwCfg1gCQgCBqgiCZQgqDBg6AoQggAWg9AAQgwAAhDgOg");
	this.shape.setTransform(283,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,565.9,550.8);


(lib.G03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgNUAqzQihgsg1gEQhfgHiPABQifAFhPAAQkaABllg/Qh8gWi7goIk1hBQCfhZCsjYQC4j9BfhxQBLhaCPiNIDhjfQCliqCXjnQCAjEB+j8QAbg2AohGIBHh9QAcgxALhbQANhoAOgjQATgzA6jDQAuicAqhXQBDiNAuhNQBKh5BPhGQAqglBEgpIB1hEQCLhSAphdQAjhRg5jIQg3jBhKhZQhChBgYggQgmg1APhPQALg7AlhLQAnhPApgoQiFg8iQBcQhAAogtA9QguA/gPBFQgVBeAbB3QAQBFArCIQAnCNgKCWQgLCbg7CAQhECVieBMQifBLimgoQh6gdhQhXQhZhgASh0QB3AqAsgGQBEgKAohrQAfhVAHg6QAHhIgLieQgVhVgRgzQgSgwgLghIgqh5QgXhGgHg3QgTiKA5iWQA4iVBoheQB/hyCxgrQAzgNBxgmQBmgdBAAMQBrAWBYBHQAzApBqBjQAagSAJgvQAIgsAigTQAogVAxAbQAvAbAGAwIAgADQAUACANgDIghAAQBUgyCQAhQAxALCuA/QBYAhBRA+QBRA9A2BMQBABbALBDQAFAjgJCIQgEBGA5BkQA9BqADA8QgyAJgKA0QgGAjgCAHQgIAWgTALQAKBbgMBXQgQB2g0AoQguAiiKgfQgogJiYgwQAEA4g2A9IhiBbQCoBNBjDnQAgBIAoCAQAuCQARAtQBJC7AXA3QA7CLA5BfQAUAjAvA2IBTBgQBmB5ADBRQCXhkCsiuQB+iACbi6QDSj/BQh2QCOjQBFjVQAYhQALgeQASguAogyQAbghAdgqIA1hQQAOgBAbABQAMA6gmBHQgdA2gwAvQAUgTAxgcQA+glA3gVQCag7glBtQgIAWhIAhQhbAogFAEQg2AkgYAaQgnApgDAwQAPgCAmAIQAlAIAPgCQCeAuAcAMQBQAigmAfQgrgCghgDQhAgFgSgJQgdgNg7AGQhGAIgRgDQgHAjgYA5QgcBAgIAbQBMgGAfgEQAsgGA3gOQAIAQADAaQADAXgCAUQg1AMg4AjQg9ArglAWQgRAKhTAiQhAAaggAeQhFBDhDB3IhpDUQgoBOhWCGQhfCUgjA/QgxBahOBjQhgBzg2BDQgHAJguBPQghA3ggAQQg0AYg9gZQgogRg5gwQhPhDhHhaQg3hGhChqIiGjIQhLhygsheQgPghgog4IhJhkQgng4gVgsQAKBFAABgQgBCxgpBeQgnBchiBfIhUBOQgyAvgfAlQh7CUggAuQhTB1gXBpQgXBkg0C/Qg3DJgWBdIgzDYQgwCfg1gCQgCBqgiCZQgqDBg6AoQghAWg8AAQgwAAhDgOg");
	this.shape.setTransform(280.3,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.6,550.8);


(lib.G02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgM/AqzQihgsg1gEQhfgHiPABQifAFhPAAQkaABllg/Qh8gWi7goIk1hBQCfhZCsjYQC4j9BfhxQBLhaCPiNIDhjfQCliqCXjnQCAjEB+j8QAbg2AohGIBHh9QAcgxALhbQANhoAOgjQATgzA6jDQAuicAqhXQBDiNAuhNQBKh5BPhGQAqglBEgpIB1hEQCLhSAphdQAjhRg5jIQg3jBhKhZQhChBgYggQgmg1APhPQALg7AlhLQAnhPApgoQiFg8iQBcQhAAogtA9QguA/gPBFQgVBeAbB3QAQBFArCIQAnCNgKCWQgLCbg7CAQhECVieBMQifBLimgoQh6gdhQhXQhZhgASh0QB3AqAsgGQBEgKAohrQAfhVAHg6QAHhIgLieQgVhVgRgzQgSgwgLghIgqh5QgXhGgHg3QgTiKA5iWQA4iVBoheQB/hyCxgrQAzgNBxgmQBmgdBAAMQBrAWBYBHQAzApBqBjQAagSAJgvQAIgsAigTQAogVAvAbQAxAbAGAwIAgADQAUACANgDIghAAQBUgyCQAhQAxALCuA/QBYAhBRA+QBRA9A2BMQBABbALBDQAFAjgJCIQgEBGA5BkQA9BqADA8QgyAJgKA0QgGAjgCAHQgIAWgTALQAKBbgMBXQgQB2g0AoQguAiiKgfQgogJiYgwQAEA4g2A9IhiBbQCoBNBjDnQAgBIAoCAQAuCQARAtQBJC7AXA3QA7CLA5BfQAUAjAvA2IBTBgQBmB5ADBRQCXhkCsiuQB+iACbi6QDSj/BQh2QCOjQBFjVQAYhQALgeQASguAogyQAbghAdgqIA1hQQAOgBAbABQAMA6gmBHQgdA2gwAvQAUgTAxgcQA+glA3gVQCag7glBtQgIAWhIAhQhbAogFAEQg2AkgYAaQgnApgDAwQAPgCAhAEQAhAEAPgCQBaAyArA4QAwA+gpAhQgMgBgYgZQgcgegNgGQgggPgwgGQg2gEgZgEQgHAjgYA5QgcBAgIAbQBMgGAfgEQAsgGA3gOQAIAQADAaQADAXgCAUQg1AMg4AjQg9ArglAWQgRAKhTAiQhAAaggAeQhFBDhDB3IhpDUQgoBOhWCGQhfCUgjA/QgxBahOBjQhgBzg2BDQgHAJguBPQghA3ggAQQg0AYg9gZQgogRg5gwQhPhDhHhaQg3hGhChqIiGjIQhLhygsheQgPghgog4IhJhkQgng4gVgsQAKBFAABgQgBCxgpBeQgnBchiBfIhUBOQgyAvgfAlQh7CUggAuQhTB1gXBpQgXBkg0C/Qg3DJgWBdIgzDYQgwCfg1gCQgCBqgiCZQgqDBg6AoQggAWg9AAQgwAAhDgOg");
	this.shape.setTransform(278.2,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,556.4,550.8);


(lib.G01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8AAC2").s().p("EgM/AqzQihgsg1gEQhfgHiPABQifAFhPAAQkaABllg/Qh8gWi7goIk1hBQCfhZCsjYQC4j9BfhxQBLhaCPiNIDhjfQCliqCXjnQCAjEB+j8QAbg2AohGIBHh9QAcgxALhbQANhoAOgjQATgzA6jDQAuicAqhXQBDiNAuhNQBKh5BPhGQAqglBEgpIB1hEQCLhSAphdQAjhRg5jIQg3jBhKhZQhChBgYggQgmg1APhPQALg7AlhLQAnhPApgoQiFg8iQBcQhAAogtA9QguA/gPBFQgVBeAbB3QAQBFArCIQAnCNgKCWQgLCbg7CAQhECVieBMQifBLimgoQh6gdhQhXQhZhgASh0QB3AqAsgGQBEgKAohrQAfhVAHg6QAHhIgLieQgVhVgRgzQgSgwgLghIgqh5QgXhGgHg3QgTiKA5iWQA4iVBoheQB/hyCxgrQAzgNBxgmQBmgdBAAMQBrAWBYBHQAzApBqBjQAagSAJgvQAIgsAigTQAogVAvAbQAxAbAGAwIAgADQAUACANgDIghAAQBUgyCQAhQAxALCuA/QBYAhBRA+QBRA9A2BMQBABbALBDQAFAjgJCIQgEBGA5BkQA9BqADA8QgyAJgKA0QgGAjgCAHQgIAWgTALQAKBbgMBXQgQB2g0AoQguAiiKgfQgogJiYgwQAEA4g2A9IhiBbQCoBNBjDnQAgBIAoCAQAuCQARAtQBJC7AXA3QA7CLA5BfQAUAjAvA2IBTBgQBmB5ADBRQCXhkCsiuQB+iACbi6QDSj/BQh2QCOjQBFjVQAYhQALgeQASguAogyQAbghAdgqIA1hQQAOgBAbABQAMA6gmBHQgdA2gwAvQAUgTAxgcQA+glA3gVQCag7glBtQgIAWhIAhQhbAogFAEQg2AkgYAaQgnApgDAwQAPgCAhAEQAhAEAPgCQARAvAkBNQAbBHgEBMQgsAEgshNQgZgrgLgOQgWgbgagEQgHAjgYA5QgcBAgIAbQBMgGAfgEQAsgGA3gOQAIAQADAaQADAXgCAUQg1AMg4AjQg9ArglAWQgRAKhTAiQhAAaggAeQhFBDhDB3IhpDUQgoBOhWCGQhfCUgjA/QgxBahOBjQhgBzg2BDQgHAJguBPQghA3ggAQQg0AYg9gZQgogRg5gwQhPhDhHhaQg3hGhChqIiGjIQhLhygsheQgPghgog4IhJhkQgng4gVgsQAKBFAABgQgBCxgpBeQgnBchiBfIhUBOQgyAvgfAlQh7CUggAuQhTB1gXBpQgXBkg0C/Qg3DJgWBdIgzDYQgwCfg1gCQgCBqgiCZQgqDBg6AoQggAWg9AAQgwAAhDgOg");
	this.shape.setTransform(278.2,275.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,556.4,550.8);


(lib.cup2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup2_1();
	this.instance.setTransform(176.3,28.6,0.25,0.25,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,97.6);


(lib.cup1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup1_1();
	this.instance.setTransform(0,0,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,156);


(lib.first_splash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8A9C2").s().p("EBAZAqOQgFgDgFgGMiD2gAFIgZAAIgUAAIgPgPIAAgPIAKgPIAKgCIAAgNIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgNIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAFgPIAFgPIAAgPIAFgPIAAgPIgFgPIgFgPIgFgPIAAgPIAAgPIAAgPIAKgKIAFgFIAPAAIAKAAIAAgeIgZAAIgPgPIAAgPIAKgPIAUgFIAAgFMCB+AAFQAIgDAHADIAMAAIAPAPIAFAPIgGAJIACAHQAXCSgsCKQgMApgqBgQglBXgNA0QgQA+gDBSQgBAtADBkMABYAlrQAZK4AaFaQAoIlBOG3IDlAAIAPAPIAFAPIgKAPIgUAKIjTAAQgCAEgFADQgFAEgGAAQgEAAgEgCg");
	this.shape.setTransform(438.9,270.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,877.7,540.9);


(lib.bottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03();
	this.instance.setTransform(20.3,0,0.183,0.183,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,109.3);


(lib.cup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup2_0();
	this.instance.setTransform(88.1,48.7,1,1,0,0,0,88.1,48.7);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,97.6);


(lib.cup1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup1_0();
	this.instance.setTransform(32.8,78,1,1,0,0,0,32.8,78);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,156);


(lib.cap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:25.4},0).wait(1).to({rotation:50.8},0).wait(1).to({rotation:76.2},0).wait(1).to({rotation:101.6},0).wait(1).to({rotation:127},0).wait(1).to({rotation:152.4},0).wait(1).to({rotation:177.8},0).wait(1).to({rotation:155.5},0).wait(1).to({rotation:133.3},0).wait(1).to({rotation:111},0).wait(1).to({rotation:88.7},0).wait(1).to({rotation:66.5},0).wait(1).to({rotation:44.2},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:-0.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,23.5);


// stage content:



(lib.FPG01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bg:0});

	// splash
	this.splash = new lib.first_splash();
	this.splash.setTransform(419.4,247,1,1,0,0,0,438.9,270.4);

	this.timeline.addTween(cjs.Tween.get(this.splash).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(107));

	// gend3
	this.gend3 = new lib.Gend3();
	this.gend3.setTransform(139.2,384.4,1.165,1.165,0,0,0,217.8,325.7);
	this.gend3.alpha = 0.699;
	this.gend3._off = true;
	this.gend3.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.gend3.cache(-2,-2,440,655);

	this.timeline.addTween(cjs.Tween.get(this.gend3).wait(74).to({_off:false},0).wait(43));

	// gend2
	this.gend2 = new lib.Gend2();
	this.gend2.setTransform(219.9,325.8,1.165,1.165,0,0,0,287.1,275.4);
	this.gend2.alpha = 0.699;
	this.gend2._off = true;
	this.gend2.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.gend2.cache(-2,-2,578,555);

	this.timeline.addTween(cjs.Tween.get(this.gend2).wait(70).to({_off:false},0).to({_off:true},4).wait(43));

	// gend1
	this.gend1 = new lib.Gend1();
	this.gend1.setTransform(267.2,325.8,1.165,1.165,0,0,0,327.7,275.4);
	this.gend1.alpha = 0.699;
	this.gend1._off = true;
	this.gend1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.gend1.cache(-2,-2,660,555);

	this.timeline.addTween(cjs.Tween.get(this.gend1).wait(66).to({_off:false},0).to({_off:true},4).wait(47));

	// g04
	this.g04 = new lib.G04();
	this.g04.setTransform(214.5,325.4,1.182,1.182,0,0,0,282.9,275.4);
	this.g04.alpha = 0.699;
	this.g04._off = true;
	this.g04.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.g04.cache(-2,-2,570,555);

	this.timeline.addTween(cjs.Tween.get(this.g04).wait(62).to({_off:false},0).to({_off:true},4).wait(51));

	// g03
	this.g03 = new lib.G03();
	this.g03.setTransform(211.3,325.4,1.182,1.182,0,0,0,280.2,275.4);
	this.g03.alpha = 0.699;
	this.g03._off = true;
	this.g03.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.g03.cache(-2,-2,565,555);

	this.timeline.addTween(cjs.Tween.get(this.g03).wait(58).to({_off:false},0).to({_off:true},4).wait(55));

	// g02
	this.g02 = new lib.G02();
	this.g02.setTransform(209,325.4,1.182,1.182,0,0,0,278.2,275.4);
	this.g02.alpha = 0.699;
	this.g02._off = true;
	this.g02.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.g02.cache(-2,-2,560,555);

	this.timeline.addTween(cjs.Tween.get(this.g02).wait(54).to({_off:false},0).to({_off:true},4).wait(59));

	// g01
	this.g01 = new lib.G01();
	this.g01.setTransform(209,325.4,1.182,1.182,0,0,0,278.2,275.4);
	this.g01.alpha = 0.699;
	this.g01._off = true;
	this.g01.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.g01.cache(-2,-2,560,555);

	this.timeline.addTween(cjs.Tween.get(this.g01).wait(42).to({_off:false},0).to({_off:true},12).wait(63));

	// gmove2
	this.gmove2 = new lib.Gmove2();
	this.gmove2.setTransform(225.8,280.9,1.182,1.182,0,0,0,319.2,288.5);
	this.gmove2.alpha = 0.699;
	this.gmove2._off = true;
	this.gmove2.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.gmove2.cache(-2,-2,643,581);

	this.timeline.addTween(cjs.Tween.get(this.gmove2).wait(38).to({_off:false},0).to({_off:true},4).wait(75));

	// gmove1
	this.gmove1 = new lib.Gmove1();
	this.gmove1.setTransform(177.5,280.2,1.182,1.182,0,0,0,264.1,295.8);
	this.gmove1.alpha = 0.699;
	this.gmove1._off = true;
	this.gmove1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.gmove1.cache(-2,-2,532,595);

	this.timeline.addTween(cjs.Tween.get(this.gmove1).wait(34).to({_off:false},0).to({_off:true},4).wait(79));

	// gst
	this.instance = new lib.Gstand();
	this.instance.setTransform(71.1,287.1,1.182,1.182,0,0,0,174,293.7);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance.cache(-2,-2,352,591);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(83));

	// cup
	this.instance_1 = new lib.cup1();
	this.instance_1.setTransform(535.5,406,1,1,0,0,0,32.8,78);

	this.instance_2 = new lib.cup2();
	this.instance_2.setTransform(648.4,466.6,1,1,0,0,0,88.1,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},116).wait(1));

	// cap
	this.instance_3 = new lib._04();
	this.instance_3.setTransform(537,248.4,0.183,0.183,12.2);

	this.instance_4 = new lib.cap("synched",0);
	this.instance_4.setTransform(548.9,260.2,1,1,0,0,0,15.7,11.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},53).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).wait(1).to({x:557.3,y:255.2,startPosition:1},0).wait(1).to({x:566.3,y:251.1,startPosition:2},0).wait(1).to({x:575.7,y:248.2,startPosition:3},0).wait(1).to({x:585.4,y:246.8,startPosition:4},0).wait(1).to({x:595.2,y:247.4,startPosition:5},0).wait(1).to({x:604.6,y:250.3,startPosition:6},0).wait(1).to({x:613.1,y:255.2,startPosition:7},0).wait(1).to({x:620.5,y:261.7,startPosition:8},0).wait(1).to({x:626.9,y:269.2,startPosition:9},0).wait(1).to({x:633.6,y:275,startPosition:10},0).wait(1).to({x:639.8,y:282.4,startPosition:11},0).wait(1).to({x:646.2,y:289.6,startPosition:12},0).wait(1).to({x:651.6,y:298.3,startPosition:13},0).wait(1).to({x:657.5,y:308.9,startPosition:14},0).wait(1).to({x:659.6,y:314.4,startPosition:15},0).wait(1).to({x:662.1,y:324.4,startPosition:0},0).wait(1).to({x:665.6,y:333.8,startPosition:1},0).wait(1).to({x:669.4,y:342.4,startPosition:2},0).wait(1).to({x:672.8,y:351.7,startPosition:3},0).wait(1).to({x:676.1,y:361.1,startPosition:4},0).wait(1).to({x:679.4,y:371.2,startPosition:5},0).wait(1).to({x:681.9,y:379.3,startPosition:6},0).wait(1).to({x:684.7,y:384.9,startPosition:7},0).wait(1).to({x:687.5,y:390.4,startPosition:8},0).wait(1).to({x:690.3,y:396,startPosition:9},0).wait(1).to({x:693.1,y:401.6,startPosition:10},0).wait(1).to({x:695.9,y:407.2,startPosition:11},0).wait(1).to({x:698.6,y:412.8,startPosition:12},0).wait(1).to({x:701.4,y:418.4,startPosition:13},0).wait(1).to({x:704.2,y:424,startPosition:14},0).wait(1).to({x:706.9,y:429.6,startPosition:15},0).wait(1).to({x:713.6,y:418.7,startPosition:0},0).wait(1).to({x:720.5,y:417.9,startPosition:1},0).wait(1).to({x:728.7,y:428.5,startPosition:2},0).wait(1).to({x:734.4,y:438.6,startPosition:3},0).wait(1).to({x:738.9,y:448.6,startPosition:4},0).wait(1).to({x:742.1,y:441.3,startPosition:5},0).wait(1).to({x:747.1,y:435.2,startPosition:6},0).wait(1).to({x:752.7,y:439.6,startPosition:7},0).wait(1).to({x:758.1,y:454.5,startPosition:8},0).wait(1).to({x:763.5,y:469.5,startPosition:9},0).wait(1).to({x:769,y:484.5,startPosition:10},0).wait(1).to({x:774.7,y:499.4,startPosition:11},0).to({_off:true},1).wait(20));

	// bot
	this.instance_5 = new lib._03();
	this.instance_5.setTransform(516.9,238.8,0.183,0.183,12.2);

	this.bot = new lib.bottle();
	this.bot.setTransform(557.5,325.5,1,1,0,0,0,60.9,86.7);
	this.bot._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.bot}]},53).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[{t:this.bot}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.bot).wait(53).to({_off:false},0).wait(1).to({regX:45.8,regY:54.7,rotation:5.8,x:545.6,y:292.1},0).wait(1).to({rotation:11.5,x:549,y:291.1},0).wait(1).to({rotation:17.3,x:552.6,y:290.4},0).wait(1).to({rotation:23.1,x:556.1,y:290.1},0).wait(1).to({rotation:28.8,x:559.6},0).wait(1).to({rotation:34.6,x:563.2,y:290.5},0).wait(1).to({rotation:40.4,x:566.6,y:291.3},0).wait(1).to({rotation:46.1,x:570,y:292.4},0).wait(1).to({rotation:51.9,x:573.3,y:293.9},0).wait(1).to({rotation:57.7,x:576.3,y:295.6},0).wait(1).to({rotation:63.5,x:579.2,y:297.6},0).wait(1).to({rotation:69.2,x:581.9,y:300},0).wait(1).to({rotation:72.2,x:583.2,y:301.3},0).wait(1).to({rotation:75.1,x:584.4,y:302.6},0).wait(1).to({rotation:78.1,x:585.6,y:304.1},0).wait(1).to({rotation:81,x:586.6,y:305.6},0).wait(1).to({rotation:84,x:587.6,y:307.1},0).wait(1).to({rotation:86.9,x:588.5,y:308.7},0).wait(1).to({rotation:89.9,x:589.3,y:310.3},0).wait(1).to({rotation:92.8,x:590.1,y:312},0).wait(1).to({rotation:95.8,x:590.7,y:313.6},0).wait(1).to({rotation:98.7,x:591.3,y:315.4},0).wait(1).to({rotation:101.7,x:591.7,y:317.1},0).wait(1).to({rotation:104.6,x:592.2,y:318.9},0).wait(1).to({rotation:107.6,x:592.4,y:320.7},0).wait(1).to({rotation:110.5,x:592.6,y:322.5},0).wait(1).to({rotation:113.5,x:592.7,y:324.3},0).wait(1).to({rotation:116.4,y:326.2},0).wait(1).to({rotation:119.4,x:592.6,y:328},0).wait(1).to({rotation:122.3,x:592.5,y:329.8},0).wait(1).to({rotation:125.3,x:592.2,y:331.6},0).wait(1).to({rotation:128.3,x:591.8,y:333.4},0).wait(1).to({regX:59.4,regY:83.5,scaleX:1,scaleY:1,rotation:132.1,x:557.4,y:325.5},0).wait(1).to({regX:45.8,regY:54.7,scaleX:1,scaleY:1,rotation:135.3,x:593.2,y:342.4},0).wait(1).to({rotation:138.3,x:598.3,y:350.1},0).wait(1).to({rotation:141.4,x:603.2,y:358},0).wait(1).to({rotation:144.4,x:607.7,y:366.1},0).wait(1).to({rotation:147.5,x:611.8,y:374.4},0).wait(1).to({rotation:150.6,x:615.4,y:382.9},0).wait(1).to({rotation:153.6,x:618.4,y:391.7},0).wait(1).to({rotation:156.7,x:620.8,y:400.7},0).wait(1).to({rotation:159.8,x:622.3,y:409.9},0).wait(1).to({rotation:162.8,x:623.1,y:419.3},0).wait(1).to({rotation:165.9,y:428.8},0).wait(1).to({rotation:169,x:622.2,y:438.2},0).wait(1).to({rotation:172,x:620.7,y:447.7},0).wait(1).to({rotation:175.1,x:618.5,y:456.9},0).wait(1).to({regX:30.2,regY:33.5,rotation:175.2,x:633.6,y:474.5},0).wait(1).to({regX:45.8,regY:54.7,rotation:182.5,x:618.9,y:452.6},0).wait(1).to({rotation:190,x:621.9,y:450.9},0).wait(1).to({rotation:213.3,x:632.2,y:448.2},0).wait(1).to({rotation:236.7,x:642.7,y:449.8},0).wait(1).to({rotation:260,x:651.7,y:455.4},0).wait(1).to({rotation:250,x:648.1,y:452.6},0).wait(1).to({rotation:255,x:650,y:453.9},0).wait(1).to({rotation:260,x:651.7,y:455.4},0).wait(6).to({_off:true},1).wait(1));

	// bg
	this.instance_6 = new lib.Image();
	this.instance_6.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},116).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.5,173,999.8,712);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;