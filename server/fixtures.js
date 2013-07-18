if(Players.find().count() === 0){
    Players.insert({
	name: 'Denny Scott',
	health: 100
    });

    Players.insert({
	name: 'Travis Scott',
	health: 100
    });
}
