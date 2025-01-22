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
  { "name": "10 Second Ninja X", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.59", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.32", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.67", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.55", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.95", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "A Knight's Quest", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Plague Tale: Requiem - Windows", "price": "2.71", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "7.61", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "AEW: Fight Forever", "price": "10.76", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Aces of the Luftwaffe - Squadron", "price": "0.22", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Action Henk", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aeon Must Die!", "price": "1.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aery - A Journey Beyond Time", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Aery - Path of Corruption", "price": "0.44", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aery - Vikings", "price": "0.44", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Agatha Knife", "price": "1.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.63", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "22.42", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Aircraft Carrier Survival", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Airhead", "price": "4.21", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "12.22", "flag": "🇺🇦", "date": "01.10", "status": " GP" },
  { "name": "Allison's Diary: Rebirth", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "20.32", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Alone in the Dark", "price": "16.14", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "American Fugitive", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aquarun", "price": "0.31", "flag": "🇹🇷", "date": "29.01", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.77", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.71", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Are You Smarter Than A 5th Grader?", "price": "0.98", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "3.06", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "43.84", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "79.7", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "35.9", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "15.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "17.95", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "20.75", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.15", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "17.95", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "22.44", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "17.39", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "13.46", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "56.09", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "25.8", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assault On Metaltron", "price": "0.08", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars Deluxe Edition", "price": "2.42", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Atlas Fallen: Reign of Sand", "price": "17.33", "flag": "🇮🇳", "date": "28.01", "status": "" },
  { "name": "Atomic Heart", "price": "12.9", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Avatar: Frontiers of Pandora Deluxe Edition", "price": "17.95", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Aven Colony", "price": "0.7", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.11", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.72", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "25.61", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "BLACKTAIL", "price": "2.52", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bakery Simulator", "price": "0.67", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022", "price": "0.89", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: 2022 Bassmaster Classic®", "price": "1.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Deluxe Edition", "price": "1.06", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Super Deluxe Edition", "price": "0.78", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.92", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Beholder Complete Edition", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Beyond Doors (Xbox Series)", "price": "0.24", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Big Helmet Heroes", "price": "2.68", "flag": "🇳🇬", "date": "06.02", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Biomutant", "price": "6.72", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Black Mirror", "price": "0.7", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Black Skylands (Game Preview)", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.64", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Bomber Crew", "price": "0.41", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Boti: Byteland Overclocked - Deluxe Edition", "price": "2.68", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "Boti: Byteland Overclocked", "price": "2.17", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "Boundland (Windows)", "price": "0.35", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Boundland (Xbox One)", "price": "0.35", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Boundland", "price": "0.35", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Bright Side: Quiz - Complete Edition", "price": "5.34", "flag": "🇺🇦", "date": "31.01", "status": "" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "1.22", "flag": "🇺🇦", "date": "28.01", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.5", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "0.47", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "CATAN® - Console Edition: Complete Collection", "price": "7.57", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "13.42", "flag": "🇪🇬", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "20.78", "flag": "🇯🇵", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "56.39", "flag": "🇪🇬", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "71.58", "flag": "🇧🇷", "date": "24.01", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.46", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Car Mechanic Simulator 2021", "price": "1.19", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carmageddon: Max Damage", "price": "0.41", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Carmen Sandiego Deluxe Edition", "price": "7.08", "flag": "🇪🇬", "date": "03.03", "status": "" },
  { "name": "Cartel Tycoon", "price": "2.03", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Chess Gambit", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.39", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Child of Light", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "3.81", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.17", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Chronos: Before the Ashes", "price": "2.9", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "26.43", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.43", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Colossal Cave", "price": "0.79", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Cozy Grove", "price": "0.6", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "9.65", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "12.99", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "9.65", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.85", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.94", "flag": "🇧🇷", "date": "01.05", "status": " GP" },
  { "name": "Crown Trick", "price": "0.68", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "34.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Cryogear", "price": "1.02", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Cyber Complex", "price": "0.41", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "DCL-The Game", "price": "1.35", "flag": "🇳🇬", "date": "04.02", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "39.4", "flag": "🇰🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "34.91", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.46", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.76", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.76", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.19", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.19", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.91", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "3.28", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Darksiders II Deathinitive Edition", "price": "2.45", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "9.96", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Darksiders III - Deluxe Edition", "price": "8.47", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Darksiders III", "price": "6.72", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Darksiders Warmastered Edition", "price": "1.62", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "DayZ Cool Edition", "price": "4.43", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.55", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "1.99", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.17", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Defend the Rook", "price": "1.67", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Desperados III Deluxe Edition", "price": "8.47", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Desperados III", "price": "6.72", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Despot's Game", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Destroy All Humans! (2005)", "price": "0.27", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed", "price": "13.45", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Destroy All Humans!", "price": "12.27", "flag": "🇮🇳", "date": "04.02", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "46.48", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "30.54", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.16", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Epic Mickey: Rebrushed", "price": "20.17", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Doodle Games Collector’s Bundle", "price": "0.72", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Doodle God: Evolution", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Doodle God: Ultimate Edition", "price": "0.55", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Doodle Mafia: Crime City", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Dovetail Games Euro Fishing", "price": "0.26", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.6", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 25 Standard Edition Xbox One & Xbox Series X|S", "price": "23.11", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS FC™ 25 Ultimate Edition Xbox One & Xbox Series X|S", "price": "32.32", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ College Football 25 - Deluxe Edition", "price": "32.32", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ College Football 25", "price": "23.11", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ MVP Bundle (Madden NFL 25 Deluxe Edition & College Football 25 Deluxe Edition)", "price": "49.75", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "24.86", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "17.33", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "6.7", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "5.2", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "EA SPORTS™ WRC 24", "price": "12.33", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "ELEX II", "price": "8.07", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Electrician Simulator", "price": "0.79", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Elex", "price": "2.24", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Embr", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Empire of Angels IV", "price": "4.36", "flag": "🇧🇷", "date": "28.01", "status": "" },
  { "name": "Endling - Extinction is Forever", "price": "1.3", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.22", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Academy", "price": "2.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Escape Dead Island", "price": "0.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Euro Fishing: Ultimate Edition", "price": "0.52", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Euro Fishing: Urban Edition", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "42.63", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "35.9", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game", "price": "20.97", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "F1® 23", "price": "36.4", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® 24 Champions Edition", "price": "13.87", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "F1® 24", "price": "10.4", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "11.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "22.44", "flag": "🇹🇷", "date": "27.01", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "35.9", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.38", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "FRONT MISSION 2: Remake", "price": "1.38", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Factory Escape", "price": "0.4", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Fade to Silence", "price": "2.38", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Fairy Elements", "price": "4.23", "flag": "🇯🇵", "date": "28.01", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.39", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.39", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gleaming Depths Deluxe Edition", "price": "31.39", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Family Feud®", "price": "5.95", "flag": "🇳🇿", "date": "28.01", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.13", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "3.37", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "20.64", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "17.39", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "21.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "17.95", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "15.71", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.55", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.81", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "FarmKnight Adventures", "price": "5.43", "flag": "🇺🇦", "date": "04.02", "status": "" },
  { "name": "Farming Life", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farworld Pioneers", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Fishing Sim World: Bass Pro Shops Edition", "price": "1.06", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Fishing Sim World®: Pro Tour", "price": "0.47", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.32", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "16.36", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Flockers", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "For The King II", "price": "2.42", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "12.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "25.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Space", "price": "0.36", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.86", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Frozen Gauntlet", "price": "0.4", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Full Spectrum Warrior", "price": "0.27", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Full Throttle Pixel Racing", "price": "2.05", "flag": "🇺🇦", "date": "05.02", "status": "" },
  { "name": "Fusion Bundle", "price": "1.48", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "GINSHA", "price": "1.01", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Garden Bundle", "price": "3.38", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.24", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.12", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.72", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.76", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Geometric Sniper Z", "price": "0.16", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "17.39", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": "0.31", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.72", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.95", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Godsvivors", "price": "0.27", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Going Under", "price": "0.68", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.83", "flag": "🇰🇷", "date": "23.01", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "30.27", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Graveyard Keeper", "price": "0.34", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.99", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Gravity Escape", "price": "1.08", "flag": "🇳🇬", "date": "25.01", "status": "" },
  { "name": "GreedFall - Windows 10", "price": "0.94", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "GreedFall", "price": "1.23", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.92", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "11.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "18.51", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "22.44", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "HammerHelm", "price": "0.36", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Happy's Humble Burger Farm", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hard West Ultimate Edition", "price": "0.16", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "1.89", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.36", "flag": "🇨🇦", "date": "28.01", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "9.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hello Engineer", "price": "0.48", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor 2", "price": "1.28", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor", "price": "0.46", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hello Neighbor: Hide and Seek", "price": "0.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hellpoint Ultimate Edition", "price": "0.8", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hellpoint", "price": "0.69", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.46", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Cats in Berlin", "price": "0.24", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hindsight 20/20 - Wrath of the Raakshasa", "price": "0.35", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hole io: Gold Edition", "price": "3.91", "flag": "🇺🇦", "date": "24.01", "status": "" },
  { "name": "Hollow", "price": "0.16", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hotel Renovator", "price": "10.52", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Hotshot Racing", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "2.22", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Hue", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Human Fall Flat", "price": "1.31", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.04", "flag": "🇮🇳", "date": "23.01", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.12", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.1", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.13", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Fish", "price": "0.47", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "10.17", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.6", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "8.83", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Infini", "price": "0.46", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.77", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Instant Indie Collection: Vol. 1", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Instant Indie Collection: Vol. 2", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Instant Indie Collection: Vol. 3", "price": "0.33", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition (Windows)", "price": "18.23", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.31", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "6.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "1.35", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Isonzo: Ultimate Edition", "price": "55.42", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "JUJU", "price": "0.55", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Jagged Alliance 3", "price": "20.17", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.86", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.29", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Die Already", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Justice Chronicles", "price": "4.66", "flag": "🇯🇵", "date": "28.01", "status": " GP" },
  { "name": "Justice Sucks", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Kill It With Fire", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Kill It With Fire: Exterminator Edition", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "King of Seas", "price": "0.47", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "17.14", "flag": "🇧🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "1.12", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "4.02", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "5.5", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning", "price": "3.94", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.29", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.51", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "9.86", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "Lawn Mowing Simulator", "price": "0.77", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Lesson Learned", "price": "0.4", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Let Me Sleep", "price": "0.19", "flag": "🇹🇷", "date": "05.02", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.87", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Little Kite", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Brawl Chess", "price": "0.08", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Clumsy Rush", "price": "0.12", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Cyber Protocol", "price": "0.08", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lovely Planet", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.81", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "22.44", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.07", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "13.46", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "32.53", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MX Unleashed", "price": "0.27", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "MX vs ATV All Out", "price": "2.45", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "MX vs ATV Legends - Deluxe Edition", "price": "21.72", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "MX vs ATV Legends - Ultimate Edition", "price": "20.32", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "MX vs ATV Legends", "price": "8.07", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "MX vs. ATV Supercross Encore", "price": "0.43", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Madden NFL 19", "price": "27.43", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "15.6", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Magical Backpack", "price": "0.4", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Maneater Apex Edition", "price": "3.17", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Manual Samuel", "price": "0.14", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Masters of Anima", "price": "0.25", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Mayhem in Single Valley", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "5.08", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.5", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechaNika", "price": "0.9", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "92.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "46.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "56.44", "flag": "🇺🇦", "date": "17.02", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "4.91", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.44", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.42", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.42", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.65", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mists of Noyah", "price": "1.08", "flag": "🇳🇬", "date": "28.01", "status": " GP" },
  { "name": "Monopoly Madness", "price": "1.75", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "35.87", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "30.74", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.31", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "5.38", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.51", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "19.27", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.51", "flag": "🇪🇬", "date": "16.12", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mr. Shifty", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "1.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Mugsters", "price": "0.26", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.36", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.17", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.49", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "20.8", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Deluxe Edition Xbox Series X|S", "price": "32.32", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "28.89", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition", "price": "23.11", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Narita Boy", "price": "1.12", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Neighbours back From Hell", "price": "0.62", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.77", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.86", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.29", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Nirvana: Deluxe Edition", "price": "0.09", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "24.57", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "28.19", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.81", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Not For Broadcast", "price": "0.84", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Nova-111", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.06", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.55", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Othercide", "price": "1.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Outbreak Silver Collection", "price": "11.62", "flag": "🇧🇷", "date": "28.01", "status": "" },
  { "name": "Outbreak: Zombies For Days Collection", "price": "43.29", "flag": "🇧🇷", "date": "28.01", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "16.14", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.02", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Overruled!", "price": "0.22", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "PERISH", "price": "5.26", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Paint Ball - Jump n Run", "price": "1.52", "flag": "🇺🇦", "date": "05.02", "status": "" },
  { "name": "Panzer Elite Action: Fields of Glory", "price": "0.2", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Party Hard 2", "price": "0.68", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Party Hard", "price": "0.44", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Pathologic 2", "price": "1.18", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Penarium", "price": "0.17", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Perfect Ninja Painter 3", "price": "0.35", "flag": "🇹🇷", "date": "30.01", "status": "" },
  { "name": "Persona 3 Reload Digital Deluxe Edition", "price": "41.97", "flag": "🇺🇦", "date": "23.01", "status": " GP" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "49.61", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.86", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Trigger", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.91", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Planet Alpha", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Popotinho's Adventures", "price": "2.45", "flag": "🇧🇷", "date": "06.02", "status": "" },
  { "name": "Potion Craft: Alchemist Simulator", "price": "1.08", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "22.84", "flag": "🇯🇵", "date": "11.03", "status": " GP" },
  { "name": "Prince of Persia The Lost Crown", "price": "14.02", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Pumped BMX +", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Pumped BMX Pro", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Punch Club 2: Fast Forward", "price": "1.08", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Punch Club", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Pure Chase 80's", "price": "0.26", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.1", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.19", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.38", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Raging Justice", "price": "0.39", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Railway Islands 2", "price": "0.54", "flag": "🇳🇬", "date": "23.01", "status": "" },
  { "name": "ReCore", "price": "2.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Rebel Cops", "price": "0.87", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.51", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "9.86", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Restless Hero", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Rhythm Sprout", "price": "0.5", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "29.17", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "39.27", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "22.44", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Rise Eterna War", "price": "0.2", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Risen 1", "price": "9.19", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.57", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Rivenaar's Grove", "price": "2.45", "flag": "🇧🇷", "date": "23.01", "status": "" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "3.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Rock 'N Racing Grand Prix", "price": "0.24", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Ruinarch", "price": "3.95", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Run Sausage Run!", "price": "0.91", "flag": "🇺🇦", "date": "28.01", "status": "" },
  { "name": "Runny Bunny - Console Edition", "price": "2.45", "flag": "🇧🇷", "date": "30.01", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "44.62", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "60.78", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "SCARF", "price": "0.56", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "SOUTH PARK: SNOW DAY!", "price": "12.25", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "11.81", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.81", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "1.99", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sacred 3", "price": "0.34", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Safari Pinball", "price": "0.1", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Secret Neighbor", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Serial Cleaner", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Shady Part of Me", "price": "0.84", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sheltered", "price": "0.72", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "0.91", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.44", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "17.95", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "SlavicPunk: Oldtimer", "price": "1.72", "flag": "🇳🇬", "date": "28.01", "status": " GP" },
  { "name": "Slime 3K: Rise Against Despot", "price": "0.54", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smoke and Sacrifice", "price": "0.27", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.01", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "12.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.73", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "29.17", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "35.9", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "42.63", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SokoNature", "price": "0.65", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "29.17", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "South Park™: The Fractured but Whole™", "price": "6.1", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.98", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.64", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2024", "price": "5.27", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle 4 Tales", "price": "0.08", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.92", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpeedRunners", "price": "0.34", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "SpellForce III Reforced", "price": "10.76", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "SpellForce: Conquest of Eo", "price": "12.25", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "SpiderHeck", "price": "1.0", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "3.34", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "SpongeBob SquarePants: The Cosmic Shake", "price": "12.1", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "11.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.55", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.15", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Stealth Inc. 2: A Game of Clones", "price": "0.14", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Steep X Games Gold Edition", "price": "1.65", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.84", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stikbold! A Dodgeball Adventure", "price": "0.18", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Streets of Rogue", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Strike Team Gladius", "price": "0.39", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.56", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "4.3", "flag": "🇯🇵", "date": "23.01", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "3.59", "flag": "🇯🇵", "date": "23.01", "status": "" },
  { "name": "Super Onion Boy+", "price": "2.45", "flag": "🇧🇷", "date": "25.01", "status": "" },
  { "name": "Surf & Turf Bundle", "price": "0.97", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "Sword of the Necromancer: Resurrection", "price": "1.6", "flag": "🇹🇷", "date": "22.01", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition", "price": "13.91", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter", "price": "11.56", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "33.63", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "40.37", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "33.63", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "24.66", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tannenberg", "price": "0.56", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.85", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.7", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "2.19", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "The Bookwalker: Thief of Tales", "price": "0.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.27", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.07", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Catch: Carp & Coarse - Deluxe Edition", "price": "0.76", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Catch: Carp & Coarse Fishing", "price": "0.64", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "12.2", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "10.94", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "7.01", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Dragoness: Command of the Flame", "price": "1.03", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "The Dwarves", "price": "3.28", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.09", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "29.17", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "39.27", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "10.77", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "1.72", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.27", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Final Station", "price": "0.3", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.18", "flag": "🇪🇬", "date": "23.01", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "6.0", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.09", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Pedestrian", "price": "0.64", "flag": "🇳🇬", "date": "28.01", "status": " GP" },
  { "name": "The Raven Remastered", "price": "2.45", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.42", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "The Smile Alchemist", "price": "4.94", "flag": "🇯🇵", "date": "28.01", "status": " GP" },
  { "name": "The Stone of Madness", "price": "2.15", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Surge 2 - Premium Edition", "price": "1.46", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "The Surge 2 - Windows 10", "price": "0.81", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "The Surge 2", "price": "1.6", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Surge", "price": "0.38", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Swapper", "price": "0.22", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Swindle", "price": "0.11", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "The Talos Principle 2: Deluxe Edition", "price": "3.03", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "The Valiant", "price": "6.77", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "The Wandering Village (Game Preview)", "price": "2.42", "flag": "🇳🇬", "date": "28.01", "status": "" },
  { "name": "This Is the Police", "price": "1.62", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.71", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "This is the Police 2", "price": "2.45", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Thomas Was Alone", "price": "0.13", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Time Of War, Arkano'90", "price": "0.16", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tin Can: Supporter Edition", "price": "3.3", "flag": "🇹🇷", "date": "28.01", "status": " GP" },
  { "name": "Tiny Hands Adventure", "price": "0.09", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tinykin", "price": "0.5", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Titan Quest", "price": "1.96", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.49", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "13.46", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "4.86", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy's The Division", "price": "0.5", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "11.87", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "8.98", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "29.17", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "35.9", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "19.52", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Torii Guardian Bundle", "price": "0.56", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.51", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.72", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Trailmakers: Booster Edition", "price": "2.22", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.17", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.81", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 5: Deluxe Edition", "price": "7.27", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: German Regional Edition", "price": "4.31", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: Special Edition", "price": "10.59", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: UK Regional Edition", "price": "4.31", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Train Sim World® 5: USA Regional Edition", "price": "4.31", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "6.73", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "TramSim: Console Edition", "price": "5.68", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Trash Sailors", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Trine 5: A Clockwork Conspiracy", "price": "10.21", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Troopers", "price": "4.58", "flag": "🇺🇦", "date": "03.02", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.01", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.21", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.95", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Deluxe Edition", "price": "33.09", "flag": "🇰🇷", "date": "23.01", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.0", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5", "price": "26.0", "flag": "🇮🇳", "date": "23.01", "status": "" },
  { "name": "Ultratron", "price": "0.07", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Undungeon", "price": "0.39", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.15", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Varenje", "price": "0.32", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Verdun", "price": "0.41", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.47", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "8.83", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "9.93", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Space Marine 2 - Gold Edition", "price": "58.5", "flag": "🇮🇳", "date": "28.01", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "9.85", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "2.84", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "27.89", "flag": "🇧🇷", "date": "23.01", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "46.0", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Way of the Hunter - Ultimate Edition", "price": "40.22", "flag": "🇨🇱", "date": "04.02", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "20.42", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.12", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.55", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "WeakWood Throne", "price": "0.1", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "Wheel Of Fortune®", "price": "2.26", "flag": "🇧🇷", "date": "28.01", "status": "" },
  { "name": "Wild Eclipse", "price": "0.0", "flag": "🇺🇸", "date": "30.01", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.39", "flag": "🇺🇦", "date": "23.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.91", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.73", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.56", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "14.58", "flag": "🇹🇷", "date": "23.01", "status": " GP" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.59", "flag": "🇳🇬", "date": "24.01", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "18.26", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "Wreckfest", "price": "3.42", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.29", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.24", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yoku's Island Express", "price": "0.84", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.48", "flag": "🇹🇷", "date": "24.01", "status": "" },
  { "name": "ZooKeeper", "price": "0.44", "flag": "🇹🇷", "date": "28.01", "status": "" },
  { "name": "de Blob 2", "price": "0.54", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "de Blob", "price": "1.62", "flag": "🇧🇷", "date": "04.02", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "41.84", "flag": "🇧🇷", "date": "01.06", "status": " GP" },
]

let usd = 115;

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
