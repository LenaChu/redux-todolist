let timer = 0;

export default function Timer() {
  function myTimer() {
    timer = timer + 1;
    console.log(timer);
  }

  const handleStartTimer = () => {
    setInterval(myTimer, 1000);
  };

  const handleStopTimer = () => {
    // clearInterval(myInterval);
    //how to clear the interval declared inside the handleStartTimer
  };

  //why the jsx is not getting the updated timer?
  return (
    <section>
      <div>Timer: {timer}</div>
      <div>
        <button
          onClick={() => {
            handleStartTimer();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            handleStopTimer();
          }}
        >
          Stop
        </button>
      </div>
    </section>
  );
}
