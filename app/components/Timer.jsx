var React = require('react');
var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
   getInitialState: function () {
      return {
         count: 0,
         timerStatus: 'stopped'
      }
   },
   handleSetTimer: function(seconds) {
      this.setState({
         count: seconds,
         timerStatus: 'started'
      });
   },
   startTimer() {
      this.timer = setInterval(() => {
         var newCount = this.state.count + 1;
         this.setState({
            count: newCount >= 0 ? newCount : 0
         });

         if ( newCount === 0 ) {
            this.setState({ timerStatus: 'stopped' });
         }
      },1000);
   },
   componentDidUpdate: function(prevProps, prevState) {
      if (this.state.timerStatus !== prevState.timerStatus) {
         switch(this.state.timerStatus) {
            case 'started':
               this.startTimer();
               break;
            case 'stopped':
               this.setState({ count: 0 });
            case 'paused':
               clearInterval(this.timer);
               this.timer = undefined;
               break;
            default:
               return false;
         }
      }
   },
   handleStatusChange: function ( newStatus) {
      this.setState({ timerStatus: newStatus });
   },
   componentWillUnmount: function() {
      clearInterval(this.timer);
      this.timer = undefined;
   },
   render: function () {
      var { count, timerStatus } = this.state;

      var renderControlArea = () => {
         if ( timerStatus !== 'stopped') {
            return <Controls
               timerStatus={timerStatus}
               onStatusChange={this.handleStatusChange} />;
         } else {
            return <TimerForm onSetTimer={this.handleSetTimer} />;
         }
      };

      return (
         <div>
            <h1 className="page-title">Timer App</h1>
            <Clock totalSeconds={count} />
            { renderControlArea() }
         </div>
      );
   }
});

module.exports = Timer;
