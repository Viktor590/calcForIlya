const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
// const arg_output2 = document.querySelector('.arg-output_res2');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');
// const tr_output2 = document.querySelector('.tr-output_res2');

const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


// let percent;

const arr = [
  { "name": "2K Ball N’ Brawl Bundle", "price": "3.3", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.52", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.94", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "60 Parseconds! Bundle", "price": "4.44", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "60 Parsecs!", "price": "2.78", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "60 Seconds! Reatomized", "price": "2.78", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "9Ball Pocket", "price": "0.19", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "A Hole New World", "price": "0.17", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "A Knight's Quest", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Plague Tale: Requiem - Windows", "price": "2.72", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "7.64", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Action Henk", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aeon Must Die!", "price": "1.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.66", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "22.16", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Aggelos", "price": "0.11", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Alan Wake Remastered", "price": "1.02", "flag": "🇳🇬", "date": "18.01", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "12.12", "flag": "🇧🇷", "date": "01.10", "status": " GP" },
  { "name": "Alphadia Genesis", "price": "3.35", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Alphadia I & II", "price": "7.13", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Amelia's Diner", "price": "1.78", "flag": "🇺🇦", "date": "15.01", "status": "" },
  { "name": "American Fugitive", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.53", "flag": "🇳🇬", "date": "16.01", "status": "" },
  { "name": "Arcade Paradise", "price": "0.55", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "3.07", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "43.27", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "78.67", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "36.06", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "15.78", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.03", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "20.85", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.21", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.03", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "22.54", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "17.47", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "13.52", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "56.34", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "25.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Asterigos: Curse of the Stars Deluxe Edition", "price": "2.43", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Atlas Fallen: Reign of Sand", "price": "17.32", "flag": "🇮🇳", "date": "28.01", "status": "" },
  { "name": "Atomic Heart", "price": "12.96", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Avatar: Frontiers of Pandora Deluxe Edition", "price": "18.03", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aven Colony", "price": "0.7", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.12", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.75", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "25.35", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "BLACKTAIL", "price": "2.54", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Barton Lynch Pro Surfing", "price": "3.32", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Bassmaster® Fishing 2022", "price": "0.89", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: 2022 Bassmaster Classic®", "price": "1.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Deluxe Edition", "price": "1.06", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Super Deluxe Edition", "price": "0.78", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.93", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Battle Brothers - Complete Edition", "price": "3.34", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "BecomeTheWild", "price": "2.43", "flag": "🇺🇦", "date": "17.01", "status": "" },
  { "name": "Beholder Complete Edition", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Beholgar", "price": "0.4", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Big Helmet Heroes", "price": "2.69", "flag": "🇳🇬", "date": "06.02", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.34", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Bit Dungeon Plus", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Bit Orchard: Animal Valley Deluxe Edition", "price": "0.08", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Black Skylands (Game Preview)", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.65", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Bomber Crew", "price": "0.41", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Booom-Slang!", "price": "0.9", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Borderlands 3", "price": "1.29", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "3.21", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Borderlands Collection: Pandora's Box", "price": "19.01", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Borderlands Legendary Collection", "price": "1.57", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Borderlands: Game of the Year Edition", "price": "1.28", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Boti: Byteland Overclocked - Deluxe Edition", "price": "2.69", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "Boti: Byteland Overclocked", "price": "2.17", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "Brawl Chess - Gambit", "price": "0.08", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Broforce", "price": "0.24", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.51", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition", "price": "0.25", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Bulwark Evolution : Falconeer Chronicles - Mad Lector Bundle", "price": "2.18", "flag": "🇳🇬", "date": "16.01", "status": "" },
  { "name": "Bulwark Evolution : Falconeer Chronicles - Mongres Trader Bundle", "price": "1.29", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Bulwark: Falconeer Chronicles Origins Bundle", "price": "1.05", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Bulwark: Falconeer Chronicles", "price": "0.79", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "CATAN® - Console Edition: Complete Collection", "price": "7.61", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "13.36", "flag": "🇪🇬", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "20.58", "flag": "🇯🇵", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "56.13", "flag": "🇪🇬", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "62.81", "flag": "🇧🇷", "date": "24.01", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.42", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carmen Sandiego Deluxe Edition", "price": "7.04", "flag": "🇪🇬", "date": "03.03", "status": "" },
  { "name": "Carnival Games®", "price": "1.86", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Cartel Tycoon", "price": "2.04", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "3.83", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.18", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "26.09", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.45", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Close to the Sun", "price": "0.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Clunky Hero", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "ConnecTank", "price": "0.96", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "9.7", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "13.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "9.7", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.88", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.78", "flag": "🇧🇷", "date": "01.05", "status": " GP" },
  { "name": "Crown Trick", "price": "0.68", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "34.46", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Cyber Protocol + Clumsy Rush + Brawl Chess", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "38.73", "flag": "🇰🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "34.75", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.52", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.92", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "DayZ Cool Edition", "price": "4.45", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.56", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.0", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.56", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.18", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deliver Us The Moon", "price": "0.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Despot's Game", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Detective Reborn Bundle", "price": "1.42", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "45.88", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "30.15", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Dinobreak Killer Crisis Collection", "price": "16.67", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "8.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dovetail Games Euro Fishing", "price": "0.26", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Dragon Prana", "price": "4.19", "flag": "🇯🇵", "date": "21.01", "status": " GP" },
  { "name": "Dragon Sinker: Descendants of Legend", "price": "2.79", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Duke Nukem 3D: 20th Anniversary World Tour", "price": "0.16", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.59", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 25 Standard Edition Xbox One & Xbox Series X|S", "price": "22.73", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS FC™ 25 Ultimate Edition Xbox One & Xbox Series X|S", "price": "31.77", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ College Football 25 - Deluxe Edition", "price": "31.77", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ College Football 25", "price": "22.73", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ MVP Bundle (Madden NFL 25 Deluxe Edition & College Football 25 Deluxe Edition)", "price": "49.11", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "24.54", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "17.05", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "6.7", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "5.2", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ WRC 24", "price": "12.12", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "Embr", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.23", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Euro Fishing: Ultimate Edition", "price": "0.52", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Euro Fishing: Urban Edition", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "42.82", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "36.06", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game", "price": "21.06", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "F1® 23", "price": "36.37", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® 24 Champions Edition", "price": "13.86", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "F1® 24", "price": "10.39", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "11.27", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "22.54", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "36.06", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FPV Simulator", "price": "5.78", "flag": "🇺🇦", "date": "17.01", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.42", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.42", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gleaming Depths Deluxe Edition", "price": "31.53", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Family Feud®", "price": "5.92", "flag": "🇳🇿", "date": "28.01", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.14", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.07", "flag": "🇹🇷", "date": "20.01", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "20.73", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "17.47", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "21.41", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "18.03", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "15.78", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.56", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.83", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farworld Pioneers", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Fishing Sim World: Bass Pro Shops Edition", "price": "1.06", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Fishing Sim World®: Pro Tour", "price": "0.47", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.33", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flint: Treasure of Oblivion", "price": "26.42", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "16.43", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Flockers", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Fly Corp", "price": "4.97", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Football Manager 2024 Console", "price": "3.23", "flag": "🇳🇬", "date": "16.01", "status": "" },
  { "name": "For The King II", "price": "2.42", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.57", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "25.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Heaven To Earth", "price": "0.31", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "From Space", "price": "0.36", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.87", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "GRIP Digital Deluxe", "price": "0.44", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "GRIP", "price": "0.36", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Galaxy Kingdoms", "price": "0.28", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Garden Bundle", "price": "3.39", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gear.Club Unlimited 2 - Ultimate Edition", "price": "1.84", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.25", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.13", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.75", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.77", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Geometry Survivor", "price": "0.32", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "17.47", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.56", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.56", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.72", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.96", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Godfall Ultimate Edition", "price": "1.95", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "Going Under", "price": "0.68", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Golazo!", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.54", "flag": "🇰🇷", "date": "23.01", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "30.4", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gori : Cuddly Carnage - Dragon Bundle", "price": "1.26", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Gori: Cuddly Carnage - Neon Bundle", "price": "2.17", "flag": "🇳🇬", "date": "16.01", "status": "" },
  { "name": "Gori: Cuddly Carnage - Special Edition", "price": "1.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Gori: Cuddly Carnage", "price": "1.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Graveyard Keeper", "price": "0.35", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.99", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Gravity Escape", "price": "1.09", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "GreedFall - Windows 10", "price": "0.94", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "GreedFall", "price": "1.23", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.95", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "18.59", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "22.54", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Happy's Humble Burger Farm", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hard Platformers Pack: Super Cyborg and Dead Dungeon", "price": "0.19", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Harvest Moon: Mad Dash", "price": "0.63", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Harvest Moon: One World", "price": "2.72", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.35", "flag": "🇨🇦", "date": "28.01", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Warders", "price": "0.3", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Hello Engineer", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor 2", "price": "1.28", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor", "price": "0.46", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor: Hide and Seek", "price": "0.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hellpoint Ultimate Edition", "price": "0.8", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hellpoint", "price": "0.7", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.52", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Cats in Rome", "price": "0.24", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Hitchhiker", "price": "0.32", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Hole io: Gold Edition", "price": "0.51", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Hotel Renovator", "price": "10.56", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hotshot Racing", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "2.23", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Hue", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Human Fall Flat", "price": "1.31", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.02", "flag": "🇮🇳", "date": "23.01", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.1", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.09", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hyper Gunsport", "price": "0.8", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.14", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Fish", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "32.68", "flag": "🇹🇷", "date": "20.01", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.48", "flag": "🇿🇦", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "8.87", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Inertial Drift - Twilight Rivals Edition", "price": "3.26", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "Infinite Links", "price": "5.03", "flag": "🇯🇵", "date": "21.01", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.79", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Instant Indie Collection: Vol. 1", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Instant Indie Collection: Vol. 2", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Instant Indie Collection: Vol. 3", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "20.83", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "36.06", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition (Windows)", "price": "18.31", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "42.82", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "6.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "1.36", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Isonzo: Ultimate Edition", "price": "54.72", "flag": "🇰🇷", "date": "16.06", "status": " GP" },
  { "name": "Johnny Trigger: Definitive Edition", "price": "1.55", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Journey to Kreisia", "price": "5.87", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.81", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.24", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Die Already", "price": "0.23", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Justice Sucks", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Kaichu: The Kaiju Dating Sim", "price": "0.88", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "Katana Zero XB1", "price": "0.72", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Kill It With Fire", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Kill It With Fire: Exterminator Edition", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "King of Seas", "price": "0.47", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "13.31", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "19.01", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Cross-Gen Standard Edition", "price": "11.26", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "LEGO® 2K Drive for Xbox One", "price": "8.44", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.24", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "9.81", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "Lawn Mowing Simulator", "price": "0.78", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Little Bear", "price": "0.4", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Lovecraftian Bundle", "price": "1.08", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Lovely Planet", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Lumote: The Mastermote Chronicles", "price": "0.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.83", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "22.54", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.16", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "13.52", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "32.68", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MXGP2", "price": "1.05", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Madden NFL 19", "price": "27.45", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "15.59", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "1.46", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Mafia: Trilogy", "price": "2.63", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "3.18", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Manual Samuel", "price": "0.14", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Martha Is Dead Digital Deluxe", "price": "1.12", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Martha Is Dead", "price": "0.96", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": "3.59", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "6.47", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox Series X|S", "price": "6.47", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Marvel's Midnight Suns", "price": "3.33", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Masters of Anima", "price": "0.25", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Mayhem in Single Valley", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "5.74", "flag": "🇹🇷", "date": "14.01", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.52", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "93.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "46.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "56.1", "flag": "🇺🇦", "date": "17.02", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "4.93", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.5", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Miden Tower", "price": "3.35", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.43", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.43", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.62", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.07", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mokoko X", "price": "0.52", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Monopoly Madness", "price": "1.76", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "2.24", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "3.46", "flag": "🇮🇳", "date": "21.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "3.46", "flag": "🇮🇳", "date": "21.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "2.24", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "35.51", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "30.43", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.23", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Moo & Move: Extra Grazing Grounds", "price": "0.19", "flag": "🇹🇷", "date": "17.01", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.52", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "19.36", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.47", "flag": "🇪🇬", "date": "16.12", "status": " GP" },
  { "name": "MotoGP™20", "price": "2.34", "flag": "🇰🇷", "date": "21.01", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mr. Shifty", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "1.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Mugsters", "price": "0.26", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Murder Diaries 3 - Santa's Trail of Blood", "price": "0.49", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.33", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.18", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NBA 2K Playgrounds 2", "price": "1.83", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "NBA 2K25 All-Star Edition", "price": "28.49", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "NBA 2K25 Standard Edition", "price": "22.35", "flag": "🇯🇵", "date": "21.01", "status": " GP" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.47", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "20.78", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Deluxe Edition Xbox Series X|S", "price": "31.77", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "28.41", "flag": "🇰🇷", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition", "price": "22.73", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Narita Boy", "price": "1.12", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.77", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "New Tales from the Borderlands", "price": "7.03", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.81", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.24", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "24.25", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "28.17", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.83", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Not For Broadcast", "price": "0.84", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Nova-111", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "39.82", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "OlliOlli World", "price": "4.11", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.56", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Othercide", "price": "1.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Outbreak Co-Op Anthology", "price": "5.47", "flag": "🇧🇷", "date": "21.01", "status": "" },
  { "name": "Outbreak: Endless Nightmares", "price": "3.07", "flag": "🇧🇷", "date": "21.01", "status": "" },
  { "name": "Outbreak: Heart and Brains Collection", "price": "34.13", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Outbreak: Lost Hope", "price": "0.79", "flag": "🇧🇷", "date": "21.01", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.03", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Overruled!", "price": "0.23", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Party Hard 2", "price": "0.68", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Party Hard", "price": "0.44", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Pathologic 2", "price": "1.18", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Penarium", "price": "0.17", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Persona 3 Reload Digital Deluxe Edition", "price": "41.72", "flag": "🇺🇦", "date": "23.01", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.87", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Trigger", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pig Eat Ball", "price": "0.71", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Planet Alpha", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Potion Craft: Alchemist Simulator", "price": "1.09", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Prince of Persia The Lost Crown", "price": "14.09", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Pumped BMX +", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Pumped BMX Pro", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Punch Club 2: Fast Forward", "price": "1.09", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Punch Club", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.15", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "Raging Justice", "price": "0.39", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Railway Islands 2", "price": "0.54", "flag": "🇳🇬", "date": "23.01", "status": "" },
  { "name": "Re:Turn 2 - Runaway", "price": "0.39", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "ReCore", "price": "2.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Revenant Saga & Revenant Dogma", "price": "5.94", "flag": "🇯🇵", "date": "21.01", "status": " GP" },
  { "name": "Reverie: Sweet As Edition", "price": "3.97", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Rhythm Sprout", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "29.3", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "39.44", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "22.54", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Risk of Rain 2", "price": "4.53", "flag": "🇯🇵", "date": "21.01", "status": " GP" },
  { "name": "Risk of Rain", "price": "0.42", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Rivenaar's Grove", "price": "2.42", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "3.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Rock 'N Racing Off Road", "price": "0.24", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Rollerdrome", "price": "2.67", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "44.54", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "60.66", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "STAB STAB STAB!", "price": "0.27", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "11.87", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.84", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.0", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.69", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Secret Neighbor", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Serial Cleaner", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Shady Part of Me", "price": "0.85", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Shark Pinball", "price": "0.1", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "She Sees Red Interactive Movie", "price": "0.24", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Sheltered", "price": "0.73", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Sherlock Holmes The Awakened", "price": "1.09", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Silver Nornir", "price": "5.03", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Slain: Back from Hell", "price": "0.16", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Slime 3K: Rise Against Despot", "price": "0.54", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Slime Ranger", "price": "0.4", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smoke and Sacrifice", "price": "0.28", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.04", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.76", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "29.3", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "36.06", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Sokocrab", "price": "0.32", "flag": "🇹🇷", "date": "15.01", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "29.3", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "South Park™: The Fractured but Whole™", "price": "6.13", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.99", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.65", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2024", "price": "5.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.92", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpeedRunners", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "SpiderHeck", "price": "1.0", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "11.45", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.09", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Stealth Inc. 2: A Game of Clones", "price": "0.14", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Steep X Games Gold Edition", "price": "1.66", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.86", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stikbold! A Dodgeball Adventure", "price": "0.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "3.16", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Strategy Bundle: Steampunk Tower 2 & Guards", "price": "0.2", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Streets of Rogue", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sunbeam Feast", "price": "0.4", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.56", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Dungeon Bros MEGA Bundle Pack", "price": "0.15", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Super Dungeon Bros", "price": "0.14", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "4.25", "flag": "🇯🇵", "date": "23.01", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "3.56", "flag": "🇯🇵", "date": "23.01", "status": "" },
  { "name": "Super Onion Boy+", "price": "2.42", "flag": "🇧🇷", "date": "25.01", "status": "" },
  { "name": "Surf & Turf Bundle", "price": "0.97", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Sweet Witches", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Swords & Bones", "price": "0.14", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Syberia - The World Before", "price": "6.06", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Syberia 3", "price": "1.23", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition", "price": "13.93", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter", "price": "11.56", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "33.78", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "40.54", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "33.78", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "24.77", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tannenberg", "price": "0.56", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tap Wizard 2", "price": "0.96", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.89", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Tennis Elbow 4", "price": "3.05", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "The Bookwalker: Thief of Tales", "price": "0.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.34", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.16", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Catch: Carp & Coarse - Deluxe Edition", "price": "0.76", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Catch: Carp & Coarse Fishing", "price": "0.64", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "12.25", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "10.99", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "7.04", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.1", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "29.3", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "39.44", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "10.82", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "1.72", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.28", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Falconeer", "price": "0.32", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Final Station", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.13", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "6.02", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Last Worker", "price": "0.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Legend of Cyber Cowboy", "price": "2.42", "flag": "🇧🇷", "date": "16.01", "status": "" },
  { "name": "The Messenger", "price": "0.32", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.15", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Prisoner of the Night", "price": "5.4", "flag": "🇧🇷", "date": "21.01", "status": " GP" },
  { "name": "The Quarry for Xbox One", "price": "2.53", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "The Serpent Rogue", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "The Strange Story Of Brian Fisher: Chapter 2", "price": "8.79", "flag": "🇪🇬", "date": "21.01", "status": " GP" },
  { "name": "The Surge 2 - Windows 10", "price": "0.81", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "The Surge 2", "price": "1.61", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Surge", "price": "0.38", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Swapper", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Swindle", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Town of Light", "price": "0.21", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.72", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Thomas Was Alone", "price": "0.13", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "1.34", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Tiny Tina's Wonderlands", "price": "3.37", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "3.6", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "3.94", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Tiny Troopers Joint Ops", "price": "0.11", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Tiny Troopers: Global Ops Digital Deluxe", "price": "0.5", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Tiny Troopers: Global Ops", "price": "0.48", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Tinykin", "price": "0.5", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.51", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "4.88", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy's The Division", "price": "0.51", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "11.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.01", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "29.3", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "36.06", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Toodee And Topdee", "price": "1.9", "flag": "🇳🇬", "date": "21.01", "status": "" },
  { "name": "TopSpin 2K25 Cross-Gen Digital Edition", "price": "17.47", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "TopSpin 2K25 Grand Slam® Edition Pre-Order", "price": "27.88", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "TopSpin 2K25 for Xbox One", "price": "15.32", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.52", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "2.23", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.18", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.83", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 5: Deluxe Edition", "price": "7.24", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: German Regional Edition", "price": "4.29", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: Special Edition", "price": "10.54", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: UK Regional Edition", "price": "4.29", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: USA Regional Edition", "price": "4.29", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "6.76", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "TramSim: Console Edition", "price": "5.7", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Trash Sailors", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tribes of Midgard Deluxe Edition", "price": "0.97", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.01", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.21", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.96", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Deluxe Edition", "price": "32.52", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "25.98", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5", "price": "25.98", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Ultratron", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "UnderDungeon", "price": "0.45", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Undungeon", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "1.05", "flag": "🇯🇵", "date": "21.01", "status": "" },
  { "name": "Vengeful Heart", "price": "0.65", "flag": "🇳🇬", "date": "21.01", "status": " GP" },
  { "name": "Verdun", "price": "0.41", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.48", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "8.87", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K Battlegrounds Digital Deluxe Edition", "price": "2.25", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "WWE 2K Battlegrounds", "price": "1.85", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "WWE 2K24 Bray Wyatt Edition", "price": "49.29", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "WWE 2K24 Cross-Gen Digital Edition", "price": "17.17", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "WWE 2K24 Forty Years of WrestleMania Edition", "price": "42.24", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "WWE 2K24 for Xbox One", "price": "14.69", "flag": "🇰🇷", "date": "21.01", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "9.97", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Space Marine 2 - Gold Edition", "price": "58.46", "flag": "🇮🇳", "date": "28.01", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "9.89", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "2.85", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "27.53", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "46.2", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Weedcraft Inc", "price": "6.47", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Wheel Of Fortune®", "price": "2.23", "flag": "🇧🇷", "date": "28.01", "status": "" },
  { "name": "Wild Eclipse", "price": "0.0", "flag": "🇺🇸", "date": "30.01", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.22", "flag": "🇺🇦", "date": "23.01", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.76", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.58", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Woodle Tree 2: Deluxe+", "price": "0.12", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Word Maze by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Word Web by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "Wordsweeper by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "14.65", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.59", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "18.02", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Collection", "price": "0.89", "flag": "🇹🇷", "date": "21.01", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.18", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.09", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yoku's Island Express", "price": "0.84", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.48", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "fig.", "price": "0.14", "flag": "🇹🇷", "date": "21.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "41.3", "flag": "🇧🇷", "date": "01.06", "status": " GP" },
]

let usd = 118;

console.log(arr.length);
const sortArr = arr.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

function floor(price) {
  let enterPrice = Number(price)
  const lastNum = Number(enterPrice.toString().split('').pop())

  switch (lastNum) {
    case 1:
      enterPrice += 4
      break;
    case 2:
      enterPrice += 3
      break;
    case 3:
      enterPrice += 2
      break;
    case 4:
      enterPrice += 1
      break;
    case 6:
      enterPrice += 4
      break;
    case 7:
      enterPrice += 3
      break;
    case 8:
      enterPrice += 2
      break;
    case 9:
      enterPrice += 1
      break;
    default:
      enterPrice
      break;
  }
  return enterPrice;
}

// function resultArg() {
//   const value = Number(arg_input.value) + .1
//   const newValue = value + (value * resPercent(value)) / 100
//   const res = newValue * usd
//   const finishRes = res + resSwitсhArg(newValue)
//   arg_output.innerHTML = floor(finishRes.toFixed())
//   arg_output2.innerHTML = floor(finishRes.toFixed()) + 60
// }

function resultTr() {
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value) + 30
  tr_output.innerHTML = floor(finishRes.toFixed())
}

function resultOldAcc() {
  const value = Number(arg_input.value) + .2
  const res = value * usd
  const finishRes = res + resSwitсhTr(arg_input.value) + 180
  arg_output.innerHTML = floor(finishRes.toFixed())
}


// function resSwitсhArg(value) {
//   let a;

//   if (value <= 1) {
//     a = 130
//   } else if (value > 1 && value <= 5) {
//     a = 130
//   } else if (value > 5 && value <= 10) {
//     a = 150
//   } else if (value > 10 && value <= 15) {
//     a = 100
//   } else if (value > 15 && value <= 20) {
//     a = 100

//   } else if (value > 20 && value <= 25) {
//     a = 100

//   } else if (value > 25) {
//     a = 100

//   }
//   return a
// }

// function resPercent(percent) {
//   let a;

//   if (percent <= 1) {
//     a = 130
//   } else if (percent > 1 && percent <= 5) {
//     a = 95
//   } else if (percent > 5 && percent <= 10) {

//     a = 65
//   } else if (percent > 10 && percent <= 15) {

//     a = 60
//   } else if (percent > 15 && percent <= 20) {

//     a = 60
//   } else if (percent > 20 && percent <= 25) {

//     a = 60
//   } else if (percent > 25) {

//     a = 40
//   }
//   return a
// }

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 110
  } else if (value > 1 && value <= 5) {
    a = 110
  } else if (value > 5 && value <= 10) {
    a = 100
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 130
  } else if (value > 20 && value <= 25) {
    a = 100
  } else if (value > 25) {
    a = 100
  }
  return a
}


arg_input.oninput = resultOldAcc

tr_input.oninput = resultTr


sortArr.map((a) => {
  const item = document.createElement('li')
  // const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.flag == '🇦🇷') {
    res = resultFromListArg(a.price)
    flag = "🇦🇷"
  } else if (a.flag == '🇹🇷') {
    res = resultFromListTr(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
    flag = '-'
  }

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
  list.append(item)
})

// function resultFromListArg(price) {
//   const value = Number(price) + .1
//   const newPrice = value + (value * resPercent(value)) / 100
//   const res = newPrice * usd + 60
//   const finishRes = res + resSwitсhArg(newPrice)

//   return floor(finishRes.toFixed())
// }

function resultFromListTr(price) {
  const value = Number(price) + .1
  const res = value * usd + 30
  const finishRes = res + resSwitсhTr(value)

  return floor(finishRes.toFixed())
}
// 
function showMenu() {
  showBtn.classList.add('active')
  list.classList.add('active');
  showBtn.innerHTML = 'Скрыть Список'
  showBtn.style.background = 'red'

}

function hiddenMenu() {
  showBtn.classList.remove('active')
  list.classList.remove('active');
  showBtn.innerHTML = 'Показать Список'
  showBtn.style.background = 'greenyellow'
}
