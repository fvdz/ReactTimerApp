var React = require('react');

var Clock = React.createClass({
   getDefaultProps: function() {
      return {
         totalSeconds: 0
      }
   },
   propTypes: {
      totalSeconds: React.PropTypes.number
   },
   formatTime: function(totalSeconds) {
      var seconds = totalSeconds % 60;
      var minutes = Math.floor(totalSeconds / 60);

      if(seconds < 10) {
         seconds = '0' + seconds;
      }

      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      return minutes + ':' + seconds;
   },
   // added function for testing practise
   addExtraTime: function(totalSeconds) {
      // add 10 extra seconds
      var extraSeconds = 10;

      return totalSeconds + extraSeconds;
   },
   render: function() {
      var { totalSeconds } = this.props;
      return (
         <div className="clock">
            <span className="clock-text">
               { this.formatTime(totalSeconds) }
            </span>
         </div>
      );
   }
});

module.exports = Clock;
