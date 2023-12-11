// Базовий клас SmartDevice
function SmartDevice() {
    this.status = false;
  }
  
  SmartDevice.prototype.turnOn = function () {
    this.status = true;
    console.log('Device is turned on.');
  };
  
  SmartDevice.prototype.turnOff = function () {
    this.status = false;
    console.log('Device is turned off.');
  };
  
  // Клас для світильника
  function Light() {
    SmartDevice.call(this);
    this.brightness = 50;
  }
  
  Light.prototype = Object.create(SmartDevice.prototype);
  Light.prototype.constructor = Light;

  Light.prototype.getBrightness = function () {
    if (this.status === false) {
        console.log('Lights is turned off');
    } else {
        console.log('Brightness ' + this.brightness);
    }
  }
  
  Light.prototype.setBrightness = function (level) {
    if (this.status === false) {
        console.log('Lights is turned off');
    } else if (level < 0 || level > 100) {
        console.log('Level must be 0-100');
    } else {
    this.brightness = level;
    console.log('Brightness changed to ' + level + "%");
    }
  };
  
  // Клас для жалюзі
  function Blinds() {
    SmartDevice.call(this);
    this.level = 0;
  }
  
  Blinds.prototype = Object.create(SmartDevice.prototype);
  Blinds.prototype.constructor = Blinds;

  Blinds.prototype.getLevel = function () {
    if (this.status === false) {
        console.log('Blinds is turned off');
    } else {
    console.log('Blinds level ' + this.level);
    }
  }

  Blinds.prototype.setLevel = function (level) {
    if (this.status === false) {
        console.log('Blinds is turned off');
    } else if (level > 5 || level < 0) {
        console.log("Level must be 0-5");
    } else {
        this.level = level;
    console.log('Blinds level changed to ' + level);
    }
  };
  
  // Клас для сигналізації
  function Alarm() {
    SmartDevice.call(this);
    this.alertLevel = 'low';
  }
  
  Alarm.prototype = Object.create(SmartDevice.prototype);
  Alarm.prototype.constructor = Alarm;

  Alarm.prototype.getAlertLevel = function () {
    if (this.status === false) {
        console.log('Alarm is turned off');
    } else {
    console.log('Alert level ' + this.alertLevel);
    }
  }

  Alarm.prototype.setAlertLevel = function (level) {
    if (this.status === false) {
        console.log('Alarm is turned off');
    } else {
    this.alertLevel = level;
    console.log('Alert level set to ' + level);
    }
  };
  
  // Приклад використання
  var light = new Light();
  var blinds = new Blinds();
  var alarm = new Alarm();
  
  light.setBrightness(50);
  blinds.setLevel(3);
  alarm.setAlertLevel('high');

  light.turnOn();
  blinds.turnOn();
  alarm.turnOn();

  light.setBrightness(50);
  blinds.setLevel(3);
  alarm.setAlertLevel('high');

  light.turnOff();
  blinds.turnOff();
  alarm.turnOff();
  
  light.setBrightness(50);
  blinds.setLevel(3);
  alarm.setAlertLevel('high');