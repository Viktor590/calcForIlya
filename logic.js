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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.58", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.32", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.63", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.49", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.94", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "8 & 9 Ball Pocket", "price": "0.65", "flag": "🇹🇷", "date": "09.01", "status": "" },
  { "name": "8-Ball Pocket", "price": "0.19", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "0.99", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "A Gummy's Life", "price": "0.47", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Plague Tale Bundle", "price": "8.9", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "1.09", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "1.55", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN 25th Anniversary Edition", "price": "24.46", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN Deluxe Edition 2022", "price": "31.45", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN Ultimate Edition", "price": "34.95", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN", "price": "5.09", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "AFL 23", "price": "14.44", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.57", "flag": "🇹🇷", "date": "06.01", "status": " GP" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Adventure Time: Pirates of the Enchiridion", "price": "4.71", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Aery - Last Day of Earth", "price": "0.49", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Agatha Christie - Murder on the Orient Express", "price": "7.18", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.69", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "21.94", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Agents of Mayhem", "price": "0.16", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Agony", "price": "0.21", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Aidan in Danger", "price": "0.32", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Akai Katana Shin", "price": "15.99", "flag": "🇮🇸", "date": "07.01", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "12.0", "flag": "🇧🇷", "date": "01.10", "status": " GP" },
  { "name": "Amelia's Diner", "price": "1.78", "flag": "🇺🇦", "date": "15.01", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.04", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "An Evil Existence", "price": "0.45", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "3.82", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Anomaly Agent", "price": "0.8", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "AntVentor", "price": "0.33", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Anti Gravity Racing", "price": "1.96", "flag": "🇺🇦", "date": "10.01", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.78", "flag": "🇹🇷", "date": "08.01", "status": " GP" },
  { "name": "Asdivine Hearts I & II", "price": "5.99", "flag": "🇺🇦", "date": "07.01", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.7", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "3.08", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "42.84", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "77.9", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "36.18", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "15.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.09", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "20.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.26", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.09", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "22.61", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "17.53", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "13.57", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "56.54", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.01", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assault Suit Leynos 2 Saturn Tribute", "price": "14.26", "flag": "🇮🇸", "date": "07.01", "status": "" },
  { "name": "Assetto Corsa Competizione - 2024 Pack", "price": "16.22", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.71", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Avatar The Last Airbender: Quest for Balance", "price": "9.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Aven Colony - Deluxe Edition", "price": "0.72", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.12", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Awesome Zombie Games Bundle", "price": "0.16", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "BATSUGUN Saturn Tribute Boosted", "price": "3.26", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.77", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "25.37", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "Back 4 Blood", "price": "1.05", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Barbie Project Friendship™", "price": "16.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.94", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Batman™: Arkham Knight", "price": "0.38", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.54", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.29", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "BecomeTheWild", "price": "2.43", "flag": "🇺🇦", "date": "17.01", "status": "" },
  { "name": "Besiege Console (Game Preview)", "price": "0.65", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Beyond Good & Evil 20th Anniversary Edition", "price": "9.89", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.81", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.29", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "BioShock Remastered", "price": "1.29", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "5.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Blasphemous 2 - Mea Culpa Edition", "price": "21.41", "flag": "🇨🇴", "date": "14.01", "status": "" },
  { "name": "Blast Brigade vs. the Evil Legion of Dr. Cread", "price": "3.96", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Bloomyth & Strong Moon Bundle", "price": "0.33", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Blue Fire", "price": "2.3", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Bluey: The Videogame", "price": "4.54", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Boggle", "price": "0.31", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "5.01", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.83", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Bratz™: Flaunt your fashion", "price": "7.42", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Bravery and Greed", "price": "0.84", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Bright Side: Quiz", "price": "4.74", "flag": "🇺🇦", "date": "10.01", "status": "" },
  { "name": "Broken Age", "price": "0.3", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Broken Age", "price": "0.33", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.51", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition Duke Nukem Bundle", "price": "0.51", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Bunhouse", "price": "1.11", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "CONSCRIPT", "price": "2.35", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "13.29", "flag": "🇪🇬", "date": "30.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition Upgrade", "price": "20.45", "flag": "🇧🇷", "date": "30.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "55.86", "flag": "🇪🇬", "date": "24.01", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "62.19", "flag": "🇧🇷", "date": "24.01", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.37", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.67", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Cats With Guns (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Cats with Guns (Xbox)", "price": "0.28", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Cats with Guns Bundle (Windows + Xbox)", "price": "0.45", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Chants of Sennaar", "price": "3.06", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "5.94", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Child of Light® Ultimate Edition", "price": "2.86", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "3.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.19", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "25.84", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.47", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Classified: France '44 - Deluxe Edition", "price": "7.32", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Classified: France '44 - Overlord Edition", "price": "17.48", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "1.6", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Coffee, Plis", "price": "0.21", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Commandos 2 & 3 – HD Remaster Double Pack", "price": "1.93", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Cozy Designer", "price": "0.54", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "9.73", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "13.09", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "9.73", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.91", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.65", "flag": "🇧🇷", "date": "01.05", "status": " GP" },
  { "name": "Crown Wars – Sacred Edition", "price": "12.43", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "34.58", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Crypt of the Serpent King Remastered 4K Edition", "price": "1.15", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Curse of the Dead Gods (PC)", "price": "0.64", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "0.94", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "38.48", "flag": "🇰🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "34.58", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.57", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.8", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.8", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "5.79", "flag": "🇺🇦", "date": "14.01", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.25", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "1.26", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dark Quest 3", "price": "0.48", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Darkest Dungeon II", "price": "3.26", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.92", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Day of the Tentacle Remastered", "price": "0.5", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "DayZ Cool Edition", "price": "4.47", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: DLC bundle", "price": "0.48", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.57", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.01", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island Definitive Edition", "price": "0.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.1", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death or Treat", "price": "0.65", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.57", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.19", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deepest Trench", "price": "1.01", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Deflector", "price": "0.46", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- Sweep the Board!", "price": "24.32", "flag": "🇯🇵", "date": "06.01", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "13.89", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "3.39", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "2.32", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "45.43", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "29.85", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Digital Deluxe Upgrade featuring LEGO®", "price": "4.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dinobreak Triassic Torment Collection", "price": "16.87", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "1.92", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.25", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "8.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dordogne", "price": "2.83", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dragon Blaze", "price": "1.09", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing Rally Edition", "price": "5.51", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "DreamWorks Trolls Remix Rescue", "price": "8.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.3", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dungeon Arsenal", "price": "0.36", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Dungeons 3 - Complete Collection", "price": "1.45", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Dungeons 4", "price": "17.81", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.73", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "4.32", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Eldest Souls", "price": "0.54", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Elevator Action™ -Returns- S-Tribute", "price": "1.6", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Empire of the Ants", "price": "24.42", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Enchanted Portals", "price": "0.65", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Epic Chef", "price": "0.59", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.23", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Escape Game Fort Boyard", "price": "0.08", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "42.97", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "36.18", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Explosionade DX", "price": "0.28", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "F1® 23", "price": "36.71", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "1.24", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "22.61", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "36.18", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FPV Simulator", "price": "5.78", "flag": "🇺🇦", "date": "17.01", "status": "" },
  { "name": "Fae Farm", "price": "3.65", "flag": "🇪🇬", "date": "07.01", "status": " GP" },
  { "name": "Fallout 4 (PC)", "price": "1.63", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Fallout 4", "price": "1.63", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.45", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.45", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gleaming Depths Deluxe Edition", "price": "31.64", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.07", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.86", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Far Cry® 4", "price": "0.79", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.14", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "20.81", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Far Cry® 5", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "17.53", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "21.48", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "18.09", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "15.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.57", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.84", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.33", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "16.49", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Flintlock: The Siege of Dawn", "price": "11.02", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Football Manager 2024 Console", "price": "3.23", "flag": "🇳🇬", "date": "16.01", "status": "" },
  { "name": "Fort Boyard", "price": "0.12", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "25.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.88", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": "4.14", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "4.97", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2", "price": "3.34", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Fuga: Melodies of Steel", "price": "2.78", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Full Throttle Remastered", "price": "0.5", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Funko Fusion - Happy Little Bundle", "price": "4.26", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "GUNBARICH", "price": "1.09", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Garden Bundle", "price": "3.4", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Garfield Kart Furious Racing", "price": "1.22", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Garfield Lasagna Party", "price": "5.98", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.26", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.13", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.77", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.79", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Geometric Sniper", "price": "0.1", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Ghostrunner 2 Brutal Edition", "price": "8.83", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Ghostrunner: Complete Edition", "price": "2.72", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "17.53", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gigantic: Rampage Edition", "price": "4.87", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Gimmick! Special Edition", "price": "1.6", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Ginger - The Tooth Fairy", "price": "0.36", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "3.4", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.57", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.57", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.73", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.96", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "0.71", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Golf Peaks", "price": "0.32", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.44", "flag": "🇰🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "30.51", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gord", "price": "5.34", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grand Prix Rock 'N Racing", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.1", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.59", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "2.94", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Gravel Special Edition", "price": "2.24", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "Gravel", "price": "1.47", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "0.84", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "1.36", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "2.01", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Grim Fandango Remastered", "price": "0.5", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Guns, Gore and Cannoli 2", "price": "0.47", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Guns, Gore and Cannoli", "price": "0.35", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.98", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED 2 - Turbocharged™", "price": "1.29", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "1.8", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "2.32", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "18.66", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "22.61", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hardspace: Shipbreaker", "price": "3.76", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Have a Nice Death", "price": "2.17", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Headbangers: Rhythm Royale", "price": "0.68", "flag": "🇳🇬", "date": "04.01", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Fan Favourites Bundle", "price": "1.79", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - German Bundle", "price": "1.13", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - Headgear Bundle", "price": "1.13", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - Soviet Bundle", "price": "1.13", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - The Eagle and Pegasus Combo Pack", "price": "0.65", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - U.S Bundle", "price": "1.13", "flag": "🇸🇦", "date": "14.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "4.72", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Heroes of Hammerwatch - Ultimate Edition", "price": "0.4", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.57", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hitchhiker", "price": "0.33", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Hogwarts Legacy + Harry Potter: Quidditch Champions Deluxe Editions Bundle", "price": "17.5", "flag": "🇨🇱", "date": "14.01", "status": "" },
  { "name": "Hokko Life", "price": "0.84", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Hole io & Paper io 2", "price": "0.38", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Hot Wheels Monster Trucks: Stunt Mayhem™ Deluxe Edition", "price": "15.01", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Hotline Miami Collection", "price": "0.68", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Hotline Miami", "price": "0.34", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "House Flipper 2", "price": "0.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "2.23", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hundred Bullets", "price": "0.78", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.3", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.43", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.27", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunting Simulator 2", "price": "0.48", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "HyperDot", "price": "0.94", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.15", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I, Zombie", "price": "0.08", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "32.79", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Immortals Fenyx Rising™", "price": "5.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.43", "flag": "🇨🇱", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "8.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.81", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Injustice™ 2", "price": "0.4", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Insectum - Epic Battles of Bugs", "price": "0.49", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "20.84", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "36.18", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "42.97", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm", "price": "3.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Into The Sky", "price": "0.45", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Iris and the Giant", "price": "1.68", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Iron Harvest Complete Edition", "price": "2.48", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Isekai Rondo", "price": "5.03", "flag": "🇯🇵", "date": "07.01", "status": " GP" },
  { "name": "Isonzo", "price": "0.97", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "6.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.57", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "54.37", "flag": "🇰🇷", "date": "16.06", "status": " GP" },
  { "name": "Jitsu Squad", "price": "7.21", "flag": "🇺🇦", "date": "07.01", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.77", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.18", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.48", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Dance 2025 Edition", "price": "22.69", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series: Special Bundle", "price": "1.26", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Kargast", "price": "0.45", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "1.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Knight vs Giant: The Broken Excalibur", "price": "1.11", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Kona", "price": "0.2", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Krampus Kills", "price": "0.84", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "L.A. Noire", "price": "2.83", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LA Cops", "price": "0.26", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.37", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "0.74", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "LEGO® DC Super-Villains", "price": "0.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® STAR WARS™: The Force Awakens", "price": "0.37", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.18", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.43", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "9.77", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® The Hobbit™", "price": "0.51", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.45", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Laika: Aged Through Blood", "price": "1.9", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Lara Croft and the Temple of Osiris & Season Pass Pack", "price": "1.91", "flag": "🇿🇦", "date": "14.01", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris", "price": "1.35", "flag": "🇿🇦", "date": "14.01", "status": "" },
  { "name": "Last Days of Lazarus", "price": "0.56", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux Platinum Edition", "price": "62.53", "flag": "🇨🇭", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux", "price": "27.58", "flag": "🇨🇭", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "36.19", "flag": "🇨🇱", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits Platinum Edition", "price": "55.57", "flag": "🇪🇺", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits", "price": "24.69", "flag": "🇪🇺", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023 with Hits from Australia & NZ", "price": "21.49", "flag": "🇳🇿", "date": "14.01", "status": "" },
  { "name": "Let's Sing 2023", "price": "16.02", "flag": "🇨🇱", "date": "14.01", "status": "" },
  { "name": "Let’s Sing 2023 with Hits from Australia & NZ Platinum Edition", "price": "48.37", "flag": "🇦🇺", "date": "14.01", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name", "price": "15.44", "flag": "🇵🇭", "date": "14.01", "status": "" },
  { "name": "Like a Dragon: Infinite Wealth Ultimate Edition", "price": "32.65", "flag": "🇵🇭", "date": "14.01", "status": "" },
  { "name": "Like a Dragon: Ishin!", "price": "7.62", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Lily in Puzzle World (Xbox & PC)", "price": "1.8", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Little League World Series Baseball 2022", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Livelock", "price": "0.07", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Looney Tunes: Wacky World of Sports", "price": "18.01", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Lords of the Fallen (2014)", "price": "0.45", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Lords of the Fallen Complete Edition (2014)", "price": "0.62", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "3.78", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Lost Judgment Digital Ultimate Edition", "price": "5.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.84", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MASSIVE CHALICE", "price": "0.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "22.61", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.22", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "13.57", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "32.79", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": "2.91", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": "2.91", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Mad Max", "price": "0.7", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Madden NFL 19", "price": "27.04", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "15.73", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Maneater Apex Edition", "price": "3.19", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Marenian Tavern Story: Patty and the Hungry God", "price": "4.89", "flag": "🇯🇵", "date": "07.01", "status": "" },
  { "name": "Marsupilami: Hoobadventure", "price": "1.22", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "2.44", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "5.08", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "5.08", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "MasterChef: Learn to Cook! - Christmas Special", "price": "6.79", "flag": "🇺🇦", "date": "04.01", "status": "" },
  { "name": "Matchbox™ Driving Adventures", "price": "11.96", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Matchpoint - Tennis Championships", "price": "9.19", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "5.76", "flag": "🇹🇷", "date": "14.01", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.54", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries", "price": "1.13", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Metal Black™ S-Tribute", "price": "0.76", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Metaphor: ReFantazio Atlus 35th Digital Anniversary Edition", "price": "55.97", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "93.15", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "46.57", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "56.12", "flag": "🇺🇦", "date": "17.02", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "4.95", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.76", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.55", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.43", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.43", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.59", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.07", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Miraculous: Paris Under Siege - Deluxe Edition", "price": "18.05", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "4.41", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "Monster High™‎ Skulltimate Secrets™", "price": "16.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "35.53", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "30.45", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.14", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Monster Jam™ Showdown - Big Air Edition", "price": "27.97", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Monster Jam™ Showdown", "price": "20.97", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Monster Trampoline", "price": "0.38", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Moo & Move: Extra Grazing Grounds", "price": "0.19", "flag": "🇹🇷", "date": "17.01", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.53", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "19.43", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.43", "flag": "🇪🇬", "date": "16.12", "status": " GP" },
  { "name": "MotoGP™24", "price": "3.6", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.68", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "1.24", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Moving Out", "price": "1.13", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "MudRunner", "price": "0.59", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.3", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Little Pony: A Zephyr Heights Mystery", "price": "14.36", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "My Time At Portia", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.19", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "MythForce", "price": "1.08", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "NASCAR Arcade Rush", "price": "8.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "NBA 2K25 Tournament Edition", "price": "25.82", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "NBA 2K25 x TopSpin 2K25 Bundle", "price": "34.96", "flag": "🇮🇳", "date": "13.01", "status": "" },
  { "name": "NBA 2K25 x WWE 2K24 Bundle", "price": "34.96", "flag": "🇮🇳", "date": "13.01", "status": "" },
  { "name": "NBA 2K25 x WWE 2K24 x TopSpin 2K25 Bundle", "price": "42.94", "flag": "🇰🇷", "date": "13.01", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.55", "flag": "🇨🇱", "date": "31.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "20.98", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "28.23", "flag": "🇰🇷", "date": "30.12", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "2.33", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "1.61", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "0.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.78", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "8.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Nexomon", "price": "0.28", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Nick Jr. Party Adventure", "price": "11.96", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.77", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.18", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "2.63", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "2.65", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Nickelodeon: Kart Racers", "price": "0.28", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "24.01", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "28.43", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.84", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Nobody Saves the World", "price": "0.84", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "39.84", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "OlliOlli World Rad Edition", "price": "7.81", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.57", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outbreak: Blood & Teeth Collection", "price": "27.07", "flag": "🇧🇷", "date": "07.01", "status": " GP" },
  { "name": "Outbreak: Cold Comfort Collection", "price": "46.57", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Outbreak: Survival Kit Collection", "price": "52.82", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Outbreak: The Full Monty Collection", "price": "59.06", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.04", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked! 2", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Overcooked", "price": "0.28", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "PAW Patrol World", "price": "3.5", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "PAW Patrol: Grand Prix", "price": "2.61", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "PAYDAY 3", "price": "2.04", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "4.66", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Paper io 2", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Peppa Pig: World Adventures", "price": "3.85", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "10.11", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "36.99", "flag": "🇺🇦", "date": "14.01", "status": "" },
  { "name": "Persona Collection", "price": "31.08", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Pets Bundle", "price": "2.88", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pirates Outlaws", "price": "0.34", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Please Fix The Road", "price": "0.49", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Portal Knights - Legendary Edition", "price": "1.44", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Potion Permit", "price": "0.95", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Potion Permit: Complete DLC Bundle", "price": "0.96", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "22.62", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "Psychonauts 2", "price": "2.02", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Puzzle Bobble™2X/BUST-A-MOVE™2 Arcade Edition & Puzzle Bobble™3/BUST-A-MOVE™3 S-Tribute", "price": "1.6", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "RAGE 2", "price": "1.61", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.18", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "REDO!", "price": "0.52", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.35", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "RIDE 5 - Special Edition", "price": "16.97", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "RIDE 5", "price": "11.02", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "Railbound", "price": "0.2", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Railway Empire 2", "price": "2.79", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Railway Empire", "price": "0.72", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Rain on Your Parade + Just Crow Things", "price": "2.12", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "ReCore", "price": "2.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "4.07", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Redneck Joe Vs The Swamp Zombies", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Relicta", "price": "0.38", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Remains", "price": "0.49", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Remnant 2", "price": "4.38", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.43", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "9.77", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "2.63", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Remnant: From the Ashes", "price": "1.75", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "29.4", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "39.58", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "22.61", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Riders Republic™", "price": "4.95", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Rise of the Tomb Raider", "price": "0.45", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "2.95", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Risk of Rain 2 + Survivors of the Void + Seekers of the Storm Bundle", "price": "22.97", "flag": "🇲🇽", "date": "14.01", "status": "" },
  { "name": "Road 96", "price": "0.68", "flag": "🇳🇬", "date": "06.01", "status": "" },
  { "name": "Road 96: Mile 0", "price": "0.52", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "RoboCop: Rogue City", "price": "9.61", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Roboquest", "price": "2.26", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Rock 'N Racing Off Road & Grand Prix", "price": "0.96", "flag": "🇹🇷", "date": "09.01", "status": "" },
  { "name": "Roxy Raccoon's Pinball Panic", "price": "3.9", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "Röki", "price": "0.54", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "44.91", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "61.17", "flag": "🇵🇭", "date": "18.02", "status": " GP" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.13", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "SETTRIS", "price": "1.8", "flag": "🇧🇷", "date": "07.01", "status": "" },
  { "name": "SMITE 2 Deluxe Founder's Edition", "price": "21.66", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "SMITE 2 Founder's Edition", "price": "10.83", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "SMITE 2 Ultimate Founder's Edition", "price": "36.15", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "SMITE Code Slasher Bundle", "price": "4.25", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "SMITE Gecko Guardian Bundle", "price": "4.25", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "SONIC X SHADOW GENERATIONS Digital Deluxe Edition", "price": "33.06", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "11.91", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.87", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STONE", "price": "0.57", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.01", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Fractured Daydream Deluxe Edition", "price": "48.47", "flag": "🇨🇴", "date": "14.01", "status": "" },
  { "name": "Sacrifice Your Friends", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Saints Row IV: Re-Elected", "price": "0.24", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Saints Row", "price": "5.29", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Saints Row: Gat Out of Hell", "price": "0.17", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Scorn", "price": "1.36", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.64", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Scrabble", "price": "5.18", "flag": "🇨🇦", "date": "14.01", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.4", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seasons after Fall", "price": "0.25", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Secret Agent : Cold War Espionage", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Sensible Blood Rugby", "price": "0.33", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Serious Sam 4", "price": "0.48", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Session: Skate Sim", "price": "0.8", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "3.93", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Shadows: Awakening", "price": "0.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Shin Megami Tensei V: Vengeance Digital Deluxe Edition", "price": "39.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Shiness: The Lightning Kingdom", "price": "0.25", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Ship of Fools", "price": "6.56", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Shy Cats Hidden Orchestra", "price": "0.5", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Sixty Words by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.09", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "7.46", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Slender: The Arrival", "price": "0.26", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smurfs Kart", "price": "6.39", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.07", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "12.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Ghost Warrior 3 Season Pass Edition", "price": "0.67", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts & SGW3 Unlimited Edition", "price": "2.02", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 1 & 2 Double Pack", "price": "2.43", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Complete Edition", "price": "2.02", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Deluxe Arsenal Edition", "price": "1.7", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2", "price": "1.36", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts Full Arsenal Edition", "price": "1.7", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts", "price": "1.09", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "SnowRunner (Windows 10)", "price": "2.04", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.78", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "29.4", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "36.18", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "42.97", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "SnowRunner", "price": "2.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Sokomonster", "price": "0.32", "flag": "🇹🇷", "date": "09.01", "status": "" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "5.3", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Sonic Origins Plus", "price": "9.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Soul Searching", "price": "0.68", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "29.4", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.93", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Speedway Racing", "price": "0.39", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "SpongeBob SquarePants™: The Patrick Star Game", "price": "19.14", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Sprawl", "price": "0.96", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "11.49", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.49", "flag": "🇪🇬", "date": "14.01", "status": "" },
  { "name": "Starfield Premium Edition", "price": "14.02", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "1.02", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Steelrising - Bastille Edition", "price": "3.53", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.87", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "3.96", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Strong Moon", "price": "0.19", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Sudden Strike 4 - Complete Collection", "price": "1.45", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Sudocats", "price": "0.14", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.57", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Cyborg", "price": "0.17", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Superliminal", "price": "1.03", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Survivor - Castaway Island", "price": "5.68", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Synnergy Games Bundle (Xbox + Windows)", "price": "0.67", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Synnergy Games Bundle (Xbox Only)", "price": "0.45", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "TEKKEN 7 - Originals Edition", "price": "1.95", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "TEKKEN 7", "price": "1.2", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "TIEBREAK - Ace Edition", "price": "21.66", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "TRANSFORMERS: Galactic Trials", "price": "16.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "TT Isle Of Man 3 - Racing Fan Edition", "price": "10.83", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "1.43", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition", "price": "13.86", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter", "price": "11.5", "flag": "🇪🇬", "date": "28.01", "status": "" },
  { "name": "Tales from the Borderlands", "price": "3.05", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "33.9", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "40.68", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "33.9", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "24.85", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Taxi Life - Supporter Edition", "price": "8.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "5.84", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles Arcade: Wrath of the Mutants", "price": "9.12", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Mutants Unleashed - Digital Deluxe Edition", "price": "22.51", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Terraformers: New Frontiers Bundle", "price": "5.24", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Test Drive Unlimited Solar Crown – Gold Edition", "price": "35.33", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.18", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "1.07", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.18", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.4", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.22", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.1", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "29.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "39.58", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "10.86", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.5", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "The Escapists", "price": "0.33", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.43", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.16", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.29", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Grinch: Christmas Adventures", "price": "13.32", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.08", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "The Inquisitor - Deluxe Edition", "price": "21.01", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.04", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Karate Kid: Street Rumble", "price": "11.96", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The King's Bird", "price": "1.84", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "The Knight Witch", "price": "0.68", "flag": "🇳🇬", "date": "04.01", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Last Oricru", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Legend of Cyber Cowboy", "price": "2.4", "flag": "🇧🇷", "date": "16.01", "status": "" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "3.39", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.19", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Outlast Trials Deluxe Edition", "price": "3.4", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "The Outlast Trials", "price": "2.59", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "3.35", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "The Smurfs - Mission Vileaf", "price": "1.5", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Smurfs - Village Party", "price": "16.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Smurfs 2 : The Prisoner of the Green Stone", "price": "5.98", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Smurfs – Dreams", "price": "16.75", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "The Texas Chain Saw Massacre", "price": "1.36", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "The Walking Dead: Destinies", "price": "11.02", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Thief", "price": "1.47", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.72", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "This War of Mine: The Little Ones", "price": "0.3", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Thumper", "price": "0.48", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Ticket to Ride, Clue and The Game of Life 2 - Classic Board Game Bundle", "price": "2.2", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "13.57", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "11.96", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.05", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "29.4", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "36.18", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tomb Raider: Definitive Edition", "price": "1.97", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "19.67", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition Pre-Order", "price": "23.31", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Torchlight II", "price": "2.43", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Torchlight III", "price": "3.59", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Torment: Tides of Numenera", "price": "0.7", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tortuga - A Pirate's Tale", "price": "1.68", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.53", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Totally Spies! - Cyber Mission", "price": "2.64", "flag": "🇨🇴", "date": "14.01", "status": "" },
  { "name": "Trailmakers: Booster Edition", "price": "2.23", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.19", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "1.92", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Trepang2 - Digital Deluxe Edition", "price": "10.16", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Tribes of Midgard", "price": "0.65", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Tricky Tanks", "price": "0.2", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Trinity Fusion Deluxe Edition", "price": "1.2", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Trinity Fusion", "price": "0.79", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Tropico 6 - Next Gen Edition", "price": "8.27", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.02", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.22", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.5", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.96", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Two & One Hundred Ways Bundle", "price": "0.91", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Two Hundred Ways", "price": "0.68", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": "1.09", "flag": "🇳🇬", "date": "14.01", "status": "" },
  { "name": "Typoman", "price": "0.24", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.22", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "31.56", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves - Deluxe", "price": "13.0", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "UNO®", "price": "1.23", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Undead Horde 2: Necropolis", "price": "0.47", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Under Leaves", "price": "0.2", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Undisputed - Deluxe WBC Edition", "price": "42.38", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Unknown 9: Awakening Deluxe Edition", "price": "20.39", "flag": "🇮🇳", "date": "14.01", "status": "" },
  { "name": "Uragun", "price": "0.65", "flag": "🇹🇷", "date": "07.01", "status": " GP" },
  { "name": "Verlore Slange - Bundle", "price": "1.41", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.49", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.6", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Vision Soft Reset", "price": "0.88", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "WATCH_DOGS™", "price": "0.63", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "8.9", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "4.66", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "WWE 2K24 Bray Wyatt Bundle", "price": "21.96", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "WWE 2K24 Deluxe Edition", "price": "28.26", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.01", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.44", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Warhammer 40,000: Mechanicus", "price": "0.8", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Warhammer 40,000: Space Marine 2 - Ultra Edition", "price": "63.73", "flag": "🇰🇷", "date": "14.01", "status": "" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "0.8", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.35", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "9.93", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3", "price": "1.37", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wasteland Remastered", "price": "0.18", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle", "price": "10.95", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "27.26", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "46.36", "flag": "🇹🇷", "date": "13.01", "status": " GP" },
  { "name": "Watch Dogs®2", "price": "4.44", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "Watch Dogs®: Legion", "price": "2.54", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.18", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "We Happy Few", "price": "1.75", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "We Were Here Together", "price": "0.67", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Weird West", "price": "1.09", "flag": "🇳🇬", "date": "07.01", "status": " GP" },
  { "name": "Welcome to ParadiZe", "price": "5.64", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Who Wants to Be a Millionaire? - Complete Edition", "price": "10.28", "flag": "🇭🇺", "date": "14.01", "status": "" },
  { "name": "Wild Eclipse", "price": "0.0", "flag": "🇺🇸", "date": "30.01", "status": "" },
  { "name": "Withering Rooms", "price": "1.34", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Wizard with a Gun", "price": "1.35", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.23", "flag": "🇺🇦", "date": "01.03", "status": " GP" },
  { "name": "WolfFang SkullFang Saturn Tribute Boosted", "price": "15.99", "flag": "🇮🇸", "date": "07.01", "status": "" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.57", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.31", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein: The New Order", "price": "0.49", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein: The Old Blood", "price": "0.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.95", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein: Youngblood", "price": "1.02", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.78", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.76", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.59", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Word Sudoku by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "Word Wheel by POWGI", "price": "0.32", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "14.7", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Worms Rumble", "price": "0.4", "flag": "🇳🇬", "date": "04.01", "status": "" },
  { "name": "Worms W.M.D", "price": "1.41", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "17.84", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "X-Force Genesis PC Edition", "price": "0.1", "flag": "🇹🇷", "date": "07.01", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.9", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "XCOM® 2", "price": "0.34", "flag": "🇹🇷", "date": "14.01", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.18", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.1", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon", "price": "6.29", "flag": "🇯🇵", "date": "14.01", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "0.52", "flag": "🇧🇷", "date": "14.01", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "1.09", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "inbento", "price": "0.32", "flag": "🇳🇬", "date": "07.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "40.89", "flag": "🇧🇷", "date": "01.06", "status": " GP" },
  { "name": "ドラゴンボールZ KAKAROT アルティメットスペシャルエディション", "price": "44.04", "flag": "🇯🇵", "date": "14.01", "status": "" }
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
