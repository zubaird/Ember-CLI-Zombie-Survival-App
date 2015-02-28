import DS from 'ember-data';

export default DS.Model.extend({
  job: DS.attr("string"),
  completed: DS.attr("boolean")
});

//
// .reopenClass({
// 	FIXTURES: [
// 		{
// 			id: 1,
// 			job:"Load up good comfy backpack. You'll need a lot of storage for you gear.",
// 			completed: true
// 		},
// 				{
// 			id: 2,
// 			job:"Look for sleeping bag. You will have to sleep sooner or later.",
// 			completed: false
// 		},
// 				{
// 			id: 3,
// 			job:"Grab ear plugs. To drown out the moaning of the undead.",
// 			completed: false
// 		},
// 				{
// 			id: 4,
// 			job:"Obtain red glow sticks. Good light source.",
// 			completed: false
// 		},
// 				{
// 			id: 5,
// 			job:"Find Hachet or machete. Both make great close quarters weapons and both are excellent survival tools.",
// 			completed: false
// 		},
// 				{
// 			id: 6,
// 			job:"Get Local map. Preferably a state or provincial map with roads/backroads and bodies of water.",
// 			completed: false
// 		},
// 				{
// 			id: 7,
// 			job:"Deck of Cards and a novel. You will get bored.",
// 			completed: false
// 		}
// 	]
// });
