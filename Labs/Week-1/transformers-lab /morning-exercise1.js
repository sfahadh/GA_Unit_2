const transformers = [
    {
      name: 'Optimus Prime',
      form: 'Freightliner Truck',
      form_type: 'vehicle',
      team: 'Autobot',
      photo: 'http://tfwiki.net/mediawiki/images2/2/2b/Shadowplay2_no_frikkin_way.jpg',
    },
    {
      name: 'Megatron',
      form: 'Gun',
      form_type: 'object',
      team: 'Decepticon',
      photo: 'http://tfwiki.net/mediawiki/images2/thumb/9/92/MTMTE50_megatron_class_dismissed.jpg/562px-MTMTE50_megatron_class_dismissed.jpg',
    },
    {
      name: 'Bumblebee',
      form: 'VW Beetle',
      form_type: 'vehicle',
      team: 'Autobot',
      photo: 'http://tfwiki.net/mediawiki/images2/4/4d/Bumblebee_car_Hawk_Among_the_Sparrows.jpg',
    },
    {
      name: 'Soundwave',
      form: 'Walkman',
      form_type: 'object',
      team: 'Decepticon',
      photo: 'http://tfwiki.net/mediawiki/images2/8/8d/Soundwaves-allofustogether.jpg',
    },
    {
      name: 'Starscream',
      form: 'Fighter Jet',
      form_type: 'vehicle',
      team: 'Decepticon',
      photo: 'http://tfwiki.net/mediawiki/images2/3/33/Ongoing13_sad_starscream_is_sad.jpg',
    },
    {
      name: 'Rodimus Prime',
      form: 'Ford GT',
      form_type: 'vehicle',
      team: 'Autobot',
      photo: 'http://tfwiki.net/mediawiki/images2/thumb/f/f6/SpotlightHotRod-HotRodcvrAexcerpt.jpg/470px-SpotlightHotRod-HotRodcvrAexcerpt.jpg',
    }
  ];

const names = transformers.map(function (transformer) {
      return transformer.name;
});
console.log(names);

const autobots = transformers.filter(function (transformer) {
    return transformer.team === "Autobot";
});
console.log(autobots);

const vehicle = transformers.filter(function (transformer) {
    return transformer.form_type === "vehicle";
});

const namePhoto = transformers.map(function (transformer) {
    if(transformer.photo !== "" && transformer.name !== "") {
        return transformer;
    };
});
console.log(namePhoto);

for(let i = 0; i < namePhoto.length; i++) {
    let header = document.createElement("h1");
    header.innerHTML = namePhoto[i].name;
    document.body.appendChild(header);
    let img = document.createElement("img");
    img.src = namePhoto[i].photo;
    document.body.appendChild(img);
}

  /**
   * PART 2
   *
   * Reduce the Constructicons to form Devastator!
   * The Devastator object should look like this:
   {
      name: 'Devastator',
      team: 'Decepticons',
      form: {
        rightLeg: 'Scrapper',
        upperTorso: 'Hook',
        leftArm: 'Bonecrusher',
        rightArm: 'Scavenger',
        leftLeg: 'Mixmaster',
        lowerTorso: 'Long Haul',
       },
      }
    * Remember, when using `reduce`, you can pass in two
    * arguments: the callback and the initial value of the
    * accumulator. How can you leverage this to create the
    * initial structure of the Devastator object?
   */
  
  const constructicons = [
    {
      name: 'Scrapper',
      form: 'Freightliner Truck',
      team: 'Decepticon',
      bodyPart: 'rightLeg'
    },
    {
      name: 'Hook',
      form: 'Mobile Crane',
      team: 'Decepticon',
      bodyPart: 'upperTorso'
    },
    {
      name: 'Bonecrusher',
      form: 'Bulldozer',
      team: 'Decepticon',
      bodyPart: 'leftArm'
    },
    {
      name: 'Scavenger',
      form: 'Excavator',
      team: 'Decepticon',
      bodyPart: 'rightArm'
    },
    {
      name: 'Mixmaster',
      form: 'Concrete Mixer',
      team: 'Decepticon',
      bodyPart: 'leftLeg'
    },
    {
      name: 'Long Haul',
      form: 'Dump Truck',
      team: 'Decepticon',
      bodyPart: 'lowerTorso'
    }
  ];

  let form = {};
  const devestator = (name, bodyPart) => {
      form = {
          constructicons.name: constructicons.bodyPart,
      }
      
  }