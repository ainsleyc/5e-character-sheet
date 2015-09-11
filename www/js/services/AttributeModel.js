
var MAX_ATTRIBUTE = 18;
var MIN_ATTRIBUTE = 0;

function AttributeModel() {

  this.attributes = {
    "str": { id: "str", label: "Strength", value: 10 },
    "dex": { id: "dex", label: "Dexterity", value: 10 },
    "con": { id: "con", label: "Constitution", value: 10 },
    "int": { id: "int", label: "Intelligence", value: 10 },
    "wis": { id: "wis", label: "Wisdom", value: 10 },
    "cha": { id: "cha", label: "Charisma", value: 10 }
  };

  this.get = function() {
    return this.attributes
  }

  this.inc = function(id) {
    if (this.attributes[id].value < MAX_ATTRIBUTE) {
      this.attributes[id].value++;
    }
  }

  this.dec = function(id) {
    if (this.attributes[id].value > MIN_ATTRIBUTE) {
      this.attributes[id].value--;
    }
  }
}

angular.module('5eSheet.services', [])

.service('AttributeModel', [AttributeModel]);
