var $ = require('jquery');
var inject = require('../../../lib/inject.js');
var DOM = require('jsx-dom-factory');

// Add buttons to top of job screen for summary, statistics and advanced export
var buttonBar = $('.job-page .job-reg-widget .btn-group.pull-left.text-left');

function makeButton(id, background, border, text) {
  return $(
    <a href="#"
       id={id}
       class="btn btn-sm btn-default"
       style={'margin-left: 20px; background: ' + background + '; border-color: ' + border + '; color: white;'}>
      <img style="width: 16px; vertical-align: top; margin-right: 5px"
           src={chrome.extension.getURL("icons/lh.png")} />{text}
    </a>
  )
  .appendTo(buttonBar);
}

makeButton("lighthouseSummaryButton", "#175781", "#0f3a57", "Summary (Filtered)");
makeButton("lighthouseStatsButton", "rebeccapurple", "#4c2673", "Statistics (Filtered)");
makeButton("lighthouseExportButton", "#d2322d", "#edadab", "Advanced Export (Filtered)");

//inject our JS resource
inject('jobs/jobs.js');
