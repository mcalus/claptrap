var volunteers = []; 
var votes = []; 
var voters = []; 

module.exports = {
    randomNumber: function (min, max) {
        
        if(isNaN(min))
            min = 0;
        if(isNaN(max))
            max = 10;
        
        return Math.floor(Math.random() * (max  + 1 - min)) + min;

    },
    randomChannelUser: function (channel) {
        
        if(channel.members === undefined)
            return "TY";

        let user = channel.members.random();
        
        return user.username;

    },
    claptrapQuote: function () {
        
        let quotes = ["There\'s more to learn!", "Let me teach you the ways of magic!", "I got quests!", "Magic waits for no one, apprentice!", "Still working on that quest?", "Shouldn\'t you be murdering something about now?", "Hey! You\'re TALKING to me! And I didn\'t even have an exclamation point over my head! This is the BEST day of my life!", "Sooooo... how are things?", "Hey, best friend!", "Yessss, look into my eyes. You\'re getting sleepy. You\'re getting... zzzzzz... Zzzzzz...", "Success! My spell to make you want to hang out with me worked!", "Stay a while, and listen. Oh god, please -- PLEASE! -- stay a while.", "Away with thee!", "Hocus pocus!", "Ahhh!", "Alaka-ZAM!", "Ha-HA!", "Don\'t you worry, minion! Give me one good shot at that Hector dude and I\'ll take him right out! I... just got some stuff to do first.", "We\'ve really come a long way, haven\'t we, minion? And you\'re still just as loyal as ever! Who\'s a good minion? You are! Yes you are!", "Yessiree! This whole place would completely fall apart without old Claptrap keeping things humming along!", "As a robot, I\'m completely immune to Hector\'s gas attacks. But that hasn\'t stopped me from incessantly cowering!", "And I thought bandits were bad BEFORE they had nightmare plants growing out of them!", "You already saved Pandora? But... but I\'M the hero of Pandora! It\'s on my business card! I ORDERED SO MANY OF THEM!", "Sanctuary\'s gone? But the bank! All my stuff! All my crucial information! YES! I\'M OFF THE GRID, BABY! NO MORE CREDITORS! Seriously, I owe a lot of people a lot of money.", "The Vault Map is gone! Forever! It will never be found. Never, ever, ever! is what I\'ll say to everyone I know while I look for it."];
        
        return quotes[Math.floor(Math.random() * quotes.length)];

    },
    addVolunteer: function (user) {
        
        let check = true;

        volunteers.forEach(usr => {
            if(usr == user) {
                check = false;
                return;
            }
        });

        if(check) {
            volunteers.push(user); 
            return 'zgłoszenie dodano';
        }
        else {
            return 'już jesteś na liście...\n' + this.showVolunteer();
        }

    },
    showVolunteer: function () {
        
        let list = '\nOsoby zgłoszone: ';
        let number = 0;

        volunteers.forEach(volunteer => {
            number++;
            list += '\n' + number + '. ' + volunteer.displayName;
        });

        return list;
    },
    pickVolunteer: function (del) {
        
        if(volunteers.length < 1) {
            return 'Nie ma zgłoszonych graczy';
        }

        let number = Math.floor(Math.random() * volunteers.length);
        let pick = volunteers[number];

        //this.clearVolunteer();
        if(del != undefined) {
            this.deleteVolunteer(pick.user.id);
        }

        number++;
        return '\nWylosowany uczestnik to \n' + number + '. <@' + pick.user.id + '>';

    },
    deleteVolunteer: function (user) {
        let check = false;

        volunteers.forEach((usr, i) => {
            if(usr.user.id == user) {
                check = usr.displayName;
                volunteers.splice(i, 1);
                return;
            }
        });

        if(check != false)
            return "usunięto gracza " + check;
        else
            return "brak takiego gracza";
    },
    clearVolunteer: function () {
        
        volunteers = [];

    },
    addVote: function (user, vote) {
        
        let checkUser = false;
        let checkVote = false;

        voters.forEach(usr => {
            if(usr == user) {
                checkUser = true;
                return;
            }
        });

        for (let [key, value] of Object.entries(votes)) {
            if(key == vote.displayName) {
                checkVote = true;
                break;
            }
        }

        if(checkUser) {
            return 'już głosowałeś...\n';
        }
        else {
            if(checkVote == false) {
                votes[vote.displayName] = 1;
            }
            else {
                votes[vote.displayName]++;
            }
            
            voters.push(user); 
            this.showVote();
            return 'głos dodany';
        }

    },
    showVote: function () {
        
        let list = '\nGłosy: ';
        
        for (let [key, value] of Object.entries(votes)) {
            list += '\n' + key + ' => ' + value;
        }

        return list;
    },
    clearVote: function () {
        
        votes = [];
        voters = [];

    },
  };


  