export function getSecondsText(seconds : number) {
    const lastDigit = seconds % 10;
    const lastTwoDigits = seconds % 100;
  
    if (lastDigit === 0 || lastDigit >= 5 || (lastTwoDigits >= 11 && lastTwoDigits <= 19)) {
      return 'секунд';
    } else if (lastDigit === 1) {
      return 'секунда';
    } else {
      return 'секунды';
    }
  }
  