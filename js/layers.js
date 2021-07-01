addLayer("p", {
    name: "package", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#BCDC93",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "packages", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Pack for packages.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	    upgrades: {
		rows: 1,
		cols: 3,
                 11: {
                     title: "More Products",
                     description: "Deliver 5 pack to your customer to double your products gain.",
                     cost: new Decimal(5),
                 },
		 12: {
                     title: "More Pack Done",
                     description: "Deliver 20 pack to your customer to double your packages gain.",
                     cost: new Decimal(20),
                 },
                 13: {
                     title: "Whats To Do",
                     description: "Deliver 100 pack to your customer to unlock a layer.",
                     cost: new Decimal(100),
                 },
             }, 
	})
	
	
	
addLayer("f", {
    name: "factory", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#675C63",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "factories", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Construct for factories.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	milestones: {
    0: {
        requirementDescription: "8 factories",
        effectDescription: "Keep Product upgrades on reset.",
        done() { return player.f.points.gte(8) }
    }
    
},

    1: {
        requirementDescription: "15 factories",
        effectDescription: "Unlock a new layer. Coming Soon...",
        done() { return player.f.points.gte(15) }
    }
    
}
}
	 
})    
//Can someone help me to fix it?, I don't see the layers and i'm getting a error


