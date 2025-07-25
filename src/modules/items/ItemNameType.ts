/*
To update this type when adding new items:

Open the game, and run the following code in the browser console

copy(`export type ItemNameType
    = ${[...new Set(Object.values(ItemList).map(i => i.name))].map(i => `'${i.replace(/'/g, "\\'")}'`).join('\n    | ')};`);

Replace everything in this file (except for this comment) with what was copied
*/

export type ItemNameType
    = 'xAttack'
    | 'xClick'
    | 'Lucky_egg'
    | 'Token_collector'
    | 'Dowsing_machine'
    | 'Lucky_incense'
    | 'ChopleBerry'
    | 'KebiaBerry'
    | 'ShucaBerry'
    | 'ChartiBerry'
    | 'SmallRestore'
    | 'MediumRestore'
    | 'LargeRestore'
    | 'Dungeon_ticket'
    | 'Explorer_kit'
    | 'Event_calendar'
    | 'Squirtbottle'
    | 'Sprinklotad'
    | 'Explosive_Charge'
    | 'Treasure_Scanner'
    | 'Yellow_Flute'
    | 'Black_Flute'
    | 'Time_Flute'
    | 'Red_Flute'
    | 'White_Flute'
    | 'Blue_Flute'
    | 'Boost_Mulch'
    | 'Rich_Mulch'
    | 'Surprise_Mulch'
    | 'Amaze_Mulch'
    | 'Freeze_Mulch'
    | 'Gooey_Mulch'
    | 'Pokeball'
    | 'Greatball'
    | 'Ultraball'
    | 'Masterball'
    | 'Fastball'
    | 'Quickball'
    | 'Timerball'
    | 'Duskball'
    | 'Luxuryball'
    | 'Diveball'
    | 'Lureball'
    | 'Nestball'
    | 'Repeatball'
    | 'Beastball'
    | 'Moonball'
    | 'Berry_Shovel'
    | 'Mulch_Shovel'
    | 'PokeBlock_Black'
    | 'PokeBlock_Red'
    | 'PokeBlock_Blue'
    | 'PokeBlock_Pink'
    | 'PokeBlock_Green'
    | 'PokeBlock_Yellow'
    | 'PokeBlock_Gold'
    | 'PokeBlock_Purple'
    | 'PokeBlock_Indigo'
    | 'PokeBlock_Brown'
    | 'PokeBlock_Light_Blue'
    | 'PokeBlock_Olive'
    | 'PokeBlock_Beige'
    | 'PokeBlock_Gray'
    | 'PokeBlock_White'
    | 'Abomasite'
    | 'Absolite'
    | 'Aerodactylite'
    | 'Aggronite'
    | 'Alakazite'
    | 'Ampharosite'
    | 'Audinite'
    | 'Banettite'
    | 'Beedrillite'
    | 'Blastoisinite'
    | 'Blazikenite'
    | 'Blue_Orb'
    | 'Cameruptite'
    | 'Charizardite_X'
    | 'Charizardite_Y'
    | 'Diancite'
    | 'Galladite'
    | 'Garchompite'
    | 'Gardevoirite'
    | 'Gengarite'
    | 'Glalitite'
    | 'Gyaradosite'
    | 'Heracronite'
    | 'Houndoominite'
    | 'Kangaskhanite'
    | 'Latiasite'
    | 'Latiosite'
    | 'Lopunnite'
    | 'Lucarionite'
    | 'Manectite'
    | 'Mawilite'
    | 'Medichamite'
    | 'Metagrossite'
    | 'Meteorite'
    | 'Mewtwonite_X'
    | 'Mewtwonite_Y'
    | 'Pidgeotite'
    | 'Pinsirite'
    | 'Red_Orb'
    | 'Sablenite'
    | 'Salamencite'
    | 'Sceptilite'
    | 'Scizorite'
    | 'Sharpedonite'
    | 'Slowbronite'
    | 'Steelixite'
    | 'Swampertite'
    | 'Tyranitarite'
    | 'Venusaurite'
    | 'Fire_egg'
    | 'Water_egg'
    | 'Grass_egg'
    | 'Fighting_egg'
    | 'Electric_egg'
    | 'Dragon_egg'
    | 'Pokemon_egg'
    | 'Mystery_egg'
    | 'Meteorite_Bills_Errand'
    | 'Tidal_Bell_Lugia'
    | 'Clear_Bell_Hooh'
    | 'GS_Ball_Celebi'
    | 'Eon_Ticket_Latis'
    | 'Celios_Errand_Ruby'
    | 'Celios_Errand_Sapphire'
    | 'Crystalline_Cocoon_Jirachi'
    | 'Meteorite_Shard_Delta'
    | 'Mysterious_Vial_Detective_Pikachu'
    | 'Heart_Diamond_Diancie'
    | 'Red_Petal_Mina'
    | 'Orange_Petal_Mina'
    | 'Yellow_Petal_Mina'
    | 'Green_Petal_Mina'
    | 'Blue_Petal_Mina'
    | 'Purple_Petal_Mina'
    | 'Pink_Petal_Mina'
    | 'Sand_Bag_Magikarp_Jump'
    | 'Jump_Counter_Magikarp_Jump'
    | 'Timber_Magikarp_Jump'
    | 'Rock_Cruncher_Magikarp_Jump'
    | 'Power_Generator_Magikarp_Jump'
    | 'Pokeball_Smash_Magikarp_Jump'
    | 'Push_Dwebble_Magikarp_Jump'
    | 'Push_Boldore_Magikarp_Jump'
    | 'Push_Forretress_Magikarp_Jump'
    | 'Push_Golem_Magikarp_Jump'
    | 'Push_Steelix_Magikarp_Jump'
    | 'Prison_Bottle'
    | 'Great_Twisted_Spoon'
    | 'Island_Challenge_Amulet'
    | 'Fighting_Memory_Silvally'
    | 'Rock_Memory_Silvally'
    | 'Dark_Memory_Silvally'
    | 'Fairy_Memory_Silvally'
    | 'Water_Memory_Silvally'
    | 'Grass_Memory_Silvally'
    | 'Fire_Memory_Silvally'
    | 'Electric_Memory_Silvally'
    | 'Ice_Memory_Silvally'
    | 'Ground_Memory_Silvally'
    | 'Bug_Memory_Silvally'
    | 'Flying_Memory_Silvally'
    | 'Poison_Memory_Silvally'
    | 'Ghost_Memory_Silvally'
    | 'Psychic_Memory_Silvally'
    | 'Steel_Memory_Silvally'
    | 'Dragon_Memory_Silvally'
    | 'Max_Mushroom_IoA'
    | 'Shaderoot_Carrot_Calyrex'
    | 'Iceroot_Carrot_Calyrex'
    | 'Wishing_Piece'
    | 'Protein'
    | 'Calcium'
    | 'Carbos'
    | 'Rare_Candy'
    | 'Magikarp_Biscuit'
    | 'Christmas_present'
    | 'Rare_bone'
    | 'Star_piece'
    | 'Revive'
    | 'Max_revive'
    | 'Iron_ball'
    | 'Heart_scale'
    | 'Light_clay'
    | 'Odd_keystone'
    | 'Hard_stone'
    | 'Oval_stone'
    | 'Smooth_rock'
    | 'Heat_rock'
    | 'Icy_rock'
    | 'Damp_rock'
    | 'Draco_plate'
    | 'Dread_plate'
    | 'Earth_plate'
    | 'Fist_plate'
    | 'Flame_plate'
    | 'Icicle_plate'
    | 'Insect_plate'
    | 'Iron_plate'
    | 'Meadow_plate'
    | 'Mind_plate'
    | 'Sky_plate'
    | 'Splash_plate'
    | 'Spooky_plate'
    | 'Stone_plate'
    | 'Toxic_plate'
    | 'Zap_plate'
    | 'Pixie_plate'
    | 'Blank_plate'
    | 'Helix_fossil'
    | 'Dome_fossil'
    | 'Old_amber'
    | 'Root_fossil'
    | 'Claw_fossil'
    | 'Armor_fossil'
    | 'Skull_fossil'
    | 'Cover_fossil'
    | 'Plume_fossil'
    | 'Jaw_fossil'
    | 'Sail_fossil'
    | 'Fossilized_bird'
    | 'Fossilized_fish'
    | 'Fossilized_drake'
    | 'Fossilized_dino'
    | 'Red_shard'
    | 'Yellow_shard'
    | 'Green_shard'
    | 'Blue_shard'
    | 'Grey_shard'
    | 'Purple_shard'
    | 'Ochre_shard'
    | 'Black_shard'
    | 'Crimson_shard'
    | 'Lime_shard'
    | 'White_shard'
    | 'Pink_shard'
    | 'Cyan_shard'
    | 'Rose_shard'
    | 'Brown_shard'
    | 'Beige_shard'
    | 'Slate_shard'
    | 'Pinkan Arbok'
    | 'Pinkan Oddish'
    | 'Pinkan Poliwhirl'
    | 'Pinkan Geodude'
    | 'Pinkan Dodrio'
    | 'Charity Chansey'
    | 'Exeggcute (Single)'
    | 'Lickitung'
    | 'Pinkan Weezing'
    | 'Pinkan Scyther'
    | 'Mr. Mime'
    | 'Pinkan Electabuzz'
    | 'Jynx'
    | 'Magikarp'
    | 'Magikarp Brown Stripes'
    | 'Magikarp Blue Raindrops'
    | 'Magikarp Saucy Violet'
    | 'Magikarp (Feebas)'
    | 'Eevee'
    | 'Porygon'
    | 'Togepi'
    | 'Hoppip (Chimecho)'
    | 'Beldum'
    | 'Deoxys (Clone)'
    | 'Grotle (Acorn)'
    | 'Combee'
    | 'Burmy (Plant)'
    | 'Cherubi'
    | 'Spiritomb'
    | 'Zorua'
    | 'Meloetta (Pirouette)'
    | 'Furfrou (Debutante)'
    | 'Furfrou (Diamond)'
    | 'Furfrou (Matron)'
    | 'Furfrou (Dandy)'
    | 'Furfrou (Kabuki)'
    | 'Furfrou (Pharaoh)'
    | 'Furfrou (Star)'
    | 'Furfrou (La Reine)'
    | 'Furfrou (Heart)'
    | 'Type: Null'
    | 'Poipole'
    | 'Silvally (Fighting) 1'
    | 'Silvally (Fighting) 2'
    | 'Silvally (Rock) 1'
    | 'Silvally (Rock) 2'
    | 'Silvally (Dark) 1'
    | 'Silvally (Dark) 2'
    | 'Silvally (Fairy) 1'
    | 'Silvally (Fairy) 2'
    | 'Silvally (Water) 1'
    | 'Silvally (Water) 2'
    | 'Silvally (Grass) 1'
    | 'Silvally (Grass) 2'
    | 'Silvally (Fire) 1'
    | 'Silvally (Fire) 2'
    | 'Silvally (Electric) 1'
    | 'Silvally (Electric) 2'
    | 'Silvally (Ice) 1'
    | 'Silvally (Ice) 2'
    | 'Silvally (Ground) 1'
    | 'Silvally (Ground) 2'
    | 'Silvally (Bug) 1'
    | 'Silvally (Bug) 2'
    | 'Silvally (Flying) 1'
    | 'Silvally (Flying) 2'
    | 'Silvally (Poison) 1'
    | 'Silvally (Poison) 2'
    | 'Silvally (Ghost) 1'
    | 'Silvally (Ghost) 2'
    | 'Silvally (Psychic) 1'
    | 'Silvally (Psychic) 2'
    | 'Silvally (Steel) 1'
    | 'Silvally (Steel) 2'
    | 'Silvally (Dragon) 1'
    | 'Silvally (Dragon) 2'
    | 'Dracozolt'
    | 'Arctozolt'
    | 'Dracovish'
    | 'Arctovish'
    | 'Zarude (Dada)'
    | 'Staryu'
    | 'Igglybuff'
    | 'Shuckle'
    | 'Smoochum'
    | 'Ralts'
    | 'Swablu'
    | 'Drifloon'
    | 'Bronzor'
    | 'Riolu'
    | 'Rotom'
    | 'Munna'
    | 'Sigilyph'
    | 'Tornadus (Therian)'
    | 'Thundurus (Therian)'
    | 'Landorus (Therian)'
    | 'Dugtrio (Punk)'
    | 'Gengar (Punk)'
    | 'Goldeen (Diva)'
    | 'Onix (Rocker)'
    | 'Tangela (Pom-pom)'
    | 'Weepinbell (Fancy)'
    | 'Sudowoodo (Golden)'
    | 'Pikachu (Rock Star)'
    | 'Pikachu (Belle)'
    | 'Pikachu (Pop Star)'
    | 'Pikachu (Ph. D.)'
    | 'Pikachu (Libre)'
    | 'Elf Munchlax'
    | 'Leaf_stone'
    | 'Fire_stone'
    | 'Water_stone'
    | 'Thunder_stone'
    | 'Moon_stone'
    | 'Linking_cord'
    | 'Sun_stone'
    | 'Soothe_bell'
    | 'Metal_coat'
    | 'Kings_rock'
    | 'Upgrade'
    | 'Dragon_scale'
    | 'Prism_scale'
    | 'Deepsea_tooth'
    | 'Deepsea_scale'
    | 'Shiny_stone'
    | 'Dusk_stone'
    | 'Dawn_stone'
    | 'Razor_claw'
    | 'Razor_fang'
    | 'Electirizer'
    | 'Magmarizer'
    | 'Protector'
    | 'Dubious_disc'
    | 'Reaper_cloth'
    | 'Black_DNA'
    | 'White_DNA'
    | 'Sachet'
    | 'Whipped_dream'
    | 'Key_stone'
    | 'Ice_stone'
    | 'Solar_light'
    | 'Lunar_light'
    | 'Pure_light'
    | 'Crystallized_shadow'
    | 'Sweet_apple'
    | 'Tart_apple'
    | 'Cracked_pot'
    | 'Galarica_cuff'
    | 'Galarica_wreath'
    | 'Black_mane_hair'
    | 'White_mane_hair'
    | 'Black_augurite'
    | 'Peat_block'
    | 'Auspicious_armor'
    | 'Malicious_armor'
    | 'Leaders_crest'
    | 'Gimmighoul_coin'
    | 'Syrupy_apple'
    | 'Unremarkable_teacup'
    | 'Metal_alloy'
    | 'FarmHandBailey'
    | 'FarmHandKerry'
    | 'FarmHandRiley'
    | 'FarmHandJamie'
    | 'HatcheryHelperJasmine'
    | 'HatcheryHelperDakota'
    | 'HatcheryHelperCameron'
    | 'HatcheryHelperCarey'
    | 'HatcheryHelperKris'
    | 'HatcheryHelperNoel'
    | 'HatcheryHelperLeslie'
    | 'Wonder_Chest'
    | 'Miracle_Chest'
    | 'Joy_Scent'
    | 'Excite_Scent'
    | 'Vivid_Scent'
    | 'Muscle_Band'
    | 'Light_Ball'
    | 'Lucky_Punch'
    | 'Quick_Powder'
    | 'Thick_Club'
    | 'Soul_Dew'
    | 'Adamant_Orb'
    | 'Lustrous_Orb'
    | 'Griseous_Orb'
    | 'Gracidea'
    | 'Burn_Drive'
    | 'Chill_Drive'
    | 'Douse_Drive'
    | 'Shock_Drive'
    | 'Leek'
    | 'Rusted_Sword'
    | 'Rusted_Shield'
    | 'Wellspring_Mask'
    | 'Hearthflame_Mask'
    | 'Cornerstone_Mask'
    | 'Booster_Energy'
    | 'Black_Belt'
    | 'Black_Glasses'
    | 'Charcoal'
    | 'Dragon_Fang'
    | 'Magnet'
    | 'Metal_Powder'
    | 'Miracle_Seed'
    | 'Mystic_Water'
    | 'Never_Melt_Ice'
    | 'Fairy_Feather'
    | 'Poison_Barb'
    | 'Rock_Incense'
    | 'Sharp_Beak'
    | 'Silk_Scarf'
    | 'Silver_Powder'
    | 'Soft_Sand'
    | 'Spell_Tag'
    | 'Twisted_Spoon'
    | 'Agile_Scroll'
    | 'Strong_Scroll'
    | 'Power_Herb'
    | 'Macho_Brace'
    | 'Power_Bracer'
    | 'Everstone'
    | 'Normalium Z'
    | 'Firium Z'
    | 'Waterium Z'
    | 'Electrium Z'
    | 'Grassium Z'
    | 'Icium Z'
    | 'Fightinium Z'
    | 'Poisonium Z'
    | 'Groundium Z'
    | 'Flyinium Z'
    | 'Psychium Z'
    | 'Buginium Z'
    | 'Rockium Z'
    | 'Ghostium Z'
    | 'Dragonium Z'
    | 'Darkinium Z'
    | 'Steelium Z'
    | 'Fairium Z';
