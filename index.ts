function countdown(endDate: Date) {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = endDate.getTime() - now;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  
      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        console.log('Countdown ended');
      }
    }, 1000);
  }
  
  // Example usage
  const endDate = new Date('2023-05-01T00:00:00Z');
  countdown(endDate);
  