
function AttributeModel() {

  this.MAX_ATTRIBUTE = 18;
  this.MIN_ATTRIBUTE = 0;

  this.attributes = {
    "str": { key: "str", label: "Strength", value: 10 },
    "dex": { key: "dex", label: "Dexterity", value: 10 },
    "con": { key: "con", label: "Constitution", value: 10 },
    "int": { key: "int", label: "Intelligence", value: 10 },
    "wis": { key: "wis", label: "Wisdom", value: 10 },
    "cha": { key: "cha", label: "Charisma", value: 10 }
  };

  this.get = function() {
    return this.attributes
  }

  this.inc = function(id) {
    if (this.attributes[id] && this.attribute[id].value < this.MAX_ATTRIBUTE) {
      this.attributes[id].value++;
    }
  }

  this.dec = function(id) {
    if (this.attributes[id] && this.attribute[id].value > this.MIN_ATTRIBUTE) {
      this.attributes[id].value--;
    }
  }
}

angular.module('5eSheet.services', [])

.service('AttributeModel', [AttributeModel]);
