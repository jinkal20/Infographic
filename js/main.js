
(() => {
	TweenMax.from("#XMLID_1_", 3, {x:300, opacity:0, scale:0.5});
	let infoImage = document.querySelector("#ways");
	function animateimage(){
		TweenMax.to("#ways", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
	}
	function unanimateimage(){
		TweenMax.to("#ways", 0.5, {scale:1, transformOrigin: "50% 50%"});

	}

	/*water pollution circle*/
	let wb = document.querySelector("#water_x5F_pollution","#background_21_");
	function animatewb(){
		TweenMax.to("#water_x5F_pollution", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_21_", 0.5, {transformOrigin: "50% 50%",opacity:0,});
	}
	function unanimatewb(){
		TweenMax.to("#water_x5F_pollution", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_21_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	wb.addEventListener("mouseover", animatewb);
	wb.addEventListener("mouseout", unanimatewb);

	/*dirty pollution circle*/
	let dp = document.querySelector("#dirty_x5F_pollution","#background_11_");
	function animatedp(){
		TweenMax.to("#dirty_x5F_pollution", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_11_", 0.5, {transformOrigin: "50% 50%", opacity:0});
	}
	function unanimatedp(){
		TweenMax.to("#dirty_x5F_pollution", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_11_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	dp.addEventListener("mouseover", animatedp);
	dp.addEventListener("mouseout", unanimatedp);

	/*Noise pollution circle*/
	let npc = document.querySelector("#noise_x5F_polution","#background_15_");
	function animatenpc(){
		TweenMax.to("#noise_x5F_polution", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_15_", 0.5, {transformOrigin: "50% 50%", opacity:0});
	}
	function unanimatenpc(){
		TweenMax.to("#noise_x5F_polution", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_15_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	npc.addEventListener("mouseover", animatenpc);
	npc.addEventListener("mouseout", unanimatenpc);

	/*Garbage pollution circle*/
	let gpc = document.querySelector("#garbage_x5F_disposal","#background_5_");
	function animategpc(){
		TweenMax.to("#garbage_x5F_disposal", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_5_", 0.5, {transformOrigin: "50% 50%", opacity:0});
	}
	function unanimategpc(){
		TweenMax.to("#garbage_x5F_disposal", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_5_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	gpc.addEventListener("mouseover", animategpc);
	gpc.addEventListener("mouseout", unanimategpc);

	/*light pollution circle*/
	let lpc = document.querySelector("#light_x5F_polution","#background_4_");
	function animatelpc(){
		TweenMax.to("#light_x5F_polution", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_4_", 0.5, {transformOrigin: "50% 50%", opacity:0});
	}
	function unanimatelpc(){
		TweenMax.to("#light_x5F_polution", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_4_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	lpc.addEventListener("mouseover", animatelpc);
	lpc.addEventListener("mouseout", unanimatelpc);

	/*Air pollution circle*/
	let apc = document.querySelector("#air_x5F_pollution","#background_1_");
	function animateapc(){
		TweenMax.to("#air_x5F_pollution", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
		TweenMax.to("#background_1_", 0.5, {transformOrigin: "50% 50%", opacity:0});
	}
	function unanimateapc(){
		TweenMax.to("#air_x5F_pollution", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#background_1_", 0.5, { transformOrigin: "50% 50%", opacity:1});

	}
	apc.addEventListener("mouseover", animateapc);
	apc.addEventListener("mouseout", unanimateapc);


	//Major Mineral Waste 

		let infosource = document.querySelector("#XMLID_30_","#lb_x5F_55_x25_","#XMLID_51_");
	function animatesource(){
		TweenMax.to("#XMLID_30_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#lb_x5F_55_x25_", 0.5, { transformOrigin: "50% 50%", width:284.3});
		TweenMax.to("#XMLID_51_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimatesource(){
		TweenMax.to("#XMLID_30_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#lb_x5F_55_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_51_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});
	}
	infosource.addEventListener("mouseover", animatesource);
	infosource.addEventListener("mouseout", unanimatesource);

	/*Munciple Waste*/
	
	let mw = document.querySelector("#XMLID_31_","#pink_x5F_46_x25_","#XMLID_49_");
	function animatemw(){
		TweenMax.to("#XMLID_31_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#pink_x5F_46_x25_", 0.5, { transformOrigin: "50% 50%", width:267.9});
		TweenMax.to("#XMLID_49_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimatemw(){
		TweenMax.to("#XMLID_31_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#pink_x5F_46_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_49_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});

	}
	mw.addEventListener("mouseover", animatemw);
	mw.addEventListener("mouseout", unanimatemw);

	/*Overall packing*/

	let op = document.querySelector("#XMLID_32_","#db_x5F_65_x25_","#XMLID_47_");
	function animateop(){
		TweenMax.to("#XMLID_32_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#db_x5F_65_x25_", 0.5, { transformOrigin: "50% 50%", width:363.9});
		TweenMax.to("#XMLID_47_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimateop(){
		TweenMax.to("#XMLID_32_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#db_x5F_65_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_47_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});

	}
	op.addEventListener("mouseover", animateop);
	op.addEventListener("mouseout", unanimateop);

	/*plastic packing*/

	let pp = document.querySelector("#XMLID_33_","#_x34_0_x25_","#XMLID_45_");
	function animatepp(){
		TweenMax.to("#XMLID_33_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#_x34_0_x25_", 0.5, { transformOrigin: "50% 50%", width:235.5});
		TweenMax.to("#XMLID_45_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimatepp(){
		TweenMax.to("#XMLID_33_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#_x34_0_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_45_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});

	}
	pp.addEventListener("mouseover", animatepp);
	pp.addEventListener("mouseout", unanimatepp);

	/*E-waste*/

	let ew = document.querySelector("#XMLID_34_","#_x33_2_x25_","#XMLID_44_");
	function animateew(){
		TweenMax.to("#XMLID_34_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#_x33_2_x25_", 0.5, { transformOrigin: "50% 50%", width:197.9});
		TweenMax.to("#XMLID_44_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimateew(){
		TweenMax.to("#XMLID_34_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#_x33_2_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_44_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});

	}
	ew.addEventListener("mouseover", animateew);
	ew.addEventListener("mouseout", unanimateew);

	/*Construction waste*/

	let cwd = document.querySelector("#XMLID_35_","#lp_x5F_88_x25_","#XMLID_43_");
	function animatecwd(){
		TweenMax.to("#XMLID_35_", 0.5, {scale:1.1, transformOrigin: "50% 50%"});
		TweenMax.to("#lp_x5F_88_x25_", 0.5, { transformOrigin: "50% 50%", width:470.9});
		TweenMax.to("#XMLID_43_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:1});
	}
	function unanimatecwd(){
		TweenMax.to("#XMLID_35_", 0.5, {scale:1, transformOrigin: "50% 50%"});
		TweenMax.to("#lp_x5F_88_x25_", 0.5, { transformOrigin: "50% 50%", width:25});
		TweenMax.to("#XMLID_43_", 0.5, {scale:1, transformOrigin: "50% 50%", opacity:0});

	}
	cwd.addEventListener("mouseover", animatecwd);
	cwd.addEventListener("mouseout", unanimatecwd);

	/*Recycle*/

	let recycle = document.querySelector("#recycle","#content");
	function animaterecycle(){
		TweenMax.to("#recycle", 0.5, {transformOrigin: "50% 50%"});
		TweenMax.to("#content", 0.5, { opacity:1});
	}
	function unanimaterecycle(){
		TweenMax.to("#recycle", 0.5, {transformOrigin: "50% 50%"});
		TweenMax.to("#content", 0.5, { transformOrigin: "50% 50%",opacity:0});
	}
	recycle.addEventListener("mouseover", animaterecycle);
	recycle.addEventListener("mouseout", unanimaterecycle);
	


})();