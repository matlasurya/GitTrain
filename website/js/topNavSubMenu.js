var template = '{{#homeTab}}<li class="{{linkClass}}" id="{{id}}"><a href="{{url}}" class="{{linkClassTop}} ">{{name}}</a></li>{{/homeTab}}{{#servicesTab}}<li class="{{linkClass}}{{subTabMenu}}"  id="{{id}}"><div><a href="{{url}}">{{name}}</a><i class="icon-sort-down"></i></div><div class="subMenuItems"><ul>{{#servicesSubMenus}}<li><a href="{{url}}">{{name}}</a></li>{{/servicesSubMenus}}</ul></div></li>{{/servicesTab}}{{#engageModelTab}}<li class="{{linkClass}}"  id="{{id}}"><a href="{{url}}">{{name}}</a></li>{{/engageModelTab}}{{#aboutUsTab}}<li class="{{linkClass}}{{subTabMenu}}"  id="{{id}}"><div><a href="{{url}}">{{name}}</a><i class="icon-sort-down"></i></div><div class="subMenuItems"><ul>{{#aboutSubMenus}}<li><a href="{{url}}">{{name}}</a></li>{{/aboutSubMenus}}</ul></div></li>{{/aboutUsTab}}{{#resoureCenterTab}}<li class="{{linkClass}}"  id="{{id}}"><a href="{{url}}">{{name}}</a></li>{{/resoureCenterTab}}';

var topMenu = {
	"homeTab" :[{"name": "Home", "home": true, "id": "home", "linkClassTop": "topNavLinkText", "url": "index.html"}],
	
	"servicesTab" :[{
		"name": "Services", 
		"services": true, 
		"id": "serivces", 
		"url": "services.html",
		"servicesSubMenus": [
		  {"name": "Integration Solutions", "servicesMenu": true, "url": "IS.html"},
		  {"name": "Test Driven Development", "servicesMenu": true, "url": "TDD.html"},
		  {"name": "Performance & Middleware Consulting", "servicesMenu": true, "url": "PMC.html"},
		  {"name": "Business Intelligence", "servicesMenu": true, "url": "BI.html"},
		  {"name": "Cloud Consulting", "servicesMenu": true, "url": "CC.html"},
		  {"name": "Education", "servicesMenu": true, "url": "Edu.html"}
		]
	}],
	
	"engageModelTab" :[{"name": "Engagement Models", "engageModel": true, "id": "engageModel", "url": "engagementModels.html"}],

	"aboutUsTab" :[{
		"name": "About Us", 
		"aboutUs": true, 
		"id": "aboutUs", 
		"url": "aboutUs.html",
		"aboutSubMenus" :[
		  {"name": "Blog", "aboutUsMenu": true, "url": "blog.html"},
		  {"name": "Career", "aboutUsMenu": true, "url": "career.html"},
		  {"name": "Contact Us", "aboutUsMenu": true, "url": "contactUs.html"}	
		]
	}],

	"resoureCenterTab" :[{"name": "Resource Center", "resoureCenter": true, "id": "resoureCenter", "url": "resourceCenter.html"}],
	
	"linkClass" :"topNavLink",
	"subTabMenu":" subTabMenu"
 };   
 
document.getElementById('topMenu').innerHTML = Mustache.render(template, topMenu);