'use strict';

exports.register = function register(skill) {
  skill.onIntent('LaunchIntent', () => ({ reply: 'Intent.Launch', to: 'ComposeMenu' }));
  skill.onIntent('AMAZON.HelpIntent', () => ({reply: 'Intent.Help', to: 'die' }));

  skill.onState('ComposeMenu', (alexaEvent) => {
    console.log('DEBUG - Entered state ComposeMenu');
    let intentRequest = alexaEvent.request;
    if (intentRequest.dialogState === "STARTED"){
      let changedIntent = intentRequest.intent;
      //changedIntent.slots.sideDish.value = 'Pasta';
      console.log('DEBUG - Dialog started');
      return {directives: [ {type: "Dialog.Delegate", updatedIntent: changedIntent} ]};
    } else if (intentRequest.dialogState != "COMPLETED"){
      console.log('DEBUG - Dialog not completed.');
      return {directives: [ {type: "Dialog.Delegate"} ], to: 'ComposeMenu'};
    } else {
      console.log('DEBUG - Something else.');
      return {reply: 'Intent.StartCooking', to: 'die'};
    }
  });
};