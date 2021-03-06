var inject = require('../../../lib/inject.js');
var $ = require('jquery');
var DOM = require('jsx-dom-factory');

// Add team create button to team tab
$(
  <a href="/Teams/Create"
     role="button"
     class="btn btn-sm btn-success"
     target="_blank">
    <i class="fa fa-plus"></i> Create new Team
  </a>
).appendTo('#team > div > div > div.widget-header');
     //data-bind="css: {disabled: !user.isInRole(Enum.RoleEnum.TeamManagement.Id)}">

// Add job create button to job tab
$(
  <a class="btn btn-sm btn-success create-new-btn"
     href="/Jobs/Create">
    <i class="fa fa-plus"></i> Create new Job
  </a>
).appendTo('#job > div > div > div.widget-header');

//inject the coded needed to fix visual problems
//needs to be injected so that it runs after the DOMs are created
inject('jobs/tasking.js');
