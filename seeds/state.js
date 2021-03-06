
exports.seed = function(knex, Promise) {

    // Deletes ALL existing entries
    return knex('park').del()
    .then(function(){

    return knex('state').del()
  })
    .then(function(){

    // Inserts seed entries
    return Promise.all([
      knex('state').insert({name: 'Alaska'}),
      knex('state').insert({name: 'Arizona'}),
      knex('state').insert({name: 'Arkansas'}),
      knex('state').insert({name: 'California'}),
      knex('state').insert({name: 'Colorado'}),
      knex('state').insert({name: 'Florida'}),
      knex('state').insert({name: 'Hawaii'}),
      knex('state').insert({name: 'Kentucky'}),
      knex('state').insert({name: 'Maine'}),
      knex('state').insert({name: 'Michigan'}),
      knex('state').insert({name: 'Minnesota'}),
      knex('state').insert({name: 'Montana'}),
      knex('state').insert({name: 'Nevada'}),
      knex('state').insert({name: 'New Mexico'}),
      knex('state').insert({name: 'North Dakota'}),
      knex('state').insert({name: 'North Carolina'}),
      knex('state').insert({name: 'Ohio'}),
      knex('state').insert({name: 'Oregon'}),
      knex('state').insert({name: 'South Carolina'}),
      knex('state').insert({name: 'South Dakota'}),
      knex('state').insert({name: 'Tennessee'}),
      knex('state').insert({name: 'Texas'}),
      knex('state').insert({name: 'Utah'}),
      knex('state').insert({name: 'Virginia'}),
      knex('state').insert({name: 'Washington'}),
      knex('state').insert({name: 'Wyoming'}),
      knex('state').insert({name: 'Idaho'})
      ])
    })
      .then(function(){
        return knex('state').select().then(function(states){
      // Inserts seed entries
          function getStateId(name) {
            for(var i = 0;i < states.length;i++) {
              if(name === states[i].name){
                return states[i].id
              }
            }
          }
          return Promise.all([
        // Inserts seed entries
              knex('park').insert(
                {
                  name: 'Yellowstone', year_founded: '1872', state_id:getStateId('Wyoming'), size:'2219790', img:'http://cdn.yellowstoneparknet.com/images/home/summer.jpg'
                }),
                knex('park').insert({
                  name: 'Yosemite', year_founded: '1880', state_id:getStateId('California'), size:'761266', img:'https://upload.wikimedia.org/wikipedia/commons/c/c7/YosemitePark2_amk.jpg'
                }),
                knex('park').insert({
                  name: 'Sequoia', year_founded: '1880', state_id:getStateId('California'), size:'404051', img:'https://upload.wikimedia.org/wikipedia/commons/2/27/Giant_Forest.jpg'
                })
          ]);
      });
  })
};
