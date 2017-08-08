var React = require('react');

var TimerForm = React.createClass({
   onSubmit(e) {
      e.preventDefault();
      this.props.onSetTimer(parseInt(0, 10));
   },
   render: function () {
      return (
         <div>
            <form ref="form" onSubmit={this.onSubmit} className="timer-form">
               <button className="button expanded">Start</button>
            </form>
         </div>
      );
   }
});

module.exports = TimerForm;
