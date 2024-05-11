class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
    addClock(time, callback) {
      this.time = new Date("HH:MM"); // проверить правильность ввода времени (правильный ли код)
      this.callback = callback;
      if (time === undefined || callback === undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.find(item => item.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      }
      this.alarmCollection.push({
        callback,
        time,
        canCall: true
      });
    }
    removeClock(time) {
      if (this.alarmCollection.filter(item => item.time === time)) {
        this.alarmCollection.find(item => item.time === time);
      }
    }
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    }); // проверить правильность кода
    }
    start() {
      if (this.intervalId === null) {
        this.intervalId = setInterval(() => {
          this.alarmCollection.forEach(item => {
            if (item.time === this.getCurrentFormattedTime()) {
              if (item.canCall) {
                item.callback();
                item.canCall = false
              }
            }
          })
        }, 1000)
      }
    }
    stop() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }