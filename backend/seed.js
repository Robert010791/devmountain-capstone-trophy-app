require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const trophiesSeed = (req, res) => {
  sequelize
    .query(
      `
      DROP TABLE if EXISTS usertrophies;
      DROP TABLE if EXISTS trophiesTable;
      DROP TABLE if EXISTS userTable;



CREATE TABLE userTable (
  userId varchar primary key,
  userName varchar unique,
  password varchar,
  email varchar unique
);

INSERT into userTable (userId, userName, password, email)
VALUES (1, 'bobby', '1234pass', 'bobby@email.com');


    CREATE TABLE trophiesTable (
        trophyId int primary key,
        gameImg varchar,
        title varchar,
        description varchar,
        direction varchar,
        trophyImg varchar,
        completed boolean
    );

    CREATE TABLE usertrophies(
      userid varchar,
      trophyid int unique,
      foreign key (userid) references usertable(userid),
      foreign key (trophyid) references trophiestable(trophyid)
    );

  
    
    INSERT into trophiesTable (trophyId, gameImg, title, description, direction, trophyImg, completed)
    VALUES (1, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy1.png?v=1675186086143', 'BloodBorne',
     'All trophies acquired. Hats off', 'Earn every other trophy', 
     'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-platinum.png?v=1675186081558', false),

    (2, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy2.png?v=1675312147185', 
    'Yharnam Sunrise', 'You lived through the hunt, and saw another day.',
     'Accept Gehrman''s final request',
     'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272', false),

     (3, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy3.png?v=1675721959353',
 'Honoring Wishes', 'Captivated by the moon presence, you pledge to watch over the hunter''s dream', 
 'Defeat Gehrman without ever consuming three one Third of Umbilical Cord.', 
 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272',
false),

(4, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy3.png?v=1675721959353',
 'Childhood''s Beginning', 'You became an infant Great One, lifting humanity into its next childhood.',
  'Acquire and consume three One Third of Umbilical Cord.', 
  'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272',
false),

(5, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy5.png?v=1675722908080',
 'Yharnam, Pthumerian Queen', 'Defeat Yharna, Blood Queen of the Old Labyrinth.',
 'Defeat Yharnam, a boss at the final layer of the Great Pthumeru Ihyll Chalice.', 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272',
false),

(6, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy6.png?v=1675723335689',
 'Hunter''s Essence', 'Acquire all hunter weapons',
 'Acquire all Weapons. Firearms included.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272',
false),

(7, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy7.png?v=1675723480524',
 'Hunter''s Craft', 'Acquire all special hunter tools.',
 'Acquire all Hunter Tools.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-gold.png?v=1675312150272',
false),

(8, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy8.png?v=1675723486128',
 'Weapon Master', 'Acquire a weapon of the highest level.',
 'Fully upgrade a Weapon. See Workshop for information on how to do this.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(9, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy9.png?v=1675723494537',
 'Blood Gem Master', 'Acquire an extremely precious blood gem.',
 'Obtain a Blood Gem of rank 15 or higher which can be found in depth 4+ Dungeons.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(10, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy10.png?v=1675723499830',
 'Rune Master', 'Acquire an extremely precious Caryll Rune.',
 'In the elevator behind the locked right door in Cathedral Ward there''s a hidden path that leads to one of these runes.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(11, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy11.png?v=1675723505726',
 'Cainhurst', 'Gain entry to Cainhurst, the lost and ruined castle.',
 'Acquire Cainhurst Summons, then head to the monument at Hemwick''s Crossing.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(12, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy12.png?v=1675723511598',
 'The Choir', 'Gain entry to the realm of the Choir, the high stratum of the Healing Church.',
 'Acquire Upper Cathedral Key, and head to the top of the Cathedral Ward.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(13, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy13.png?v=1675723517008',
 'The Source of the Dream', 'Discover the abandoned old workshop, the source of the hunter''s dream.',
 'Hidden door in the cathedral towers basement. Don''t jump all the way down.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(14, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy14.png?v=1675723522149',
 'Nightmare Lecture Building', 'Gain entry into the Byrgenwerth lecture building, that drifts within the realm of nightmare.',
 'After defeating The One Reborn or being grabbed by the lesser Amygdala in Cathedral Ward while having the tonsil stone in your inventory.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-silver.png?v=1675721951566',
false),

(15, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy15.png?v=1675723529361',
 'Father Gascoigne', 'Defeat the beast that once was Father Gascoigne.',
 'Defeat Father Gascoigne in Central Yharnam.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(16, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy16.png?v=1675723533420',
 'Vicar Amelia', 'Defeat the beast that once was Vicar Amelia.',
 'Defeat Vicar Amelia in Cathedral Ward.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(17, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy17.png?v=1675723538758',
 'Shadow of Yharnam', 'Defeat the Shadow of Yharnam.',
 'Defeat Shadow of Yharnam in Forbidden Woods.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(18, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy18.png?v=1675723543205',
 'Rom, the Vacuous Spider', 'Defeat Great One: Rom, the Vacuous Spider.',
 'Defeat Rom, the Vacuous Spider at Moonside Lake.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(19, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy19.png?v=1675723550437',
 'The One Reborn', 'Defeat the One Reborn.',
 'Defeat The One Reborn in Yahar''gul Chapel.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(20, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy20.png?v=1675723557007',
 'Micolash, Host of the Nightmare', 'Defeat Micolash, Host of the Nightmare.',
 'Defeat Micolash, Host of the Nightmare in Mergo''s Loft Base.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(21, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy21.png?v=1675723562803',
 'Mergo''s Wet Nurse', 'Defeat Great One: Mergo''s Wet Nurse.',
 'Defeat Mergo''s Wet Nurse in Mergo''s Loft: Middle.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(22, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy22.png?v=1675723567683',
 'Cleric Beast', 'Defeat Cleric Beast.',
 'Defeat Cleric Beast in Central Yharnam.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(23, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy23.png?v=1675723573903',
 'Blood-starved Beast', 'Defeat Blood-starved Beast.',
 'Defeat Blood-starved Beast in Old Yharnam.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(24, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy24.png?v=1675723580278',
 'The Witch of Hemwick', 'Defeat the Witch of Hemwick.',
 'Defeat Witch of Hemwick in Hemwick Charnel Lane.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(25, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy25.png?v=1675723590862',
 'Darkbeast Paarl', 'Defeat Darkbeast Paarl.',
 'Defeat Darkbeast Paarl in Graveyard of the Darkbeast.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(26, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy26.png?v=1675723597228',
 'Amygdala', 'Defeat Great One: Amygdala.',
 'Defeat Amygdala in Nightmare Frontier.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(27, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy27.png?v=1675723601728',
 'Martyr Logarius', 'Defeat Martyr Logarius.',
 'Defeat Martyr Logaruis in Cainhurst Castle.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(28, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy28.png?v=1675723606303',
 'Celestial Emissary', 'Defeat Great One: Celestial Emissary.',
 'Defeat Celestial Emissary in Lunar Flower Garden.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(29, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy29.png?v=1675723611953',
 'Ebrietas, Daughter of the Cosmos', 'Defeat Great One: Ebrietas, Daughter of the Cosmos.',
 'Defeat Ebrietas, Daughter of the Cosmos in the Altar of Despair.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(30, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy30.png?v=1675723616821',
 'Blood Gem Contact', 'Acquire a blood gem that imbues hunter weapons with special strength',
 'Acquire a Blood Gem.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(31, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy31.png?v=1675723621318',
 'Rune Contact', 'Acquire a Caryll Rune that endows hunters with special strength.',
 'Acquire a Caryll Rune.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(32, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy32.png?v=1675723626153',
 'Chalice of Pthumeru', 'Acquire the Chalice of Pthumeru that seals the catacombs that form a web deep below Yharnam',
 'Acquire Chalice of Pthumeru (defeat Blood-Starved Beast).', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(33, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy33.png?v=1675723630935',
 'Chalice of Ailing Loran', 'Acquire the Chalice of Ailing Loran that seals the tragic land lost to the sands.',
 'Defeat Amygdala.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false),

(34, 'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/trophy34.png?v=1675723635297',
 'Chalice of Isz', 'Acquire the Great Chalice of Isz that seals the home of the cosmic kin.',
 'Defeat Ebrietas, Daughter of the Cosmos.', 
'https://cdn.glitch.global/ef32792f-0cc2-45eb-addb-026f10a9a7cc/40-bronze.png?v=1675721944886',
false);
     
     
     
     `
    )
    .then(() => {
      console.log('Trophies table created');
      res.sendStatus(200);
    });
};

module.exports = {
  trophiesSeed,
};
